import { Link, Routes, Route } from "react-router-dom";

const News = () => {
  const data = [
    { id: 1, name: "Post1" },
    { id: 2, name: "Post2" },
    { id: 3, name: "Post3" },
    { id: 4, name: "Post4" },
    { id: 5, name: "Post5" },
  ];
  
  return (
    <div>
      <Routes>
        {data.map((i) => (
          <Route
            key={i.id}
            path={`post/${i.id}`}
            element={<h1>{i.name}</h1>}
          />;
        ))}
      </Routes>

      {data.map((i, idx) => (
        <div key={idx} style={{ margin: "1em" }}>
          <Link to={`post/${i.id}`}>{i.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default News;
