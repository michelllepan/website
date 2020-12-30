import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "blob.png" }) {
//         childImageSharp {
//           fixed(width: 400) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)

//   if (!data?.file?.childImageSharp?.fixed) {
//     return <div>Picture not found</div>
//   }

//   return <Img fixed={data.file.childImageSharp.fixed} />
// }

// export default Image

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "blob.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default Image
