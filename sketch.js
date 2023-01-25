// initialize the table as an empty variable
let table;


// preload happens only once, and is required to happen before setup test
// if we load data here, it ensures we don't draw until data is ready!
// testing the sync again for a second time
function preload() {
  // my table is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('./abortion_states_breakdown.csv', 'csv', 'header');
  
}

// happens only once, after preload() triggers
function setup() {
  createCanvas(1000, 1000);
  background(243, 246, 247); 
  // console out the table and look for the columns we are interested in
  // using the developer tools of the browser (Command+Option+i on a Mac or "Inspect" on right click)
  console.log(table)

}

// all drawing happens here, but only once because of the noLoop() at the end
function draw() {
  // we can access how many rows and columns using getColumnCount() or getRowCount() method on table
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())
  
  // loading in font family for canvas
  textFont('Lato');

  // loop through the table for every row in the CSV using getRowCount()
  
//   for (let row = 0; row < table.getRowCount(); row++) {
//     // getNum() method takes two arguments: first is the row index, and second is the column index
//     // if we pass in 5, then we are grabbing data for this row from column number 6
//     // you can change the number to access different columns in the CSV
    

  for (let row = 0; row < table.getRowCount(); row++) {
    let year = table.getNum(row,2)
    let state_id = table.getNum(row,9)
    let population = table.getNum(row,4)
    let end_state_status_pct = table.getNum(row, 7)
    
    // X is year from 2009-2022
    let x = map(year, 2009, 2022, 10, width)
    
  //  each row in this matrix is a state (Y is mapped to state, ie. a number assigned to each state (1-51))
    let y = (state_id*15)+50

    
    // map fill to population - not working rn
    let color_scheme = map(population, 240, 250, 50, 144)
    fill(color_scheme)

  // the size of the rectangle is mapped to the percentage of counties that must go out of state to access an abortion
    rect(x,y,end_state_status_pct)
  }

  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}

