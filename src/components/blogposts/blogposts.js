import React from "react";
import Posts from "./Posts";
import Postform from "./Postform";

export default function blogposts() {
  return (
    <div style={{ margin: "15px", padding: "15px" }}>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}
