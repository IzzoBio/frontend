import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostCard from "../post/PostCard";
import { getAllActualities } from "../../api/actualities";

function Home() {
    const [ feeds , setFeeds ] = useState([]);

    useEffect(() => {
        getAllActualities().then(
            response => { setFeeds(response)
    }).catch(error => console.error(error))},[])

    return (
        <div className="flex min-h-screen bg-[#f3f3f3]">
            <Sidebar/>
            <main className="flex-1 p-8">
                <Header  title={"Actualités"}/>
                <div className="flex justify-center items-center">
                    <PostCard feeds={feeds}/>
                </div>
            </main>
        </div>
    )
}

export default Home;