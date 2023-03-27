import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './media/css/style.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import { DataProvider } from './context/github/GithubContext';
function App() {
  
  return (
    <DataProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user/:login" element={<Profile/>}/>
            
        </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
