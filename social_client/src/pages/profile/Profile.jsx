import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios"
import { useState,useEffect} from "react";
import {useParams} from "react-router"

export default function Profile() {
  const [user,setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const params = useParams()
  console.log(params)

  const fetchUser = async ()=>{
    const res =  await axios.get(`http://localhost:8800/api/users?username=joe`)
    setUser(res.data)
    console.log(res.data)
}

useEffect(()=>{
  fetchUser()
},[])
 
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PF+`person/noCover.png`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF+`person/noAvatar.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{params.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params.username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
