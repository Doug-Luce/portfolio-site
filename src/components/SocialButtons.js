import React from 'react';

export const SocialButtons = (props) => {
  const color = props.secondary;

  if(!props.secondary) {
    return (
      <ul className="social-buttons">
        <li><a href="https://github.com/doug-luce"><img alt="github icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529890492/github_tv3k9q.svg" /></a></li>
        <li><a href="https://codepen.io/douglasluce/"><img alt="codepen icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529890492/codepen_lllqlx.svg" /></a></li>
        <li><a href="https://www.linkedin.com/in/douglasluce/"><img alt="linkedin icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529890493/linkedin_kwu5cp.svg" /></a></li>
        <li><a href="https://www.facebook.com/luce.douglas"><img alt="facebook icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529890492/facebook_dziygf.svg" /></a></li>
      </ul>
    );
  } else {
    return (
      <ul className="social-buttons">
        <li><a href="https://github.com/doug-luce"><img alt="github icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1530114360/githubCream_af73w6.svg" /></a></li>
        <li><a href="https://codepen.io/douglasluce/"><img alt="codepen icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1530114360/codepenCream_ta5uh6.svg" /></a></li>
        <li><a href="https://www.linkedin.com/in/douglasluce/"><img alt="linkedin icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1530114361/linkedinCream_dllgv4.svg" /></a></li>
        <li><a href="https://www.facebook.com/luce.douglas"><img alt="facebook icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1530114360/facebookCream_qfm7zg.svg" /></a></li>
      </ul>
    );
  }

};

export default SocialButtons;