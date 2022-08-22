function palindrome(str) {
     // removes all non- alphanumeric charectors and spaces
     let realstr= str.replace(/[^0-9a-z]/gi, '')
   // converts to lowercase
   let lowerCaseStr = realstr.toLowerCase()
   let halfstrlength = Math.floor((lowerCaseStr.length)/ 2)
   let halfstrfromStart = lowerCaseStr.slice(0, halfstrlength)
   
   // divide by half and slice first half 
   //slices the other part equal to legth of first part
   //checks same if yes return true else false
   console.log(halfstrlength)
   console.log(halfstrfromStart)
     return true;
   }
   
   palindrome("eye");
   palindrome("0_0 (: /-\ :) 0-0")
   palindrome("A man, a plan, a canal. Panama")