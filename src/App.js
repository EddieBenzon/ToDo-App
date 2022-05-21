import Header from "./Components/Header";
import Introduction from "./Pages/Introduction";
import List from "./Pages/List";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Do It App";
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
