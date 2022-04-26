import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="cards">
      {/* this is hole card */}
      <img className="card--img" src={props.item.imageUrl} />
      <div className="card-text">
        <div className="card-icon-link-location">
          <span>
            <FaMapMarkerAlt className="card-icon item" />
          </span>
          <span className="card-location">{props.item.location}</span>
          <span className="map-link ">
            <a href={props.item.googleMapsUrl}>View On google Map </a>
          </span>
        </div>
        <h1 className="card-title">{props.item.title}</h1>

        {/* start date end date  */}
        <span className="startdate date">{props.item.startDate}</span>
        <span className="enddate date"> - {props.item.endDate}</span>
        {/* text description */}
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
