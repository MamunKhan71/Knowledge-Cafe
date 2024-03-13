import { useEffect } from "react";
import { useState } from "react";
import profile from '../images/profile.png'
const Blogs = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Blogs;