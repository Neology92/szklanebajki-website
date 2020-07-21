import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./header.scss"

const Header = () => (
  <header className="container c-header">
    <div className="row">
      <div className="col col-4">
        <div className="c-header__profile">
          <div className="c-header__profile-inner">
            <Image />
          </div>
        </div>
      </div>
      <div className="col col-8">a</div>
    </div>
  </header>
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
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

export default Header
