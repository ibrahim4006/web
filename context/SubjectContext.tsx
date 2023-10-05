import React, { createContext, useContext, useReducer } from "react";

type SubjectState = {
  lesson: string | null;
  subject: string | null;
  type: RoomData | null;
};


type RoomData = {
  PK: string;
  gameID: string
  host: string,
  competitor: string
}

type Player = {
  Address: string;
  ID: string;
  Score: number;
};

type Players = {
  [key: string]: Player;
};

type Action =
  | { type: "CHANGELESSON"; payload: string | null }
  | { type: "CHANGESUBJECT"; payload: string | null }
  | { type: "CHANGETYPE"; payload: RoomData | null }

type Dispatch = React.Dispatch<Action>;

const StateContext = createContext<SubjectState>({
  lesson: null,
  subject: null,
  type: null,
});

const DispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: SubjectState, action: Action) => {
  switch (action.type) {
    case "CHANGELESSON":
      return {
        ...state,
        lesson: action.payload,
      };
    case "CHANGESUBJECT":
      return {
        ...state,
        subject: action.payload,
      };
    case "CHANGETYPE":
      return {
        ...state,
        type: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const SubjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    lesson: null,
    subject: null,
    type:null
  } as SubjectState); // Explicitly specify the type as SubjectState

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useSubjectState = (): SubjectState => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useSubjectState must be used within an AuthProvider");
  }
  return context;
};

export const useSubjectDispatch = (): Dispatch => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useSubjectDispatch must be used within an AuthProvider");
  }
  return context;
};
