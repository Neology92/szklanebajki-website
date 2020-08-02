import React from "react"
import styled from "styled-components"
import {
  ProfileImage,
  TextHeading,
  Paragraph,
  ContactFooter,
} from "../elements"

const MainHeader = () => (
  <Wrapper>
    <ProfileImage />
    <TextHeading>Sandra Dyrka</TextHeading>
    <Paragraph>
      Kompozycje w szkle to nie tylko sposób na zarobek, ale również moja pasja
      i mój wkład w sztukę. Na każdy kolejny szukam osobnej inspiracji i przez
      każdy chcę przekazać inną bajkę.
    </Paragraph>
    <ContactFooter />
  </Wrapper>
)

const Wrapper = styled.header`
  padding: 3rem;
  height: 44rem;
  width: 95%;
  margin: 1rem auto;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default MainHeader
