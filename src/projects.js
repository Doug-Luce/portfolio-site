 const projects = [
  {
    id: 0,
    projectName: 'Pomodoro Clock',
    projectType: 'React Web App',
    category: 'Practice',
    description: `I built this project to learn React during my study using the
                  Free Code Camp resource. I learned alot about working with time, ES6, classes,
                  and React. The design I was after on this site was a retro look and feel.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394939/MacBook_-_Pomodoro_Clock_cxzft2.png',
    slug: 'pomodoro-clock'
  },
  {
    id: 1,
    projectName: 'Tic Tac Toe',
    projectType: 'React Web App',
    category: 'Game',
    description: `This project is built using React. This was a fun project, but it really took some time to build and debug. I had a hard time getting the AI to work. The biggest issue I faced was working with state. One day I’ll add more AI options.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394945/MacBook_-_Tic_Tac_Toe_uo9tec.png',
    slug: 'tic-tac-toe'
  },
  {
    id: 2,
    projectName: 'Adventure Time API',
    projectType: 'Node, Express',
    category: 'API',
    description: `I built an Adventure Time quote generator, but at the time there was no API for Adventure Time, so I figured I better build one myself. It’s hosted on Glitch, and my Adventure Time Quote Generator consumes the data. At some point I’ll add more data into the database for episodes.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394938/MacBook_-_Adventure_Time_API_jyajv8.png',
    slug: 'adventure-time-api'
  },
  {
    id: 3,
    projectName: 'Foster Kid\'s Christmas',
    projectType: 'PHP, Wordpress',
    category: 'Wordpress App',
    description: `Christmas of 2017 a friend contacted me about an idea he had to make a website where we could have tags with wish lists of foster kid’s for Christmas. You can’t see the tags in this picture because it was a huge success and all of the kids had presents purchased for them!`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394940/MacBook_-_Foster_Kids_Christmas_vluekt.png',
    slug: 'foster-kids-christmas'
  },
  {
    id: 4,
    projectName: 'Simon Says',
    projectType: 'JavaScript, React',
    category: 'Game',
    description: `This project is Simon Says, but using a SNES controller. It plays the sounds from Super Mario World, and shows animations of the button presses as clicked. The game will playback a failed attempt so you can try again, or there is a strict mode that you have to enter all the steps perfectly, or fail.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394944/MacBook_-_Simon_Says_crncdx.png',
    slug: 'simon-says'
  },
  {
    id: 5,
    projectName: 'Grayscale App',
    projectType: 'Python, Tkinter',
    category: 'Python, Desktop',
    description: `I made this application with a couple classmates in a college programming class. It was our final, and we were pretty happy how it turned out. It reads in all of the pixel data into tuples, then changes each pixel based on grayscale algorithms. We also made a version with an installer.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394937/MacBook_-_Grayscale_App_g8sjj0.png',
    slug: 'grayscale-app'
  },
  {
    id: 6,
    projectName: 'Adventure Time Quote Generator',
    projectType: 'JavaScript',
    category: 'Web App, API',
    description: `I built this web app on Codepen.io, it currently has over 3k views! I didn’t think that iwould be as popular as it is, being such a simple project but it’s my most popular project. I’m going to move this to it’s own domain, as well as the custom API I built for it.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394941/MacBook_-_Adventure_Time_Quote_logxzd.png',
    slug: 'adventure-time-quote-generator'
  },
  {
    id: 7,
    projectName: 'Calculator',
    projectType: 'JavaScript, jQuery',
    category: 'Web App',
    description: `I was going after a retro look and feel when building this calculator. I had trouble getting this to work, but I kept on it until I ran out of bugs. It could certainly use a refactor, and I think I may make this into a React Native app.`,
    imageUrl: 'http://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_600/v1530394931/MacBook_-_Calculator_kwoj9n.png',
    slug: 'calculator'
  },
];

export default projects;