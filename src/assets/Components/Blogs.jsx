import { useEffect } from "react";
import { useState } from "react";
import profile from '../images/profile.png'
import Blog from "./Blog";
const Blogs = ({spentTimer}) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className="md:basis-2/3">
           {
            post.map(post => (
                <Blog key={post.id} blog={post} spentTimer={spentTimer}></Blog>
            ))
           }
        </div>
    );
};

export default Blogs;