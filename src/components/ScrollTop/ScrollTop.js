import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons';

const scrollBtnStyle = {
  color: "#C202F2",
  position: "fixed",
  bottom: "70px",
  right: "20px",
  cursor: "pointer",
  transition: "all ease-in 0.3s",
  opacity: "0",
  visibility: "hidden"
}
 
class ScrollTop extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handlerScroll);
  }
  handlerScroll(){
    if(window.pageYOffset > 200){
      document.getElementById("scrollTop").style.opacity = "1";
      document.getElementById("scrollTop").style.visibility = "visible";
    }else{
      document.getElementById("scrollTop").style.opacity = "0";
      document.getElementById("scrollTop").style.visibility = "hidden";
    }
  }
  scrollToTop(){
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faCaretSquareUp}  size="3x" style={scrollBtnStyle} id="scrollTop" onClick={this.scrollToTop} />
      </div>
    )
  }
}

export default ScrollTop;