import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  color: string;
  timestamp: number; // Add timestamp to the Point type
}

export const useDrawRecording = (
  onDraw: ({ ctx, currentPoint, prevPoint, color }: Draw) => void,
  color: string
) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [erasing, setErasing] = useState(false);
  const [pointsInRadius, setPointsInRadius] = useState([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prevPoint = useRef<null | Point>(null);

  // Store pathsry and points with proper types
  const pathsry = useRef<Point[][]>([]);
  const points = useRef<Point[]>([]);

  const onMouseDown = () => setMouseDown(true);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Clear pathsry and points arrays
    pathsry.current = [];
    points.current = [];
  };

  const drawPaths = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all the paths in the pathsry array
    pathsry.current.forEach((path) => {
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.strokeStyle = path[0].color; // Set the color for the stroke
      ctx.stroke();

      // Set color for the filled shapes
      ctx.fillStyle = path[0].color;
      for (let i = 1; i < path.length; i++) {
        ctx.beginPath();
        ctx.arc(path[i].x, path[i].y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const undo = () => {
    if (pathsry.current.length > 0) {
      // Remove the last path from the pathsry array
      pathsry.current.pop();
      // Redraw all the paths
      drawPaths();
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!erasing) {
        if (!mouseDown) return;

        const currentPoint = computePointInCanvas(e);
        if (!currentPoint) return;

        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        onDraw({ ctx, currentPoint, prevPoint: prevPoint.current, color });
        prevPoint.current = currentPoint;

        // Save points in the points array
        points.current.push(currentPoint);
      } else {
        if (!mouseDown) return;

        const currentPoint = computePointInCanvas(e);
        if (!currentPoint) return;

        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        const radius = 20; // Specify the eraser radius

        // Find the line to delete
        const lineIndexToDelete = pathsry.current.findIndex((line) => {
          // Check each point in the line
          for (const point of line) {
            const distance = Math.sqrt(
              (point.x - currentPoint.x) ** 2 + (point.y - currentPoint.y) ** 2
            );
            if (distance <= radius) {
              return true; // Delete the line if any point is within the eraser radius
            }
          }
          return false;
        });

        if (lineIndexToDelete !== -1) {
          // Remove the line from the pathsry array
          pathsry.current.splice(lineIndexToDelete, 1);
        }
      }
    };

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left).toFixed(2);
      const y = (e.clientY - rect.top).toFixed(2);

      // Record the color of the current line
      const lineColor = color;

      // Record the timestamp
      const timestamp = Date.now();

      return { x, y, color: lineColor, timestamp };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;

      // Add the current points to the pathsry array if there are points
      if (points.current.length > 0) {
        pathsry.current.push([...points.current]);
      }
      // Clear the points array for the next line
      points.current = [];
      drawPaths();
      //console.log(pathsry.current)

    };

    // Add event listeners
    canvasRef.current?.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", mouseUpHandler);

    // Remove event listeners
    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw, color, erasing, mouseDown]);

  return { canvasRef, onMouseDown, clear, undo, setErasing, erasing, pathsry };
};
