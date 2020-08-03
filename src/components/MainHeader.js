import React from "react"
import styled from "styled-components"
import {
  ProfileImage,
  TextHeading,
  Paragraph,
  ContactFooter,
} from "../elements"

const MainHeader = () => (
  <>
    <Wrapper>
      <InnerImg>
        <ProfileImage />
      </InnerImg>
      <InnerDesc>
        <TextHeading>Sandra Dyrka</TextHeading>
        <Paragraph>
          Kompozycje w szkle to nie tylko sposób na zarobek, ale również moja
          pasja i mój wkład w sztukę. Na każdy kolejny szukam osobnej inspiracji
          i przez każdy chcę przekazać inną bajkę.
        </Paragraph>
        <ContactFooter />
      </InnerDesc>
    </Wrapper>
  </>
)

const Wrapper = styled.header`
  padding: 4rem 3rem 0.5rem;
  margin-top: 1rem;
  min-height: 44rem;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.media.above.s} {
    margin-top: calc(8vw - 2.8rem);
  }

  ${({ theme }) => theme.media.above.m} {
    min-height: 25rem;
    padding: 3rem 5rem 0.5rem;
    flex-direction: row;
    align-items: flex-start;
  }
  ${({ theme }) => theme.media.above.l} {
    margin-top: 5rem;
  }
`

const InnerImg = styled.div`
  width: 12rem;
  height: 12rem;

  ${({ theme }) => theme.media.above.m} {
    width: 16.5rem;
    height: 16.5rem;
    /* margin: 0 auto; */
    /* box-sizing: content-box; */
    /* padding-right: 2rem; */
  }
`

const InnerDesc = styled.div`
  min-height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.media.above.m} {
    min-height: 0;
    height: 21.5rem;
    width: 70%;
  }
  ${({ theme }) => theme.media.above.l} {
    width: 74%;
  }
`

export default MainHeader
