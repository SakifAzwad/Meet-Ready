"use client"

import ReactPlayer from "react-player"

const VideoPlayer = ({video}) => {
  console.log(video)
  return (
    <div>
      <ReactPlayer
        width="100%"
        height="100%"
        url={video}
        controls={true}
        // // light is usefull incase of dark mode
        // light={false}
        // // picture in picture
        // pip={true}
      />
      {/* <source src={video} type="video/avi" /> */}
    </div>
  )
}

export default VideoPlayer