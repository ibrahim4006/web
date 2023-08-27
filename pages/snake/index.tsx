"use client";

import { useRef, useState, useEffect } from "react";
import {
  SNAKE_START,
  APPLE_START,
  CANVAS_SIZE,
  SCALE,
  DIRECTIONS,
} from "@/constants";
import useInterval from "@/components/games/snake/useInterval";
import SnakeArena from "@/components/games/snake/SnakeArena";
import SquareButton from "@/components/SquareButton";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import Image from "next/image";
import dotenv from "dotenv";

interface DataType {
  // Define the structure of your data object here
  buckimg: string;
}

dotenv.config();

const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ?? "";
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_KEY ?? "";
const region = "us-east-1";

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const Snake = () => {
  const [newGame, setNewGame] = useState(false);
  const [isGameStopped, setisGameStopped] = useState(true);
  const [isAppleTaken, setisAppleTaken] = useState(false);
  const [isSnakeTrue, setisSnakeTrue] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -0.5]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentDirection, setCurrentDirection] = useState("up");

  const [imageUrl, setImageUrl] = useState("");

  const takeImageS3 = async (data: DataType) => {
    console.log(data.buckimg.split("#")[1]);
    const commandGet = new GetObjectCommand({
      Key: data.buckimg.split("#")[1] /* should be unique */,
      Bucket: data.buckimg.split("#")[0],
    });

    const url = await getSignedUrl(s3Client, commandGet);
    setImageUrl(url);
  };

  const takeQuestion = async () => {
    const url =
      "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/questiontake";
    const requestData = {
      lesson: "kimya",
      class: "12",
      chapter: "organikbileşikler",
      subject: "alkoller",
      difficulty: "zor",
    };

    const options = {
      method: "POST", // Changed to POST method
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return takeImageS3(data);
      } else {
        const responseData = await response.json();
        alert(`Error: ${responseData.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`An error occurred: ${error.message}`);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDelay(300);
    setDir([0, -0.5]);
    setGameOver(false);
  };

  const NewGame = () => {
    setNewGame(true);
  };

  const stopGame = () => {
    setDelay(null);
    setisGameStopped(true);
  };

  const continueGame = () => {
    setDelay(300);
    setisGameStopped(false);
  };

  const endGame = () => {
    setDelay(null);
    setGameOver(true);
  };

  const createApple = () => {
    return apple.map((_, i) =>
      Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
    );
  };
  const checkCollision = (piece: number[], snk: number[][] = snake) => {
    if (
      piece[0] * SCALE > CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE > CANVAS_SIZE[1] ||
      piece[1] < 0
    ) {
      return true;
    }
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }
    return false;
  };

  const checkAppleCollision = (newSnake: number[][]) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
      context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
      context.fillStyle = "gray";
      snake.forEach(([x, y]) => context.fillRect(x, y, 0.4, 0.4));
      context.fillStyle = "red";
      context.fillRect(apple[0], apple[1], 0.3, 0.3);
    }
  }, [snake, apple]);

  useInterval(() => gameLoop(), delay);

  const moveSnake = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === "ArrowLeft" && currentDirection !== "right") {
      setCurrentDirection("left");
      event.preventDefault();
      setDir(DIRECTIONS[key]);
    } else if (key === "ArrowUp" && currentDirection !== "down") {
      setCurrentDirection("up");
      event.preventDefault();
      setDir(DIRECTIONS[key]);
    } else if (key === "ArrowRight" && currentDirection !== "left") {
      setCurrentDirection("right");
      event.preventDefault();
      setDir(DIRECTIONS[key]);
    } else if (key === "ArrowDown" && currentDirection !== "up") {
      setCurrentDirection("down");
      event.preventDefault();
      setDir(DIRECTIONS[key]);
    }
  };

  return (
    <main>
      <div className="flex relative w-full">
        <div
          className="flex-1 bg-[#0d0d0d] flex text-[#f7f6f1] h-full"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => moveSnake(e)}
        >
          <SnakeArena canvasRef={canvasRef} />
        </div>
        <div className="flex-1 flex-col justify-start ">
          <div className="h-[90%] w-full flex flex-col justify-center items-center border-b-2 border-black">
            {/* <Image
              src={imageUrl}
              alt="Preview image"
              className="object-cover ml-auto mr-auto"
              width={450}
              height={450}
            /> */}
            <h1 className="font-bold text-lg">1</h1>
            <img src={imageUrl} />
          </div>
          <div className="h-[10%] w-full flex justify-start space-x-4 items-center border-b pl-5">
            <SquareButton title="Sonraki Soru" containerStyles="square-btn-m" />
            <SquareButton
              title="Testi Bitir"
              containerStyles="square-btn-s"
              handleClick={() => takeQuestion()}
            />
            <SquareButton
              title="Mücadeleden Çekil"
              containerStyles="square-btn-l"
              handleClick={
                isSnakeTrue && isGameStopped
                  ? continueGame
                  : gameOver
                  ? startGame
                  : !isGameStopped && !isAppleTaken
                  ? stopGame
                  : !newGame
                  ? NewGame
                  : stopGame
              }
            />
            <SquareButton
              title="Konu Değiştir"
              containerStyles="square-btn-m"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Snake;
