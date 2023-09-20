import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
const Post = ({post}) => {
    const {id, title,body} = post;
    const navigate =  useNavigate();
    const postStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        width: '300px',
        height: '200px',
        margin: '10px'
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Show details</button>
        </div>
    );
};

Post.propTypes ={
    post: PropTypes.object
}

export default Post;