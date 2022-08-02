import React, { Fragment } from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { TwitchPlayer } from './TwitchPlayer';
import { YoutubePlayer } from './YoutubePlayer';
import { FacebookPlayer } from './FacebookPlayer';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {

  const user = useTracker(() => Meteor.user());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello />
      {/* <Info /> */}
      {user ? (
        <Fragment>
          {/* <TwitchPlayer /> */}
          <YoutubePlayer />
          {/* <FacebookPlayer /> */}
        </Fragment>
        ) : (
          <div>
            <Login />
            <SignUp />
          </div>
          
        )}
    </div>
  );
};
