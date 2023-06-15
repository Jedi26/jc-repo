import React from 'react'
import { graphql} from 'gatsby'


import { GoMarkGithub,  GoStar } from 'react-icons/go'
import { useStaticQuery } from "gatsby"
import { GoRepoForked } from 'react-icons/go'



export default function RepoPage() {


    const data = useStaticQuery(
        graphql`
          query GithubRepo {
            allGithubData {
              nodes {
                data {
                  user {
                    repositories {
                      nodes {
                        description
                        forkCount
                        id
                        name
                        homepageUrl
                        openGraphImageUrl
                        url
                        stargazers {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      )
    
      const repos = data.allGithubData.nodes[0].data.user.repositories.nodes
    
      console.log(repos)

      return (
      
        <div className="grid-wrapper">
        {
         repos.map(repo =>
   
           <div classname="grid-wrapper">
           <div className="col-4">
             <div classname="alt">
                   <div className="box pro" key={repo.id}>
                      
                   
                    
                        <h3 >{repo.name}</h3>
                        
                        <p>{repo.description}</p>
                        
                        <img src={repo.openGraphImageUrl} width="300"  alt="githubavatar"/>

                        <ul className="actions">
                                      <li><a href={repo.url} className="button special"> 
                                      <span>
                                      <GoStar />
                                      </span>{' '}{repo.forkCount}</a></li>
                                      <li><a href={repo.url} className="button"><span>
                                      <GoRepoForked />
                                      </span>{' '}{repo.stargazers.totalCount}</a></li>
                        </ul>
                        <ul className="actions fit small">
                                      <li><a href={repo.url} className="button special fit small"> <span><GoMarkGithub/></span>{' '}view Source in Github</a></li>
                          </ul>
                          <ul className="actions fit small">
                              <li><a href={repo.homepageUrl} className="button special fit "> View Live Demo</a></li>
                          </ul>
                       </div>
                </div>
                </div>
                </div>
                   
                 
                 ) }
               </div>
            
              

) 
}
  

