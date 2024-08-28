import React, { Suspense } from "react";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getLoginContent } from "../../services/cmsServices/getLoginContent";

const Login = () => {
  const { contentData } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={contentData}>
        {(loadedContent) => <LoginContainer data={loadedContent} />}
      </Await>
    </Suspense>
  );
};

export default Login;

async function loadContents() {
  const response = await getLoginContent();
  return response;
}

export function loader() {
  return defer({
    contentData: loadContents(),
  });
}
