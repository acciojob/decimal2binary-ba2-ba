function decimalToBinary(num) {
  //Write you code here
	let binary="";
	while(num>0)
		{
			let dig =num%2;
			binary=binary+dig;
		}
  return binary;
}

window.decimalToBinary = decimalToBinary;
