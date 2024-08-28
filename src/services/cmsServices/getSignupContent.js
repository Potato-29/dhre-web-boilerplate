export const getSignupContent = async () => {
  try {
    // use CMS API call to get page content
    // return axios({
    //   method: "get",
    //   url: "",
    // });

    // returning temporary data
    let data = {
      header: "Sign Up",
      btnText: "Sign Up",
      subText: "Please enter your details",
    };
    return data;
  } catch (error) {
    return error;
  }
};
