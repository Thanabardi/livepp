import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const Search = () => {
  // gapi.client.init({
  //   'apiKey': 'AIzaSyAnhae8Q1kLi7A_hsps2DNK1uPlUiwrfww',
  //   // clientId and scope are optional if auth is not required.
  //   'clientId': 'livepp.apps.googleusercontent.com',
  //   'scope': 'profile',
  // })
  const youtubeKey = 'AIzaSyAnhae8Q1kLi7A_hsps2DNK1uPlUiwrfww'

  useEffect(() => {
		getChannels('GGTKcastation')
  }, []);

	async function getChannels(channels) {
		if (channels.length > 0) {
 		  await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${channels}&key=${youtubeKey}`
      )
      .then(response => {
        console.log(response.data)
        let uploadList = response.data.items[0].contentDetails.relatedPlaylists.uploads
        getChannelsVideo(uploadList)
      })
      .catch(error => {
        window.alert(error)
        console.log(error)
      })
    }
  }

  async function getChannelsVideo(uploadList) {
		if (channels.length > 0) {
 		  await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${channels}&key=${youtubeKey}`
      )
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        window.alert(error)
        console.log(error)
      })
    }
  }

  return (
    <div>
      
    </div>
  );
};