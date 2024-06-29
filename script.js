
// Ids of all the buttons to click 
 let toggleButton1 = document.getElementById("toggleButton1")
 let toggleButton2 = document.getElementById('toggleButton2');
 let toggleButton3 = document.getElementById('toggleButton3');
 let toggleButton4 = document.getElementById('toggleButton4');


// Event listener for the first button

toggleButton1.addEventListener('click', function() {
    if (document.getElementById('content1').style.display === 'block' ){
        document.getElementById('content1').style.display = 'none';
        document.getElementById("firstImage").src ="./assets/images/icon-plus.svg"
    } else {
        document.getElementById('content1').style.display = 'block';
        document.getElementById("firstImage").src ="./assets/images/icon-minus.svg"
    }
});

// Event listener for the second button


    toggleButton2.addEventListener('click', function() {
            if (document.getElementById('content2').style.display == 'block'){
                document.getElementById('content2').style.display = 'none';
        document.getElementById("secondImage").src ="./assets/images/icon-plus.svg"

            } else {
                document.getElementById('content2').style.display = 'block';
        document.getElementById("secondImage").src ="./assets/images/icon-minus.svg"

            }
        });
    

// Event listener for the third button

    toggleButton3.addEventListener('click', function() {
            if (document.getElementById('content3').style.display == 'block'){
                document.getElementById('content3').style.display = 'none';
        document.getElementById("thirdImage").src ="./assets/images/icon-plus.svg"

            } else {
                document.getElementById('content3').style.display = 'block';
        document.getElementById("thirdImage").src ="./assets/images/icon-minus.svg"

            }
        });
    
// Event listener for the fourth button


    toggleButton4.addEventListener('click', function() {
            if (document.getElementById('content4').style.display == 'block'){
                document.getElementById('content4').style.display = 'none';
        document.getElementById("fourthImage").src ="./assets/images/icon-plus.svg"

            } else {
                document.getElementById('content4').style.display = 'block';
        document.getElementById("fourthImage").src ="./assets/images/icon-minus.svg"

            }
        });
