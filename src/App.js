

import ReportPage from './User/userreport';
import Aureport from './LocalAu/aureport';
import WaterFpCalc from './User/footrprint';
import LoginForm from './login';
import SignupPage from './signup';
import ProfilePage from './User/userprofile';
import AboutUsPage from './User/aboutus';
import Forum from './forum';
import LAboutUsPage from './LocalAu/aboutl';
 import LForum from './LocalAu/lforum';
 import LProfilePage from './LocalAu/lprofile';
import AwarenessPage from './User/awareness'

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
          <Route path="/aboutl" element={<LAboutUsPage/>}/>
          <Route path="/lprofile" element={<LProfilePage/>}/>
          <Route path="/lforum" element={<LForum/>}/>
          <Route path="/aboutus"element={<AboutUsPage/>}/>
          <Route path="/forum"element={<Forum/>}/>
          <Route path="/awareness"element={<AwarenessPage/>}/>
        

        </Routes>
      </Router>
    );
}

export default App;


