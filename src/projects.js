const projects = [
  {
    id: 0,
    projectName: 'Home DNA',
    projectType: 'Freelance',
    description: `I worked as a freelancer for HomeDNA and built a few pages using bootstrap for their site, selling home DNA kits.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531284420/MacBook_-_HomeDNA_gkpoij.png',
    slug: 'homedna',
    link: 'https://github.com/Doug-Luce/HomeDNA'
  },
  {
    id: 1,
    projectName: 'Fitness 101',
    projectType: 'Freelance',
    description: `I do freelance for a few Portland, OR companies. This is a website I created for Fitness101.us`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531283206/MacBook_-_Fitness101_j3dapb.png',
    slug: 'fitness101',
    link: 'https://www.fitness101.us/'
  },
  {
    id: 2,
    projectName: 'Stratedg360',
    projectType: 'Freelance',
    description: 'I was contacte by Stratedg360 to help fix their website built with Adobe Muse. There were many issues with the responsive design of the site, so I was able to rebuild this site for the client. This client continues to rely on me for all of their web development needs.',
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394956/MacBook_Stratedg_jqqoxx.png',
    slug: 'stratedg360',
    link: 'http://stratedg360.com/'
  },
  {
    id: 3,
    projectName: 'Sunset HVAC',
    projectType: 'Wordpress',
    description: `I work with Sunset Heating and Cooling on all of their website needs. Their business website is built in Wordpress, which I handled the design, build, and implementation for. I have also built a custom Wordpress plugin that handles an event that Sunset sponsors for foster Children to received Christmas gifts.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394953/MacBook_-_Sunset_magbqe.png',
    slug: 'sunset',
    link: 'https://sunsethc.com'
  },
  {
    id: 4,
    projectName: 'Daikin Sunset',
    projectType: 'Webpage design and build',
    description: `Sunset contacted me to build a site to brand their new Daikin installations separately from their traditionally HVAC offerings. I built and designed this site for Sunset to market their Daikin products.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1532406019/MacBook_-_Daikin_zurad2.png',
    slug: 'daikin-sunset',
    link: 'https://www.daikinsunset.com'
  },

  {
    id: 5,
    projectName: 'Foster Kid\'s Christmas',
    projectType: 'PHP, Wordpress',
    description: `Christmas of 2017 a friend contacted me about an idea he had to make a website where we could have tags with wish lists of foster kid’s for Christmas. You can’t see the tags in this picture because it was a huge success and all of the kids had presents purchased for them!`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394940/MacBook_-_Foster_Kids_Christmas_vluekt.png',
    slug: 'foster-kids-christmas'
  },
  {
    id: 6,
    projectName: 'Weatherific',
    projectType: 'JavaScript, React, API',
    description: `This is a website I built using React to get the local weather. It uses the Open Weather Map API, as well as Google's Geocode API.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394955/MacBook_-_Weatherific_edwcbx.png',
    slug: 'weatherific',
    link: 'https://github.com/Doug-Luce/Weatherific'
  },
  {
    id: 7,
    projectName: 'Grayscale App',
    projectType: 'Python, Tkinter',
    description: `I made this application with a couple classmates in a college programming class. It was our final, and we were pretty happy how it turned out. It reads in all of the pixel data into tuples, then changes each pixel based on grayscale algorithms. We also made a version with an installer.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394937/MacBook_-_Grayscale_App_g8sjj0.png',
    slug: 'grayscale-app',
    link: 'https://github.com/Doug-Luce/Grayscale'
  },
  {
    id: 8,
    projectName: 'URL Shortener',
    projectType: 'Microservices',
    description: `I built this project to showcase my skills as a backend developer. It allows you to shorten a URL converting the link to a UID, then allows navigation to that UID when visited.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394954/MacBook_-_URL_Shortener_ueibun.png',
    slug: 'url-shortener',
    link: 'https://github.com/Doug-Luce/FCC-URL-Shortener'
  },
  {
    id: 9,
    projectName: 'Secret Santa',
    projectType: 'Meteor, Node, JavaScript, React',
    description: `This is a Meteor project I built to manager our family's Secret Santa gift exchange in 2017. At some point I would like to add more to this project and open source it.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394960/MacBook_-_Secret_Santa_bgiet8.png',
    slug: 'secret-santa',
    link: 'https://secret-santas-2017.herokuapp.com/'
  },
  {
    id: 10,
    projectName: 'Score Keeper',
    projectType: 'Meteor, Node, JavaScript, React',
    description: `This is a score keeper application I built using MeteorJS and React. I learned a lot about Meteor building this application, and used the knowledge I learned buliding this application to build a Secret Santa app that our family used for Christmas.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531285249/MacBook_-_Score_Keep_kelezu.png',
    slug: 'score-keeper',
    link: 'https://github.com/Doug-Luce/score-keeper'
  },
  {
    id: 11,
    projectName: 'Adventure Time Quote Generator',
    projectType: 'JavaScript',
    description: `I built this web app on Codepen.io, it currently has over 3k views! I didn’t think that it would be as popular as it is, being such a simple project but it’s my most popular project. I’m going to move this to it’s own domain, as well as the custom API I built for it.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394941/MacBook_-_Adventure_Time_Quote_logxzd.png',
    slug: 'adventure-time-quote-generator',
    link: 'https://github.com/Doug-Luce/Adventure-Time-Quote-Generator'
  },
  {
    id: 12,
    projectName: 'Calculator',
    projectType: 'JavaScript, jQuery',
    description: `I was going after a retro look and feel when building this calculator. I had trouble getting this to work, but I kept on it until I ran out of bugs. It could certainly use a refactor, and I think I may make this into a React Native app.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394931/MacBook_-_Calculator_kwoj9n.png',
    slug: 'calculator',
    link: 'https://github.com/Doug-Luce/Calculator'
  },
  {
    id: 13,
    projectName: 'Simon Says',
    projectType: 'JavaScript, React',
    description: `This project is Simon Says, but using a SNES controller. It plays the sounds from Super Mario World, and shows animations of the button presses as clicked. The game will playback a failed attempt so you can try again, or there is a strict mode that you have to enter all the steps perfectly, or fail.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394944/MacBook_-_Simon_Says_crncdx.png',
    slug: 'simon-says',
    link: 'https://github.com/Doug-Luce/simon-says'
  },
  {
    id: 14,
    projectName: 'Pomodoro Clock',
    projectType: 'React Web App',
    description: `I built this project to learn React during my study using the
                  Free Code Camp resource. I learned alot about working with time, ES6, classes,
                  and React. The design I was after on this site was a retro look and feel.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394939/MacBook_-_Pomodoro_Clock_cxzft2.png',
    slug: 'pomodoro-clock',
    link: 'https://github.com/Doug-Luce/Pomodoro'
  },
];

export default projects;