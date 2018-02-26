import React from 'react'
import Link from 'gatsby-link'

const Navbar = ()=> (
<nav>
    <ul>
        <li> <Link to="/portfolio/">Portfolio</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/blogList/">Blog</Link></li>
        <li><Link to="/contacto/">Contacto</Link></li>
    </ul>
</nav>
)

export default Navbar