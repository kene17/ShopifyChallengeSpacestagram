//import Modal from "../Modal/ModalComponent";
import "./card.css";

import React, { useContext, useState } from "react";
import { MyContext } from "../../context";

import ModalComponent from "../Modal/ModalComponent";

import DeleteIcon from '@mui/icons-material/Delete';

const LikedCard = (props) => {

  const [like, setLike] = useState(false);
  const { likedData, setLikedData } = useContext(MyContext);
  const deleteHandler =()=>{
    const card ={
      url: props.url,
      id: props.id,
    }
    console.log(likedData.filter((x)=>(x.id!==card.id)))


  }


  return (
    <div className="img-container">
      <img src={props.url} />
      <div className="img-container-actions">
        <div className="modal-content">
          <button onClick={deleteHandler}>
            {!like ? (
              <DeleteIcon sx={{ color: "white", fontSize: "3rem" }} />
            ) : (
              <DeleteIcon sx={{ color: "red", fontSize: "3rem" }} />
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

export default LikedCard;
