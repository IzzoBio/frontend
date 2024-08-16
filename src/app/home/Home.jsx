import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostCard from "../post/PostCard";

function Home() {
    return (
        <div className="flex min-h-screen bg-[#f3f3f3]">
            <Sidebar />
            <main className="flex-1 p-8">
                <Header />
                <div className="flex justify-center items-center">
                    <PostCard />
                </div>
            </main>
        </div>
    )
}

export default Home;