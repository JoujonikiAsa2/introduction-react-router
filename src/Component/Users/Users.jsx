import { useLoaderData } from "react-router-dom";
import User from "./User";
import './users.css'

const Users = () => {
    ///state --> data
    //state -->Loader
    //useEffect
    //fetch

    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h2>Our User</h2>
            <div className="user">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;