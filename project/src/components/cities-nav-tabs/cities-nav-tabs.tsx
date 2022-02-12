import CiteTabItem from '../citie-tab-item/citie-tab-item';


function CitiesNavTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <CiteTabItem />
        </ul>
      </section>
    </div>
  );
}

export default CitiesNavTabs;
