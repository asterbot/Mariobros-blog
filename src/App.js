import Navbar from './Navbar.js';
import Home from './Home';
import Create from './Create';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
