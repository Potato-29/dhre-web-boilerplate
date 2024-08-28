import React, { Suspense } from "react";
import ErrorBoundary from "../../components/error/ErrorBoundary";
import { Await, defer, useLoaderData } from "react-router-dom";
import NavbarComponent from "../../components/Navbar";
import { getNavbarContent } from "../../services/cmsServices/getNavbarContent";

const Navbar = () => {
  const { contentData } = useLoaderData();
  return (
    <ErrorBoundary>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={contentData}>
          {(loadedContent) => <NavbarComponent data={loadedContent} />}
        </Await>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Navbar;

async function loadContents() {
  const response = await getNavbarContent();
  return response;
}

export function loader() {
  return defer({
    contentData: loadContents(),
  });
}
