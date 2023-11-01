import { FC, useEffect, useState } from "react";
import { useDrawRecording } from "./useDrawRecording";

const CanvasRecording: FC = () => {
  const [color, setColor] = useState<string>("#FF0000");
  const [isRecording, setIsRecording] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const [lineWidth, setLineWidth] = useState<number>(4);
  const [radius, setRadius] = useState<number>(1.5);
  const [duration, setDuration] = useState<number>(1.5);
  const { canvasRef, onMouseDown, clear, undo, setErasing, erasing, pathsry } =
    useDrawRecording(drawLine, color);

  useEffect(() => {
    setDuration(
      pathsry.current.length > 0
        ? pathsry.current[pathsry.current.length - 1][0].timestamp
        : 0
    );
    
  }, [duration, pathsry]);
console.log(duration,"dur");
  useEffect(() => {
    if (color === "#FF0000") {
      setLineWidth(4);
      setRadius(1.5);
    } else {
      // You can update lineWidth and radius based on the color if needed
    }
  }, [color]);

  function drawLine({ prevPoint, currentPoint, ctx, color }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const width = lineWidth;
    const radi = radius;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, radi, 0, 2 * Math.PI);
    ctx.fill();
  }

  function calculateArraySizeInKB(arr) {
    // Serialize the array to a JSON string
    const jsonString = JSON.stringify(arr);

    // Calculate the size of the JSON string in bytes
    const bytes = new TextEncoder().encode(jsonString).length;

    // Convert bytes to kilobytes (KB)
    const kilobytes = bytes / 1024;

    console.log(kilobytes, "kb");
  }

  const clearReplay = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Do not clear pathsry and points arrays
  };

  const adjusttimestamps = () => {
    if (pathsry.current.length === 0) {
      return;
    }

    // Extract the starting timestamp from the first point
    const startingTimestamp = pathsry.current[0][0].timestamp;

    if (pathsry.current[1][0].timestamp > pathsry.current[0][0].timestamp) {
      for (let lineIndex = 0; lineIndex < pathsry.current.length; lineIndex++) {
        const line = pathsry.current[lineIndex];
        //console.log(lineIndex, "index");

        // Loop through the points in the line
        for (let pointIndex = 0; pointIndex < line.length; pointIndex++) {
          if (lineIndex == 0 && pointIndex == 0) {
            continue;
          }
          const point = line[pointIndex];

          // Calculate the time difference and update the timestamp
          point.timestamp -= startingTimestamp;
        }
      }
    }

    calculateArraySizeInKB(pathsry.current);
  };

  let continueDrawing = false;
  const startReplaying = () => {
    setIsReplaying(true);
    clearReplay(); // Clear the canvas before replaying
    adjusttimestamps();
    continueDrawing = true; // Reset the flag

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const startTime = Date.now();

    //console.log(startTime);

    const drawNextPoint = (lineIndex: number, pointIndex: number) => {
      if (!continueDrawing) return;

      const elapsedTime = Date.now() - startTime;

      //console.log(elapsedTime, "elapsedtime");

      if (lineIndex >= pathsry.current.length) {
        //console.log(lineIndex, "max line");
        // All lines have been replayed
        setIsReplaying(false);
        return;
      }

      const line = pathsry.current[lineIndex];
      if (pointIndex >= line.length - 1) {
        // Move to the next line
        drawNextPoint(lineIndex + 1, 0);
        return;
      }

      const point = line[pointIndex];
      const nextPoint = line[pointIndex + 1];
      const timeDiff = nextPoint.timestamp;
      // console.log(timeDiff, "difftime");
      if (elapsedTime >= timeDiff) {
        //console.log("draw");
        // Draw the line between the current point and the next point
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = point.color;
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.stroke();

        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();

        // Continue with the next point
        drawNextPoint(lineIndex, pointIndex + 1);
      } else {
        requestAnimationFrame(() => drawNextPoint(lineIndex, pointIndex));
      }
    };

    drawNextPoint(0, 0);
  };

  const stopReplaying = () => {
    setIsReplaying(false);
    clearReplay();
    adjusttimestamps();
    continueDrawing = false; // Set the flag to stop drawing

    let reqtime = 1000;

    console.log("nigga");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const elapsedTime = reqtime;

    for (let lineIndex = 0; lineIndex < pathsry.current.length; lineIndex++) {
      const line = pathsry.current[lineIndex];
      //console.log(lineIndex, "index");

      // Loop through the points in the line
      for (let pointIndex = 0; pointIndex < line.length; pointIndex++) {
        const point = line[pointIndex];
        const nextPoint = line[pointIndex + 1];
        const timeDiff = nextPoint?.timestamp;
        // console.log(timeDiff, "difftime");
        if (elapsedTime >= timeDiff) {
          //console.log("draw");
          // Draw the line between the current point and the next point
          ctx.beginPath();
          ctx.lineWidth = 4;
          ctx.strokeStyle = point.color;
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();

          ctx.fillStyle = point.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }

    setIsReplaying(false);
  };

  const contReplaying = (value: number) => {
    setIsReplaying(true);
    clearReplay();
    adjusttimestamps();
    continueDrawing = true; // Set the flag to stop drawing

    let reqtime = value;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const startTime = Date.now();

    //console.log(startTime);

    const drawNextPoint = (lineIndex: number, pointIndex: number) => {
      if (!continueDrawing) return;

      const elapsedTime = Date.now() - startTime + reqtime;

      //console.log(elapsedTime, "elapsedtime");

      if (lineIndex >= pathsry.current.length) {
        //console.log(lineIndex, "max line");
        // All lines have been replayed
        setIsReplaying(false);
        return;
      }

      const line = pathsry.current[lineIndex];
      if (pointIndex >= line.length - 1) {
        // Move to the next line
        drawNextPoint(lineIndex + 1, 0);
        return;
      }

      const point = line[pointIndex];
      const nextPoint = line[pointIndex + 1];
      const timeDiff = nextPoint.timestamp;
      // console.log(timeDiff, "difftime");
      if (elapsedTime >= timeDiff) {
        //console.log("draw");
        // Draw the line between the current point and the next point
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = point.color;
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.stroke();

        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();

        // Continue with the next point
        drawNextPoint(lineIndex, pointIndex + 1);
      } else {
        requestAnimationFrame(() => drawNextPoint(lineIndex, pointIndex));
      }
    };

    drawNextPoint(0, 0);
  };

  return {
    canvasRef,
    onMouseDown,
    clear,
    setColor,
    undo,
    setErasing,
    erasing,
    startReplaying,
    stopReplaying,
    isReplaying,
    contReplaying,
    duration,
  };
};

export default CanvasRecording;
