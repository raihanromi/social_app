import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({username}) {
  const  [ posts,setPosts] = useState([])
  const fetchPosts = async ()=>{
        const res = username? await axios.get("http://localhost:8800/api/posts/profile/"+username) : await axios.get("http://localhost:8800/api/posts/timeline/65a68cdc8d031434458a5ecd")
        setPosts(res.data)
        console.log(res.data)
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
