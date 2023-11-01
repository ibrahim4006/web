import { FC, useEffect, useState } from "react";
import { useDraw } from "./useDraw";
 
const Canvas: FC = () => {
  const [color, setColor] = useState<string>("#FF0000");
  const { canvasRef, onMouseDown, clear, undo,setErasing,erasing } = useDraw(drawLine, color);
  const [lineWidth, setLineWidth] = useState<number>(4);
  const [radius, setRadius] = useState<number>(1.5);

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

  return { canvasRef, onMouseDown, clear, setColor, undo , setErasing,erasing};
};

export default Canvas;
