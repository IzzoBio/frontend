import { Grid, Typography } from "@mui/material";

const partners = [
    "./onu.jpg",
    "./Logo-Axian.png",
    "./cua.jpg",
    "./telma.jpeg",
    "./stellarix.png",
]

function Partner() {
    return (
        <div className="bg-[#f8f8f8]">
            <div>
                <Typography className="italic sm:text-lg text-center font-bold" sx={{ fontSize: '30px', fontWeight: 'bold', paddingTop: '60px' }}>Nos partenaires</Typography>
            </div>
            <Grid container spacing={6} className="pt-10 flex justify-center items-center">
                {partners.map((item) => (
                    <Grid item xs={10} sm={6} lg={2} className="flex justify-center items-center pb-10">
                        <div className='flex flex-col gap-2 justify-center items-center w-[350px]'>
                            <img src={item}/>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Partner;