import { useNavigate, useParams } from "react-router-dom";
import useFetch  from './useFetch';

const BlogDetails = () => {

    const { id } = useParams(); // get id from the URL
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id); 

    const navigate = useNavigate();

    const handleClick = ()=>{
        // delete logic
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;