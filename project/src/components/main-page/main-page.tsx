import CitiesList from '../cities-list/cities-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesNavTabs from '../cities-nav-tabs/cities-nav-tabs';
import PageHeader from '../page-header/page-header';


function MainPage({...hotels}) {

  return (

    <div className="page page--gray page--main">
      <PageHeader />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesList {...hotels}/>
            <CitiesMap />
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
