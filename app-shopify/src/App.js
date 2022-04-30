import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoadingSpiner from "./components/SpinnerComponent/LoadingSpiner";
import LikedPage from "./pages/LikedPage";

function App() {
  return (
    <div className="PageContainer">
      <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spacestagram</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
          <Navbar />
          <Suspense
          fallback={
            <div className="centered">
              <LoadingSpiner />
            </div>
          }
        ></Suspense>
          <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
         
          <Route exact path="/likedpage" >
            <LikedPage />
          </Route>
        </Switch></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
