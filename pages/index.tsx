"use client";
import React, { useState, useEffect } from "react";

import QuestionType from "@/components/QuestionType";
import AddQuestion from "@/components/AddQuestion";
import PreviewPage from "@/components/PreviewPage";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getServerSideProps() {
  const imageName = crypto.randomUUID()
  const bucketName = Bucket.BoomerangQuestionPool.bucketName

  const commandPut = new PutObjectCommand({
    Key: imageName, /* should be unique */
    Bucket: bucketName,
  });

  const url = await getSignedUrl(new S3Client({}), commandPut);

  
  return { props: { url, imageName, bucketName} };
}

interface Point {
  x: number;
  y: number;
}



export default function page({ url, imageName, bucketName }: { url: string, imageName: string, bucketName:string }) {
  const [isAddQuestionPageShow, setisAddQuestionPageShow] =
    useState<boolean>(false);
  const [ispreviewPageShow, setisPreviewPageShow] = useState<boolean>(false);
  const [ischoicePageOpen, setischoicePageOpen] = useState<boolean>(true);
  const [activeLesson, setActiveLesson] = useState<string>("matematik");
  const [activeClass, setActiveClass] = useState<string>("9");
  const [activeSubjects, setActiveSubjects] = useState<string>("Mantık");
  const [activeChapter, setActiveChapter] = useState<string>("Sayılar ve Cebir");
  const [activedifficulty, setDifficulty] = useState<string>("Kolay");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [preview, setPreview] = useState<File | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  


  return (
    <main>
      {isAddQuestionPageShow ? (
        <AddQuestion
          ischoicePageOpen={ischoicePageOpen}
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          preview={preview}
          setPreview={setPreview}
          imageUrl={url}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          points={points}
          setPoints={setPoints}
        />
      ) : ispreviewPageShow ? (
        <PreviewPage
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          classes={activeClass}
          subject={activeSubjects}
          lesson={activeLesson}
          chapter={activeChapter}
          difficulty={activedifficulty}
          preview={preview}
          imageName={imageName}
          correctAnswer={correctAnswer}
          points={points}
          bucketName={bucketName}
        />
      ) : (
        <QuestionType
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          activeClass={activeClass}
          activeChapter={activeChapter}
          activeLesson={activeLesson}
          activeSubjects={activeSubjects}
          activedifficulty={activedifficulty}
          setActiveChapter={setActiveChapter}
          setActiveClass={setActiveClass}
          setActiveLesson={setActiveLesson}
          setActiveSubjects={setActiveSubjects}
          setDifficulty={setDifficulty}
        />
      )}
    </main>
  );
};


