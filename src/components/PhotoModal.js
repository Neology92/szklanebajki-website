import React from "react"
import styled from "styled-components"
import GraphImg from "graphcms-image"

import {
  ContactFooter,
  Paragraph,
  TextHeading,
  ReturnButton,
  HeadingBanner,
} from "../elements"

const PhotoModal = ({ isOpen, glassData, maxWidth, close, scrollPosition }) => {
  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={close} />
          <Wrapper scrollPosition={scrollPosition}>
            <ReturnButton onClick={close} />
            <HeadingBanner className="heading">
              <TextHeading>{glassData.title}</TextHeading>
            </HeadingBanner>
            <div className="photo">
              <GraphImg image={glassData.photo} maxWidth={maxWidth} />
            </div>
            <Paragraph className="story">{glassData.story}</Paragraph>
            <ContactFooter classaName="footer" />
          </Wrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: calc(100% - 1rem);
  height: fit-content;
  padding: 1rem 1.5rem;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: ${({ scrollPosition }) => `${scrollPosition}px`};
  left: 0.5rem;

  z-index: 1;

  & > div {
    margin-top: 15px;
  }

  & > p {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  & > img {
    margin-top: 20px;
  }

  ${({ theme }) => theme.media.above.m} {
    padding: 3rem 3rem;
    width: 80%;

    left: 10%;
    top: ${({ scrollPosition }) => `calc(5rem + ${scrollPosition}px)`};

    & > div {
      margin-top: 25px;
    }

    & > p {
      margin-top: 60px;
      margin-bottom: 30px;
    }

    & > img {
      margin-top: 40px;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    width: 920px;
    height: fit-content;
    padding: 4rem 4rem;

    position: fixed;
    left: calc(50% - 460px);
    top: 5rem;

    display: grid;
    grid-template-columns: 370px 420px;
    grid-template-rows: 110px 360px 30px;
    gap: 30px 40px;
    grid-template-areas:
      "photo heading"
      "photo story"
      "photo footer";

    .photo {
      grid-area: photo;
    }
    .heading {
      grid-area: heading;
    }
    .story {
      grid-area: story;
    }
    .footer {
      grid-area: footer;
    }

    & > div {
      margin-top: 0;
    }

    & > p {
      margin-top: 0;
      margin-bottom: 0;
    }

    & > img {
      margin-top: 0;
    }
  }
`

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 1;

  background: ${({ theme }) => theme.color.black};
  opacity: 0.6;
`

const Img = styled.img`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.strong};
`

export default PhotoModal
