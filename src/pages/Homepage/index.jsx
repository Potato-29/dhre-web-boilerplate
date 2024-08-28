import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";
import { getHomepageContent } from "../../services/cmsServices/getHomepageContent";
import ErrorBoundary from "../../components/error/ErrorBoundary";

const Homepage = () => {
  const { contentData } = useLoaderData();
  return (
    <ErrorBoundary>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={contentData}>
          {(loadedContent) => <HomepageContainer data={loadedContent} />}
        </Await>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Homepage;

async function loadContents() {
  const response = await getHomepageContent();
  return response;
}

export function loader() {
  return defer({
    contentData: loadContents(),
  });
}
