import { Grid, Typography } from "@mui/material";

export default function Advantage() {
    const advantages = [
        {
            icon: <img src="./hygiène.png" className="w-[100px] h-[100px]"/>,
            title: 'Amélioration de l\'hygiène',
            description: 'Le nettoyage régulier des poubelles empêche l\'accumulation de bactéries, de germes, et de moisissures, contribuant ainsi à un environnement plus propre et plus sain.'
        },
        {
            icon: <img src="./odeur.png" className="w-[100px] h-[100px]"/>,
            title: 'Réduction des mauvaises odeurs',
            description: ' Les poubelles sales peuvent dégager des odeurs désagréables. Un service de nettoyage régulier élimine ces odeurs, améliorant ainsi le confort des résidents et des employés.'
        },
        {
            icon: <img src="./mosquito.png" className="w-[100px] h-[100px]"/>,
            title: 'Prévention des infestations',
            description: 'Les poubelles sales attirent souvent des nuisibles tels que les rats, les mouches, et les cafards. Un nettoyage régulier aide à prévenir ces infestations.'
        },
        {
            icon: <img src="./urbaine.png" className="w-[100px] h-[100px]"/>,
            title: 'Esthétique urbaine améliorée',
            description: 'Un service de ramassage des ordures bien organisé contribue à maintenir la propreté des rues et des espaces publics, améliorant ainsi l’esthétique et l’attrait d’une ville ou d’un quartier.'
        },
        {
            icon: <img src="./dechet.png" className="w-[100px] h-[100px]"/>,
            title: 'Gestion efficace des déchets',
            description: 'Les services de ramassage des ordures peuvent inclure des programmes de tri et de recyclage, aidant à réduire la quantité de déchets envoyés aux décharges et à encourager le recyclage.'
        },
        {
            icon: <img src="./shield.png" className="w-[100px] h-[100px]"/>,
            title: 'Sécurité publique',
            description: 'En enlevant régulièrement les déchets, le service contribue à réduire les risques d\'incendie et autres dangers associés à l\'accumulation de déchets inflammables ou toxiques.'
        }
    ]

    return (
        <div className="bg-[#f8f8f8]">
            <div>
                <Typography className="sm:text-lg text-center font-bold" sx={{ fontSize: '30px', fontWeight: 'bold', paddingTop: '50px' }}>Les avantages de gérer correctement vos déchets</Typography>
                <Typography className="italic sm:text-lg text-center text-[#5c5c5c] p-5">Les avantages de gérer correctement vos déchets</Typography>
            </div>
            <Grid container spacing={6} className="">
                {advantages.map((item, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index} className="flex justify-center items-center pb-10">
                        <div className='flex flex-col gap-2 justify-center items-center w-[350px]'>
                            {item.icon}
                            <Typography className='mbs-2' variant='h5'>
                                {item.title}
                            </Typography>
                            <Typography className='max-is-[364px] text-center'>{item.description}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}