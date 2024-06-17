const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const flag =-1;
	sampleObject.map((item)=>{
		if(key===item){
			return true;
		}
	})
	
	if(flag===-1){
		return flase;
	}
		
}

// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
