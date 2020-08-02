import styled from "styled-components"
import React from "react"
import { Photo } from "../elements"
import { graphql, useStaticQuery } from "gatsby"

const PhotosGrid = () => {
  const {
    gcms: { glasses },
  } = useStaticQuery(glassesQuery)

  return (
    <Grid>
      {console.log(glasses)}
      {glasses.map(glass => (
        <Photo
          title={glass.title}
          story={glass.story}
          imgUrl={glass.photo.url}
          key={glass.id}
        />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 6rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const glassesQuery = graphql`
  {
    gcms {
      glasses {
        id
        title
        story
        photo {
          url
        }
      }
    }
  }
`

export default PhotosGrid
