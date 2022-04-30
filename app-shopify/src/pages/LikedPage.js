import React,{useContext} from 'react'
import LikedComponent from '../components/LikedCard/LikedComponent'
import "./See.css"
import { MyContext } from "../context";
const LikedPage = () => {
    const { likedData, like } = useContext(MyContext);
    return (
        <div>
      <div className="test">
        <h1 className="tester">View Liked Images</h1>
      </div>
      <div>
        {likedData.length > 0 && !like ? (
          <LikedComponent />
        ) : (
          <h4 className="centered">No Liked Photos</h4>
        )}
      </div>
    </div>
    )
}

export default LikedPage