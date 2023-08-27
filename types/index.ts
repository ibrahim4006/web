import { MouseEventHandler } from "react";

export interface SquareButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

/* Start: Liman Sections */

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface QuestionTypeProps {
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  activeLesson: string;
  activeClass: string;
  activeSubjects: string;
  activeChapter: string;
  activedifficulty: string;
  setActiveLesson: (activeLesson: string) => void;
  setActiveClass: (activeClass: string) => void;
  setActiveSubjects: (activeSubjects: string) => void;
  setActiveChapter: (activeChapter: string) => void;
  setDifficulty: (difficulty: string) => void;
}
export interface AddQuestionProps {
  preview: File | null;
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  isAddQuestionPageShow: boolean;
  setisPreviewPageShow: (ispreviewPageShow: boolean) => void;
  setischoicePageOpen: (ischoicePageOpen: boolean) => void;
  ischoicePageOpen: boolean;
  setPreview: (preview: File) => void;
  imageUrl: string;
  correctAnswer: string;
  setCorrectAnswer: (correctAnswer: string) => void;
  points: Point[];
  setPoints: (points: Point[]) => void;
}
export interface PreviewPageProps {
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  isAddQuestionPageShow: boolean;
  setisPreviewPageShow: (ispreviewPageShow: boolean) => void;
  setischoicePageOpen: (ischoicePageOpen: boolean) => void;
  classes: string;
  lesson: string;
  chapter: string;
  subject: string;
  difficulty: string;
  preview: File | null;
  imageName: string;
  bucketName: string;
  correctAnswer: string;
  points: Point[];
}
type Point = {
  x: number;
  y: number;
};


export interface RectangleDrawerProps {
  setPoints: (points: Point[]) => void;
  points: Point[];
  preview: File | null;
  rectangles: Rectangle[];
  setRectangles: (rectangles: Rectangle[]) => void;
}
export interface SetQuestionChoicesProps {
  preview: File | null;
  correctAnswer: string;
  setCorrectAnswer: (correctAnswer: string) => void;
  points: Point[];
  setPoints: (points: Point[]) => void;
}
export interface ChoiceBoxesProps {
  points: Point;
  direction: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}
export interface AnswerBoxesProps {
  choice: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

/* End: Liman Sections */
