import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs'
import Bookmarks from './assets/Components/Bookmarks'
import Header from './assets/Components/Header'
function App() {
  const [spentTime, setSpentTime] = useState(0);
  const [post, setPost] = useState([])
  const spentTimer = time => {
    const newTime = parseInt(spentTime + time.reading_time);
    setSpentTime(newTime);
    postSetter(time);
  }
  const postSetter = (newPost)=>{
    const newPosts = [...post, newPost];
    setPost(newPosts);
  }
  return (
    <div >
      <Header></Header>
      <div className='md:flex justify-between container mx-auto gap-6'>
        <Blogs spentTimer={spentTimer}></Blogs>
        <Bookmarks spentTime={spentTime} post={post}></Bookmarks>
      </div>
    </div>
  )
}

export default App
