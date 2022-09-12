import React from "react";
export default function Show({ data }) {
  return (
    <>
      {console.log(data)}
      <div className="container">
          {data.map((d) => {
            return (
              <div className="card">
                <div className="card-image">
                    <img src={d?.show?.image?.medium} />
                </div>
                <div className="card-title">
                  <h3>{d?.show?.name}</h3>
                </div>
                
              </div>
            );
          })}
      
      </div>
      
    </>
  );
}
