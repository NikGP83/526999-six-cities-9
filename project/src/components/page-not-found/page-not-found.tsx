import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <>
      <h2>404 Страница не найдена!</h2>
      <Link to='/' className='form__submit button'>Вернитесь на главную</Link>
    </>
  );
}

export default PageNotFound;

