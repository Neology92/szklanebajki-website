import React from "react"
import styled from "styled-components"
import GraphImg from "graphcms-image"

const Photo = ({ title, photo, onClick, maxWidth }) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        <GraphImg
          image={photo}
          maxWidth={maxWidth}
          withWebp
          blurryPlaceholder={false}
        />
        <ImgTitle>{title}</ImgTitle>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
  }

  border: 5px solid ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.blurred};
  background: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.media.above.s} {
    border: 1vw solid ${({ theme }) => theme.color.white};
  }

  ${({ theme }) => theme.media.above.l} {
    border: 10px solid ${({ theme }) => theme.color.white};

    &:hover span {
      opacity: 1;
    }
  }
`

const ImgTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 110px;
  padding: 15px;

  bottom: 3px;

  background: ${({ theme }) => `${theme.color.black}99`};
  opacity: 0;

  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 2.2rem;

  transition: opacity 0.3s ease-in-out;
`

export default Photo
