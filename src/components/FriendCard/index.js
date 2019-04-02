import React from "react";
import "./style.css";

function FriendCard(props) {
  const {name, image, occupation, location, id} = props.data;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Address:</strong> {location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.delete(id)} className="remove">𝘅</span>
    </div>
  );
}

export default FriendCard;
