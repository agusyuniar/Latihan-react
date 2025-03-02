import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://cbl.co.id/themes/default/cms/assets/v3/images/composition/anggur.png',
    altText: 'Slide 1',
    caption: 'Anggur'
  },
  {
    src: 'http://pluspng.com/img-png/apple-png-apple-png-2040.png',
    altText: 'Slide 2',
    caption: 'Apel'
  },
  {
    src: 'http://pluspng.com/img-png/mango-hd-png-mango-png-png-image-800.png',
    altText: 'Slide 3',
    caption: 'Mangga'
  },
  {
    src: 'data:image/jpeg;base64,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',
    altText: 'Slide 4',
    caption: 'Pisang'
  }
];

const Caro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src} 
        >
        <center>
        <img src={item.src} alt={item.altText} height='250'/>
        <CarouselCaption captionText={item.caption} style={{color: 'black'}}/>
        </center>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Caro;


// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';


// const Caro = (props) => {
//     console.log(props.isi)
//     return (
//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        
//         <div class="carousel-inner">
//         {props.isi}
//         </div>  
//         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="sr-only">Previous</span>
//         </a>
//         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="sr-only">Next</span>
//         </a>
//         </div>

//       );
// }

// export default Caro;

