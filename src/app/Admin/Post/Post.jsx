import Header from "../../../components/Header/Header"
import PostCard from "../../post/PostCard"
import SidebarAdmin from "../SidebarAdmin"


function Admin() {
    return (
        <div className="flex min-h-screen bg-[#f3f3f3]">
            <SidebarAdmin />
            <main className="flex-1 p-8">
                <Header title={"Actualités"}/>
                <div className="flex justify-center items-center">
                    <PostCard />
                </div>
            </main>
        </div>
    )
}

export default Admin