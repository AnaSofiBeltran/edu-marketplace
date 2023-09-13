
import './App.css';
import './Styles/styles.css'

import{BrowserRouter, Routes,Route} from 'react-router-dom'
import { Home } from './Containers/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
