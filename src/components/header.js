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
      <div className="col col-8">
        <div className="row">
          <div className="col col-6 c-header__name">Sandra</div>
          <div className="col col-6 c-header__name">Dyrka</div>
        </div>
        <div className="row">
          <div className="col col-12 c-header__desc">
            Kompozycje w szkle to nie tylko sposób na zarobek, ale również moja
            pasja i mój wkład w sztukę. Na każdy kolejny szukam osobnej
            inspiracji i przez każdy chcę przekazać inną bajkę.
          </div>
        </div>
      </div>
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
