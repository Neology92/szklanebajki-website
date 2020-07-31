import styled from "styled-components"
import React from "react"

const Name = () => {
  return (
    <Wrapper>
      <Col>Sandra</Col>
      <Col>Dyrka</Col>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 8.4rem;
  font-family: "League Script";
`

const Col = styled.div`
  width: 50%;
`
export default Name
