import React from "react";

function Card(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.content}</dd>
        <button onClick={handleClick}>DELETE</button>
      </dl>
    </div>
  );
}
export default Card;
