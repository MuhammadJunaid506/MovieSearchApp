const asyncLocalStorage = {
    setItem: async function (key, value) {
      await Promise.resolve()
      localStorage.setItem(key, value)
    },
    getItem: async function (key) {
      await Promise.resolve()
      return localStorage.getItem(key)
    }
  };
  
  export const getUser = async () => {
    const user = await asyncLocalStorage.getItem("user")
    return JSON.parse(user)
  };
  
  export const setUser = async (userData) => {
    await asyncLocalStorage.setItem("user", JSON.stringify(userData))
    return true
  };
  
  export const deleteUser = () => {
    localStorage.removeItem("user");
  };
  
  export const addToStorage = function (key, data) {
    data = JSON.stringify(data)
    localStorage.setItem(key, data)
  }
  
  export const getFromStorage = function (key) {
    return JSON.parse(localStorage.getItem(key))
  }
  
  export const removeFromStorage = function (key) {
    localStorage.removeItem(key)
  }
  
  export const LocalStorageKeys = Object.freeze({
    User: "user",
    Token: "token"
  })

  export const setTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };