import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { City } from './city';
import { cityNames } from './settings';

function CitiesList() {
  const dispatch  = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.reducer.city);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((name) => (
            <City
              key={name}
              name={name}
              onSelect={() => dispatch(changeCity(name))}
              active={name === selectedCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
