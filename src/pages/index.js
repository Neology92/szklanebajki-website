import React from "react"

import MainLayout from "../layouts/MainLayout"
import { SEO, PhotosGrid } from "../components"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <PhotosGrid />
  </MainLayout>
)

export default IndexPage
