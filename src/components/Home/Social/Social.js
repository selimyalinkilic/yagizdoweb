import React from 'react';

import './Social.css';

const Social = () => {
  return (
    <div className="ySocial">
      <a
        href="https://github.com/yagizdo"
        rel="noopener noreferrer"
        target="_blank"
        className="socialLink"
      >
        <img
          src="/img/icon/github-icon.svg"
          className="socialIcon"
          alt="yagogithub"
        >
        </img>
      </a>
      <a
        href="https://www.instagram.com/yagizdo/"
        rel="noopener noreferrer"
        target="_blank"
        className="socialLink"
      >
        <img
          src="/img/icon/instagram-icon.svg"
          className="socialIcon"
          alt="yagoinstagram"
        >
        </img>
      </a>
      <a
        href="https://twitter.com/Yagizdoo"
        rel="noopener noreferrer"
        target="_blank"
        className="socialLink"
      >
        <img
          src="/img/icon/twitter-icon.svg"
          className="socialIcon"
          alt="yagotwitter"
        >
        </img>
      </a>
      <a
        href="https://www.linkedin.com/in/yagizdo/"
        rel="noopener noreferrer"
        target="_blank"
        className="socialLink"
      >
        <img
          src="/img/icon/linkedin-icon.svg"
          className="socialIcon"
          alt="yagolinkedin"
        >
        </img>
      </a>
    </div>
  )
}

export default Social;