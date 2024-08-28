export const getLoginContent = async () => {
  try {
    // use CMS API call to get page content
    // return axios({
    //   method: "get",
    //   url: "",
    // });

    // returning temporary data
    let data = {
      header: "Login",
      btnText: "login",
      subText: "Please enter your details",
    };
    return data;
  } catch (error) {
    return error;
  }
};
