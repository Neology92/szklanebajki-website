import styled from "styled-components"
import React from "react"
import Divider from "./Divider"
import Icon from "./Icon"
import fb from "../assets/images/fb.svg"
import ig from "../assets/images/ig.svg"

const ContactFooter = () => {
  return (
    <Wrapper>
      <Divider />
      <Info>
        <Email href="mailto: sandradyrka1@gmail.com">
          sandradyrka1@gmail.com
        </Email>
        <IconsWrapper>
          <Icon path={ig} link={"https://www.instagram.com/szklane.bajki/"} />
          <Icon path={fb} link={"https://www.facebook.com/SzklaneBajki/"} />
        </IconsWrapper>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Info = styled.address`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.6rem;
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.media.above.m} {
    justify-content: flex-end;
  }
`

const Email = styled.a`
  text-decoration: underline;
  color: #666;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  line-height: 100%;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.4rem;
  }
`
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default ContactFooter
