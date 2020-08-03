import styled, { ThemeProvider } from "styled-components"
import React from "react"
import PropTypes from "prop-types"

import { MainHeader } from "../components"
import { theme } from "../assets/styles/theme"
import "../assets/styles/fonts.css"
import "../assets/styles/global.css"

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <MainHeader />
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  ${({ theme }) => theme.media.above.l} {
    width: 94rem;
    margin: 0 auto;
  }
`

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
