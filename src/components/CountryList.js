import React from "react";

const CountryList = ({ data = [] }) => {
  return (
    <>
      {data.map((ingredient, index) => {
        if (ingredient) {
          return (
            <div key={data.children.name}>
              <h1>{data.children.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CountryList;
