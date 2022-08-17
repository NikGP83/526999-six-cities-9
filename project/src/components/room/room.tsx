import { useParams } from 'react-router-dom';
import { PROPERTY_PHOTO_NUM } from '../../const';
import { useAppSelector } from '../../hooks';
import { commentsApi } from '../../services/comments-api';
import Header from '../header/header';
import Map from '../map/map';
import Reviews from '../reviews/reviews';

function Room() {
  const { id } = useParams();
  const offerId = Number(id);
  const { offerList } = useAppSelector((state) => state.reducer);
  const { data: nearbyPlaceData } = commentsApi.useGetNearbyPlacesQuery(id);
  const foundOffers = offerList.find((offer) => offer.id === offerId);
  console.log(nearbyPlaceData)
  if (typeof foundOffers === 'undefined') {
    return null;
  }
  const {images, title, isPremium, bedrooms, maxAdults, rating, price, type, goods, host, description } = foundOffers;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images
                .slice(PROPERTY_PHOTO_NUM.MIN, PROPERTY_PHOTO_NUM.MAX)
                .map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {isPremium ? <span>Premium</span> : null}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((preference) => (
                    <li key={preference} className="property__inside-item">
                      {preference}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro ? (
                    <span className="property__user-status">Pro</span>
                  ) : null}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <Reviews />
            </div>
          </div>

          <Map />
          {/* 'room__map */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyPlaceData.slice(0, 3).map((place) => (
                <article key={place.id} className="near-places__card place-card">
                  <div className="place-card__mark">
                    {nearbyPlaceData.isPremium ?? <span>Premium</span>}
                  </div>
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="/#">
                      <img className="place-card__image" src={nearbyPlaceData.previewImage} width="260" height="200" alt="Place"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">
                          &euro;{foundOffers.price}
                        </b>
                        <span className="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        className="place-card__bookmark-button button"
                        type="button"
                      >
                        <svg
                          className="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">
                          {foundOffers.rating}
                        </span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="/#">{foundOffers.title}</a>
                    </h2>
                    <p className="place-card__type">{foundOffers.type}</p>
                  </div>
                </article>
              ),
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
