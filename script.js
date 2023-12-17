let grid = document.querySelector("#grid");

for(let i = 0; i < 16; i++){

    let row = document.createElement('div');
    row.classList.add("row");

    for(let j = 0; j < 16; j++){
        let column = document.createElement('div');

        column.classList.add("column");

        row.appendChild(column);

    }

    grid.appendChild(row);

}

let columns = document.querySelectorAll(".column");

columns.forEach(column => {




});