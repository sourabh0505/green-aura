import React from "react";
import "./books.css";
import data from './booksInfo.json';

function Books() {
  return <div className="booksContainer">
    <h1>Books Recommendation</h1>
    <div className="booksDiv">
    {data.map((bookItem)=> (
        <div className="bookCard">
          <img src={bookItem.image} alt="book image" />

          <div className="bookContent">
            <p><b>{bookItem.title}</b></p>
            <p>{bookItem.info}</p>
          </div>

          <div className="buyButton">
          <button className="bookBtn"><a target="_blank" href={bookItem.weblink}>Buy Book</a></button>
          </div>
        </div>
    ))}
    </div>
  </div>;
}

export default Books;
