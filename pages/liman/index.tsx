// "use client";
// import React, { useState } from "react";


// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { Bucket } from "sst/node/bucket";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import AddQuestion from "@/components/liman/AddQuestion";
// import PreviewPage from "@/components/liman/PreviewPage";
// import QuestionType from "@/components/liman/QuestionType";

// export async function getServerSideProps() {
//   const imageName = crypto.randomUUID()
//   const bucketName = Bucket.BoomerangLimanPool.bucketName

//   const commandPut = new PutObjectCommand({
//     ACL: "public-read",
//     Key: imageName, /* should be unique */
//     Bucket: bucketName,
//   });

//   const url = await getSignedUrl(new S3Client({}), commandPut);

  
//   return { props: { url, imageName, bucketName} };
// }

// interface Point {
//   x: number;
//   y: number;
// }



// export default function page({ url, imageName, bucketName }: { url: string, imageName: string, bucketName:string }) {
//   const [isAddQuestionPageShow, setisAddQuestionPageShow] =
//     useState<boolean>(false);
//   const [ispreviewPageShow, setisPreviewPageShow] = useState<boolean>(false);
//   const [ischoicePageOpen, setischoicePageOpen] = useState<boolean>(true);
//   const [activeLesson, setActiveLesson] = useState<string>("matematik");
//   const [activeClass, setActiveClass] = useState<string>("9");
//   const [activeSubjects, setActiveSubjects] = useState<string>("1-Mantık");
//   const [activeChapter, setActiveChapter] = useState<string>("1-Sayılar ve Cebir");
//   const [activedifficulty, setDifficulty] = useState<string>("1-Kolay");
//   const [correctAnswer, setCorrectAnswer] = useState<string>("");
//   const [preview, setPreview] = useState<File | null>(null);
//   const [points, setPoints] = useState<Point[]>([]);
//   const [width, setWidth] = useState<number | undefined>();
//   const [height, setHeight ] = useState<number | undefined>();
  


//   return (
//     <main>
//       {isAddQuestionPageShow ? (
//         <AddQuestion
//           ischoicePageOpen={ischoicePageOpen}
//           setischoicePageOpen={setischoicePageOpen}
//           isAddQuestionPageShow={isAddQuestionPageShow}
//           setisAddQuestionPageShow={setisAddQuestionPageShow}
//           setisPreviewPageShow={setisPreviewPageShow}
//           preview={preview}
//           setPreview={setPreview}
//           imageUrl={url}
//           correctAnswer={correctAnswer}
//           setCorrectAnswer={setCorrectAnswer}
//           points={points}
//           setPoints={setPoints}
//         />
//       ) : ispreviewPageShow ? (
//         <PreviewPage
//           setischoicePageOpen={setischoicePageOpen}
//           isAddQuestionPageShow={isAddQuestionPageShow}
//           setisAddQuestionPageShow={setisAddQuestionPageShow}
//           setisPreviewPageShow={setisPreviewPageShow}
//           classes={activeClass}
//           subject={activeSubjects}
//           lesson={activeLesson}
//           chapter={activeChapter}
//           difficulty={activedifficulty}
//           preview={preview}
//           imageName={imageName}
//           correctAnswer={correctAnswer}
//           points={points}
//           bucketName={bucketName}
//         />
//       ) : (
//         <QuestionType
//           setisAddQuestionPageShow={setisAddQuestionPageShow}
//           activeClass={activeClass}
//           activeChapter={activeChapter}
//           activeLesson={activeLesson}
//           activeSubjects={activeSubjects}
//           activedifficulty={activedifficulty}
//           setActiveChapter={setActiveChapter}
//           setActiveClass={setActiveClass}
//           setActiveLesson={setActiveLesson}
//           setActiveSubjects={setActiveSubjects}
//           setDifficulty={setDifficulty}
//         />
//       )}
//     </main>
//   );
// };


