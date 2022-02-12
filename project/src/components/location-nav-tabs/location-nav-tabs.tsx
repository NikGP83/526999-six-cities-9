import LocationTabItem from '../location-tab-item/location-tab-item';


function LocationNavTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <LocationTabItem />
        </ul>
      </section>
    </div>
  );
}

export default LocationNavTabs;
