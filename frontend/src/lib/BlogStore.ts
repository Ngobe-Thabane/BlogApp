import {create } from 'zustand';


export interface BlogData  {
  isLoggedIn : boolean;
  token : string|null;
  currentPostId:string | null,
  setCurrentPostId: (postId:string) =>void
  setToken: (token:string) =>void
  setLogin : (logIn:boolean) => void

}


const useBlogStore = create<BlogData>((set)=>({
  isLoggedIn:false,
  token: null,
  currentPostId:null,
  setLogin: (login:boolean)=> set(()=>({isLoggedIn:login})),
  setToken: (token:string) => set(()=>({token:token})),
  setCurrentPostId: (postId:string) => set(()=>({currentPostId:postId}))
}));
export default useBlogStore;