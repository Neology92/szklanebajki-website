import styled from "styled-components"
import React from "react"

const Photo = ({ title, story, imgUrl, ...props }) => {
  return <Img src={imgUrl} {...props} />
}

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  border: 5px solid ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.blurred};

  ${({ theme }) => theme.media.above.s} {
    border: 1vw solid ${({ theme }) => theme.color.white};
  }

  ${({ theme }) => theme.media.above.l} {
    border: 10px solid ${({ theme }) => theme.color.white};
  }
`

export default Photo
