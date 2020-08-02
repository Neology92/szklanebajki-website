import styled from "styled-components"
import React from "react"

const Photo = ({ title, story, imgUrl }) => {
  return <Img src={imgUrl} />
}

const Img = styled.img`
  width: 100%;
  border: 5px solid ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};
`

export default Photo
