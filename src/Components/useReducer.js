export const initialState = {
  theme: false,
  font: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, theme: !state.theme };
    case "font":
      return { ...state, font: (state.font = action.payload) };
  }
};
