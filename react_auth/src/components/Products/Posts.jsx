import React, { useState, useEffect } from "react";

const Posts = () => {
  const [userText, setUserText] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("This will show when component mounts");
    const getAllPosts = async () => {
      try {
        const json = await (
          await fetch("http://localhost:8081/post/all", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          })
        ).json();
        console.log(json);
        setAllPosts(json.Results);
      } catch (err) {
        console.log(err);
      }
    };

    getAllPosts();
  }, [status]);

  const handleSubmit = async () => {
    try {
        setStatus("Loading")
      const json = await (
        await fetch("http://localhost:8081/post/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
          },
          body: JSON.stringify({
            text: userText,
          }),
        })
      ).json();
      if(json.Created){
        setStatus("Message Created")
      };
    } catch (err) {
      console.log(err);
    }
  };

  const displayAllPosts = () => {
    return allPosts.map((i) => (
      <div style={{ border: ".5em solid white" }} key={i._id}>
        <p>
          <b>{i.text}</b>
        </p>
      </div>
    ))
    .reverse();
  };

  return (
    <div>
      <h1>Posts</h1>
      <input onChange={(e) => setUserText(e.target.value)} />
      <button onClick={handleSubmit}>Create a Post</button>
        {status}
      <h2>All Posts</h2>

      <div>{displayAllPosts()}</div>
    </div>
  );
};

export default Posts;
