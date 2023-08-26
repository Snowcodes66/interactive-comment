import textImag from "./../assets/images/avatars/image-amyrobson.png"
import juliu from "./../assets/images/avatars/image-juliusomo.png"
 import maxImg from './../assets/images/avatars/image-maxblagun.png'
 import ramsImg from './../assets/images/avatars/image-ramsesmiron.png'

const DataJason= {
    currentUser: {
        image: { 
          png: juliu,
          webp: "./../assets/images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
      },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            // png: "./images/avatars/image-amyrobson.png",
            // png:'./../assets/images/avatars/image-amyrobson.png',
            png: textImag,
            webp: "./../assets/images/avatars/image-amyrobson.webp",
          },
          username: "amyrobson",
        },
        replies: [
          {
            id: 9,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: {
                png: juliu,
                webp: "./../assets/images/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
          image: {
            png: maxImg,
            webp: "./../assets/images/avatars/image-maxblagun.webp",
          },
          username: "maxblagun",
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: {
                png: ramsImg,
                webp: "./../assets/images/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: {
                png: juliu,
                webp: "./../assets/images/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
        
      },
      {
        id: 8,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. please can i improve my skills by just coding along.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            // png: "./images/avatars/image-amyrobson.png",
            // png:'./../assets/images/avatars/image-amyrobson.png',
            png: juliu,
            webp: "./../assets/images/avatars/image-amyrobson.webp",
          },
          username: "juliusomo",
        },
        replies: [],
      }
    ],
  };
    

export default DataJason