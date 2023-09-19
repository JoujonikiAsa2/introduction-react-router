import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import './posts.css'

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="postContainerStyle">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;