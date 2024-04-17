

import ReportPage from './User/userreport';
import Aureport from './LocalAu/aureport';
import WaterFpCalc from './User/footrprint';
import LoginForm from './login';
import SignupPage from './signup';
import ProfilePage from './User/userprofile';
import AboutUsPage from './User/aboutus';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/User/userreport" element={<ReportPage />} />
          <Route path="/LocalAu/aureport" element={<Aureport />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/footrprint" element={<WaterFpCalc />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/userprofile" element={<ProfilePage/>}/>
          <Route path="/aboutus"element={<AboutUsPage/>}/>
        </Routes>
      </Router>
    );
}

export default App;


