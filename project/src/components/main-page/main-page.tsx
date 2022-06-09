import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import LocationNavTabs from '../location-nav-tabs/location-nav-tabs';
import Header from '../header/header';
import { useState } from 'react';


function MainPage() {
  const [selectedPoint, setSelectedPoint] = useState({});

  const onMapItemHover = (listItemName) => {
    const currentPoint = POINTS.find((point) =>
      point.title === listItemName,
    );
    setSelectedPoint(currentPoint);
  }

  return (

    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationNavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesList onMapItemHover={onMapItemHover}/>
            <div className="cities__right-section">
              <Map selectedPoint={selectedPoint}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
