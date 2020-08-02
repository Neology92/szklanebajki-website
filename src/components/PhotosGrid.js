import styled from "styled-components"
import React from "react"
import { Photo } from "../elements"

const PhotosGrid = () => {
  return (
    <Grid>
      <Photo />
      <Photo />
      <Photo />
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
`

export default PhotosGrid
