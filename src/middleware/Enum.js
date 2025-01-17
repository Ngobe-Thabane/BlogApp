
export const USERS = [
  {id:0, username:'Admin', password:'admin'}, 
  {id:1, username:'tman', password:'tman'}
]

export const POSTS = [
  { postId:0, 
    userID: 0, 
    title: 'My First Blog', 
    datePosted: new Date().toDateString(), 
    content: `<article>
        <header>
            <h2>Building My First Blog: A Journey of Learning and Growth</h2>
        </header>
        <img src="../public/rb_81763.png" alt="blog app">
        <section>
            <p>
                I’ve always been interested in web development, but I never really had the chance to apply my skills until recently.
                Building a personal blog was something I had been thinking about for a long time. It seemed like the perfect project
                to improve my skills and showcase my learning. So, I finally decided to take the plunge and create my very first blog
                from scratch.
            </p>
            <br/>
            <h3>How I Built the Blog</h3>
            <p>
                I started by learning the basics of HTML, CSS, and JavaScript. I wanted the design to be simple yet elegant, so I opted
                for a minimalistic approach using HTML for structure and CSS for styling. I also integrated some JavaScript to make the
                site more interactive, like adding a "back to top" button and smooth scrolling.
            </p>

            <p>
                As I progressed, I realized the need to make the site more dynamic, so I decided to incorporate a backend using Node.js
                and Express.js to serve the blog content. For storing the blog posts, I used MongoDB to create a simple database.
                One of the most challenging yet rewarding parts was learning how to deploy the blog on Heroku so that others could see
                my work live!
            </p>
            <br/>
            <h3>Lessons Learned</h3>
            <p>
                Building this blog was an incredible learning experience. Not only did I learn how to design and code a web application,
                but I also learned how to debug, deploy, and maintain it. The project made me more confident in my web development skills,
                and I am now looking forward to building more advanced applications.
            </p>

            <p>
                If you're interested in seeing the code or want to contribute, feel free to check out my GitHub repository where I’ve
                uploaded the entire project. I’d love to hear your feedback or suggestions!
            </p>
            <br/>
            <p>
                <a href="https://github.com/johndoe/my-first-blog" target="_blank">Check out my GitHub repository here</a>
            </p>
        </section>
        <br/>
        <footer>
            <p>Thank you for reading! Stay tuned for more updates.</p>
        </footer>
    </article>`
  }]

export const MODULES = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['code-block'],
      ['link', 'image'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }] 
    ]
}
}
