import React from "react";

function Location({ height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-mapPin"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    </svg>
  );
}

export default Location;
