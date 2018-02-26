import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
   <div style={{ margin: '3rem auto', maxWidth: 960 }}>
    <article>
          <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum, quam quis consequat aliquet, neque purus rutrum nisl, et blandit sem lectus nec nisi. Duis magna dolor, viverra vel nisl ac, suscipit cursus velit. Sed fermentum euismod malesuada. Donec feugiat enim quis tortor aliquet fringilla. Nam eget eleifend urna. Nulla pellentesque eros nec elit finibus tincidunt ornare non ante. Nunc pellentesque ante non lorem faucibus, at varius tortor pellentesque. Fusce egestas lectus non dignissim maximus. Integer diam odio, placerat ut elit a, imperdiet egestas quam. Curabitur dapibus nisl eu augue sollicitudin, a varius orci consequat.
<br/><br/>
Vestibulum porta malesuada felis, ut convallis nunc laoreet at. Sed eget interdum enim. Vestibulum vel tincidunt erat. Pellentesque sed dapibus ipsum. Pellentesque vel diam hendrerit nibh convallis gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet lorem nec ante mattis dapibus. Nullam pretium nisi a blandit luctus. Nunc sollicitudin sed lorem vel auctor.</p>
    </article>
  
    <Link to="/contacto/">Go to page 2</Link>
  </div>
)

export default IndexPage
