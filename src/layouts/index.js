import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Headroom>
  <Navbar></Navbar>
</Headroom>
        {/*
    <Header />
    */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
"LAYOUT GENERAL"

    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
