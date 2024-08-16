import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { Typography } from "@mui/material";

const data = [
    {
        image: '/instru.jpg',
        title: 'Champion des Astuces Pro',
        description: 'Des actualités enrichies de conseils quotidiens pour le bien-être de l’environnement et de la vie, incluant des remèdes naturels et des astuces adaptées aux variations climatiques pour une meilleure harmonie avec notre planète.'
    },
    {
        image: '/calnedar.jpg',
        title: 'Planificateur des Ramassages Efficaces',
        description: 'Un outil intelligent optimisant la collecte des déchets en ajustant les itinéraires des camions selon les besoins communautaires et les contraintes environnementales, réduisant les émissions de carbone et améliorant la propreté des rues.'
    },
    {
        image: '/appel.jpg',
        title: 'Ramassage sur Demande',
        description: 'Un service flexible permettant aux citoyens de demander la collecte de déchets à la demande, incluant encombrants, matériaux recyclables et déchets verts, pour une planification personnalisée et une gestion plus efficace des ressources.'
    },
    {
        image: '/poubelle.jpg',
        title: 'Renouvellement des Conteneurs de Déchets',
        description: 'Un programme modernisant les conteneurs de déchets avec des matériaux durables et des designs ergonomiques pour faciliter le tri sélectif et encourager la participation des citoyens, construisant ainsi un avenir plus propre et respectueux de l"environnement.'
    },
    {
        image: '/money.jpg',
        title: 'Avantages à Obtenir en Collectif',
        description: 'En collaborant pour protéger l’environnement, nous bénéficions d’économies d’échelle, d’une sensibilisation accrue et d’une meilleure efficacité dans les solutions durables, renforçant ainsi notre capacité collective à préserver notre planète. '
    },

];

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
                            <div key={index} className='p-5 shadow-md w-[300px] h-auto mt-10'>
                                <div className="flex justify-center">
                                    <img src={item.image} className='w-full h-[200px] object-cover' />
                                </div>

                                <div className='p-3 bg-blue-600 flex flex-col justify-center h-full'>
                                    <p className='font-semibold text-[black] text-center mb-2'>{item.title}</p>
                                    <p className='font-medium text-[black] text-center'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Services;
