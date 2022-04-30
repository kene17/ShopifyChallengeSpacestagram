import "./card.css";


import React, { useContext } from "react";
import { MyContext } from "../../context";

import LikedCard from "./LikedCard";

const LikedComponent = (props) => {

const { likedData } = useContext(MyContext);

  return (
    <div
      className="card-design"
    >
      {likedData.map((data, idx) => (
        <LikedCard
          key={idx}
          id={Math.floor(Math.random() * 100)}
          url={data.url}
          title={data.title}
          explanation={data.explanation}
          date={data.date}
         
        />
      ))}
    </div>
  );
};

export default LikedComponent ;