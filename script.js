function slideShow() {

    let content1 = document.querySelector(".image1");
    let content2 = document.querySelector(".image2");
    let content3 = document.querySelector(".image3");
    let content4 = document.querySelector(".image4");
    let content5 = document.querySelector(".image5");
    let content6 = document.querySelector(".image6");
    let content7 = document.querySelector(".image7");

    let content1fadeIn = null;
    let content1fadeOut = null;
    let content2Show = null;
    let content3Show = null;
    let content4FadeIn = null;
    let content5FadeIn = null;
    let content6Show = null;
    let content7FadeIn = null;
    

    let position = 0;
    let position2 = -900;
    let position3 = -500;
    let opacity = 0;
    let fadeOpacity = 1;
    let fadeScale = 1;

    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";

    clearInterval(content1fadeIn);
    clearInterval(content1fadeOut);
    clearInterval(content2Show);
    clearInterval(content3Show);
    clearInterval(content4FadeIn);
    clearInterval(content5FadeIn);
    clearInterval(content6Show);
    clearInterval(content7FadeIn);

      content1.style.display = "block";
      setTimeout(() => {
        content1fadeOut = setInterval(animate1, 10);
      }, 50);

     function animate1() {
        if (fadeOpacity > 1) {
          clearInterval(content1fadeOut);
          let content1fadeIn = setInterval(() => {
            if (fadeOpacity > 0) {
              fadeOpacity -= 0.01;
              content1.style.opacity = fadeOpacity;
            } else {
                content1.style.opacity = 0;
                clearInterval(content1fadeIn);
                content2.style.display = "block";
            }
          }, 20);
          if (content1.style.opacity < 0) {
            clearInterval(content1fadeOut);
            content1.style.display = "none";
          }
        } else {
          content1.style.opacity = fadeOpacity;
          fadeOpacity += 0.01;
          content2.style.display = "block";
        }
      }
        setTimeout(() => {
            content2Show = setInterval(animate2, 10);  
        },50);  

    function animate2() {
      if (position < 110) {
        position++;
        content2.style.left = `${position}px`;
      } else if (fadeScale > 0) {
        fadeScale -= 0.01;
        content2.style.scale = fadeScale;
      } else {
          clearInterval(content2Show);
          content3.style.display = "block";
                   
     }
    
    }    
        setTimeout(() => {
            content3Show = setInterval(animate3, 2); 
        },50);
    
    function animate3() {
        if (position2 < 150) {
            position2++;
            content3.style.right = `${position2}px`;
        } else {
            clearInterval(content3Show);
            content4.style.display = "block";
            let content4FadeIn = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.01;
                    content4.style.opacity = opacity;
                } else {
                    clearInterval(content4FadeIn);
                     content5.style.display = "block";
                      let content5FadeIn = setInterval(() => {
                        if (opacity < 1) {
                          opacity += 0.01;
                          content5.style.opacity = opacity;
                        } else {
                            clearInterval(content5FadeIn);
                            content6.style.display = "block";
                        }
                    }, 5);
                }
            },10);

        }
            
    }
   
    setTimeout(() => { 
        content6Show = setInterval(animate4, 10);
    },50);
    
    function animate4() {
        if (position3 < 620) {
            position3++;
            content6.style.left = `${position3}px`;
        } else {
            clearInterval(content6Show);
            content7.style.display = "block";
        }
    }
    setTimeout(() => {
        content7FadeIn = setInterval(animate5, 15);
    }, 50);

    function animate5() {
        if (opacity < 1) {
          opacity += 0.01;
          content7.style.opacity = opacity;
        } else {
          clearInterval(content7FadeIn);
        }
    
    }
    const replaySlide = document.getElementById("resetButton");
    replaySlide.addEventListener("click", () => {
        
         content1fadeOut = null;
         content2Show = null;
         content3Show = null;
         content4FadeIn = null;
         content5FadeIn = null;
         content6Show = null;
         content7FadeIn = null;

         content1.style.display = "none";
         content2.style.display = "none";
         content3.style.display = "none";
         content4.style.display = "none";
         content5.style.display = "none";
         content6.style.display = "none";
         content7.style.display = "none";
        
            position = 0;
            position2 = -900;
            position3 = -500;
            opacity = 0;
            fadeOpacity = 1;
            fadeScale = 1;
        
         clearInterval(content1fadeOut);
         clearInterval(content2Show);
         clearInterval(content3Show);
         clearInterval(content4FadeIn);
         clearInterval(content5FadeIn);
         clearInterval(content6Show);
         clearInterval(content7FadeIn);
        
        slideShow();
    })
     
}
slideShow();   