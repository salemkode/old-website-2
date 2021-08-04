window.onload = function(){
  document.querySelector(".loading").style.display = "none";
  document.querySelector("html").style.setProperty("--top-nav" , document.querySelector("nav").offsetHeight + "px");
}

let dateObj = {
  projects: [
    {
      name: "snapdown",
      img: "./src/progect/snapDown.jpg",
      description: "مشروع لتحميل برامج snapcraft.io <br> بصيغه محموله .snap",
      url : "https://simecode.github.io/snapcraft-downloader/"
    },
    {
        name : "مذكر",
        img: "./src/progect/muzaker.png",
        description:
        "بوت لارسال الاذكار بشكل دوري ومستقبلا قد يصبح تطبيق ايضا",
        url : "https://t.me/muzakerBot"
    },
    {
        name : "موقع الف",
        img: "./src/progect/aliflang.jpg",
        description:
        "موقع غير رسمي للغة الف البرمجية",
        url : "https://simecode.github.io/aliflang"
    },
    {
        name : "موقع اعجوبة",
        img: "./src/progect/ojuba.jpg",
        description:
        "موقع غير رسمي لتوزيعه ومشروع اعجوبة",
        url : "https://simecode.github.io/ojuba.org"
    },
  ],
  social: [
    {
      name: "github",
      img: 
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
        </path>
      </svg>`,
      url : "https://github.com/simecode"
    },
    {
      name: "twitter",
      img: 
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z">
        </path>
       </svg>`,
      url: "https://twitter.com/zeon_code",
    },
    {
      name: "Telegram",
      img: 
     `<svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  stroke-linejoin: round;
                  stroke-miterlimit: 1.41421;
                ">
        <path id="telegram-4"
          d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z">
        </path>
      </svg>`,
      url: "https://t.me/simecode",
    },
  ],
  feedback : {
    index : 0 ,
    show : true , 
    content : [
      {
        img : "./src/feedback/mutaz.jpg",
        name : "mutaz Elmasry",
        content : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe illum et deleniti expedita numquam veniam similique, optio`
      },
      {
        img : "./src/feedback/superastorh.jpg",
        name : "سوبر اسطوره",
        content : `Lorem ipsum dolor elit.  sit amet, consectetur adipisicing  numquam veniam similique, optio Saepe illum et deleniti expedita`
      },
      {
        img : "../src/feedback/Waseel.jpg",
        name : "واصل",
        content : ``
      }
    ],
    next(){
      this.content[this.index + 1] ? this.index++ : this.index = 0;
    },
    prev(){
      this.index - 1 !== -1 ? this.index-- : this.index = this.content.length -1;
    }
  }
};
function data() {
  return dateObj;
}

ScrollReveal().reveal(".card", {
  delay: 500,
  useDelay: "onload",
  reset: true,
});

