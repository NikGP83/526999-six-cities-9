import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import MainPage from '../main-page/main-page';
import PageNotFound from '../page-not-found/page-not-found';
import Property from '../property/property';
import { AppRoute } from '../../const';
import PrivateRoot from '../private-root/private-root';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoot><Favorites /></PrivateRoot>} />
        <Route path={AppRoute.Property} element={<Property />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
