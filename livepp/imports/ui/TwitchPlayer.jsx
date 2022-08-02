import React, { useState } from 'react';

export const TwitchPlayer = () => {



  return (
    <div>
      <iframe src="https://player.twitch.tv/?channel=limmy&parent=localhost"
        id="twitch_video"
        frameborder="0"
        allow="picture-in-picture"
        allowFullScreen
        scrolling="no"
        height="378"
        width="620">
      </iframe>
      <iframe
        id="twitch_chat"
        src="https://www.twitch.tv/embed/limmy/chat?parent=localhost&darkpopout"
        frameborder="0"
        height="500"
        width="350">
      </iframe>
    </div>
  );
};
