import { useState } from "react";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {title: "Napkin Shortage", body: "lorem ipsum...", author: "Sarah", id: 1 },
    {title: "Banana Pudding Crisis", body: "lorem ipsum...", author: "Mohannad & Sarah", id: 2 },
    {title: "Staring at Screens", body: "No words, no answers, head empty", author: "Mohannad", id: 3 },
  ])

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
