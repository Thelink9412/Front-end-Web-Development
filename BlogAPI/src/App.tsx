import { useEffect, useState } from 'react'
import api from './api/posts'
import { isAxiosError } from 'axios';
import type { PostType } from './lib/types';
import NavBar from './components/NavBar';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import { PostsContainer } from './components/PostsContainer';

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const results = await api.get('/posts');
        console.log(results.data)
        setPosts(results.data)        
      } catch (err){
        if(isAxiosError(err)){
          console.log(err.response?.data);
          console.log(err.response?.status);
          console.log(err.response?.headers);
        }
      }
    } 

    fetchPosts();
  }, [])

  return (
    <>
      <header className='title-header'>
        React Blog
      </header>
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <div className='main-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PostsContainer posts={posts} searchInput={searchInput}/>}/>
            {/* <Route path='/post/:id' element={<Post />}></Route> */}
          </Routes>  
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
