import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import HeaderComponent from './HeaderComponent/HeaderComponent';
import PhotoComponent from './PhotoComponent/PhotoComponent';
import InfoComponent from './InfoComponent/InfoComponent';


function App() {
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [explanation, setExplanation] = useState();









  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
     .then(response => {
       console.log(response.data.message);
       setPhoto(response.data.url);
       setTitle(response.data.title);
       setDate(response.data.date);
       setExplanation(response.data.explanation);
     })
     .catch(error => console.log(error))
  }, []);
  return (
    <div className="App">
      <HeaderComponent />
        
      <PhotoComponent url = {photo} />
       
      <InfoComponent title = {title} date = {date} explanation = {explanation} />
      
    </div>
  );
}

export default App;
