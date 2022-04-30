import React, { useState, useEffect, useContext} from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import CardComponent from "../components/Card/CardComponent";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../context";
import "./Home.css"
import LoadingSpiner from "../components/SpinnerComponent/LoadingSpiner";

const Home = ({CardControls}) => {
  const {apod, setApod} = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchedDataHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?count=8&api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response.data)
        setApod(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }

      
    };
    fetchedDataHandler();
  }, [setApod]);

  return (
    <div>
    {!isLoading && apod.length > 0 && (
      <ul >
        <div
          className="card-design"
        >
          {apod.map((data, idx) => (
            <CardComponent
              key={idx}
              id={Math.floor(Math.random() * 100)}
              url={data.url}
              title={data.title}
              explanation={data.explanation}
              date={data.date}
              CardControls={CardControls}
            />
          ))}
        </div>
      </ul>
    )}
    {!isLoading && apod.length === 0 && !error && (
        <p>Found No Pictures</p>
      )}
      {!isLoading && error && <p>{error}</p>}
      <div className="spinner-container">{isLoading && <LoadingSpiner />}</div>
    </div>
  );
};

export default Home;
