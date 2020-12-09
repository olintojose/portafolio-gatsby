import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {


 const pageQuery = useStaticQuery(graphql`
    query IndexQuery {
      allStrapiProject {
        nodes {
            id
            github
            title
            url
            description
            image{
              
              childImageSharp {
                fixed(width: 200, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }

              
            
          }
        }
      }
    }
    
`)
console.log(pageQuery)

return pageQuery.allStrapiProject.nodes.map(project => ({
    title: project.title,
    id: project.id,
    description: project.description,
    image: project.image,
    url: project.url,
    github: project.github
}))
}

export default useProjects;
