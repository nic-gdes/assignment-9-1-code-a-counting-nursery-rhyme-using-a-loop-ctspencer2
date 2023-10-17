var word = "bottles";
    var count = 99;

   while (count > 0) {
     console.log(count + " " + word + " of beer on the wall");
     console.log(count + " " + word + " of beer,");
     console.log("Take one down, pass it around,");
     count = count - 1;

   if (count > 0) {
      console.log(count + " " + word + " of beer on the wall.");
   } else {
      console.log("No more " + word + " of beer on the wall.");
     }
 }


 //Similar to above except variables are named and assigned at the same time
//And the last verse is missing... No more bottles left, etc. 

// console.log( "Written using a for loop" );
// for ( beer = 99; beer >= 1; beer-- )
//     console.log(beer + " bottles of beer on the wall, " + beer + " bottles of beer. Take one down and pass it around, " + ( beer - 1 ) + " bottles of beer on the wall." + "<br><br>" );