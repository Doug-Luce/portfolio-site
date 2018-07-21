 const projects = [
  {
    id: 0,
    projectName: 'Pomodoro Clock',
    projectType: 'React Web App',
    description: `I built this project to learn React during my study using the
                  Free Code Camp resource. I learned alot about working with time, ES6, classes,
                  and React. The design I was after on this site was a retro look and feel.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394939/MacBook_-_Pomodoro_Clock_cxzft2.png',
    slug: 'pomodoro-clock',
    link: 'https://codepen.io/douglasluce/pen/MmEjrG'
  },
  {
    id: 1,
    projectName: 'Tic Tac Toe',
    projectType: 'React Web App',
    description: `This project is built using React. This was a fun project, but it really took some time to build and debug. I had a hard time getting the AI to work. The biggest issue I faced was working with state. One day I’ll add more AI options.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394945/MacBook_-_Tic_Tac_Toe_uo9tec.png',
    slug: 'tic-tac-toe',
    link: 'https://codepen.io/douglasluce/pen/NjNMRR'
  },
  {
    id: 2,
    projectName: 'Adventure Time API',
    projectType: 'Node, Express',
    description: `I built an Adventure Time quote generator, but at the time there was no API for Adventure Time, so I figured I better build one myself. It’s hosted on Glitch, and my Adventure Time Quote Generator consumes the data. At some point I’ll add more data into the database for episodes.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394938/MacBook_-_Adventure_Time_API_jyajv8.png',
    slug: 'adventure-time-api',
    link: 'https://glitch.com/~adventure-time-quote-api'
  },
  {
    id: 3,
    projectName: 'Foster Kid\'s Christmas',
    projectType: 'PHP, Wordpress',
    description: `Christmas of 2017 a friend contacted me about an idea he had to make a website where we could have tags with wish lists of foster kid’s for Christmas. You can’t see the tags in this picture because it was a huge success and all of the kids had presents purchased for them!`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394940/MacBook_-_Foster_Kids_Christmas_vluekt.png',
    slug: 'foster-kids-christmas'
  },
  {
    id: 4,
    projectName: 'Simon Says',
    projectType: 'JavaScript, React',
    description: `This project is Simon Says, but using a SNES controller. It plays the sounds from Super Mario World, and shows animations of the button presses as clicked. The game will playback a failed attempt so you can try again, or there is a strict mode that you have to enter all the steps perfectly, or fail.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394944/MacBook_-_Simon_Says_crncdx.png',
    slug: 'simon-says',
    link: 'https://codepen.io/douglasluce/pen/yoexMV'
  },
  {
    id: 5,
    projectName: 'Grayscale App',
    projectType: 'Python, Tkinter',
    description: `I made this application with a couple classmates in a college programming class. It was our final, and we were pretty happy how it turned out. It reads in all of the pixel data into tuples, then changes each pixel based on grayscale algorithms. We also made a version with an installer.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394937/MacBook_-_Grayscale_App_g8sjj0.png',
    slug: 'grayscale-app',
    link: 'https://github.com/Doug-Luce/Grayscale'
  },
  {
    id: 6,
    projectName: 'Adventure Time Quote Generator',
    projectType: 'JavaScript',
    description: `I built this web app on Codepen.io, it currently has over 3k views! I didn’t think that it would be as popular as it is, being such a simple project but it’s my most popular project. I’m going to move this to it’s own domain, as well as the custom API I built for it.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394941/MacBook_-_Adventure_Time_Quote_logxzd.png',
    slug: 'adventure-time-quote-generator',
    link: 'https://codepen.io/douglasluce/pen/bEoXZO'
  },
  {
    id: 7,
    projectName: 'Calculator',
    projectType: 'JavaScript, jQuery',
    description: `I was going after a retro look and feel when building this calculator. I had trouble getting this to work, but I kept on it until I ran out of bugs. It could certainly use a refactor, and I think I may make this into a React Native app.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394931/MacBook_-_Calculator_kwoj9n.png',
    slug: 'calculator',
    link: 'https://codepen.io/douglasluce/pen/vxqgBJ'
  },
  {
    id: 8,
    projectName: 'Fitness 101',
    projectType: 'Freelance',
    description: `I do freelance for a few Portland, OR companies. This is a website I created for Fitness101.us`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531283206/MacBook_-_Fitness101_j3dapb.png',
    slug: 'fitness101',
    link: 'https://codepen.io/douglasluce/pen/vxqgBJ'
  },
  {
    id: 9,
    projectName: 'Home DNA',
    projectType: 'Freelance',
    description: `I worked as a freelancer for HomeDNA and built a few pages using bootstrap for their site, selling home DNA kits.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531284420/MacBook_-_HomeDNA_gkpoij.png',
    slug: 'homedna',
    link: 'https://codepen.io/douglasluce/project/full/AEYkWg/'
  },
  {
    id: 10,
    projectName: 'Pi Grrl',
    projectType: 'Hobby Electronics',
    description: `I built this project using a kit from Adafruit, and it was the first project I've completed like this. I showcase this project to show my attention to detail allowed me to meticulously follow the directions and achieve the intended results. After this part of the project, I 3d printed the case.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531284809/MacBook_-_PiGrrl_yygmij.png',
    slug: 'pigrrl'
  },
  {
    id: 11,
    projectName: 'Score Keeper',
    projectType: 'Meteor, Node, JavaScript, React',
    description: `This is a score keeper application I built using MeteorJS and React. I learned a lot about Meteor building this application, and used the knowledge I learned buliding this application to build a Secret Santa app that our family used for Christmas.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1531285249/MacBook_-_Score_Keep_kelezu.png',
    slug: 'score-keeper',
    link: 'https://keep-score.herokuapp.com/'
  },
  {
    id: 12,
    projectName: 'Secret Santa',
    projectType: 'Meteor, Node, JavaScript, React',
    description: `This is a Meteor project I built to manager our family's Secret Santa gift exchange in 2017. At some point I would like to add more to this project and open source it.`,
    imageUrl: 'https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394960/MacBook_-_Secret_Santa_bgiet8.png',
    slug: 'secret-santa',
    link: 'https://secret-santas-2017.herokuapp.com/'
  },
  {
    id: 13,
    projectName: 'URL Shortener',
    projectType: 'Node, JavaScript',
    description: `I built this project to showcase my skills as a backend developer. It allows you to shorten a URL converting the link to a UID, then allows navigation to that UID when visited.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394954/MacBook_-_URL_Shortener_ueibun.png',
    slug: 'url-shortener',
    link: 'https://glitch.com/~piquant-leo'
  },
  {
    id: 14,
    projectName: 'Weatherific',
    projectType: 'JavaScript, React, API',
    description: `This is a website I built using React to get the local weather. It uses the Open Weather Map API, as well as Google's Geocode API.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394955/MacBook_-_Weatherific_edwcbx.png',
    slug: 'weatherific',
    link: 'https://codepen.io/douglasluce/pen/eBaEQq'
  },

];

export default projects;