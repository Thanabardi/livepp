import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { parse } from 'node-html-parser'

export const YoutubePlayer = () => {
  const youtubeKey = 'AIzaSyAnhae8Q1kLi7A_hsps2DNK1uPlUiwrfww'

  useEffect(() => {
		// searchChannels("LofiGirl")
    getLiveVideo("UCSJ4gkVC6NrvII8umztf0Ow");
  }, []);

  const submit = e => {
    e.preventDefault();
    data = {
      channelID: "UCSJ4gkVC6NrvII8umztf0Ow",
      title: "Lofi Girl",
      description: "study - chill - sleep - repeat | Listen on Spotify, Apple music and more → https://bit.ly/lofigirl-playlists | Join the Lofi Girl ...",
      thumbnails: {
        default: "https://yt3.ggpht.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s88-c-k-c0xffffffff-no-rj-mo",
        medium: "https://yt3.ggpht.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s240-c-k-c0xffffffff-no-rj-mo",
        high: "https://yt3.ggpht.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s800-c-k-c0xffffffff-no-rj-mo"
      }
    }
    Meteor.call('youtube.addFollow', data, (err, res) => {
      if (err) {
        alert(err);
      } else {
        console.log(res)
      }
    });
  };


	async function searchChannels(query) {
		if (query.length > 0) {
 		  await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=channel&key=${youtubeKey}`
      )
      .then(response => {
        console.log(response.data)
        // if (response.data.items[0].id.kind === "youtube#channel") {
          let channelID = response.data.items[0].snippet.channelId
          getLiveVideo(channelID)
        // }
      })
      .catch(error => {
        window.alert(error)
        console.log(error)
      })
    }
  }

  async function getLiveVideo(channelID) {

		if (channelID.length > 0) {
 		  // await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&eventType=live&type=video&key=${youtubeKey}`
      await fetch(`https://www.youtube.com/channel/${channelID}/live`)
      .then(response => response.text())
      .then(data => {
        var parser = new DOMParser();
        var html = parser.parseFromString(data, "text/html");
        console.log(html);
      })
      // .then(html => {
        // console.log(response.text());
        // var s = response.data;
        // var htmlObject = document.createElement('div');
        // htmlObject.innerHTML = s;
        // var scripts = htmlObject.getElementsByTagName("script");
        // console.log(scripts[0].getAttribute);
        // for (var i = 0; i < scripts.length; i++) {
        //   if (scripts[i].src) console.log(i, scripts[i].src)
        //   else console.log(i, scripts[i].innerHTML)
        // }
        // html = parse(response.data)
        // console.log(html)
        // canonicalURLTag = html.querySelector('link[rel=canonical]')
        // canonicalURL = canonicalURLTag.getAttribute('href')
        // isStreaming = canonicalURL.includes('/watch?v=')
        // console.log(isStreaming)
      // })
      .catch(error => {
        // window.alert(error)
        console.log(error)
      })
    }
  }

  return (
    <div>
      <form onSubmit={submit} className="follow-form">
        <button type="submit">Follow</button>
      </form>
      {/* <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
        id="youtube_video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="no"
        height="378"
        width="620">
      </iframe>
      <iframe
        id="youtube_chat"
        src="https://www.youtube.com/live_chat?v=jfKfPfyJRdk&embed_domain=localhost&dark_theme=0"
        frameborder="0"
        height="500"
        width="350">
      </iframe> */}
    </div>
  );
};
