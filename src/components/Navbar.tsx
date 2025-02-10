import React, { useState } from "react";
import styled from "styled-components";
import { Burger } from "./Burger.tsx";
import "../styles/Navbar.css";
import "../styles/styles.css";
import { GiCrossedAxes } from "react-icons/gi";
import { useTheme } from "./ThemeContext.tsx";
export const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const [Logo, setLogo] = useState<string>("assets/LOGO-03.png");
  const ThemeToggleButton = ({
    theme,
    toggleTheme,
  }: {
    theme: string;
    toggleTheme: () => void;
  }) => {
    return (
      <label className="switch">
        <input
          id="input"
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />

        <div className="slider round">
          <div className="sun-moon">
            <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>

            <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
          </div>
          <div className="stars">
            <svg id="star-1" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg id="star-2" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg id="star-3" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg id="star-4" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
          </div>
        </div>
      </label>
    );
  };

  // Función para alternar el estado de "clicked"
  const handleclick = () => {
    setClicked(!clicked);
  };

  // Función para cerrar el menú (poniendo clicked a false)
  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <NavContainer>
      <div className="WolvesStudioNav">
        <img
          className="logo"
          src={theme === "light" ? "assets/LOGO-03.png" : "assets/LOGO-04.png"}
          alt="Logo.png"
        />
      </div>
      <div className={`links ${clicked ? "active" : ""}`}>
        {/* Los enlaces ahora llaman a closeMenu para cerrarlo */}
        <a className="linkN" onClick={closeMenu} href="#home">
          Home
        </a>
        <a className="linkN" onClick={closeMenu} href="#about">
          About
        </a>
        <a className="linkN" onClick={closeMenu} href="#contact">
          Contact
        </a>
        <a className="linkN" onClick={closeMenu} href="#lj">
          Resumé
        </a>
        <div className="themeButtonContainer">
          <span className="theme-toggle">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </span>
        </div>
      </div>
      <div className="burger">
        <Burger clicked={clicked} handleClick={handleclick} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  border-bottom: 3px solid var(--bg-color);
  padding: 0.3rem;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  -webkit-box-shadow: 1px 10px 23px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 10px 23px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 10px 23px -9px rgba(0, 0, 0, 0.75);

  h2 {
    color: var(--title-color);
    font-weight: 400;
    z-index: 99;

    span {
      font-weight: bold;
      z-index: 99;
    }
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    margin-right: 1rem;
  }

  .burger {
    margin-right: 2rem;
    z-index: 100;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    a {
      color: var(--link-color);
      font-size: 1.2rem;
      margin-right: 6rem;
    }
    .linkN:hover {
      background-color: #171617;
      color: aliceblue;

      /* border-bottom: 3px solid #171617 */
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: -700px;
      left: -2000px;
      opacity: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: opacity 0.5s ease-in-out 0.3s;
      z-index: 99;
      .themeButtonContainer {
        width: 25%;
        display: flex;
        margin-top: 1rem;
        align-items: center;
      }
      a {
        font-size: 2rem;
        display: block;
        margin-top: 1rem;
        z-index: 99;
      }
    }
  }

  .links.active {
    opacity: 1;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`;

const BgDiv = styled.div`
  background-color: var(--bg-color);
  position: absolute;
  left: -1000px;
  top: -1000px;
  width: 0%;
  height: 0%;
  z-index: 90;
  transition: all 0.5s ease-in-out;

  &.active {
    border-radius: 0 0 60% 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
