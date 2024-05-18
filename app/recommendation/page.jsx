"use client";
import React, { useEffect, useState } from "react";
import API_URL from "@/api";

const Recommendation = () => {

  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    handleGetRecommendation();
  }, []);

  const handleGetRecommendation = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const bodyReq = {
      id: parseInt(userInfo.id, 10),
      age: parseInt(userInfo.age, 10),
      gender: parseInt(userInfo.gender, 10),
      ocupation: parseInt(userInfo.occupation, 10),
    };
    console.log("Req", JSON.stringify(bodyReq));
    const response = await fetch(`${API_URL}/recommendation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: parseInt(userInfo.id, 10),
        age: parseInt(userInfo.age, 10),
        gender: parseInt(userInfo.gender, 10),
        occupation: parseInt(userInfo.occupation, 10),
      }),
    });
    const data = await response.json();
    console.log("-->", data.recomendaciones);
    setRecommendation(data.recomendaciones);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 gap-4">
      <h1 className="text-4xl font-bold font-montserrat text-yellow">
        We recommend you the following movies
      </h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {recommendation.length === 0 ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          recommendation.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-4 glassmorphism w-96 h-80"
            >
              <h2 className="text-2xl font-bold font-montserrat text-gray-200 text-center">
                {movie.title}
              </h2>
              <div className="h-1/2"> 
                <img className="h-full" src={movie.poster} alt={movie.title}/>
              </div>
              <div className="h-1/2"> 
                <p className="text-white font-montserrat">
                  Gender: {movie.genres.join(", ")}
                </p>
                <p className="text-white font-montserrat">
                  Predicted rating: {movie.rating}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recommendation;
