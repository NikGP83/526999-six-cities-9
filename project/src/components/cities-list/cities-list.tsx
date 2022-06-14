import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';


function CitiesList() {
  const [active, setActive] = useState('');
  const dispatch  = useAppDispatch();

  const {city} = useAppSelector((state) => state);

  const cityHandler = (e) => {
    const cityName = e.currentTarget.textContent;
    dispatch(changeCity(cityName));
    setActive(e.currentTarget.textContent);
    console.log(active === city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li onClick={cityHandler} className="locations__item">
            <a className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>Paris</span>
            </a>
          </li>
          <li onClick={cityHandler} className="locations__item">
            <a className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>Cologne</span>
            </a>
          </li>
          <li onClick={cityHandler} className="locations__item">
            <a className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>Brussels</span>
            </a>
          </li>
          <li onClick={cityHandler} className="locations__item">
            <a
              href="/#"
              className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`}
            >
              <span>Amsterdam</span>
            </a>
          </li>
          <li onClick={cityHandler} className="locations__item">
            <a className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>Hamburg</span>
            </a>
          </li>
          <li onClick={cityHandler} className="locations__item">
            <a className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
