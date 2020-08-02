import styled from "styled-components"
import React from "react"
import Divider from "./Divider"
import Icon from "./Icon"

const ContactFooter = () => {
  return (
    <>
      <Divider />
      <Info>
        <Email href="mailto: sandradyrka1@gmail.com">
          sandradyrka1@gmail.com
        </Email>
        <IconsWrapper>
          <Icon instagram />
          <Icon facebook />
        </IconsWrapper>
      </Info>
    </>
  )
}

const Info = styled.address`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const Email = styled.a`
  text-decoration: underline;
  color: #666;
`
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default ContactFooter
