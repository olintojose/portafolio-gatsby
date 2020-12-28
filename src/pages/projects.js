import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Project from "../components/Project"
// ...GatsbyImageSharpFluid



const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <Layout>
    <section className="projects-page">
    <Projects projects={projects} title="All projects"  />
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        github
        id
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
