import React, { useState, useMemo } from "react";

const useCounter = (num) => {
  const [value, SetValue] = useState(num);

  const addOne = () => {
    SetValue(value + 1);
  };
  const removeOne = () => {
    SetValue(value - 1);
  };
  const double = () => {
    SetValue(value * 2);
  };
  const divide = () => {
    SetValue(value / 2);
  };

  return { value, addOne, removeOne, double, divide };
};

export default useCounter;
