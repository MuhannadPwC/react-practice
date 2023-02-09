import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mohannad");
  const [isPending, setIsPending] = useState(false);

  const createBlog = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log("Blog added");
      setIsPending(false);
    })
  };

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={createBlog}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mohannad">Mohannad</option>
          <option value="Monique">Monique</option>
          <option value="Sheniqua">Sheniqua</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
