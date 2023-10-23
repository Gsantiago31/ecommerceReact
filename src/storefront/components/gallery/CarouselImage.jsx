import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/Design.png?alt=media&token=e8c2758e-6d1d-4e45-ad9c-a30d737922cb',
    altText: "mantenimiento_computadora",
    caption: "Mantenimiento",
    subtitle: "Computadoras, teclados, grabadores",
    key: 1,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/Excelentes%20materiales.png?alt=media&token=ae8e9e58-db5b-4a48-8a91-0c6652a991ac',
    altText: "reparacion_de computadoras",
    caption: "Reparación de computadoras",
    subtitle: "Reparación y mantenimiento",
    key: 2,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/viv-twins.appspot.com/o/Jirafa%20amigurumi%20best%20product.png?alt=media&token=5ba5799f-03a8-4ca6-be67-128712b84126',
    altText: "camaras_de_vigilancia",
    caption: "Cámaras de vigilancia",
    subtitle: "Instalación y mantenimiento de cámaras de vigilancia",
    key: 3,
  },
];

export const CarouselImage = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img className="slideImage" src={item.src} alt={item.altText} 
        style={{
          maxHeight: "70%",
          maxWidth: "70%",
          margin: "auto",
          display: "block",
        }}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      fade={true}
      {...args}
      style={{width: '100%', height: 'auto'}}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
