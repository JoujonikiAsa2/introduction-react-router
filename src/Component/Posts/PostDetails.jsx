import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './posts.css'

const PostDetails = () => {
    const post = useLoaderData()
    const {postId} = useParams()
    console.log(postId)
    const {id,title, body} = post
    const navigate = useNavigate()
    const postStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        width: '300px',
        height: '200px',
        margin: '10px',
        padding:'10px'
    }
    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div style={postStyle} className="">
            <h1>{id}</h1>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleBackButton}>Go back</button>
        </div>
    );
};

export default PostDetails;