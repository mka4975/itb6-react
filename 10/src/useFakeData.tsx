import Person from "./Person";

const useFakeData = (): Person[] => {
  const persons = [];
  for (let i = 0; i < 35; i++) {
    persons.push({
      name: `Person ${i}`,
      age: 20 + i,
    });
  }
  return persons;
};

export default useFakeData;
