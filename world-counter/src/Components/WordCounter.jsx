import React from "react";
import Word from "./Word";
import Letter from "./Letter";
import Paragraph from "./Paragraph";
import Textarea from "./Textarea";

function WordCounter() {
  //   const wordcounter = () => {};
  return (
    <div className="container" style={{ backgroundColor: "violet" }}>
      <div className="topbar" style={{ display: "flex" }}>
        <Word />
        <Letter />
        <Paragraph />
      </div>
      <Textarea />
    </div>
  );
}

export default WordCounter;
