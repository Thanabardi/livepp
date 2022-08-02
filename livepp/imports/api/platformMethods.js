import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

import { YoutubeCollection } from './youtube';
import { TwitchCollection } from './twitch';
import { FacebookCollection } from './facebook';

function validateData(collection, data) {
  thumbnails = new SimpleSchema({
    default: { type: String },
    medium: { type: String },
    high: { type: String }
  })
  
  new SimpleSchema({
    channelID: { type: String },
    title: { type: String },
    description: { type: String },
    thumbnails: { type: thumbnails }
  }).validate(data, {check});
}

function insertChannel(collection, data) {
  collection.insert({
    channelID: data.channelID,
    title: data.title,
    description: data.description,
    thumbnails: {
      default: data.thumbnails.default,
      medium: data.thumbnails.medium,
      high: data.thumbnails.high
    },
    follow: []
  });
}

function updateChannel(collection, id, data) {
  collection.update(id, {
    $set: { 
      title: data.title,
      description: data.description,
      thumbnails: {
        default: data.thumbnails.default,
        medium: data.thumbnails.medium,
        high: data.thumbnails.high
      }
    }
  });
}

function addFollow(collection, channelID, userId) {
  collection.update({ channelID: channelID }, { $addToSet: { follow: userId } });
}

function removeFollow(collection, channelID, userId) {
  collection.update({ channelID: channelID }, { $pull: { follow: userId } });
}


Meteor.methods({

  'youtube.insertChannel'(data) {
    validateData(YoutubeCollection, data)
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    insertChannel(YoutubeCollection, data)
  },

  'youtube.updateChannel'(data) {
    validateData(YoutubeCollection, data)
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    let channel = YoutubeCollection.findOne({channelID: data.channelID})
    if (!channel) {
      throw new Meteor.Error('Channel does not exist');
    }
    updateChannel(YoutubeCollection, channel._id, data)
  },

  'youtube.addFollow'(data) {
    validateData(YoutubeCollection, data)
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    if(!YoutubeCollection.findOne({channelID: data.channelID})) {
      insertChannel(YoutubeCollection, data)
    }
    addFollow(YoutubeCollection, data.channelID, this.userId)
  },

  'youtube.removeFollow'(channelID) {
    check(channelID, String);
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    let channel = YoutubeCollection.findOne({channelID: channelID})
    if (!channel) {
      throw new Meteor.Error('Channel does not exist');
    }

    if (channel.follow.length == 1) {
      YoutubeCollection.remove(channel._id)
    } else {
      removeFollow(YoutubeCollection, channelID, this.userId)
    }
  }
});