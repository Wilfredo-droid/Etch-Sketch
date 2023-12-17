let grid = document.querySelector("#grid");

let makeGrid = (rows = 16, columns = 16) => {

    for(let i = 0; i < rows; i++){

        let row = document.createElement('div');
        row.classList.add("row");
    
        for(let j = 0; j < columns; j++){
            let column = document.createElement('div');
    
            column.classList.add("column");
    
            row.appendChild(column);
    
        }
    
        grid.appendChild(row);
    
    }

}

let paintGrid = () => {

//A lot of thanks to zhirzh on a stackoverflow article for his code snipped which helped me in the following code, Marcus, you wont be forgotten

/*https://stackoverflow.com/questions/48593312/javascript-event-when-mouseover-and-mousedown*/

/*The shared state variable managing to keep the three event listeners together, without it, the three event listeners would work independently and not work */
    let isHolding = false;

    //The mouse down has to be on the grid instead of the columns
    grid.addEventListener("mousedown", () => {
        isHolding = true;
    });

    let columns = document.querySelectorAll(".column");

    columns.forEach(column => {


        column.addEventListener("mouseenter", () => {
            
            if(isHolding === true){
                column.style.backgroundColor = "black";
            }

        })

        column.addEventListener("mouseup", () => {
            isHolding = false;
        })


    });

//Code to prevent drag
    
    //Thanks to Borislav Hadzhiev for the following code on their blogpost https://bobbyhadz.com/blog/disable-drag-and-drop-in-javascript
    grid.addEventListener("dragstart", (e) => {
        e.preventDefault();
    })

    grid.addEventListener("drop", (e) => {
        e.preventDefault();
    })


}

let gridChanger = document.querySelector('.changeGrid');

gridChanger.addEventListener("click", () => {
    
    let numberRows = +prompt("Introduce the number of rows");
    let numberColumns = +prompt("Introduce the number of columns");

    if((numberRows > 100 || numberColumns > 100) || (numberRows <= 0 || numberColumns <= 0)){
        alert("Incorrect number !!");
    }

    else if(isNaN(numberRows) || isNaN(numberColumns)){
        alert("You did not introduce a number !!")
    }

    else{
        makeGrid(numberRows,numberColumns);
        gridChanger.innerText = `Click me to change the grid !! (Up to 100x100) currently: ${numberRows} x ${numberColumns}`

        paintGrid();
    }

});
