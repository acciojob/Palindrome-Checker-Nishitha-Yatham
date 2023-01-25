// complete the given function

function palindrome(str){
     const len=str.length-1;
	for(let i=0;i<len/2;i++)
		{
			let x=str[i];
			let y=str[len-1];
			if(x!=y){
				return false;
			}
		}
	return true;
}
module.exports = palindrome
