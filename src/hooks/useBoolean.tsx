import { useState } from "react";

const useBoolean = () => {
  const [value, setValue] = useState(false);

  const onClick = () => {
    setValue(!value);
  };

  return {
    value,
    onClick,
  };
};

export default useBoolean;
