const Bookmarks = ({ spentTime, post }) => {
    return (
        <div className="md:basis-1/3">
            <div className="bg-[#6047ec1a] rounded-xl py-4 w-full px-8 mb-8">
                <p className="text-[#6047EC] font-bold text-base">Spent time on read : {spentTime} {spentTime > 0 ? "mins" : "min"}</p>
            </div>
            <div className="rounded-xl p-6 bg-[#1111110d]">
                <h1 className="text-xl font-bold mb-4">Bookmarked Blogs: <span>{post.length}</span></h1>
                <div className="flex flex-col gap-4">
                    {
                        post.map(post => (
                            <div className="bg-white  rounded-lg p-4">
                                <h1 className="font-semibold">{post.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;