export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading...",
    message: "data is being loaded, please wait",
  },
  successs: {
    title: "success",
    message: "data successfully loaded ",
  },
  responseFailure: {
    title: "error",
    message:
      "An error occured while fethching the response from the server. Please try again ",
  },
  requestFailure: {
    title: "error",
    message:
      "An error occured while fethching the response from the server. Please try again ",
  },
  responseFailure: {
    title: "error",
    message: "An error occured while parsing the response data",
  },
  networkError: {
    title: "error",
    message:
      "unable to connect with the server. Please check internet connection again ",
  },
};

//api service call
//sample quest
//need service call:{url:'/', method:'POST/GET/DELETE/PUT', params:true/false, query:true/false}
export const SERVICE_URLS = {
  userSignup: { url: '/signup', method: 'POST' },
};

