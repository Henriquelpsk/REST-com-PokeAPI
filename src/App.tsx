import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Body';
import Pokemon from './pages/Pokemon';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Route>

    </Routes>
  );
}

export default App;
