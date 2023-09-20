import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.statusText === 'Not Found' && <div>
                    <h3>Page not found</h3>
                    <p>please go back</p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;