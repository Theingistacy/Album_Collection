import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import RecordsList from "./components/records/RecordsList";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className='main'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/records' element={<RecordsList />}>
          <Route path='/records/:genre' element={<RecordsList />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
