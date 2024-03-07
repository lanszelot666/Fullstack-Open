const Total = ({ parts }) => {
  const total = parts.reduce((accummulator, part) => {
    const sum = accummulator + part.exercises;
    console.log("What is happening ", accummulator);
    return sum;
  }, 0);

  return <p><b>Total of {total} exercises</b></p>;
};

export default Total;
