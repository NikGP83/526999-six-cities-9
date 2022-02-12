import axios from 'axios';
import { useEffect, useState } from 'react';
import { IHotels } from '../../types/types';
import MainPage from '../main-page/main-page';

function App() {
  const [hotels, setHotels] = useState<IHotels[]>([]);


  useEffect(() => {
    fetchHotels();
  }, []);

  async function fetchHotels() {
    try {
      const response = await axios.get<IHotels[]>('https://9.react.pages.academy/six-cities/hotels');
      setHotels(response.data.slice(0, 5));
    } catch (error) {
      window.console.log(error);
    }
  }

  return (
    <MainPage {...hotels}/>
  );
}

export default App;
