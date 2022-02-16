import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

interface IPrivateRootProps {
  children: JSX.Element;
}

function PrivateRoot({children}:IPrivateRootProps){
  const hasAccess = true;
  return hasAccess ? children: <Navigate to={AppRoute.Login} />;
}

export default PrivateRoot;
