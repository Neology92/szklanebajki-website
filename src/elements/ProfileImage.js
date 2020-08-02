import styled from "styled-components"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => {
  return (
    <Wrapper>
      <Inner>
        <Image critical />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
  position: relative;

  &::after {
    content: "";
    width: 12.2rem;
    height: 12.2rem;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: -1px;
    left: -2px;
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 1;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ProfileImage
