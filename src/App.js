import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PhoneList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: "Javascript", body: "Description" },
        { id: 2, title: "Javascript 2", body: "Description 2" },
        { id: 3, title: "Javascript 3", body: "Description 3" },
        { id: 4, title: "Javascript 4", body: "Description 4" },
    ]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            {posts.length != 0
                ? <PhoneList remove={removePost} posts={posts} title="Посты" />
                : <h1>Посты не найдены</h1>
            }
            
        </div>
    );
}

export default App;