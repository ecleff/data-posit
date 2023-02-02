// initialize the table as an empty variable
let table;
let states_matchup_table;


// preload happens only once, and is required to happen before setup test
// if we load data here, it ensures we don't draw until data is ready!
// testing the sync again for a second time
function preload() {
  // my table is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('./abortion_states_breakdown.csv', 'csv', 'header');
  states_matchup_table = loadTable('./states_matchup.csv', 'csv', 'header');
}

// happens only once, after preload() triggers
function setup() {
  createCanvas(1000, 1000);
  background(247, 252, 255); 
  // console out the table and look for the columns we are interested in
  // using the developer tools of the browser (Command+Option+i on a Mac or "Inspect" on right click)
  console.log(table)
  console.log(states_matchup_table)

}

// all drawing happens here, but only once because of the noLoop() at the end
function draw() {
  // we can access how many rows and columns using getColumnCount() or getRowCount() method on table
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())

  console.log('Num cols: '+states_matchup_table.getColumnCount())
  console.log('Num rows: '+ states_matchup_table.getRowCount())

  textFont('Roboto Mono');
  

  // loop through the table for every row in the CSV using getRowCount()
  
//   for (let row = 0; row < table.getRowCount(); row++) {
//     // getNum() method takes two arguments: first is the row index, and second is the column index
//     // if we pass in 5, then we are grabbing data for this row from column number 6
//     // you can change the number to access different columns in the CSV

  for (let row = 0; row < table.getRowCount(); row++) {
    let year = table.getNum(row,2)
    let state_id = table.getNum(row,9)
    // let population = table.getNum(row,4)
    let distance = table.getNum(row, 3)
    
    // X is year from 2009-2022
    let x = map(year, 2009, 2022, 40, width-40)
    
  //  each row in this matrix is a state (Y is mapped to state, ie. a number assigned to each state (1-51))
    let y = (state_id*17)+50
    // 
    colorMode(HSB);
    if (distance > 90){

      stroke(359, 63, 53)
   } else if(distance > 72 && distance < 90){
    stroke(359, 63, 70)
     }
      else if(distance < 72 && distance > 37){
        stroke(359, 47, 78)
     } 
      else {
        stroke(359, 25, 87)
   }

  // the size of the rectangle is mapped to the percentage of counties that must go out of state to access an abortion
   strokeWeight(2)
   fill(202, 3, 100, 0.3)
    circle(x,y,distance/5);
    // rect(x, y, 10, distance/10);


    // labeling the years along the x axis
    fill(359, 63, 53)
    strokeWeight(0.3)
    text('2009', 30, 10, 200,200)
    text('2010', 100, 10, 200,200)
    text('2011', 170, 10, 200,200)
    text('2012', 240, 10, 200,200)
    text('2013', 310, 10, 200,200)
    text('2014', 380, 10, 200,200)
    text('2015', 450, 10, 200,200)
    text('2016', 530, 10, 200,200)
    text('2017', 600, 10, 200,200)
    text('2018', 670, 10, 200,200)
    text('2019', 740, 10, 200,200)
    text('2020', 810, 10, 200,200)
    text('2021', 880, 10, 200,200)
    text('2022', 950, 10, 200,200)
  }

// alternative sketch


// for (let row = 0; row < table.getRowCount(); row++) {
//   let year = table.getNum(row,2)
//   let state_id = table.getNum(row,9)
//   // let population = table.getNum(row,4)
//   let distance = table.getNum(row, 3)
  
//   // X is year from 2009-2022
//   let x = map(year, 2009, 2022, 40, width-40)
  
// //  each row in this matrix is a state (Y is mapped to state, ie. a number assigned to each state (1-51))
//   let y = (state_id*17)+50
//   // 
//   colorMode(HSB);
//   if (distance > 90){

//     fill(335, 72, 72, 0.5)
//  } else if(distance > 72 && distance < 90){
//   fill(335, 49, 85, 0.5)
//    }
//     else if(distance < 72 && distance > 37){
//       fill(335, 25, 91, 0.5)
//    } 
//     else {
//       fill(335, 9, 96, 0.5)
//  }

// // the size of the rectangle is mapped to the percentage of counties that must go out of state to access an abortion
// //  strokeWeight(2)
// //  fill(202, 3, 100, 0.3)
//   // circle(x,y,distance/5);
//   rect(x, y, distance/2, 50);


//   // labeling the years along the x axis
//   fill(335, 72, 44)
//   strokeWeight(0.5)
//   text('2009', 30, 10, 200,200)
//   text('2010', 100, 10, 200,200)
//   text('2011', 170, 10, 200,200)
//   text('2012', 240, 10, 200,200)
//   text('2013', 310, 10, 200,200)
//   text('2014', 380, 10, 200,200)
//   text('2015', 450, 10, 200,200)
//   text('2016', 530, 10, 200,200)
//   text('2017', 600, 10, 200,200)
//   text('2018', 670, 10, 200,200)
//   text('2019', 740, 10, 200,200)
//   text('2020', 810, 10, 200,200)
//   text('2021', 880, 10, 200,200)
//   text('2022', 950, 10, 200,200)
// }


//  REMOVED - sketching the parallel line plot for states

// // axes lines
// line(10, 1000, 10, 2900)
// line(990, 1000, 990, 2900)
// for (let row=0; row<states_matchup_table.getRowCount(); row++) {
// // map the origin and destination state IDs to line lengths
//   let origin_id = states_matchup_table.getNum(row, 3);
//   let dest_id = states_matchup_table.getNum(row, 4);
// // why isnt this working
//   let y1 = map(origin_id, 1, 51, 1000, 2900);
//   let y2 = map(dest_id, 1,51, 1000,2900);

//   let x1 = 10;
//   let x2 = 990;

//   // color
//   if(origin_id === dest_id) {
//     stroke(184, 51, 106, 40)
//   }
//   else {
//     stroke(196, 144, 209, 40)
//   }

// // draw lines
// // strokeWeight(0.5)
//   line(x1, y1, x2, y2)
// };
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()

  // saveCanvas('data-posit-2', 'jpg');
}