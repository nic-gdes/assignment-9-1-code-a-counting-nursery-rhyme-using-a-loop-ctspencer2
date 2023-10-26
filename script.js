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
         document.write (count + " " + word + " sizzlin' in a pan!<br>");
         document.write ("one went pop, one went bam,<br>");
         count = count - 2;

      if (count <= 0) {
         document.write ("No more " + word + " in the pan.<br>");
      } 
   }
}

fatSausage();