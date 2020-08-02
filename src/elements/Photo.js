import styled from "styled-components"
import React from "react"

const Photo = ({ title, story, imgUrl }) => {
  return <Img src={imgUrl} />
}

const Img = styled.img`
  width: 100%;
  border: 5px solid white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`

export default Photo
