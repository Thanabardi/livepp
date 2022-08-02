// import React from 'react';
// import { useTracker } from 'meteor/react-meteor-data';
// import { FollowCollection } from '../api/follow';

// export const Info = () => {
//   const follow = useTracker(() => {
//     return FollowCollection.find().fetch();
//   });

//   return (
//     <div>
//       <h2>Learn Meteor!</h2>
//       <ul>{follow.map(
//         link => <li key={link._id}>
//           <a href={link.url} target="_blank">{link.title}</a>
//         </li>
//       )}</ul>
//     </div>
//   );
// };
