import React from 'react'
//import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
//import Repo from '../components/static_queries/Repo'
//import Repo2 from './repo'



import GG from '../assets/images/GG.png'


class HomeIndex extends React.Component {
  render() {

      return (
          <Layout>
                <Helmet
                  title="JC Repositories"
                  meta={[
                      { name: 'description', content: 'JC Repositories' },
                      { name: 'keywords', content: 'jedi, portfolio, github' },
                  ]}
              >
              </Helmet>
              <Banner/>

                <div id="main">
                
                    <section id="one">
                       
                        <div className="inner">
                          
                            <p>Welcome to another Gatsby project! This project showcases Github Repositories fetched using the GITHUB API  </p>
                            <p><span className="image left"><img src={GG} alt="" /></span> </p>
                           
                           
                            <h3>Get Started</h3>

                            <p> This <a href="https://medium.com/@jedalvarezuybentillo/jc-repo-guide-c5b1d9a10a04">tutorial</a> will help you and run this command to get the repository </p>
                                <pre>
                                    <code>
                                    gatsby new [your-filename] https://github.com/Jedi26/jc-repo
                                </code>
                                </pre>

                                <ul className="actions">
                                    
                                    <li> <Link to="https://medium.com/@jedalvarezuybentillo/jc-repo-guide-c5b1d9a10a04" className="button"> READ TUTORIAL </Link> </li>
                             
                                </ul>
                            <br/> 
                            <br/>
                            <h3>How to Get GitHub Access Tokens</h3>
                            <p> Don't forget to read the whole <a href="/">tutorial</a> here to set your environment variables for your GitHub Access Tokens.</p>
                            <pre>
                                    <code>
                                       GITHUB_PERSONAL_ACCESS_TOKEN=<br/>
                                       GITHUB_LOGIN=
                                    </code>
                             </pre>          
                             <ul className="actions">
                                    
                                    <li> <Link to="/repo" className="button"> VIEW REPOSITORIES </Link> </li>
                                    <li> <Link to="/" className="button"> READ TUTORIAL </Link> </li>
                             
                                </ul>
                        </div>
                        
                        
                    </section>
                  
                
                    <section id="two">

                    {/* <Repo2/> */}
                      {/* <div classname="inner">
          
                        <div className="grid-wrapper">
                         <div classname="col-4"> 
                        
                        </div>
                      </div>
                     
                      </div> */}
                     
                    </section>

                </div>

    </Layout>
)
}
}


export default HomeIndex
