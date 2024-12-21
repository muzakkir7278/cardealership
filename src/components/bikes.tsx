import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "yamaha",
      Year: "2014",
      description:"Price:2cr",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCdzltJTICSbS7BlMrXu-zPaBVYMjPW8IhA&s"
    },
    {
      name: "suzuki",
      year: "2000",
      description:"price:1lakh",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j4-hw5EgInfSeKjrpqoxIT_3CTDzp2nwKA&s",
    },
    {
      name: "jawa",
      year: "2024",
      description:"price:5lakhs",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3BCIUGO_aI6Q0v6X0QlP9Zu6-hQbKY8xQ&s",
    },
    {
      name: "royal enfield",
     year: "2025",
      description:"9lakhs",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMXfwbzADgo97cmtwFDuNPUJxdwolxc-Cyw&s",
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