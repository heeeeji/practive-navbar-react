import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orange;
  }

  .navLogo {
    background-color: red;

    &:hover {
      background-color: pink;
    }
  }

  ul {
    li {
      float: left;
      list-style: none;
      padding: 0 1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className="navbar">
          <div className="navLogo">Logo</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div>login</div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
