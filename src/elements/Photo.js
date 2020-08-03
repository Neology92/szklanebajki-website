import styled from "styled-components"
import React from "react"

const Photo = ({ title, story, imgUrl }) => {
  return <Img src={imgUrl} />
}

const Img = styled.img`
  width: 100%;
  border: 5px solid ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.strong};

  ${({ theme }) => theme.media.above.s} {
    border: 1vw solid ${({ theme }) => theme.color.white};
  }

  ${({ theme }) => theme.media.above.l} {
    border: 10px solid ${({ theme }) => theme.color.white};
  }
`

export default Photo
