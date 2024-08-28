import React, { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getSignupContent } from "../../services/cmsServices/getSignupContent";
import SignupContainer from "../../containers/SignupContainer/SignupContainer";

const Login = () => {
  const { contentData } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={contentData}>
        {(loadedContent) => <SignupContainer data={loadedContent} />}
      </Await>
    </Suspense>
  );
};

export default Login;

async function loadContents() {
  const response = await getSignupContent();
  return response;
}

export function loader() {
  return defer({
    contentData: loadContents(),
  });
}
