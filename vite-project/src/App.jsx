import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/home';
import Men from './components/men';
import Women from './components/women';
import Details from './components/details';
import './App.css';

function App() {
  return (
    <Router>
{/*       a deplacer dans header
 */}      <div>
        <nav>
          <Link to="/"style={{ color: '#6D214F', marginRight: '10px'  }} ><strong>Accueil</strong></Link>
          <Link to="/men" style={{ color: '#6D214F', marginRight: '10px' }} ><strong>Homme</strong></Link>
          <Link to="/women" style={{ color: '#6D214F', marginRight: '10px' }}><strong>Femme</strong></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men/>} />
          <Route path="/women" element={<Women />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
