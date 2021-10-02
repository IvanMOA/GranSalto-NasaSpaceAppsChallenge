import React from "react";

const Note = ({ text, date, Author }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>
          {date}
          {Author}
        </small>
      </div>
    </div>
  );
};

export default Note;

