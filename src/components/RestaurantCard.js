import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

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
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
