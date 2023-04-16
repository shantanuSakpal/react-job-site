import Jobs from "./components/Jobs";
import JuniorDevApply from "./components/JuniorDevApply";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/apply" element={<JuniorDevApply />} />
        </Routes>

      </Router>






    </>
  );
}

export default App;
