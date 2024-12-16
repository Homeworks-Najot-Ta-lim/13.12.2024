import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import { Routes, useNavigate, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import { addPost, deletePost, editPost } from "./store/postsSlice";

function App() {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector(state => state.posts.posts)
  console.log(posts)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const date = format(new Date(), "MMMM dd, yyyy pp");
    dispatch(addPost({
      id,
      title: postTitle,
      datetime: date,
      body: postBody
    }))
    navigate("/")
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id))
    navigate("/")
  };

  const handleEditPost = (id)=>{
      dispatch(editPost(id))
  }

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} handleEditPost={handleEditPost} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
