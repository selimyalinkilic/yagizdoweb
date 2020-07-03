import React from 'react';
import Post from './Post/Post';
import { Row } from 'react-bootstrap';
import './Blog.css';

const postsArray = [
  { id: "1", img : "https://miro.medium.com/max/2000/0*4sNw97BY-dG_-axL.", title : "Sıfırdan bir Web Sitesi Tasarlama Adımları", text: "Bir web sitesi tasarlamak için her şeyden önce kafamızda yol haritasını belirle...", url: "https://medium.com/türkiye/itunes-kullanarak-iphone-ipad-ipod-restore-etmek-b61a34da5828"},
  { id: "2", img : "https://miro.medium.com/max/2000/0*4sNw97BY-dG_-axL.", title : "Pişman Olmak İstemiyorsan Erteleme!", text: "Ertelemek günümüz zamanının en kötü alışkanlığı. Ben bile şuan bu yazıyı gece...", url: "https://medium.com/türkiye/itunes-kullanarak-iphone-ipad-ipod-restore-etmek-b61a34da5828"},
  { id: "3", img : "https://miro.medium.com/max/2000/0*4sNw97BY-dG_-axL.", title : "iTunes Kullanarak iPhone / iPad / iPod Restore Etmek", text: "Telefonumuzu restore etmenin yani fabrika ayarlarına döndürmenin 2 yolu vardır.", url: "https://medium.com/türkiye/itunes-kullanarak-iphone-ipad-ipod-restore-etmek-b61a34da5828"}
]


const Blog = () => {
  return (
    <div className="blogSide" id="blog">
      <h2 className="sectionTitle">Blog</h2>
      <Row>
      {
        postsArray.map((post) =>
          <Post 
            key={post.id}
            img={post.img}
            title={post.title}
            text={post.text}
            url={post.url}
          />  
        ) 
      }
      </Row>
      <a 
        href="https://medium.com/@dokumaciyagiz" 
        rel="noopener noreferrer" 
        target="_blank" 
        className="showAllBtn"
      >
        Tümünü Gör
      </a>
    </div>
  )
}

export default Blog;