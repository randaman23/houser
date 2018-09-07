import React from "react";

export default function House(props) {
  const { property_name, address, city, state, zipcode } = props;

  return (
    <div>
      <p>{property_name}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zipcode}</p>
      <button onClick={props.deleteHouse}>Delete</button>
    </div>
  );
}
