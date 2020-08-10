import styled from "styled-components"
import React from "react"

import {
  ContactFooter,
  Paragraph,
  TextHeading,
  ReturnButton,
  HeadingBanner,
} from "../elements"

const PhotoModal = ({ isOpen, glassData, close }) => {
  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={close} />
          <Wrapper>
            <ReturnButton onClick={close} />
            <HeadingBanner>
              <TextHeading>{glassData.title}</TextHeading>
            </HeadingBanner>
            <Img src={glassData.photo.url} />
            <Paragraph>{glassData.story}</Paragraph>
            <ContactFooter />
          </Wrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: calc(100% - 1rem);
  min-height: 95rem;
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  z-index: 99999;
`

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.color.black};
  opacity: 0.6;

  z-index: 99998;
`

const Img = styled.img`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.strong};
`

export default PhotoModal
