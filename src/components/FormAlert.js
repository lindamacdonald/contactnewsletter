import React from "react";

function FormAlert(props) {
  return (
    <div
      className={
        "notification" 

      }
    >
      {props.message}
    </div>
  );
}

export default FormAlert;
