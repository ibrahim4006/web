import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const [rotationOut, setRotationOut] = useState(0);
  const radius = 50;
  const centerX = window.innerWidth / 2 - 30;
  const centerY = window.innerHeight / 2 - 150;
  const animationDuration = 2500; // in milliseconds

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
          className="box right-0 left-0 center flex absolute mx-auto w-fit"
          style={{
            //width: "88px",
            //height: "88px",
            //left: centerX - 30 + 15 + -5 + "px",
            position: "absolute",
            top: centerY - 30 + 15 + -5 + "px",

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
            //left: centerX + 15 + -7.5 + "px",
            top: centerY + 15 + -5 + "px",
            transform: `translate(${radius * Math.cos(rotation)}px, ${
              radius * Math.sin(rotation)
            }px) rotate(${rotation}rad)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            //left: centerX + 15 + -7.5 + "px",
            top: centerY + 15 + -5 + "px",
            transform: `translate(${
              radius * Math.cos(rotation + (Math.PI * 2) / 3)
            }px, ${radius * Math.sin(rotation + (Math.PI * 2) / 3)}px) rotate(${
              rotation + (Math.PI * 2) / 3
            }rad)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            //left: centerX + 15 + -5 + "px",
            top: centerY + 15 + -5 + "px",
            transform: `translate(${
              radius * Math.cos(rotation + (Math.PI * 4) / 3)
            }px, ${radius * Math.sin(rotation + (Math.PI * 4) / 3)}px) rotate(${
              rotation + (Math.PI * 4) / 3
            }rad)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />
      </div>
      <div>
        <div
          className="box right-0 left-0 center flex absolute mx-auto w-fit"
          style={{
            //width: "240px",
            //height: "240px",
            //left: centerX - 19 - 76 + "px",
            top: centerY - 19 - 76 + "px",

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
            //left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${radius * 2.4 * Math.cos(rotationOut)}px, ${
              radius * 2.4 * Math.sin(rotationOut)
            }px) rotate(${rotationOut}rad) rotate(180deg)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            //left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${
              radius * 2.4 * Math.cos(rotationOut + -(Math.PI * 2) / 3)
            }px, ${
              radius * 2.4 * Math.sin(rotationOut + -(Math.PI * 2) / 3)
            }px) rotate(${rotationOut + -(Math.PI * 2) / 3}rad) rotate(180deg)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />

        <Image
          src="/denemeboomerang.svg"
          alt="loading "
          width={30}
          height={30}
          style={{
            transformOrigin: "center center",
            //left: centerX + 15 + "px",
            top: centerY + 15 + "px",
            transform: `translate(${
              radius * 2.4 * Math.cos(rotationOut + -(Math.PI * 4) / 3)
            }px, ${
              radius * 2.4 * Math.sin(rotationOut + -(Math.PI * 4) / 3)
            }px) rotate(${rotationOut + -(Math.PI * 4) / 3}rad) rotate(180deg)`,
          }}
          className="right-0 left-0 center flex absolute flex-col mx-auto w-[30px]"
        />
      </div>
      <div
        style={{
          top: centerY + 200 + "px",
        }}
        className="right-0 left-0 center flex absolute flex-col mx-auto w-fit"
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

//denemeboomerang
//bumerangtek



// <div key={"loading"} className={questionexist ? "hidden" : " relative w-full"}>
// <LoadingAnimation />
// {/* <ChoiceBox answer={"#FF0000"} /> */}
// </div>