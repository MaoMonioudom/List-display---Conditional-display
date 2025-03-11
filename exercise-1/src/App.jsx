import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header.jsx";
import Score from "./components/Score.jsx";
import {HTML_RESULTS} from "./data.js"
import {PYTHON_RESULTS} from "./data.js"
import {JAVA_RESULTS} from "./data.js"
import {ENGLISH_RESULTS} from "./data.js"
function App() {
  return (
    <>
      <Header id="header" batch="NPC batch 2024"></Header>
      <main className="scores-container">
        <Score className="Statistic" courseName="HTML" courseResults={HTML_RESULTS} />
        <Score className="Statistic" courseName="Java" courseResults={JAVA_RESULTS} />
        <Score className="Statistic" courseName="Python" courseResults={PYTHON_RESULTS} />
        <Score className="Statistic" courseName="English" courseResults={ENGLISH_RESULTS    } />
      </main>
    </>
  );
}

export default App;
