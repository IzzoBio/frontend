import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PostCard from "../../post/PostCard";
import { useEffect } from "react";
import CurrentUserInfo from "../../../utils/token";

function Admin() {
  const nav = useNavigate();
  useEffect(() => {
    if (CurrentUserInfo().role != "ADMIN") {
      nav("/home");
    } else if (CurrentUserInfo().role != "USER") {
      nav("/");
    }
  }, []);

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
  );
}

export default Admin;
