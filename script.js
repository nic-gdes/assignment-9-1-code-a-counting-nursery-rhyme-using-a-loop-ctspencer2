// MY NURSERY RHYME

//there are 10 fat sausages in total

//fat sausages are sizzling in a pan
//one went pop
//one went bang
//two get taken away
//this rhyme repeats until it hits zero


function fatSausage() {
      var word = "fat sausages";
      var count = 10;

      while (count > 0) {
         console.log (count + " " + word + " sizzlin' in a pan!");
         console.log ("one went pop, one went bam,");
         count = count - 2;

      if (count <= 0) {
         console.log ("No more " + word + " in the pan.");
      } 
   }
}

for (var i = 0; i < 5; i++) {
   fatSausage();
}