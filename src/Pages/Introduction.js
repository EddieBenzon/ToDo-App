import React from "react";
import { Link } from "react-router-dom";
import image from "../Images/PipBoy.png";

const Introduction = () => {
  return (
    <main className="intro-wrapper">
      <div className="intro">
        <h2>Having trouble getting things done?</h2>
        <p>
          Well, it's no wonder - life can be pretty challenging. But it's time
          to take control of the day. Write down everything you need to do today
          - anything from going to the grocery store to saving the world - and
          get to it. It's time to defeat your procrastination monster!
        </p>
        <img src={image} />
        <Link to="/list" style={{ textDecoration: "none", color: "inherit" }}>
          <button>Get started!</button>
        </Link>
      </div>
      <section className="about">
        <h2>About this Site</h2>
        <h3>What is it?</h3>
        <p>
          This site is essentially a tool to help you waste less time and get
          more done. It was made in React, as a basic exercise. Hopefully, it's
          also useful.
        </p>
        <h3>How to use it?</h3>
        <p>
          Simply write a list of tasks for yourself and check them off as you
          complete them.
        </p>
        <h3>
          But what if I'm already a highly-functioning and successful member of
          society who doesn't need any extra help?
        </h3>
        <p>Well, then just use it as a shopping list, smarty-pants.</p>
      </section>
    </main>
  );
};

export default Introduction;
