import { PreviewPageProps } from "@/types";
import React from "react";
import Image from "next/image";
import SquareButton from "../SquareButton";

interface Point {
  x: number;
  y: number;
}

const PreviewPage = ({
  isAddQuestionPageShow,
  setisAddQuestionPageShow,
  setisPreviewPageShow,
  classes,
  subject,
  chapter,
  lesson,
  difficulty,
  preview,
  imageName,
  correctAnswer,
  points,
  bucketName,
}: PreviewPageProps) => {

  const onSubmit = async (
    lesson: string,
    subject: string,
    classes: string,
    chapter: string,
    difficulty: string,
    imageName: string,
    correctAnswer: string,
    points: Point[],
    bucketName: string
  ) => {
    const url =
      "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/question";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        lesson: lesson.split(" ").join("").toLowerCase(),
        class: classes.toLowerCase(),
        chapter: chapter.split(" ").join("").toLowerCase(),
        subject: subject.split(" ").join("").toLowerCase(),
        difficulty: difficulty.toLowerCase(),
        answer: correctAnswer,
        coordinates: points,
        imageName: imageName,
        bucketName: bucketName,
      }),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        alert("Submission successful!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        const responseData = await response.json();
        alert(`Error: ${responseData.message}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`An error occurred: ${error.message}`);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
      <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex justify-between items-center uppercase">
        Yeni Soru
      </div>
      <div className="flex justify-center space-x-20 w-full border-b">
        <div className="flex justify-center items-center h-96">
        {preview && (
          <Image
            src={URL.createObjectURL(preview)}
            alt="Preview image"
            width={450}
            height={650}
          />
        )}
        </div>
        <div className="flex flex-col justify-start space-y-5 border-l p-5">
          <SquareButton title={classes} containerStyles="square-btn-m active" />
          <SquareButton title={lesson} containerStyles="square-btn-m active" />
          <SquareButton title={chapter} containerStyles="square-btn-m active" />
          <SquareButton title={subject} containerStyles="square-btn-m active" />
          <SquareButton
            title={difficulty}
            containerStyles="square-btn-m active"
          />
        </div>
      </div>
      <div className="flex justify-start items-center space-x-5 h-20 pl-5 relative">
        <SquareButton
          title="Image Upload"
          containerStyles="square-btn-m"
          handleClick={() => {
            setisPreviewPageShow(false);
            setisAddQuestionPageShow(true);
          }}
        />
        <SquareButton
          title="Seçenekleri Ayarla"
          containerStyles="square-btn-l"
          handleClick={() => setisAddQuestionPageShow(true)}
        />
        <div className="absolute right-10">
          <SquareButton
            title="Tamamla"
            containerStyles="square-btn-s"
            handleClick={() =>
              onSubmit(
                lesson,
                subject,
                classes,
                chapter,
                difficulty,
                imageName,
                correctAnswer,
                points,
                bucketName
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
