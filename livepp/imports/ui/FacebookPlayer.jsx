import React, { useState } from 'react';

export const FacebookPlayer = () => {



  return (
    <div>
      {/* <iframe src="https://www.facebook.com/gssspotted/live/"
        frameborder="0"
        allowFullScreen
        scrolling="no"
        height="378"
        width="620">
      </iframe> */}
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fgssspotted%2Flive%2F"
        width="500" 
        height="281" 
        scrolling="no"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  );
};
