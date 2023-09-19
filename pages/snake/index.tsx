"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  SNAKE_START,
  APPLE_START,
  CANVAS_SIZE,
  SCALE,
  DIRECTIONS,
  classes,
  difficulty,
  matematik,
  fizik,
  kimya,
  biyoloji,
} from "@/constants";
import useInterval from "@/components/games/snake/useInterval";
import SnakeArena from "@/components/games/snake/SnakeArena";
import SquareButton from "@/components/common/SquareButton";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import Image from "next/image";
import dotenv from "dotenv";
import ImageHover from "@/components/games/snake/ImageHover";
import getRandomTopic from "@/utils/getRandomTopic";
import getRandomNumber from "@/utils/getRandomNumber";
import getSolvedArray from "@/utils/getSolvedArray";
import getSubjectsLevel from "@/utils/getSubjectsLevel";
import getTotalQuestion from "@/utils/getTotalQuestion";
import getQuestionNames from "@/utils/getQuestionNames";

// import ImageHover from "@/components/games/snake/ImageHover";

interface Point {
  x: number;
  y: number;
}

interface DataType {
  buckimg: string;
}
type QuestionTypeObject = {
  [key: string]: {
    [key: string]: string[];
  };
};

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
  const [studentAnswer, setStudentAnswer] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [imageNames, setImageNames] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -0.5]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentDirection, setCurrentDirection] = useState("up");
  const [coordinates, setCoordinates] = useState<Point[]>([]);
  const [props, setProps] = useState<string[]>([]);

  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [totalQuestion, setTotalQuestion] = useState("");

  // const getSubjectData = (subject: string): QuestionTypeObject => {
  //   switch (subject) {
  //     case "matematik":
  //       return matematik;
  //     case "fizik":
  //       return fizik;
  //     case "kimya":
  //       return kimya;
  //     case "biyoloji":
  //       return biyoloji;
  //     default:
  //       return {};
  //   }
  // };

  useEffect(() => {
    if (router.isReady) {
      const activeLesson = router.query.activeLesson as string;
      const activeChapter = router.query.activeChapter as string;

      setProps([activeLesson,activeChapter])
      
    }
  }, [router.isReady]);
  
  useEffect(()=>{
    if(props.length > 0){
    const subjects = getRandomTopic({ props });
    console.log(subjects);
    const levels = getSubjectsLevel({subjects},{props})
    console.log(levels);
    const solved = getSolvedArray({subjects},{props},{levels})
    console.log(solved);
    const total = getTotalQuestion({subjects},{props},{levels})
    console.log(total);
    const randomArray = getRandomNumber({solved},{total})
    console.log(randomArray);
    const imageNames = getQuestionNames({props},{levels},{randomArray},{subjects})
    setImageNames(imageNames)
    }
  },[props])
  

  const takeImageS3 = async (data: DataType) => {
    const commandGet = new GetObjectCommand({
      Key: data.buckimg.split("#")[1] /* should be unique */,
      Bucket: data.buckimg.split("#")[0],
    });

    const url = await getSignedUrl(s3Client, commandGet);
    setImageUrl(url);
    
    
  };
  // const updateSolvedArray = () => {
  //   const url =
  //     "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/totalquestiontake";
  //   const requestData = {
  //     type: "solved",
  //     lesson: "biyoloji",
  //     class: "10",
  //     chapter: "2",
  //     subject: "1",
  //     difficulty: "2",
  //   };

  //   const options = {
  //     method: "POST", // Changed to POST method
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json;charset=UTF-8",
  //     },
  //     body: JSON.stringify(requestData),
  //   };
  //   try {
  //     const response = await fetch(url, options);

  //     if (response.ok) {
  //       const data = await response.json();
  //       return takeQuestion("photo")
  //     } else {
  //       const responseData = await response.json();
  //       alert(`Error: ${responseData.message}`);
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(`An error occurred: ${error.message}`);
  //     } else {
  //       alert("An unknown error occurred.");
  //     }
  //   }
  // }

  const takeQuestion = async (type: string) => {
    const url =
      "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/questiontake";
    const requestData = {
      lesson: "biyoloji",
      class: "10",
      chapter: "2",
      subject: "1",
      difficulty: "2",
      questionnumber: "1"
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
        setCoordinates(data.coordinates)
        if(type === "question") return setCorrectAnswer(data.answer)
        else return takeImageS3(data)
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

  useEffect(() => {
    // Check if a correct answer has been provided
    if (correctAnswer.length > 0) {
      // Compare the correct answer with the student's answer
      if (correctAnswer === studentAnswer) {
        console.log("Answer is correct");
      } else {
        console.log("Answer is wrong");
      }
    }
  }, [correctAnswer]);

  const checkAnswer = async () => {
    // Assume "takeQuestion" is an asynchronous function that retrieves a question
    await takeQuestion("question");
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
            <h1 className="font-bold text-lg">1</h1>
            {imageUrl && (
              <ImageHover
                imagelink={imageUrl}
                coordinates={coordinates}
                setStudentAnswer={setStudentAnswer}
              />
            )}
          </div>
          <div className="h-[10%] w-full flex justify-start space-x-4 items-center border-b pl-5">
            <SquareButton
              title="Sonraki Soru"
              containerStyles="square-btn-m"
              handleClick={() => checkAnswer()}
            />
            <SquareButton
              title="Testi Bitir"
              containerStyles="square-btn-s"
              handleClick={()=> takeQuestion("fetch")}
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
