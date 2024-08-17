import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function Header() {
    return (
        <div className="min-w-[1000px] max-w-full h-screen flex items-center justify-center">
            <Box
                className="hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden bg-gradient-to-t from-champagne-500 via-green-500 to-terracota-500"
            >
                <svg
                    className="absolute inset-0 pointer-events-none"
                    viewBox="0 0 960 540"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMax slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Box
                        component="g"
                        className="opacity-20 bg-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="100"
                    >
                        <circle r="234" cx="196" cy="23" />
                        <circle r="234" cx="790" cy="491" />
                    </Box>
                </svg>
                <div className="z-10 relative w-full max-w-2xl">
                    <div className="text-7xl font-bold leading-none text-[white]">
                        <TypeAnimation
                            sequence={[
                                'Bienvenue! 👋🏻',
                                1000,
                                'Welcome! 👋🏻',
                                1000,
                                'Tongasoa! 👋🏻',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2rem', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="mt-24 ml-450 text-lg tracking-tight leading-6 text-[white]">
                        Sur notre solution sur les problèmes communautaire , environemental et humain
                        </div>
                </div>
            </Box>
        </div>
    )
}

export default Header;