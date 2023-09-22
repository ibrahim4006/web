import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingAnimation = ({ chatShow }) => {
  const [rotation, setRotation] = useState(0);
  const [rotationOut, setRotationOut] = useState(0);
  const radius = 50;
  // const animationDuration = 2500; // in milliseconds
  const targetFPS = 0.8;
  const animationDuration = 2000 / targetFPS;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [centerX, setCenterX] = useState(800);
  const [centerY, setCenterY] = useState(800);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseY = e.clientY + window.scrollY;

      if (chatShow) {
        if (mouseY > 360 && mouseY < 1230 && e.clientX < 1300) {
          setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY });
          setCenterX(mousePosition.x - 23);
          setCenterY(mousePosition.y - 20);
        } else {
          setCenterX(615 - 23);
          setCenterY(700 - 20);
        }
      } else {
        if (mouseY > 360 && mouseY < 1230 && e.clientX < 1800) {
          setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY });
          setCenterX(mousePosition.x - 23);
          setCenterY(mousePosition.y - 20);
        } else {
          setCenterX(window.innerWidth / 2 - 23);
          setCenterY(700 - 20);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition, chatShow]);

  useEffect(() => {
    let startTime = null;

    const animate = () => {
      if (!startTime) {
        startTime = performance.now();
      }
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime % animationDuration) / animationDuration;

      setRotation(Math.PI * 2 * progress);
      setRotationOut(-Math.PI * 2 * progress);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div>
      <div>
        <div
          className="box center flex absolute w-fit"
          style={{
            //width: "88px",
            //height: "88px",
            left: centerX + "px",
            position: "absolute",
            top: centerY + "px",

            //border: "1px dashed",
            borderRadius: "50%",
          }}
        >
          {/* <div className="snippet" data-title="dot-windmill">
     <div className="stage">
     <div className="dot-windmill"></div>
     </div>
   </div>
  */}
        </div>
        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 7.5 + "px",
            top: centerY + 7.5 + "px",
            transform: `translate(${radius *1 * Math.cos(rotation)}px, ${
              radius *1 * Math.sin(rotation)
            }px) rotate(${rotation}rad) rotate( 90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 7.5 + "px",
            top: centerY + 7.5 + "px",
            transform: `translate(${
              radius *1 * Math.cos(rotation + (Math.PI * 2) / 3)
            }px, ${
              radius *1 * Math.sin(rotation + (Math.PI * 2) / 3)
            }px) rotate(${rotation + (Math.PI * 2) / 3}rad) rotate( 90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 7.5 + "px",
            top: centerY + 7.5 + "px",
            transform: `translate(${
              radius *1 * Math.cos(rotation + (Math.PI * 4) / 3)
            }px, ${
              radius *1 * Math.sin(rotation + (Math.PI * 4) / 3)
            }px) rotate(${rotation + (Math.PI * 4) / 3}rad) rotate( 90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />
      </div>
      <div>
        <div
          className="box  center flex absolute  w-fit "
          style={{
            //width: "240px",
            //height: "240px",
            left: centerX + "px",
            top: centerY + "px",

            //border: "1px dashed",
            borderRadius: "50%",
          }}
        ></div>

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${radius *2.4 * Math.cos(rotationOut)}px, ${
              radius *2.4 * Math.sin(rotationOut)
            }px) rotate(${rotationOut}rad) rotate(-90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${
              radius *2.4 * Math.cos(rotationOut + -(Math.PI * 2) / 3)
            }px, ${
              radius *2.4 * Math.sin(rotationOut + -(Math.PI * 2) / 3)
            }px) rotate(${rotationOut + -(Math.PI * 2) / 3}rad) rotate(-90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${
              radius *2.4 * Math.cos(rotationOut + -(Math.PI * 4) / 3)
            }px, ${
              radius *2.4 * Math.sin(rotationOut + -(Math.PI * 4) / 3)
            }px) rotate(${rotationOut + -(Math.PI * 4) / 3}rad) rotate(-90deg)`,
          }}
          className="  center flex absolute flex-col  w-[30px]  duration-0"
        />
      </div>
      <div
        style={{
          left: centerX + 30 + "px",
          top: centerY + 200 + "px",
        }}
        className="  center flex absolute flex-col  w-fit -translate-x-1/2  duration-0"
      >
        <span className="pb-6">Sana soru yetiştiremiyoruz.</span>
        <div className="snippet" data-title="dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
