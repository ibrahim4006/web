const getTotalQuestion = (
    { subjects }: { subjects: string[] },
    { props }: { props: string[] },
    { levels }: { levels: number[] },
  ) => {
    const numberofQuestion: number[] = [];
    levels.map(async (level, index) => {
      const url =
        "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/totalquestiontake";
      const requestData = {
        type: "",
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
          numberofQuestion.push(data.solvedArray)
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
    return numberofQuestion
  };
  
  export default getTotalQuestion;
  