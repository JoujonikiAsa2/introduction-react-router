import { useLoaderData } from "react-router-dom";
import './users.css'
import { Link } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name,email,phone,id,website } = user;
    const userStyle = {
        width: '300px',
        border: '2px solid yellow',
        padding: '10px',
        borderRadius:'20px',
        margin:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>{website}</Link>
        </div>
    );
};

export default UserDetails;