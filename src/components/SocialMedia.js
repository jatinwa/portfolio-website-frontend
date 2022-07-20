import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/jatinwatts/" target="_blank"><BsTwitter /></a>
    </div>
    <div>
      <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://twitter.com/jatin_watts8" target="_blank"><BsInstagram /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/jatin-watts-69aaa820a/" target="_blank"><BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;