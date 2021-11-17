import "./App.css";
import { GradeVisualizer } from "./components/GradeVisualizer";

function App() {
  const gradeBook = new Map();
  return (
    <div className="App">
      <GradeVisualizer map={gradeBook} />
    </div>
  );
}

export default App;
