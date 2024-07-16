// Get the canvas and context
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");






// Function to draw a dandelion
function drawDandelion() {
    // Clear canvas function
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    clearCanvas();




    // Draw andelions growing on the ground
   

    for (let i = 0; i < 50; i++) {

        //draw the stems
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height);
        ctx.lineTo(canvas.width / 2, canvas.height - 300);
        
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();
       
    //draw the seeds

        ctx.beginPath();
        ctx.arc(canvas.width / 2,canvas.height - 300, 5*i, 0, 2 * Math.PI);
        
        ctx.stroke();
       
    }
    for (let i = 0; i < 20; i++) {
        
        ctx.beginPath();
        ctx.moveTo((canvas.width / 2)-100, canvas.height);
        ctx.lineTo((canvas.width / 2)-100, canvas.height - 100);
        
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();
       

        ctx.beginPath();
        ctx.arc((canvas.width / 2)-100,canvas.height - 100, 5*i, 0, 2 * Math.PI);
        ctx.stroke();
       
        ctx.beginPath();
        ctx.moveTo((canvas.width / 2)+300, canvas.height);
        ctx.lineTo((canvas.width / 2)+300, canvas.height - 250);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc((canvas.width / 2)+300,canvas.height - 250, 5*i, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo((canvas.width / 2)-300, canvas.height);
        ctx.lineTo((canvas.width / 2)-300, canvas.height - 500);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc((canvas.width / 2)-300,canvas.height - 500, 5*i, 0, 2 * Math.PI);
        ctx.stroke();}
        for (let i = 0; i < 10; i++) {

        ctx.beginPath();
        ctx.moveTo((canvas.width / 2)-400, canvas.height);
        ctx.lineTo((canvas.width / 2)-400, canvas.height - 300);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc((canvas.width / 2)-400,canvas.height - 300, 5*i, 0, 2 * Math.PI);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo((canvas.width / 2)+400, canvas.height);
        ctx.lineTo((canvas.width / 2)+400, canvas.height - 100);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc((canvas.width / 2)+400,canvas.height - 100, 5*i, 0, 2 * Math.PI);
        ctx.stroke();
    }

//Flying dandelion seeds
    for (let i = 0; i < 10; i++) {
        let x =Math.random() * canvas.width - 25; 
        let y =Math.random() *canvas.height ; 

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y+20);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.stroke();

    ctx.beginPath();
    ctx.arc(x,y, 3, 0, 2 * Math.PI);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.closePath();
    }

    for (let i = 0; i <8; i++) {
        let x =Math.random() * canvas.width - 25; 
        let y =Math.random() *canvas.height ; 

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y+45);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();

    ctx.beginPath();
    ctx.arc(x,y, 7, 0, 2 * Math.PI);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.closePath();
    }

}

// Call drawDandelion function when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    drawDandelion();
});

