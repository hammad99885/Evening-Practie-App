const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
    return {...state}
  }
};

// {
//     fName: "",
//     lName:"",
//     email:"",
//     password:"",
//     ghjfhfjhg
// }
