import './BlogHeader.css'

import background from '../../Img/BlogheaderTest.jpg'

const BlogHeader = () => {
  return (
    <div className='BlogHeader'>
        <img src={background} alt="" className="header-background" />
        <h1 className='header-text'>Blog Title</h1>
    </div>
  )
}

export default BlogHeader;
