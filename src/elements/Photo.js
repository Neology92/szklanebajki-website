import styled from "styled-components"
import React from "react"

const Photo = ({ title, story, imgUrl, onClick }) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        <img src={imgUrl}></img>
        <ImgTitle>{title}</ImgTitle>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
  }

  border: 5px solid ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.blurred};

  ${({ theme }) => theme.media.above.s} {
    border: 1vw solid ${({ theme }) => theme.color.white};
  }

  ${({ theme }) => theme.media.above.l} {
    border: 10px solid ${({ theme }) => theme.color.white};
  }

  &:hover span {
    opacity: 1;
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

  background: ${({ theme }) => `${theme.color.black}99`};
  opacity: 0;

  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 2.2rem;

  transition: opacity 0.3s ease-in-out;
`

export default Photo
