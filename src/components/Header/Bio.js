import styled from "styled-components"
import React from "react"

const Bio = () => {
  return (
    <Wrapper>
      Kompozycje w szkle to nie tylko sposób na zarobek, ale również moja pasja
      i mój wkład w sztukę. Na każdy kolejny szukam osobnej inspiracji i przez
      każdy chcę przekazać inną bajkę.
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px 0 0;
  font-family: "Sahitya";
`

export default Bio
