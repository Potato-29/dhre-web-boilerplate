export const getNavbarContent = async () => {
  try {
    // use CMS API call to get page content
    // return axios({
    //   method: "get",
    //   url: "",
    // });

    // returning temporary data
    let data = {
      links: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Posts",
          path: "/posts",
        },
        {
          title: "Profile",
          path: "/profile",
        },
      ],
      logo: "logo",
    };
    return data;
  } catch (error) {
    return error;
  }
};
