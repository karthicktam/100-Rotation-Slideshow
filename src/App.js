import React, { useState, useEffect } from "react";
import "./styles.css";

function Slide(props) {
  const { imgUrl, active } = props;

  return (
    <div className={active === true ? "slide visible" : "slide"}>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default function App() {
  const imgArr = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let slide = currentSlide + 1;

      if (slide >= imgArr.length) {
        slide = 0;
      }
      setCurrentSlide(slide);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slider">
      {imgArr.map((img, idx) => (
        <Slide
          imgUrl={img.imgURL}
          key={img.imgURL}
          active={idx === currentSlide}
        />
      ))}
    </div>
  );
}
