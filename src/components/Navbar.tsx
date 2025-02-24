import React, { useState } from "react";
import styled from "styled-components";
import { Burger } from "./Burger.tsx"; // Asegúrate de tener este componente
import { useTheme } from "./ThemeContext.tsx"; // Asegúrate de tener este contexto
import "../styles/Navbar.css"; // Tus estilos adicionales
import "../styles/styles.css"; // Tus estilos adicionales
import LogoLight from "../images/LOGO-03.png";
import LogoDark from "../images/LOGO-04.png";
export const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const ThemeToggleButton = ({
    theme,
    toggleTheme,
  }: {
    theme: string;
    toggleTheme: () => void;
  }) => {
    return (
      <div className="checkbox-apple">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
          className="yep"
          id="check-apple"
        />

        <label for="check-apple"></label>
      </div>
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
          src={theme === "light" ? LogoLight : LogoDark}
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
      margin-right: 3rem;
    }

    .linkN:hover {
      background-color: #171617;
      color: aliceblue;
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
        width: 80%; /* Se ajusta el tamaño del contenedor */
        display: flex;
        justify-content: center; /* Centra el botón de alternar tema */
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
