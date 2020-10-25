import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "teto-logo" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Img
      style={{
        position: "relative",
        top: "0px",
        width: "139px",
        height: "80px",
      }}
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

export default Logo
