import React from 'react';

import { motion } from 'framer-motion';
import './Social.css';

const socialArray = [
  {id:"1", url: "https://github.com/yagizdo", img: "/img/icon/github-icon.svg", altText: "yagogithub"},
  {id:"2", url: "https://www.instagram.com/yagizdo/", img: "/img/icon/instagram-icon.svg", altText: "yagoinstagram"},
  {id:"3", url: "https://twitter.com/Yagizdoo", img: "/img/icon/twitter-icon.svg", altText: "yagotwitter"},
  {id:"4", url: "https://www.linkedin.com/in/yagizdo/", img: "/img/icon/linkedin-icon.svg", altText: "yagolinkedin"}
]

const Social = () => {
  return (
    <div className="ySocial">
      {
        socialArray.map(data => (
          <motion.a
            key={data.id}
            href={data.url}
            rel="noopener noreferrer"
            target="_blank"
            className="socialLink"
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={data.img}
              className="socialIcon"
              alt={data.altText}
            >
            </img>
          </motion.a>    
        ))
      }
    </div>
  )
}

export default Social;