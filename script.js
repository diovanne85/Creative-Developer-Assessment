function slideShow(){
    let content1 = document.querySelector(".image1");
    let content2 = document.querySelector(".image2"); 
    let content3 = document.querySelector(".image3"); 
    let content4 = document.querySelector(".image4"); 
    let content5 = document.querySelector(".image5"); 
    let content6 = document.querySelector(".image6"); 
    let content7 = document.querySelector(".image7"); 

    let content1fadeOut = null;
    let content2Show = null;
    let content3Show = null;
    let content4FadeIn = null;
    let content5FadeIn = null;
    let content6Show = null;
    let content7FadeIn = null;
    

    let position = 0;
    let position2 = -200;
    let position3 = 0;
    let opacity = 0;
    let fadeOpacity = 1;
    let content4Opacity = 0;
    let content5Opacity = 0;
    let content7Opacity = 0;
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    clearInterval(content1fadeOut);
    clearInterval(content2Show);
    clearInterval(content3Show);
    clearInterval(content4FadeIn);
    clearInterval(content5FadeIn);
    clearInterval(content6Show);
     clearInterval(content7FadeIn);

    setTimeout(() => {
        content1fadeOut = setInterval(animate1, 15);
    }, 15);

    function animate1() {
        if (opacity > 1) {
            clearInterval(content1fadeOut);
            let fade = setInterval(() => {
                if (fadeOpacity > 0) {
                    fadeOpacity -= 0.01;
                    content1.style.opacity = fadeOpacity;
                } else {
                    content1.style.opacity = 0;
                }
            }, 10);
            if (content1.style.opacity < 0) {
                clearInterval(content1fadeOut);
            }
         } else {
            content1.style.opacity = opacity;
            opacity += 0.01;
         }
    }
        setTimeout(() => {
            content2Show = setInterval(animate2, 5);
        }, 15);  

    function animate2() {
      if (position < 300) {
        position++;
        content2.style.left = `${position}px`;
      } else if (fadeOpacity > 0) {
        fadeOpacity -= 0.01;
        content2.style.opacity = fadeOpacity;
      } else {
        clearInterval(content2Show);
          content2.style.opacity = 0;
          content3.style.display = "block";
          content3Show = setInterval(animate3, 5);   
      }
    }
    function animate3() {
        if (position2 < 90) {
            position2++;
            content3.style.right = `${position2}px`;
        } else {
            clearInterval(content3Show);
            content4.style.display = "block";
            let content4FadeIn = setInterval(() => {
                if (content4Opacity < 1) {
                    content4Opacity += 0.01;
                    content4.style.opacity = content4Opacity;
                } else {
                    clearInterval(content4FadeIn);
                     content5.style.display = "block";
                      let content5FadeIn = setInterval(() => {
                        if (content5Opacity < 1) {
                          content5Opacity += 0.01;
                          content5.style.opacity = content5Opacity;
                        } else {
                          clearInterval(content5FadeIn);
                          content6.style.display = "block";
                          content6Show = setInterval(animate4, 5);
                        }
                      }, 10);
                }
            }, 10);

        }

    }
    function animate4() {
        if (position3 < 530) {
            position3++;
            content6.style.left = `${position3}px`;
        } else {
            clearInterval(content6Show);
            content7.style.display = "block";
        }
        let content7FadeIn = setInterval(() => {
            if (content7Opacity < 1) {
                content7Opacity += 0.01;
                content7.style.opacity = content7Opacity;
            } else {
                clearInterval(content5FadeIn);
            }
        }, 10);
    }
  
     

}
slideShow()