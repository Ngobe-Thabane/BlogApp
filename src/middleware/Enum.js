
export const USERS = [
  {id:0, username:'Admin', password:'admin'}, 
  {id:1, username:'tman', password:'tman'}
]

export const POSTS = [
  { postId:0, 
    userID: 0, 
    title: 'How I created my first Blog', 
    datePosted: new Date().toDateString(), 
    content: `To create my first blog using React, I started by setting up a new React project using Create React App. After initializing the project, I structured the blog by creating functional components like Header, PostList, and Post to display individual blog posts. I used React's useState and useEffect hooks to manage the state and fetch data dynamically from an API. Each blog post was rendered with JSX, and I styled the components using CSS to ensure the layout was clean and responsive. Finally, I added routing with react-router-dom to navigate between different pages like the homepage and individual post pages. This allowed me to build a simple, interactive blog with React.`
  }]

export const MODULES = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['code-block'],
    ['link', 'image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }] 
  ]
}