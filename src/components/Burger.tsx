import React from "react";
import styled from "styled-components";

interface BurgerProps {
  clicked: boolean;
  handleClick: () => void;
}
export const Burger = ({ clicked, handleClick }: BurgerProps) => {
  return (
    <ButtonBurger>
      {" "}
      <div className="three col">
        <div
          onClick={handleClick}
          className={`hamburger ${clicked ? "is-active" : ""} `}
          id="hamburger-6"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </ButtonBurger>
  );
};

const ButtonBurger = styled.div`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  p,
  li,
  a {
    font-size: 14px;
  }

  /* GRID */

  .six {
    width: 49.2%;
  }

  /* COLUMNS */

  .col {
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
    z-index: 99;
  }

  .col:first-of-type {
    margin-left: 0;
  }

  .container {
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  /* CLEARFIX */

  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }

  .cf:after {
    clear: both;
  }

  .cf {
    *zoom: 1;
  }

  /* ALL */

  .row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
  }

  .hamburger .line {
    z-index: 90;
    width: 50px;
    height: 5px;
    background-color: black;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  #hamburger-6.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger-6.is-active .line:nth-child(2) {
    width: 0px;
  }

  #hamburger-6.is-active .line:nth-child(1),
  #hamburger-6.is-active .line:nth-child(3) {
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  #hamburger-6.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px);
    -ms-transform: translateY(13px);
    -o-transform: translateY(13px);
    transform: translateY(13px);
  }

  #hamburger-6.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(90deg);
    -ms-transform: translateY(-13px) rotate(90deg);
    -o-transform: translateY(-13px) rotate(90deg);
    transform: translateY(-13px) rotate(90deg);
  }
`;
