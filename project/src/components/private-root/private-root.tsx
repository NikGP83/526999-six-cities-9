import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

interface IPrivateRootProps {
  children: JSX.Element;
  authorizathionStatus: AuthorizationStatus;
}


function PrivateRoot(props:IPrivateRootProps){
  const {children, authorizathionStatus} = props;

  return authorizathionStatus === AuthorizationStatus.Auth ? children: <Navigate to={AppRoute.Login} />;
}

export default PrivateRoot;
