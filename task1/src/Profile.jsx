import React from 'react';
import moment from 'moment';
import './index.scss';
import './profile.scss';

const formatDate = (date) => moment(date).format('DD MMM YYYY');

const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;
  return (
    <div>
      <div className="profile">
        {' '}
        <div className="profile__name">
          {`${userData.firstName} ${userData.lastName}`}
        </div>
        <div className="profile__birth">{`Was born ${formatDate(
          userData.birthDate
        )} in ${userData.birthPlace}`}</div>
      </div>
    </div>
  );
};

export default Profile;
