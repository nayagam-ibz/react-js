import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';

function Dashboard(props) {
  const dispatch = useDispatch();
  const logout = () => {
   dispatch(userActions.logoutRequest());
  }
  return (
    <div className="container">
      <div className=" vh-100 d-flex align-items-center justify-content-center">
        <span className="px-3"> Welcome to Dashboard </span>
       <Button onClick={logout} className="btn btn-default">Logout</Button>
      </div>
    </div>
  );
}

export default Dashboard;
