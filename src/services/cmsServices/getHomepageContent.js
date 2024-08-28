export const getHomepageContent = async () => {
  try {
    // use CMS API call to get page content
    // return axios({
    //   method: "get",
    //   url: "",
    // });

    // returning temporary data
    let data = {
      header: "Homepage",
      welcomeMsg: "Welcome to portal!",
    };
    return data;
  } catch (error) {
    return error;
  }
};
