import React from 'react';
import moment from 'moment';
import './index.scss';
import './profile.scss';

const formatDate = (date) => moment(date).format('DD MMM YY');

const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;
  return (
    <div className="profile">
      <div className="profile__name">{`${firstName} ${lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate(
        birthDate
      )} in ${birthPlace}`}</div>
    </div>
  );
};

export default Profile;
