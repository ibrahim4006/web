import { biyoloji, fizik, kimya, matematik } from "@/constants";

type QuestionTypeObject = {
  [key: string]: {
    [key: string]: string[];
  };
};



const getRandomTopic = ({ props }: { props: string[] }) => {
    function getRandomUniqueNumber(min:number, max:number, usedNumbers:number[]) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          if(!usedNumbers.includes(randomNumber)) usedNumbers.push(randomNumber);
        } while (usedNumbers.length < max);

        return usedNumbers;
      }
  const getSubjectData = (subject: string): QuestionTypeObject => {
    switch (subject) {
      case "matematik":
        return matematik;
      case "fizik":
        return fizik;
      case "kimya":
        return kimya;
      case "biyoloji":
        return biyoloji;
      default:
        return {};
    }
  };
  const classofquestion = props[1].split("-")[0];
  const lengthofsubject: number = getSubjectData(props[0].toLowerCase())[
    classofquestion
  ][props[1].split("-")[1] + "-" + props[1].split("-")[2]].length;

  const subjects: string[] = [];
  const subjectArray = getRandomUniqueNumber(0,lengthofsubject-1,[])


 if(lengthofsubject > 3){
     for (let i = 0; i < lengthofsubject; i++) {
       if (i === 3) return subjects;
       const subject = getSubjectData(props[0].toLowerCase())[classofquestion][
         props[1].split("-")[1] + "-" + props[1].split("-")[2]
       ][subjectArray[i]];
       subjects.push(subject.split("-")[1]);
     }
 }else{
    for (let i = 0; i < lengthofsubject; i++) {
        const subject = getSubjectData(props[0].toLowerCase())[classofquestion][
          props[1].split("-")[1] + "-" + props[1].split("-")[2]
        ][i];

        subjects.push(subject.split("-")[0]);
      }
 }
  return subjects;
};

export default getRandomTopic;
