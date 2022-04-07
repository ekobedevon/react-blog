import './PageContent.css'
import ReactMarkdown from 'react-markdown'

import profile from '../../Img/ProfilePic.jpg'
import twitter from '../../Img/twitter.svg'
import linkedIn from '../../Img/linkedin.svg'
import github from '../../Img/github.svg'




const PageContent = () =>{


    return(
       <div className="">
            <div className="head-sub">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<span> Uploaded: Apr. 10th, 2022</span></h3>
           </div>
            <div className="container">
                <div className="panel-left">
                    <h4>Author</h4>
                    <div className="img-wrapper">
                        <img src={profile}  alt="profile picture" className="profile-pic" />
                    </div>
                    <h3>Kobe Edmond</h3>
                    <div className="social-media">

                        <a href='https://twitter.com/IAmSortaNormal'>
                            <img src={twitter} alt="link to twitter" />
                        </a>
                        <a href='https://www.linkedin.com/in/kobe-edmond/'>
                        <img src={linkedIn} alt="link to linked in" />
                        </a>
                        <a href='add link'>
                        <img src={github} alt="https://github.com/ekobedevon" />
                        </a>
                    </div>
                </div>
                <div className="panel-center">
                    <ReactMarkdown>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</ReactMarkdown>
                </div>
                <div className="panel-right">
                </div>
            </div>
       </div>
    )

}

export default PageContent