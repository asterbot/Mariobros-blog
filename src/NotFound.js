import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page doesn't exist uwu</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;
