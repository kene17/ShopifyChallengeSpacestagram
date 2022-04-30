
import "./card.css";

import React, { useContext, useState } from "react";
import { MyContext } from "../../context";


import ModalComponent from "../Modal/ModalComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardComponent = (props) => {

  const [like, setLike] = useState(false);
  const { likedData, setLikedData } = useContext(MyContext);

  const handleLiked = () => {
    setLike(!like);
    const card = {
      url: props.url,
      title: props.title,
      explanation: props.explanation,
      id: props.id,
      date: props.date,
    };
    const arr = [...likedData, card];
    setLikedData(arr);
  };

  return (
    <div className="img-container">
      <img src={props.url} />
      <div className="img-container-actions">
        <div className="modal-content">
          <button onClick={handleLiked}>
            {!like ? (
              <FavoriteIcon sx={{ color: "white", fontSize: "3rem" }} />
            ) : (
              <FavoriteIcon sx={{ color: "red", fontSize: "3rem" }} />
            )}
          </button>

          <ModalComponent
            title={props.title}
            explanation={props.explanation}
            url={props.url}
            date={props.date}
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
