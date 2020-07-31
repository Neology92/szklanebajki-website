import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"

import { Header } from "../components"
import "../assets/styles/fonts.css"
import "../assets/styles/global.css"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

const Main = styled.main`
  width: 80%;
  margin: 0 auto;
`

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
