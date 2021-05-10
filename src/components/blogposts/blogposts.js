import React from "react";
import Posts from "./Posts";
import Postform from "./Postform";

export default function blogposts() {
  return (
    <div>
      <h1> Blog Posts </h1>
      <div style={{ margin: "10px" }}>
        <Postform />
      </div>
      <hr />
      <Posts />
    </div>
  );
}
