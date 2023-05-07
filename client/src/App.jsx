import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Form from './pages/Form';
import ListingData from './pages/ListingData';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}></Route>  
        <Route path='/data' element={<ListingData/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
