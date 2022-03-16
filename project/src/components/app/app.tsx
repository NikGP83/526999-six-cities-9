import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import MainPage from '../main-page/main-page';
import PageNotFound from '../page-not-found/page-not-found';
import Property from '../property/property';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoot from '../private-root/private-root';
import { useEffect } from 'react';
import axios from 'axios';
import { IHotels } from '../../types/types';
import { setData } from '../../store/users-data-slice/users-data-slice';
import { useAppDispatch } from '../../hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchMoc();
  }, []);

  const fetchMoc = async () => {
    try {
      const response = await axios.get<IHotels[]>('https://9.react.pages.academy/six-cities/hotels');
      dispatch(setData(response.data));
    }
    catch(error) {
      window.console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoot authorizathionStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoot>
          }
        />
        <Route path={AppRoute.Property} element={<Property />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
