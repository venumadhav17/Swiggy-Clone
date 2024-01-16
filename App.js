import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo-500x281.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    areaName,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <div className="star-rating">
        <span>{avgRating} • </span>
        {deliveryTime}
      </div>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

const resList = [
  {
    id: "4046",
    name: "Sri Udupi Park",
    cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
    deliveryTime: "20 mins",
    areaName: "Residency Road",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "South Indian", "Chinese", "Chaat", "Beverages"],
    avgRating: 4.4,
    avgRatingString: "4.4",
  },
  {
    id: "4047",
    name: "Sri Udupi Park",
    cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
    deliveryTime: "20 mins",
    areaName: "Residency Road",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "South Indian", "Chinese", "Chaat", "Beverages"],
    avgRating: 4.4,
    avgRatingString: "4.4",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
