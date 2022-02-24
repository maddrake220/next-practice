import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 0.5rem 1rem;
  background-color: #2c82c9;
  ul {
    display: flex;
    li {
      margin-right: 1rem;
      color: #fff;
    }
  }
`;
