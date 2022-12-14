import React from "react";
export default function Actor({ data }) {
  return (
    <>
      {console.log(data)}
      <div className="container">
          {data.map((d) => {
            return (
              <div className="card">
                <div className="card-image">
                    <img src={d?._embedded?.show?.image?.medium} />
                </div>
                <div className="card-title">
                  <h3>{d?._embedded?.show?.name}</h3>
                </div>
                
              </div>
            );
          })}
      
      </div>
      
    </>
  );
}