import React from "react"
import styled from "styled-components"
import Bio from "./Bio"
import Name from "./Name"
import ProfileImage from "./ProfileImage"

const Header = () => (
  <Wrapper>
    <ProfileImage />
    <Name />
    <Bio />
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 40px 10rem;
  height: 300px;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

export default Header
