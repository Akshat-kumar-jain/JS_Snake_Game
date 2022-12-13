function init(){
    var canvas = document.getElementById('mycanvas');
    W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d');
    cellSize = cs = 67;

    snake = {
        init_len:5,
        color:"blue",
        cells:[],
        direction:"right",

        createSnake:function(){
            for (var i= this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }
        },

        drawSnake:function(){

            for(var i = 0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
            pen.fillRect(this.cells[i].x*50,this.cells[i].y*50,cs - 20,cs)
            }
        },

        updateSnake:function(){
            console.log("updateSnake according to the direction property");


            this.cells.pop();

            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            var nextX,nextY;

            if(this.direction=="right"){
                nextX = headX + 1;
                nextY = headY;
            }
            else if(this.direction=="left"){
                nextX = headX - 1;
                nextY = headY;
            }
            else  if(this.direction=="down"){
                nextX = headX ;
                nextY = headY + 1;
            }
            else{
                nextX = headX ;
                nextY = headY - 1 ;
            }
            /*var X = headX + 1;
            var Y = headY;*/
            this.cells.unshift({x:nextX,y:nextY});
        }
    };

    snake.createSnake();

    // Add a event listner on the Document Object
    function keyPressed(e){
        console.log("KeyPressed",e.key);

        //Conditional Statements
        if(e.key =="ArrowRight"){
            snake.direction= "right"
        }
        if(e.key =="ArrowLeft"){
            snake.direction= "left"
        }
        if(e.key =="ArrowUp"){
            snake.direction= "up"
        }
        if(e.key =="ArrowDown"){
            snake.direction= "down"
        }
    }
    document.addEventListener('keydown',keyPressed);

}

function draw(){

    // erase the old frame
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
}

function gameloop(){
    draw();
    update();
}

init();

var f = setInterval(gameloop,100);