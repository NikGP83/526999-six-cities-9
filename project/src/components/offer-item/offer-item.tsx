import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IHotels } from '../../types/types';


interface ICitiesProp {
  hotels:IHotels;
}

function OfferItem({hotels}:ICitiesProp) {
  const {previewImage, price, title, type, id} = hotels;
  const [active, setActive] = useState(undefined as number|undefined);
  // window.console.log(active);
  return (
    <article onMouseEnter={() => setActive(id)} className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${active !== id ?'place-card__bookmark-button--active' : null} button`} type="button">
            <svg className="place-card__bookmark-icon" style={{width:'18', height:'19'}}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${hotels.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferItem;
