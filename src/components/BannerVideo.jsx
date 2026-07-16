import React from "react";

const BANNER_VIDEO_SRC = `${process.env.PUBLIC_URL}/videos/banner.mp4`;

/**
 * Native HTML5 background video — more reliable on Vercel/CDN than ReactPlayer.
 */
const BannerVideo = ({ className = "" }) => {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover -z-10 ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={BANNER_VIDEO_SRC} type="video/mp4" />
    </video>
  );
};

export default BannerVideo;
