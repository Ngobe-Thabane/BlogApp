
import '../styles/App.css'
import Navigation from './Navigation.jsx'
import { Routes, Route } from 'react-router'
import Homepage from '../pages/Homepage.jsx'
import UserNavigation from './UserNavigation.jsx'
import DashBoard from '../pages/DashBoard.jsx'
import PostPage from '../pages/CreatePostPage.jsx'
import FormPage from '../pages/AuthPage.jsx'
import { logIn, signIn } from '../middleware/Validate.js'
import Post from '../pages/Post.jsx'
import UserPosts from '../pages/Posts.jsx'

function App() {  return (
  <>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Homepage/>} />
        <Route path='/home' element={<Homepage/>}/>
        
        <Route path='/login' element={<FormPage navLink={'/register'} userMassage={"Don't have an account "} action={"Sign In"} authAction={"Login"} authFunction={logIn} />} />

        <Route path='/register' element={<FormPage navLink={'/login'} userMassage={"have an account "} action={"LogIn"} authAction={"Register"} authFunction={signIn} />} />
      </Route>

      <Route path='/projectBlogs' element={<UserNavigation/>}>
        <Route path='/projectBlogs'  element={<DashBoard/>} />
        <Route path='/projectBlogs/blogs' element={<DashBoard/>} />
        <Route path='/projectBlogs/post' element={<PostPage/>} />
        <Route path='/projectBlogs/postPage' element={<Post/>} />
        <Route path='/projectBlogs/myBlogs'  element={<UserPosts/>}/>
      </Route>

    </Routes>
  </>
  )
}

export default App;
