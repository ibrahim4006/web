type NumberArray = number[];
type SolvedArray<T extends NumberArray[]> = T;

const getSolvedArray = (
    { subjects }: { subjects: string[] },
    { props }: { props: string[] },
    { levels }: { levels: number[] },
  ) => {
    const solvedArray: SolvedArray<number[][]> = [];
    levels.map(async (level, index) => {
      const url =
        "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/totalquestiontake";
      const requestData = {
        type: "getsolved",
        userName: "brhmrgn1@gmail.com",
        lesson: props[0],
        class: props[1].split("-")[0],
        chapter: props[1],
        subject: subjects[index],
        level: level,
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
          console.log(data.solvedArray)
          solvedArray.push(data.solvedArray)
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
    });
    return solvedArray
  };
  
  export default getSolvedArray;
  