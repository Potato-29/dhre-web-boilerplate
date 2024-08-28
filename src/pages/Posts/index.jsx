import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getPosts } from "../../services/postServices";
import PostsContainer from "../../containers/PostsContainer/PostsContainer";

const Posts = () => {
  const { contentData } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={contentData}>
        {(loadedContent) => <PostsContainer data={loadedContent} />}
      </Await>
    </Suspense>
  );
};

export default Posts;

async function loadContents() {
  const response = await getPosts();
  return response.data;
}

export function loader() {
  return defer({
    contentData: loadContents(),
  });
}
