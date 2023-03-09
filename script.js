// complete the given function

function palindrome(str){
	// var len = str.trim().toLowerCase().length;
 //   for(var i=0;i<len/2;i++){

	//    if(str[i] !== str[len - 1 - i]){
	// 	   return false;
	//    }
 //   }
	// return true;
	
	str=str.toLowerCase();
	for(let i=0 ; i<=str.length/2; i++)
		{
		let start= str.charAt(i);
	let end = str.charAt(str.length-1-i);
		
			if(start!=end)
			{
				return false;
			}
		}
	return true;
}
module.exports = palindrome
