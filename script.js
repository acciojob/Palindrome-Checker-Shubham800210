// complete the given function

function palindrome(str){
	var len = str.trim().toLowerCase().length;
   for(var i=0;i<len/2;i++){

	   if(str[i] !== str[len - 1 - i]){
		   return false;
	   }
   }
	return true;
	
	// let a=str.trim().toLowerCase().length;
	
	//  // const len = str.length;

 //    for (let i = 0; i < a / 2; i++) {

       
 //        if (str[i] !== str[a - 1 - i]) {
 //            return true;
 //        }
 //    }
 //    return false;
}
module.exports = palindrome
