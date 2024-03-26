import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle]=useState("");
    const [body, setBody]=useState("");
    const [author, setAuthor]=useState("mario");
    const [isPending, setIsPending] = useState(false);
    
    const navigate = useNavigate();

    // TODO: Add it so that the latest blog is on top
    const handleSubmit = (e)=>{
        e.preventDefault(); // this prevents a default refresh
        const blog = { title, body, author };

        setIsPending(false);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "applications/json"},
            body: JSON.stringify(blog) // convert blog to json string
        }).then(()=>{
            setIsPending(false);
            setAuthor("");
            setBody("");
            setTitle("");
            navigate('/'); // this will send you back to the home page
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}/>
                
                <label>Blog body:</label>
                <textarea required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}} />

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Loading...</button> }
            </form>

        </div>
     );
}
 
export default Create;