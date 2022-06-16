var num = 16;
function grid(squares){
    let width = 560;
    let grid = document.querySelector('div')
    /* make rows */
    for (let c=0; c<squares; c++){
        let column = document.createElement('div');
        column.classList.add('column');
        let c_width = width/squares;
        column.style.cssText = "display: flex; justify-content: space-evenly; border: 0;"
        column.style.width = width + 'px';
        column.style.height = c_width + 'px';
        /* make squares in each row */
        for (let r=0; r<squares; r++){
            let row = document.createElement('div');
            let r_width= width/squares;
            row.style.height = r_width + 'px';
            row.style.width = r_width + 'px';
            row.classList.add('row');
            column.appendChild(row);   
        }
        /* add rows to container */
        grid.appendChild(column);
    }
}
grid(num);

function inp1(){
   let new1 = prompt('Enter a number 2-100');
   console.log(new1);
   const old_row = document.querySelectorAll('.row');
   old_row.forEach(element => element.remove());
   const old_column = document.querySelectorAll('.column');
   old_column.forEach(element => element.remove());
   grid(new1);
   let sketch = document.querySelectorAll('.row');
   sketch.forEach((row) => {
      row.addEventListener('mouseover', event => {row.style.background = 'black'})
   });
}

function white(){
  const old_row = document.querySelectorAll('.row');
  old_row.forEach(element => element.style.background= 'white');
}

var sketcher = document.querySelectorAll('.row');
sketcher.forEach((row) => {
    row.addEventListener('mouseover', event => {row.style.background = 'black'})
});


