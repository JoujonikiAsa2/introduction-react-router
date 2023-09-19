import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title,body} = post;
    const postStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        width: '300px',
        height: '200px',
        margin: '10px'
    }
    return (
        <div style={postStyle}>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;