import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <>
      <h2>Страница не найдена!</h2>
      <Link to='/'>Вернитесь на главную</Link>
    </>
  );
}

export default PageNotFound;

