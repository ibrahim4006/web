"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  SNAKE_START,
  APPLE_START,
  CANVAS_SIZE,
  SCALE,
  DIRECTIONS,
} from "@/constants";
import useInterval from "@/components/games/snake/useInterval";
import SnakeArena from "@/components/games/snake/SnakeArena";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
//import ImageHover from "@/components/common/ImageHover";
//import { useAuthState } from "@/contexts/AuthContext";
//import { useSubjectState } from "@/contexts/SubjectContext";
import { TopNameTag } from "@/components/common/TopNameTag";
import GameScoreBoard from "@/components/common/GameScoreBoard";
import Canvas from "@/components/common/Canvas";
import InGameButtons from "@/components/games/InGameButtons";
import GameToggleButton from "@/components/games/GameToggleButton";
import PageTag from "@/components/common/PageTag";
import DaktiloArena from "@/components/games/daktilo/DaktiloArena";

interface Point {
  x: number;
  y: number;
}

interface UserData {
  name: string;
  picture: string;
  email: string;
  role: string;
  createdAt: string;
}

interface DataType {
  buckimg: string;
}

type StatisticData = {
  userName: string;
  createdAt: string;
  lesson: string;
  class: string;
  chapter: string;
  subject: string;
  level: string;
  timetaken: number;
  numberofquestion: number;
  point: number;
  type: string;
  correctCount: number;
  solvedArr: number[];
  wrongArr: number[];
  likedArr: number[];
};

