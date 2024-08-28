import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ErrorBoundary from "../error/ErrorBoundary";
import NavbarComponent from "./NavbarComponent";
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
