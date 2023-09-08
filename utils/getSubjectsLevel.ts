const getSubjectsLevel = (
  { subjects }: { subjects: string[] },
  { props }: { props: string[] }
) => {
  const levels: number[] = [];
  subjects.map(async (subject, index) => {
    const url =
      "https://urdiva01g0.execute-api.us-east-1.amazonaws.com/takedifficulty";
    const requestData = {
      type: "getsubjectlev",
      userName: "brhmrgn1@gmail.com",
      lesson: props[0],
      class: props[1].split("-")[0],
      chapter: props[1].split("-")[1],
      subject: subject,
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
        levels.push(data.level)
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
  return levels
};

export default getSubjectsLevel;
