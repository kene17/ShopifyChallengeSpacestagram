import React, { createContext, useState } from "react";
export const MyContext = createContext();
const AppContext = ({ children }) => {
  const [apod, setApod] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likedData, setLikedData] = useState([]);
  const [isClick, setisClick] = useState(false);

  return (
    <MyContext.Provider
      value={{
        apod, 
        setApod,
        setLoading,
        setError,
        likedData,
        setLikedData,
        isClick,
        setisClick,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
