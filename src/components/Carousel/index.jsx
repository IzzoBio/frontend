import Carousel from "./Carousel";

const slides = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg"
];

function CarouselApp() {

  return (
    <div className='flex justify-center items-center h-screen bg-black'>
     <div className='max-w-lg'>
        <Carousel autoSlide={true}>
           { slides.map((s) => (
            <img src={s}/>
           ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselApp
