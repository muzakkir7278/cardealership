import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "Tesla",
      Year: "2014",
      description:"Price:2cr",
      url: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*"
    },
    {
      name: "Toyota",
      year: "2000",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://www.mylescars.com/blog/wp-content/uploads/2024/03/Toyota-Camry.jpg",
    },
    {
      name: "Hyundai",
      city: "Paris",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg",
    },
    {
      name: "RangeRover",
      city: "Delhi",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/0Q2A9860.jpg?VersionId=mRhG_ZIw_o14SBnJuMflgukf2pmTfTBy&size=690:388",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}