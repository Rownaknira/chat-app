import { useReducer } from 'react';
import { GeneralChannel } from './pages/GeneralChannel';
import { LGTMChannel } from './pages/LGTMChannel';
import { TechnologyChannel } from './pages/TechnologyChannel';
import { GlobalContext, initialState, reducer } from './GlobalContext';
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/lgtm-channel" />} />
            <Route path="/general-channel" element={<GeneralChannel/>} />
            <Route path="/technology-channel" element={<TechnologyChannel/>} />
            <Route path="/lgtm-channel" element={<LGTMChannel/>} />
          </Routes>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
