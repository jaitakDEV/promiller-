import React, { useRef, useState, useCallback } from "react";
import "./VideoDemo.css";
import promillerDemoVideo from "../../../assets/promiller-demo.mp4";

export default function VideoDemo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        /* autoplay/play blocked — user can try again */
      });
    } else {
      video.pause();
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleVideo();
      }
    },
    [toggleVideo],
  );

  return (
    <section className="alt-bg" id="video-demo">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">See It In Action</div>
          <h2>
            A 20-Second Look :
            <span className="grad"> How The Promiller Works</span>
          </h2>
          <p>
            Watch how a mill owner checks their entire operation before their
            first cup of chai.
          </p>
        </div>

        <div className="video-wrap" id="promillerVideoWrap">
          <video
            ref={videoRef}
            className="video-frame"
            id="promillerVideoFrame"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={promillerDemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className={`play-btn${isPlaying ? " is-pause" : ""}`}
            role="button"
            tabIndex={0}
            id="promillerPlayBtn"
            aria-label={
              isPlaying
                ? "Pause product walkthrough video"
                : "Play product walkthrough video"
            }
            onClick={toggleVideo}
            onKeyDown={handleKeyDown}
          >
            <div className="tri"></div>
            <div className="pause-icon">
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="video-caption">
            <div>
              <h4>Inside ProMiller: Full Walkthrough</h4>
              <p>
                Live monitoring, energy tracking &amp; safety alerts — explained
                by our product team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
