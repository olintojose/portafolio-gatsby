import React from "react"
import { css } from "@emotion/core"
import Nav from "./Nav"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ToHome = styled(Link)`
  color: #4f4f4f;
  text-align: center;
  text-decoration: none;
`

const Header = () => {
  return (
    <header
      css={css`
         background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 2 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <ToHome to="/">
          <h1>Olinto Muñoz</h1>
        </ToHome>

        <Nav />
      </div>
    </header>
  )
}

export default Header
