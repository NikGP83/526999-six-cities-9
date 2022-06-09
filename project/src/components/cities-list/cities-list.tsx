import { MouseEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { IHotels } from '../../types/types';
import CityItem from '../city-item/city-item';

interface ICitiesListProp {
  onMapItemHover: () => void;
}


function CitiesList(props:ICitiesListProp) {
  // const {onMapItemHover} = props;

  const data = useAppSelector((arr) => arr.data.data);
  const listItemHoverHandler = (e:MouseEvent) => {
    // onMapItemHover(null);
    console.log('On item!');
  };


  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tab-index="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tab-index="0">Popular</li>
          <li className="places__option" tab-index="0">Price: low to high</li>
          <li className="places__option" tab-index="0">Price: high to low</li>
          <li className="places__option" tab-index="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {data.slice(0, 5).map((hotels: IHotels) => <CityItem  key={hotels.id} hotels={hotels}/>)}

      </div>
    </section>
  );
}

export default CitiesList;
