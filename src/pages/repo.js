import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'



import Repo from '../components/static_queries/Repo'
import Banner from '../components/Banner'

const Repo2 = (props) => (
<Layout>
<Helmet>
    <title>REPOSITORIES </title>
    <meta name="description" content="Work Page" />
</Helmet>
<Banner/>

<div id="main" className="alt">
            <section id="one">
             
      
                <div className="inner">
                <Repo/>    
                </div>
              </section>
</div>

</Layout>
)
export default Repo2
