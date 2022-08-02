import { Meteor } from 'meteor/meteor';
import '/imports/api/platformMethods';
import '/imports/api/userMethods';

// function insertChannel({platform, channel}) {
//   LinksCollection.insert({platform, channel});
// }

Meteor.startup(() => {
  // if (FollowCollection.find().count() === 0) {
  //   insertChannel({
  //     platform: 'youtube',
  //     user: 
  //     channel: []
  //   });

  //   insertChannel({
  //     platform: 'twitch',
  //     channel: []
  //   });

  //   insertChannel({
  //     platform: 'facebook',
  //     channel: []
  //   });
  // }
});
