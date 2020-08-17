import styled from "styled-components"

const TextHeading = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: #525252;
  margin: 0;
  text-align: center;

  ${({ theme }) => theme.media.above.m} {
    text-align: left;
  }
`
export default TextHeading
