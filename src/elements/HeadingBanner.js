import styled from "styled-components"

const HeadingBanner = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.grey};
  box-shadow: ${({ theme }) => theme.shadow.strong};

  display: flex;
  justify-content: center;
  align-items: center;
`

export default HeadingBanner
