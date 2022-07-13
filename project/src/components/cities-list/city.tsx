
interface CityProps{
  name:string;
  active?: boolean | undefined;
  onSelect:()=>void;
}
export function City(p:CityProps){
  const {name,active, onSelect} = p;
  return (
    <li onClick={onSelect} className="locations__item">
      <a className={`locations__item-link tabs__item ${active ? 'tabs__item--active' : ''}`} href="/#">
        <span>{name}</span>
      </a>
    </li>
  );
}
