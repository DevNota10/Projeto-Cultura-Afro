
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

    // Slider cultura
    const bulletsBox =  document.querySelector(".bullets-box ");
    const bullets = document.querySelectorAll(".bullets-box > span");
    const maxImg = document.querySelectorAll(".img-box img");
    let curIdx = 0;
    let delay = 3000;

   
     function initSlider(bullets){
      for(let i = 0; i <maxImg.length; i++ ){
        if(i == 0){
       
        let span =  document.createElement('span');
         bulletsBox.appendChild(span)
         span.style.background='red';

        }else{
           span =  document.createElement('span');
          bulletsBox.appendChild(span);
        }
      }

      maxImg[0].style.opacity='1';
      setInterval(()=>{
        changeSlider()
      },delay);
     
     };
     initSlider();

     function changeSlider() {
      maxImg[curIdx].style.opacity ='0';
       curIdx++
       if(curIdx == maxImg.length)
        curIdx = 0;
        bullets.forEach((item,idx)=>{
          item.style.background = '#807d7dcc'
        })
        bullets[curIdx].style.background= 'red'
       maxImg[curIdx].style.opacity ='1';
    };

        // Click bullets:
        bullets.forEach((item,index)=>{
          item.addEventListener('click',()=>{
            maxImg[curIdx].style.opacity='0';
            curIdx = index;
            // console.log(curIdx);
            maxImg[curIdx].style.opacity='1';
            bullets.forEach((item)=>{
              item.style.background = '#807d7dcc'
            })
            item.style.background='red'
          });
        });

        function changeSlider() {
          maxImg[curIdx].style.opacity ='0';
           curIdx++
           if(curIdx === maxImg.length)
            curIdx = 0;
            bullets.forEach((item,idx)=>{
              item.style.background = '#807d7dcc'
            })
            // corrigir Alteração de point 
            // bullets[curIdx].style.background= 'red';
           maxImg[curIdx].style.opacity ='1';
        };
}



 