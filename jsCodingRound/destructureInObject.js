const apiResponse = {
    data: { user: { age: "Alice" } },
  };
  
  const { data } = apiResponse || {}; //To extract the data object from apiResponse, directly destructure it:
  const {user} = apiResponse["data"] || {};
  const {age} = apiResponse["data"]["user"] ||{}
  console.log("data",data); // Output: undefined
  console.log("user is",user)
  console.log("age is ",age)