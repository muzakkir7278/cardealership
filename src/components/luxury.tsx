import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "Tesla",
      Year: "2014",
      description:"Price:2cr",
      url: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/25/full/1682444738-4535.jpg?im=FeatureCrop,size=(826,465)"
    },
    {
      name: "Toyota",
      year: "2000",
      description:"price:1lakh ",
      model:"2025",
      engine:"2.5l",
      url: "https://www.mylescars.com/blog/wp-content/uploads/2024/03/Toyota-Camry.jpg",
    },
    {
      name: "Hyundai",
      year: "2024",
      description:"price:5lakhs",
      url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg",
    },
    {
      name: "RangeRover",
     year: "2025",
      description:"9lakhs",
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
                <p className="card-text">{place.model}</p>
                <p className="card-text">{place.engine}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}