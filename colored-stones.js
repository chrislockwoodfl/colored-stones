/**
 * @param {string} stones
 *
 * @returns {number}
 *
 * Calculate the minimum number of stones to remove so that 
 * no two adjacent stones are the same color.
 */
function colorStones(stones) {
  let str = stones;
  let n = 0;
  let lastn = 0;

  do {
    let last = str[0];
    n = 0;

    for (let i = 1; i < str.length; i++) {
      if (str[i] == last) {
        str = str.slice(0, i) + str.slice(i + 1);
        n++;
        i--;
        }
      last = str[i];  

      if (n > 0) {
         lastn = n;
        }
      }
    }  
  while (n > 0);  

  return lastn;
}

/* Remove anything that isn't R, G, or B from input. Then call colorStones
to do the calculation */
function processInput(event) {
  event.preventDefault();   // Prevent form from refreshing the page
  var stonesIn = document.getElementById("stones").value; // Get input value
  stonesIn = stonesIn.toUpperCase();
  var stones = "";
  
  for (let i = 0; i < stonesIn.length; i++) {
      switch (stonesIn[i]) {
          case 'R':
          case 'G':
          case 'B':
             stones += stonesIn[i];
        }   
    }   
 
  let n = colorStones(stones);
  document.getElementById("demo").innerHTML = "Adjusted input =" + stones +
     "<br>The minimum number of stones to remove is " + n.toString();  
}

 