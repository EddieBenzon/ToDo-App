import React from "react";
import { useNavigate } from "react-router-dom";

const Finished = ({ newList }) => {
  const navigate = useNavigate();
  return (
    <section className="finished-container">
      <h3>
        Hey! Looks like you finished your tasks for the day. Congrats! Feel free
        to add more or just kick back and relax.
      </h3>
      <div className="finished-button-container">
        <button
          onClick={() => {
            newList();
          }}
        >
          New List
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Finished !
        </button>
      </div>
    </section>
  );
};

export default Finished;
