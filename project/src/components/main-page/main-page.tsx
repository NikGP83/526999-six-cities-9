import OfferList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import Header from '../header/header';


function MainPage() {

  return (

    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList />
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
