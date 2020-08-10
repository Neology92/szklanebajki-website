import styled from "styled-components"

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.5rem;
    text-align: justify;
  }
`

export default Paragraph
