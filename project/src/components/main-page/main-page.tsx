import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import LocationNavTabs from '../location-nav-tabs/location-nav-tabs';
import Header from '../header/header';


function MainPage() {

  return (

    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationNavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesList />
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
