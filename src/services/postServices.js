import { requestCreator } from "../helper/requestCreator";

export const getPosts = async () => {
  return requestCreator({ method: "get", url: "/posts" });
};
