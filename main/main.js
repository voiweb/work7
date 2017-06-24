
module.exports = function main(email, suffixes) {
  // Write your code here
  var arr = email.split('@');
  var str = arr[1];
  if (str == suffixes)
		return true;
  else
		return false;
 
};
