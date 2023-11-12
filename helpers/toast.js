export const toastSuccess = (msg) => {
    return {
      position: "top",
      title: msg,
      status: "success",
      duration: 3000,
      isClosable: true,
    };
  };
  
  export const toastError = (msg) => {
    return {
      position: "top",
      title: msg,
      status: "error",
      duration: 3000,
      isClosable: true,
    };
  };