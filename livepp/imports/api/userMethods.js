import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

import { Accounts } from 'meteor/accounts-base';
 
Meteor.methods({
  'user.create'({username, password, email, displayName}) {
    new SimpleSchema({
      username: { type: String },
      password: { type: String },
      email: { type: String },
      displayName: { type: String },
    }).validate({username, password, email, displayName});

    Accounts.createUser({
      username: username,
      password: password,
      email: email,
      profile: {
        name: displayName,
      }
    });
  },

  'user.setUsername'({username}) {
    check(username, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    } else {
      Accounts.setUsername(this.userId, username)
    }
  },

  'user.addEmail'({email}) {
    check(email, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    } else {
      Accounts.addEmail(this.userId, email)
    }
  },

  'user.removeEmail'({email}) {
    check(email, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    } else {
      Accounts.removeEmail(this.userId, email)
    }
  },

  'user.updateName'({name}) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    } else {
      Meteor.users.update(this.userId, {
        $set: {"profile.name": name}
      });
    }
  }
});