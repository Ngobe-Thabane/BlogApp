
import '../styles/App.css'
import LoginPage from '../pages/LoginPage.jsx'
import RegistractionPage from '../pages/RegistractionPage.jsx'
import Navigation from './Navigation.jsx'
import { Routes, Route } from 'react-router'
import Homepage from '../pages/Homepage.jsx'
import UserNavigation from './UserNavigation.jsx'
import DashBoard from '../pages/DashBoard.jsx'
import PostPage from '../pages/PostPage.jsx'

function App() {  return (
  <>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Homepage/>} />
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/register' element={<RegistractionPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Route>

      <Route path='/projectBlogs' element={<UserNavigation/>}>
        <Route path='/projectBlogs'  element={<DashBoard/>} />
        <Route path='/projectBlogs/blogs' element={<DashBoard/>} />
        <Route path='/projectBlogs/post' element={<PostPage/>} />
      </Route>

    </Routes>
  </>
  )
}

export default App;
