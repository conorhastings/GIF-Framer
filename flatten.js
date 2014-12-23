array = [1,2,3,4,[5,6,[1,3]],1]


function flatten(array,output){
array.forEach(function(item){
if(item instanceof Array == true){
			flatten(item,output)
		}
		else{
			output.push(item)
		}

	})
	return output
}








