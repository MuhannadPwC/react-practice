import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} />
    </div>
  );
};

export default Home;
