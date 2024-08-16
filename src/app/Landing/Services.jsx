import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { Typography } from "@mui/material";

const data = [
    {
        image: './1.jpg',
        title: 'Iphone 5G Phone',
    },
    {
        image: '/2.jpg',
        title: 'Samsung 5G Phone',
    },
    {
        image: '/3.jpg',
        title: 'Intel 5G Phone',
    },
    {
        image: '/4.jpg',
        title: 'Poco 5G Phone',
    },
    {
        image: '/5.jpg',
        title: 'Techno 5G Phone',
    }
]

function Services() {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
        <div className='bg-slate-600 pt-10'>
            <div className='w-full m-auto bg-[white]'>
                <div>
                    <Typography className="sm:text-lg text-center font-bold" sx={{ fontSize: '30px', fontWeight: 'bold', paddingTop: '50px' }}>Comment Notre Service Facilite une Gestion Responsable des Déchets</Typography>
                    <Typography className="italic sm:text-lg text-center text-[#5c5c5c] p-5">Notre service pour vous aider à gérer vos déchets correctement</Typography>
                </div>
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    {
                        data.map((item, index) => (
                            <div key={index} className='p-10 shadow-md w-[500px] mt-10'>
                                <div>
                                    <img src={item.image} className='w-[500px] h-[400px] object-contain block m-auto ' />
                                </div>

                                <div className='p-6 bg-blue-600'>
                                    <p className='font-semibold text-white text-center'>{item.title}</p>
                                </div>
                            </div>
                        )
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Services;
