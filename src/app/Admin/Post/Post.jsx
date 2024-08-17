import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PostCard from "../../post/PostCard";
import { useEffect, useState } from "react";
import CurrentUserInfo from "../../../utils/token";
import SidebarAdmin from "../SidebarAdmin";
import * as actualitiesApi from '../../../api/actualities'

function Admin() {
  const [feeds, setFeeds] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const role = CurrentUserInfo().role;
    if (role != "ADMIN") {
      nav("/home");
    }
  }, []);

  actualitiesApi.getAllActualities()
    .then((res) => setFeeds(res))
    .catch((err) => console.log(err));

  return (
    <div className="flex min-h-screen bg-[#f3f3f3]">
      <SidebarAdmin />
      <main className="flex-1">
        <Header title={"Actualite"}/>
        <div className="flex justify-center items-center">
          <PostCard feeds={feeds} />
        </div>
      </main>
    </div>
  );
}

export default Admin;
