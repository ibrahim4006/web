const getQuestionNames = (
  { props }: { props: string[] },
  { levels }: { levels: number[] },
  { randomArray }: { randomArray: number[][] },
  { subjects }: { subjects: string[] }
) => {
    const formattedRandomArrays: string[][] = subjects.map((subject, index) => {
        return randomArray[index].map((element, subIndex) => {
          const classofquestion = props[1].split("-")[0];
          const lesson = props[0].toLowerCase();
          const chapter = props[1].split("-")[1];
          const level = levels[subIndex];
      
          return `${lesson}#${classofquestion}#${chapter}#${subject}#${level}#${element}`;
        });
      });

      const combinedArray: string[] = ([] as string[]).concat(...formattedRandomArrays);

      const shuffledArray = shuffleArray(combinedArray)

      return shuffledArray;
};

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

export default getQuestionNames;
