import styled from "styled-components"
import React from "react"

const Icon = ({ path, link }) => {
  return (
    <Wrapper>
      <a href={link}>
        <Img src={path}></Img>
      </a>
    </Wrapper>
  )
}

const Img = styled.img`
  padding: 8px;
`
const Wrapper = styled.div`
  margin-left: 5px;
  margin-right: -10px;
`

export default Icon
