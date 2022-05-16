import React from 'react'

function Page2() {
  const data=["samsung","HTC","Micromax","Apple"];
  return (
    <div>
      <h1>Mobile Manufactures</h1>
        <ul>
            {data.map((ele,index)=>{
                return <li key={index}>{ele}</li>
            })}
        </ul>
    </div>
  );
}



export default Page2;