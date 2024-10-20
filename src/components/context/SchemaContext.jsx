import axios from "axios";
import { createContext, useEffect, useState } from "react";

const SchemeContext = createContext();

const SchemeProvider = ({ children }) => {
  const [scheme, setScheme] = useState([]);
  console.log(scheme);

  const getScheme = async () => {
    try {
      await axios
        .get("https://dgs-backend-yo9v.onrender.com/api/v1/schemes/list_scheme")
        .then((res) => {
          setScheme(res.data);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getScheme();
  }, []);

  return (
    <SchemeContext.Provider value={{ scheme }}>
      {children}
    </SchemeContext.Provider>
  );
};

export { SchemeContext, SchemeProvider };
