
window.onload = function(){


    // ScrollToSection:
    const links = document.querySelectorAll("#menu a[href^='#']");
    getDistanceFromTheTop =(element)=>{
        const id = element.getAttribute('href')
        return document.querySelector(id).offsetTop;
    }

    function scrollToSection(el){
        el.preventDefault()
        const distanceFromTheTop = getDistanceFromTheTop(el.target) -100;
        smoothScrollTo(0,distanceFromTheTop);
    }

    links.forEach((link)=>{
        link.addEventListener('click',scrollToSection);
                  
    });

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.scrollX;
        const startY = window.scrollY || window.screenY;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== "undefined" ? duration : 400;
      
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60);
      }

    //   Btn Mobile:
    const btnMobile = document.getElementById('btn-mobile');
    function toggleMenu(){
        const nav = document.getElementById('nav');
        nav.classList.toggle("active")  
       
    }
    btnMobile.addEventListener('click', toggleMenu)

    // Animation sidebar:
    const  sidebarOpen = document.querySelector(".arrow-sidebar");
    sidebarOpen.addEventListener('click',()=>{
    
       const sidebar = document.querySelector(".sidebar");
       sidebar.classList.toggle("open-sidebar")
       const arrow = document.querySelector(".fa-circle-right")
       arrow.classList.toggle('arrow-left')
       
    })

    // Conf imgSlider 
    function   resizeImgSlider () {
        const img = document.querySelector(".img-box img")
        const containerSlider = document.querySelector(".container-slider")
        let heightImg = img.clientHeight;
         
         if((window.innerWidth - 100 ) < heightImg){
            containerSlider.style.height = heightImg+'px'
         }else{
          return false
          
         }
       }
       resizeImgSlider()
     
       window.addEventListener('resize',()=>{
        resizeImgSlider()
        console.log('resize')
      })

  




    

    
}




 