addEventListener("DOMContentLoaded", () => {
    var img_Array1 = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]
    var img_Array2 = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]

    let start=0
    let number1;
    let btn1 = document.getElementById("btn1")
    // console.log(btn1);
    btn1.addEventListener("click", () => {
        number1=num1()
        start+=1
        console.log(number1);
        if (start>=2){
            console.log("Loading");
            start=0;
            
            setTimeout(() => {
                if (number1 > number2) {
                    alert("!! Player 1 win !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
                else if (number1 == number2) {
                    alert("!! Draw !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
                else {
                    alert("!! Player 2 win !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
            
            },1000)
    
        }
        
        
    })
    // console.log(number);
    
    
    
    let number2;
    let btn2 = document.getElementById("btn2")
    // console.log(btn2);
    btn2.addEventListener("click", () => {
        number2=num2()
        start+=1
        // console.log(start);
        console.log(number2);
        if (start>=2){
            console.log("Loading");
            start=0
            
            setTimeout(() => {
                if (number1 > number2) {
                    alert("!! Player 1 win !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
                else if (number1 == number2) {
                    alert("!! Draw !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
                else {
                    alert("!! Player 2 win !!")
                    btn1.setAttribute("style","display:inline-block;")
                    btn2.setAttribute("style","display:inline-block;")
                }
            
            },1000)
    
        }
        
        
    })

    function num1(){
        let btn1 = document.getElementById("btn1")
        btn1.setAttribute("style","display:none;")
        // generate number from 0 to 5
        let num1 = Math.floor(Math.random() * 6);
        // console.log(num1);
        // let num2 = Math.floor(Math.random() * 6);
        // console.log(num2);
        let img1 = document.getElementById("img1")
        // let img2 = document.getElementById("img2")
        // console.log(img1)
        let element1 = img_Array1[num1]
        // console.log(element1);
        // let element2 = img_Array2[num2]
        img1.setAttribute("src", element1)
        // img2.setAttribute("src", element2)
        return num1
    }
    // console.log(n1);
    function num2(){
        
        let btn2 = document.getElementById("btn2")
        btn2.setAttribute("style","display:none;")
        // generate number from 0 to 5
        // let num1 = Math.floor(Math.random() * 6);
        // console.log(num1);
        let num2 = Math.floor(Math.random() * 6);
        // console.log(num2);
        // let img1 = document.getElementById("img1")
        let img2 = document.getElementById("img2")
        // console.log(img1)
        // let element1 = img_Array1[num1]
        // console.log(element1);
        let element2 = img_Array2[num2]
        // img1.setAttribute("src", element1)
        img2.setAttribute("src", element2)
        // console.log(start);
        
        return num2
    }
    
    
})

