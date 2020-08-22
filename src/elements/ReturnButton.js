import React from "react"
import styled from "styled-components"
import arrow from "../assets/images/left-arrow.svg"

const ReturnButton = ({ ...props }) => {
  return (
    <ArrowButton {...props}>
      <ArrowImg src={arrow}></ArrowImg>
    </ArrowButton>
  )
}

const ArrowImg = styled.img`
  width: 80%;
  height: 80%;
`

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  background: transparent;

  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 50px;
`

export default ReturnButton
