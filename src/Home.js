import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My website is so cool!', body: 'see it :)', author: 'me', id:1},
        { title: 'I like Mario', body: '(luigi is nice too)', author: 'me', id:2},
        { title: 'Ok but yoshi', body: 'and his eggs', author: 'me', id:3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div> 
            ))}
        </div>
     );
}
 
export default Home;