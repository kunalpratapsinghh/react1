import React from "react";

function Page1() {
  const data = ["android", "blackberry", "iphone", "windows phone"];
  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {data.map( (ele,index)=>{
          return <li key={index}>{ele}</li>
        })}
      </ul>
    </div>
  );
}

export default Page1;



