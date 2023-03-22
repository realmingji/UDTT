import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    window.location.reload();
    window.location = '/';
  }, []);
  return <>로그아웃</>;
};

export default Logout;
