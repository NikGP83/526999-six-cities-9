
interface IMap {
  str: string;
}

function Map({str}: IMap) {

  return (
    <section className={`${str} map`}></section>

  );
}

export default Map;
