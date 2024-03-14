import PropTypes, { object } from 'prop-types';
const Blog = ({ blog, spentTimer }) => {
    const date = (new Date()).getDay();

    return (
        <div className='space-y-6 mb-10'>
            <img className='rounded-xl' src={blog.cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='h-16 w-16' src={blog.author_img} alt="" />
                    <div>
                        <p>{blog.author}</p>
                        <p>{`${blog.posted_date} ( ${Math.abs(date - (new Date(blog.posted_date)).getDate())} days ago )`}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <p>{blog.reading_time} min to read</p>
                    <svg onClick={()=>{spentTimer(blog)}} className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold pr-20'>{blog.title}</h1>
                <div className='flex gap-4'>
                    {
                        blog.hash_tags.map(hash => <span>{hash}</span>)
                    }
                </div>
                <div>
                    <a href='#' className='text-blue-600 font-bold underline'>Mark as Read</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;