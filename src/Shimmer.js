import React from "react";

export default function Shimmer() {
  return (
    <div className="card-container">
      {Array(6)
        .fill("")
        .map((e) => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
}
