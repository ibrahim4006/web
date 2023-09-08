const getRandomNumber = ({ solved }: { solved: number[][] },{ total }: { total: number[] }) => {
    const imageNumbers: number[][] = [];
  const maxQuestion = total.length;

  for (let i = 0; i < maxQuestion; i++) {
    const max = total[i];
    const usedNumbers = solved[i]; // Array of numbers already used in this category

    // Create an array of numbers from 1 to max
    const availableNumbers = Array.from({ length: max }, (_, index) => index + 1);

    // Remove numbers that are already used in this category
    const remainingNumbers = availableNumbers.filter(
      (number) => !usedNumbers.includes(number)
    );

    // Shuffle the remaining numbers randomly
    shuffleArray(remainingNumbers);

    // Add the first N numbers from the shuffled array to imageNames
    const countToAdd = Math.min(remainingNumbers.length, max - usedNumbers.length);
    if (countToAdd === 0) {
        // If countToAdd is zero, break the loop and return an empty array
        return [];
      }
  
    imageNumbers[i].push(...remainingNumbers.slice(0, countToAdd));
  }

  return imageNumbers;
};

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export default getRandomNumber;


  
 

  
  
  
  
  
  
