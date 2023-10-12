"use client";
import { useState } from "react";

const CountingBoxes = ({ person1, person2 }) => {
  const numberOfRows = 100;
  function generateCountingNumbers(start, end, p1, p2) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(
        <div>
          {i}
          {i == p1 ? <span className="token token-green"></span> : null}
          {i == p2 ? <span className="token token-red"></span> : null}
        </div>
      );
    }
    return numbers;
  }

  // Function to reverse the order of an array
  function reverseArray(array) {
    return array.slice().reverse();
  }

  function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const renderBoxes = (p1, p2) => {
    let countingNumbers = [];

    let br = 11;

    for (let i = 1; i <= 100; i += 10) {
      let start = i;
      let end = i + 9;
      let numbersInRange = generateCountingNumbers(start, end, p1, p2);

      // Reverse the order of numbers after each 10 numbers
      if (i > 10 && i <= 100 && (i == br || i == br + 20)) {
        br += 20;
        numbersInRange = reverseArray(numbersInRange);
      }

      // Add numbers to the countingNumbers array
      countingNumbers = countingNumbers.concat(numbersInRange);
    }

    return countingNumbers;
  };

  const [got1, setGot1] = useState(1);
  const [got2, setGot2] = useState(1);
  const [turn, setTurn] = useState(true);
  const [current, setCurrent] = useState(0);

  const handleTurn = () => {
    // getting random number between 1 and 6
    const currentNumber = randomNumber(1, 6);

    // updating value for each user
    if (turn) {
      const value1 = got1;
      const updatedValue1 = value1 + currentNumber;
      setGot1(updatedValue1);

      // check if 6 is the number or not
      if (currentNumber != 6) {
        setTurn(!turn);
      }
    } else if (!turn) {
      const value2 = got2;
      const updatedValue2 = value2 + currentNumber;
      setGot2(updatedValue2);

      // check if 6 is the number or not
      if (currentNumber != 6) {
        setTurn(!turn);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-center gap-3">
        <div className="w-[400px] border-2 p-10 relative">
          {turn && (
            <div className="w-[50px] h-[50px] bg-green-500 absolute left-2 top-2"></div>
          )}
          <p className="text-3xl font-semibold">{person1}</p>
          <p className="text-lg">
            <span className="text-7xl text-green-500 font-bold">{got1}</span>
          </p>
          {/* <p className="text-lg">Current Dice Value: 0</p> */}
          <button
            type="button"
            className={
              "flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            }
            disabled={!turn}
            onClick={handleTurn}
          >
            Roll Dice
          </button>
        </div>
        <div className="w-[400px] border-2 p-10 relative">
          {!turn && (
            <div className="w-[50px] h-[50px] bg-red-500 absolute left-2 top-2"></div>
          )}
          <p className="text-3xl font-semibold">{person2}</p>
          <p className="text-lg">
            <span className="text-7xl text-red-500 font-bold">{got2}</span>
          </p>
          <button
            type="button"
            className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            disabled={turn}
            onClick={handleTurn}
          >
            Roll Dice
          </button>
        </div>
      </div>
      <div className="grid-main grid m-5 w-full grid-cols-10 gap-2">
        {renderBoxes(got1, got2)}
      </div>
    </>
  );
};

export default CountingBoxes;
