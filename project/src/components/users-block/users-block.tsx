import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserName } from '../../services/login';
import { singOut } from '../../store/api-actions';

function UsersBlock() {

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(singOut());
  };
  const userName = getUserName();

  return (
    <>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            {userName}
          </span>
        </a>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout" onClick={logOut}>Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UsersBlock;
