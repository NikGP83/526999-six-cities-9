import { Link } from 'react-router-dom';

function UsersBlock() {
  return (
    <>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
        </a>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UsersBlock;
