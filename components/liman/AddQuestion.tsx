"use client";
import React, { useState, useEffect } from "react";
import SetQuestionChoices from "./SetQuestionChoices";
import { AddQuestionProps } from "@/types";
import Image from "next/image";
import SquareButton from "../common/SquareButton";


const AddQuestion = ({
  isAddQuestionPageShow,
  setisAddQuestionPageShow,
  setisPreviewPageShow,
  ischoicePageOpen,
  setischoicePageOpen,
  preview,
  setPreview,
  imageUrl,
  correctAnswer,
  setCorrectAnswer,
  points,
  setPoints,
}: AddQuestionProps) => {
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
  };

  return (
    <>
      <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
        <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex justify-between items-center uppercase">
          Yeni Soru
          {isAddQuestionPageShow && (
            <Image
              src="/denemeboomerang.svg"
              alt="Boomerang Ok"
              className="rotate-90 cursor-pointer mr-5"
              width={45}
              height={45}
              onClick={() => setisAddQuestionPageShow(false)}
            />
          )}
        </div>
        {ischoicePageOpen ? (
          <div className="flex-col space-y-5 justify-start items-center h-auto w-full border-b pt-5 ">
            <Image
              src={preview === null ? "" : URL.createObjectURL(preview)}
              alt="Preview image"
              className="object-cover ml-auto mr-auto"
              width={450}
              height={450}
            />
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const fileInput = (e.target as HTMLFormElement).file;
                const file = fileInput.files?.[0];


                if (!file) {
                  alert("Please select a file.");
                  return;
                }

                try {
                  const response = await fetch(imageUrl, {
                    body: file,
                    method: "PUT",
                    headers: {
                      "Content-Type": file.type,
                      "Content-Disposition": `attachment; filename="${file.name}"`,
                    },
                  });

                  if (response.ok) {
                    // Success popup
                    alert("File uploaded successfully!");
                  } else {
                    // Handle non-success response
                    const responseData = await response.json();
                    alert(`Error: ${responseData.message}`);
                  }
                } catch (error: unknown) {
                  if (error instanceof Error) {
                    // Handle fetch error
                    alert(`An error occurred: ${error.message}`);
                  } else {
                    alert("An unknown error occurred.");
                  }
                }
              }}
            >
              <input
                name="file"
                type="file"
                id="file"
                onChange={handleChangeImage}
                className="ml-[35%] mb-5"
              />
              <button type="submit">Upload</button>
              {/* <label htmlFor="file">
            <span>upload image</span>
            <img
              src="https://img.icons8.com/parakeet/2x/add-image.png"
              alt=""
            />
          </label> */}
            </form>
          </div>
        ) : (
          <SetQuestionChoices
            preview={preview}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            points={points}
            setPoints={setPoints}
          />
        )}
        <div className="flex justify-start items-center space-x-5 h-20 pl-5 relative">
          <SquareButton
            title="Image Upload"
            containerStyles={
              ischoicePageOpen ? "square-btn-m active" : "square-btn-m"
            }
            handleClick={() => {
              setischoicePageOpen(true);
              setisPreviewPageShow(false);
            }}
          />
          <SquareButton
            title="Seçenekleri Ayarla"
            containerStyles={
              !ischoicePageOpen ? "square-btn-l active" : "square-btn-l"
            }
            handleClick={() => {
              setischoicePageOpen(false);
              setisPreviewPageShow(false);
            }}
          />
          <div className="absolute right-10">
            <SquareButton
              title="Oluştur"
              containerStyles="square-btn-s"
              handleClick={() => {
                setisPreviewPageShow(true);
                setisAddQuestionPageShow(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
