import React from "react"
import styled from "styled-components"
import { ProfileImage, TextHeading, Paragraph } from "../elements"

const MainHeader = () => (
  <Wrapper>
    <ProfileImage />
    <TextHeading>Sandra Dyrka</TextHeading>
    <Paragraph>
      Kompozycje w szkle to nie tylko sposób na zarobek, ale również moja pasja
      i mój wkład w sztukę. Na każdy kolejny szukam osobnej inspiracji i przez
      każdy chcę przekazać inną bajkę.
    </Paragraph>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 40px 10rem;
  height: 300px;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

export default MainHeader
