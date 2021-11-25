const REMOVE_BUTTON = 'cars/REMOVE_BUTTON';

const initialState = {
  button: false,
};

export const clickRemoveButton = () => (
  {
    type: REMOVE_BUTTON,
  }
);

const removeButton = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BUTTON:
      return {
        button: !state.button,
      };
    default:
      return state;
  }
};

export default removeButton;
