import { useState } from "react";

export const useForm = (start = {}) => {
  const [value, setValue] = useState(start);
  const reset = () => {
    setValue(start);
  };
  const updateChange = ({ ev }) => {
    setValue({
      ...value,
      [ev.name]: ev.value,
    });
  };
  return [value, updateChange, reset];
};
