import { createContext, Reducer, useContext } from "react";

type GlobalState = { selectedUser: string };
type Actions = { type: 'SelectedUser.Set'; payload: string; };

export const initialState: GlobalState = { selectedUser: "Joyse" };

export const reducer: Reducer<GlobalState, Actions> = (state, action) => {
  switch (action.type) {
    case 'SelectedUser.Set':
      return { selectedUser: action.payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Actions>;
  }>({
    state: initialState,
    dispatch: () => undefined,
  });

export const useGlobalContext = (): { state: GlobalState, dispatch: React.Dispatch<Actions> } => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('useGlobalContext must be used inside a GlobalContextProvider');
  }

  return context;
};
