import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import MainPage from '../main-page/main-page';
import PageNotFound from '../page-not-found/page-not-found';
import Property from '../property/property';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/offer/:id' element={<Property />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
