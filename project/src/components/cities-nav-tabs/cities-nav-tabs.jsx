import CitieItem from '../citie-item/citie-item';


function CitiesNavTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <CitieItem />
        </ul>
      </section>
    </div>
  );
}

export default CitiesNavTabs;
