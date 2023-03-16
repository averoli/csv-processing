import React from "react";

function Meme({ memes }) {
  return memes.map((meme, index) => {
    return( <div key={index}>
        <h1>{meme.name}</h1>
        <img src={meme.url} alt={meme.name}/>
        </div>)
   
  });
}

export default Meme;
