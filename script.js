
function grid(){
    let num = 16;
    let grid = document.querySelector('div')
    for (let c=0; c<num; c++){
        let column = document.createElement('div');
        column.classList.add('column');
        for (let r=0; r<num; r++){
            let row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
        grid.appendChild(column);
    }

}
grid();