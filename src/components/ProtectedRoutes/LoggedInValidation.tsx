import { Navigate, Outlet } from 'react-router-dom';

const LoggedInValidation = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

  if (!userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to='/' />;
  }
};

export default LoggedInValidation;
