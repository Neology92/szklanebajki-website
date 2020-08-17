import styled from "styled-components"
import React, { useState } from "react"
import { Photo } from "../elements"
import { graphql, useStaticQuery } from "gatsby"

import PhotoModal from "./PhotoModal"
import Portal from "./Portal"

const PhotosGrid = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [glassData, setGlassData] = useState({
    title: "",
    story: "",
    photo: { url: "" },
  })

  const openModalWith = glass => {
    setGlassData(glass)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const {
    gcms: { glasses },
  } = useStaticQuery(glassesQuery)

  return (
    <>
      <Portal>
        <PhotoModal
          isOpen={modalOpen}
          glassData={glassData}
          close={closeModal}
        />
      </Portal>
      <Grid>
        {glasses.map(glass => (
          <Photo
            title={glass.title}
            story={glass.story}
            imgUrl={glass.photo.url}
            key={glass.id}
            onClick={() => openModalWith(glass)}
          />
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  margin-top: 6rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  ${({ theme }) => theme.media.above.m} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
`

const glassesQuery = graphql`
  {
    gcms {
      glasses(orderBy: createdAt_DESC) {
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
