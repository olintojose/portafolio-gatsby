import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

import useProjects from "../hooks/use-projects"
import ProjectPreview from "../components/projectPreview"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const ImageText = styled.div`
  background-image: linear-gradient (
    to top,
    rgba(34, 49, 63, 0.75),
     rgba(34, 49, 63, 0.75)
    );
  color: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 0%;
  }
  p {
    font-size: 2rem;
  }
`

const ListProjects = styled.ul`
  max-width: 1200px;
  width: 85%;
  margin: 2rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`

const ImageWall = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "89.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  const projects = useProjects()
  return (

    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageText>
        <h1>Proyectos</h1>
          </ImageText>
      <ListProjects>
          {projects.map(project => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </ListProjects>
    </ImageBackground>
  )
}

export default ImageWall
