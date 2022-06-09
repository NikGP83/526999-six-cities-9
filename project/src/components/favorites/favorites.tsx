import { useAppSelector } from '../../hooks';
import FavortiesListItem from '../favorites-list-item/favorites-list-item';
import Footer from '../footer/footer';
import Header from '../header/header';

function Favorites() {
  const favoritesData = useAppSelector((data) => data.data.data);
  console.log(favoritesData)
  const favoritesArr = favoritesData.filter((offer) => offer.isFavorite);

  return (
    <>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesArr.map((offer) =>  <FavortiesListItem key={offer.id} offer={offer}/>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
