import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "../pages/Home";
import PostPage from "./CreatePost";
import NavBar from "./NavBar";
import { LogIn } from "./Login";


export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<PostPage/>} />
            <Route path="/login" element={<LogIn/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}