const Snake = () => {
  const [newQuestion, setnewQuestion] = useState(true);
  const [questionArray, setQuestionArray] = useState<number[]>([]);
  const [activeQuestion, setactiveQuestion] = useState<number>(0);
  const [studentAnswer, setStudentAnswer] = useState<string | undefined>(
    undefined
  );
  const [correctAnswer, setCorrectAnswer] = useState<string | undefined>(
    undefined
  );

  const [isHangTrue, setisHangTrue] = useState<boolean>(false);
  const [errorCount, seterrorCount] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const [boxArray, setBoxArray] = useState<boolean[]>(Array(11).fill(false));

  const [gameOver, setGameOver] = useState(false);
  const [coordinates, setCoordinates] = useState<Point[]>([]);
  const [newcoordinates, setnewCoordinates] = useState<Point[]>([]);
  const [buttonName, setButtonName] = useState<string>("Soru Çek");
  const [correctNumber, setCorrectNumber] = useState<number>(0);

  const [imageUrl, setImageUrl] = useState<string>("");
  const [newimageUrl, setnewImageUrl] = useState<string | undefined>(undefined);

  const [solvedArray, setSolvedArray] = useState<number[]>([]);
  const [wrongArray, setWrongArray] = useState<number[]>([]);
  const [likedArray, setLikedArray] = useState<number[]>([]);
  const [isliked, setIsliked] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const { canvasRef, onMouseDown, clear, setColor, undo } = Canvas();
  const [chatShow, setChatShow] = useState<boolean>(true);
  const [canvasShow, setCanvasShow] = useState(false);
  const [questionexist, setQuestionExist] = useState(false);

  //   dotenv.config();

  //   const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ?? "";
  //   const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_KEY ?? "";
  //   const region = "eu-west-1";

  //   const s3Client = new S3Client({
  //     region,
  //     credentials: {
  //       accessKeyId,
  //       secretAccessKey,
  //     },
  //   });

  //   // this give warning before page closing
  //   useEffect(() => {
  //     const confirmExit = (e: BeforeUnloadEvent): string | undefined => {
  //       // Customize the confirmation message
  //       const confirmationMessage =
  //         "You have unsaved changes. Are you sure you want to leave?";

  //       // Display the confirmation message
  //       e.returnValue = confirmationMessage;

  //       // Some browsers require a return value for the event handler
  //       return confirmationMessage;
  //     };

  //     // Add the event listener when the component mounts
  //     window.addEventListener("beforeunload", confirmExit);

  //     // Remove the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("beforeunload", confirmExit);
  //     };
  //   }, []);
  //   const router = useRouter();
  //   const { authenticated, loading, user } = useAuthState();
  //   const { lesson, subject } = useSubjectState();

  //   const takeImageS3 = async (data: DataType) => {
  //     const commandGet = new GetObjectCommand({
  //       Key: data.buckimg.split("#")[1],
  //       Bucket: data.buckimg.split("#")[0],
  //     });

  //     const url = await getSignedUrl(s3Client, commandGet, { expiresIn: 300 });
  //     return url;
  //   };

  //   useEffect(() => {
  //     console.log(lesson, subject);
  //     startSessionTimer();
  //     const takeQuestion = async () => {
  //       const url =
  //         "https://w7evvtpdxf.execute-api.eu-west-1.amazonaws.com/totalQuestion";
  //       const requestData = {
  //         userName: user?.email,
  //         lesson: lesson,
  //         class: subject?.split("-")[0],
  //         chapter: subject?.split("-")[1],
  //         subject: subject?.split("-")[2],
  //         level: 1,
  //       };

  //       const options = {
  //         method: "POST", // Changed to POST method
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json;charset=UTF-8",
  //         },
  //         body: JSON.stringify(requestData),
  //       };

  //       try {
  //         const response = await fetch(url, options);

  //         if (!response.ok) {
  //           throw new Error(`Error: ${await response.json()}`);
  //         }
  //         const data: number[] = await response.json();
  //         console.log(data);
  //         setQuestionArray(data);
  //       } catch (error) {
  //         const errorMessage =
  //           error instanceof Error ? error.message : "An unknown error occurred.";
  //         alert(`An error occurred: ${errorMessage}`);
  //       }
  //     };
  //     {
  //       user && takeQuestion();
  //     }
  //   }, [user]);

  //   useEffect(() => {
  //     // Define an async function
  //     const fetchData = async () => {
  //       if (activeQuestion > 0) {
  //         const newImageUrl = await fetchNextQuestion(
  //           questionArray[activeQuestion]
  //         );
  //         newImageUrl && setnewImageUrl(newImageUrl);
  //       }
  //     };

  //     // Call the async function
  //     fetchData();
  //   }, [activeQuestion]);

  //   const fetchQuestion = async (questionNo: number) => {
  //     if (newimageUrl) {
  //       setStudentAnswer(undefined);
  //       setCorrectAnswer(undefined);
  //       setnewQuestion(false);
  //       setCoordinates(newcoordinates);
  //       return setImageUrl(newimageUrl);
  //     }
  //     const url =
  //       "https://w7evvtpdxf.execute-api.eu-west-1.amazonaws.com/getQuestion";
  //     const requestData = {
  //       type: "getquestion",
  //       lesson: lesson,
  //       class: subject?.split("-")[0],
  //       chapter: subject?.split("-")[1],
  //       subject: subject?.split("-")[2],
  //       level: 1,
  //       questionnumber: questionNo,
  //     };

  //     const options = {
  //       method: "POST", // Changed to POST method
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       body: JSON.stringify(requestData),
  //     };

  //     try {
  //       const response = await fetch(url, options);

  //       if (!response.ok) {
  //         throw new Error(`Error: ${await response.json()}`);
  //       }

  //       const data = await response.json();
  //       setStudentAnswer(undefined);
  //       setCorrectAnswer(undefined);
  //       setnewQuestion(false);
  //       setCoordinates(data.coordinates);
  //       setImageUrl(await takeImageS3(data));
  //     } catch (error) {
  //       const errorMessage =
  //         error instanceof Error ? error.message : "An unknown error occurred.";
  //       alert(`An error occurred: ${errorMessage}`);
  //     }
  //   };

  //   const fetchNextQuestion = async (questionNo: number) => {
  //     const url =
  //       "https://w7evvtpdxf.execute-api.eu-west-1.amazonaws.com/getQuestion";
  //     const requestData = {
  //       type: "getquestion",
  //       lesson: lesson,
  //       class: subject?.split("-")[0],
  //       chapter: subject?.split("-")[1],
  //       subject: subject?.split("-")[2],
  //       level: 1,
  //       questionnumber: questionNo,
  //     };

  //     const options = {
  //       method: "POST", // Changed to POST method
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       body: JSON.stringify(requestData),
  //     };

  //     try {
  //       const response = await fetch(url, options);

  //       if (!response.ok) {
  //         throw new Error(`Error: ${await response.json()}`);
  //       }

  //       const data = await response.json();
  //       setnewCoordinates(data.coordinates);
  //       return takeImageS3(data);
  //     } catch (error) {
  //       const errorMessage =
  //         error instanceof Error ? error.message : "An unknown error occurred.";
  //       alert(`An error occurred: ${errorMessage}`);
  //     }
  //   };

  //   const controlAnswer = async (answer: string, questionNo: number) => {
  //     if (isliked) {
  //       setLikedArray([...likedArray, questionNo]);
  //       setIsliked(false);
  //     }
  //     setSolvedArray([...solvedArray, questionNo]);
  //     setactiveQuestion((prev) => prev + 1);
  //     if (studentAnswer === answer) {
  //       setCorrectNumber((prev) => prev + 1);
  //       setisHangTrue(true);
  //     } else {
  //       setWrongArray([...wrongArray, questionNo]);
  //       setisHangTrue(false);
  //       seterrorCount((prev) => prev + 1);
  //     }
  //     setUpdateCount((prevcount) => prevcount + 1);
  //     setnewQuestion(true);
  //   };

  //   const checkAnswer = async (questionNo: number) => {
  //     const url =
  //       "https://w7evvtpdxf.execute-api.eu-west-1.amazonaws.com/getQuestion";
  //     const requestData = {
  //       type: "answer",
  //       lesson: lesson,
  //       class: subject?.split("-")[0],
  //       chapter: subject?.split("-")[1],
  //       subject: subject?.split("-")[2],
  //       level: 1,
  //       questionnumber: questionNo,
  //     };

  //     const options = {
  //       method: "POST", // Changed to POST method
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       body: JSON.stringify(requestData),
  //     };
  //     try {
  //       const response = await fetch(url, options);

  //       if (response.ok) {
  //         const data = await response.json();
  //         setCorrectAnswer(data[0].answer);
  //         controlAnswer(data[0].answer, questionNo);
  //       } else {
  //         const responseData = await response.json();
  //         alert(`Error: ${responseData.message}`);
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         alert(`An error occurred: ${error.message}`);
  //       } else {
  //         alert("An unknown error occurred.");
  //       }
  //     }
  //   };

  //   const sendResults = async () => {
  //     const url =
  //       "https://w7evvtpdxf.execute-api.eu-west-1.amazonaws.com/sendResults";
  //     const requestData = {
  //       userName: user?.email,
  //       createdAt: user?.createdAt,
  //       lesson: lesson,
  //       class: subject?.split("-")[0],
  //       chapter: subject?.split("-")[1],
  //       subject: subject?.split("-")[2],
  //       level: 1,
  //       timetaken: timeTaken,
  //       numberofquestion: solvedArray.length,
  //       point: correctNumber * (correctNumber + 6) * 0.1 * 0.5,
  //       type: "game",
  //       correctCount: correctNumber,
  //       solvedArr: solvedArray,
  //       wrongArr: wrongArray,
  //       likedArr: likedArray,
  //     };

  //     const options = {
  //       method: "POST", // Changed to POST method
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       body: JSON.stringify(requestData),
  //     };

  //     try {
  //       const response = await fetch(url, options);

  //       if (!response.ok) {
  //         throw new Error(`Error: ${await response.json()}`);
  //       }
  //       console.log("success");
  //     } catch (error) {
  //       const errorMessage =
  //         error instanceof Error ? error.message : "An unknown error occurred.";
  //       alert(`An error occurred: ${errorMessage}`);
  //     }
  //   };

  //   const startSessionTimer = (): void => {
  //     setStartTime(Date.now());
  //   };

  //   const stopSessionTimer = (): void => {
  //     if (startTime !== null) {
  //       const endTime = Date.now();
  //       const elapsedSeconds = Math.floor((endTime - startTime) / 1000);
  //       setTimeTaken(timeTaken + elapsedSeconds);
  //       setStartTime(null);
  //     }
  //   };

  //   useEffect(() => {
  //     if (!loading && !authenticated) {
  //       router.push("/snake");
  //     }
  //   }, [authenticated, loading]);

  //   // if (loading || questionArray.length === 0) {
  //   //   return <LoadingAnimation chatShow={false} />;
  //   // }

  return (
    <>
      {true && (
        <main>
          <PageTag tag="YARIŞMA / DAKTİLO" />
          <TopNameTag nametag="DAKTİLO" game={true} />
          <div className="h-[940px] flex flex-row justify-end relative">
            <div
              key={"game region "}
              className={
                chatShow
                  ? " h-full w-full md:w-[960px] left-0 absolute z-30 xl:z-1 transition-right duration-500 ease-in-out bg-[#F7F6F1]   xl:bg-transparent"
                  : " h-full w-full md:w-[960px] -left-[1000px] absolute z-30 xl:z-1 transition-right duration-500 ease-in-out bg-[#F7F6F1]   xl:bg-transparent"
              }
            >
              <div className="flex-1 bg-[#0d0d0d] h-full overflow-hidden">
              <GameScoreBoard />
                <DaktiloArena
                  isHangTrue={isHangTrue}
                  updateCount={updateCount}
                  errorCount={errorCount}
                  boxArray={boxArray}
                  setBoxArray={setBoxArray}
                />
                <div />
              </div>
            </div>
            <div
              key={"question region "}
              className={
                chatShow
                  ? "right-0 h-full w-full xl:w-1/2 2xl:w-[960px] transition-width duration-300 ease-in-out slider-target"
                  : "right-0 h-full w-full transition-width duration-300 ease-in-out slider-target"
              }
            >
              <GameScoreBoard />
              <InGameButtons
                buttonName={buttonName}
                setIsliked={setIsliked}
                activeQuestion={activeQuestion}

                studentAnswer={studentAnswer}

                questionArray={questionArray}
                clear={clear}
                canvasShow={canvasShow}
                setCanvasShow={setCanvasShow}
                setColor={setColor}
                undo={undo}
                isliked={isliked}
                gameOver={gameOver}
                newQuestion={newQuestion}
              />
              <GameToggleButton setChatShow={setChatShow} chatShow={chatShow} />
              <div
                key={"loading"}
                className={
                  questionexist
                    ? "hidden relative"
                    : chatShow
                    ? "absolute top-0 w-[960px] h-[868px] flex items-center"
                    : "absolute top-0 w-full flex h-[868px] items-center"
                }
              >
                <div className="right-0 left-0 center flex mx-auto w-fit">
                  {/* <ImageHover
                    imagelink={imageUrl}
                    coordinates={coordinates}
                    studentAnswer={studentAnswer}
                    setStudentAnswer={setStudentAnswer}
                    correctAnswer={correctAnswer}
                  /> */}
                </div>
              </div>
            </div>
            <canvas
              ref={canvasRef}
              onMouseDown={onMouseDown}
              width={1920}
              height={868}
              className={
                canvasShow
                  ? " canvas absolute top-0 z-[100] h-[755px] sm:h-[868px]"
                  : "canvas pointer-events-none absolute top-0 -z-40 h-[820px] sm:h-[868px]"
              }
            />
          </div>
        </main>
      )}
    </>
  );
};

export default Snake;
