import React, { useState } from 'react';
import { ScrollDiv, TextDiv } from './styles.css';

export const ScrollArrow: React.FC = () =>{

	const [hover, setHover] = useState(false);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
		<>
			<ScrollDiv
				onMouseOver={()=>setHover(true)}
				onMouseOut={()=>setHover(false)}
				onClick={scrollTop}>
				^

			</ScrollDiv>
			<TextDiv>
			    {hover ? "Back to top" : null}
				</TextDiv>
	  </>
  );
}

export default ScrollArrow;