import { ChangeEvent, useState } from "react";

interface onChangeEvent {
  target: {
    value: string;
  };
}

const useFormValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement> | onChangeEvent) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useFormValue;
