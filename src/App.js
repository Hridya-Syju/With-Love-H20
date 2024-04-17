import './App.css';
import ReportPage from './User/userreport';
import Aureport from './LocalAu/aureport';
import WaterFpCalc from './footrprint';
import LoginForm from './login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/User/userreport" element={<ReportPage />} />
          <Route path="/LocalAu/aureport" element={<Aureport />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    );
}

export default App;

