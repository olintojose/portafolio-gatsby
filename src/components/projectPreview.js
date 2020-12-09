import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ProjectPreview = ({ project }) => {
  const StyledImg = styled(Image)`
    height: 200px;
    width: 200px;
    display: block;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 50%;
    
  `

  const DivText = styled.div`
    background-image: linear-gradient
      (to top, rgba(34, 49, 63, 0.75), rgba(34, 49, 63, 0.75));
    color: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    font-family: 'Roboto', sans-serif;


    h2 {
      padding: 10px 10px 15px 10px;
      font-size: 2rem;
      margin: 0%;
     
      text-align: center;
    }
    p {
      font-size: 2rem;
    }
  `
  const ButtonLink = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
 
  width: 100%;
  
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

`;
  const { title, image, description, url, github } = project
  //  console.log(image)
  return (
    <DivText>
      <div>
        <StyledImg fixed={image.childImageSharp.fixed} />
      </div>
      <div>
        <h2
          css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 2rem;
           
          `}
        >
          {title}
        </h2>
        <p>{description}</p>
        <div>
          <ButtonLink to={url}>Ver Pagina</ButtonLink>
          <ButtonLink to={github}>Ver Codigo en GitHub</ButtonLink>
        </div>
      </div>
    </DivText>
  )
}

export default ProjectPreview
