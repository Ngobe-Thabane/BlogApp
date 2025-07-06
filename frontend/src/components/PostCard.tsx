import { Post } from "../lib/interfaces";


export default function PostCard({post}:{post:Post}){
  return (
    <div className="p-2 flex flex-col gap-4 ">
      <div className="flex items-center gap-4">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span>T</span>
          </div>
        </div>
        <p>Thabane Ngobe</p>
        <p className="text-gray-500">{`${new Date(post.created_at).toDateString()}`}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
      </div>
    </div>
  )
}