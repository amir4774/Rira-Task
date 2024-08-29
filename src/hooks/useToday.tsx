import { useState, useEffect } from "react";
import { useGlobalContext } from "../GlobalContext";

const useToday = () => {
  const [today, setToday] = useState("");
  const { convertDate } = useGlobalContext();

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setToday(convertDate({ year, month, day }));
  }, []);

  return today;
};

export default useToday;
