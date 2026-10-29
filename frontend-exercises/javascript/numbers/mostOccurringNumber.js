const numbers=[1,2,5,6,7,8,9,2,2,2,2,5,5,8,33,35,45,33];

  const frequencyMap = new Map();
  let maxCount = 0;
  let mostFrequentNumber = null;

  for (const num of numbers) {
    const count = (frequencyMap.get(num) ?? 0) + 1;
    frequencyMap.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      mostFrequentNumber = num;
    }
  }

  console.log({ number: mostFrequentNumber, count: maxCount });
   


