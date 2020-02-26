import React from "react";
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'; 
import { compose } from 'redux';
import moment from 'moment';

const Notifications = props => {
    const { notifications } = props;
    console.log('notifications: ', notifications) ;
  return (
    <div className="section">
      <div className="card nice-card">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {
                notifications && notifications.map(notification => {
                    return(
                        <li key={notification.id}>
                            <span className="pink-text">{notification.user}</span>
                            <span> {notification.content}</span>
                            <div className="grey-text note-date">
                                { moment(notification.time.toDate()).fromNow() }
                            </div>
                        </li>
                    )
                })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

const stateInjector = state => {
    return {
        notifications: state.firestore.ordered.notifications
    }
}

export default 
compose(
    connect(stateInjector, null),
    firestoreConnect([
        { collection: 'notifications', limit: 3 }
    ])
)
(Notifications)
