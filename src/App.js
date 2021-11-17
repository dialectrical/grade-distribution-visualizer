import "./App.css";
import { GradeVisualizer } from "./components/GradeVisualizer";

function App() {
  return (
    <div className="App">
      <GradeVisualizer map={gradeBook} />
    </div>
  );
}

export default App;
