function getAlerted(){

	var person1 ={name:'Daivik', age:14, location:'Cary', graduated: true};
	var person2 ={name:'Rajib', age:50, location:'Georgia', graduated: false};
	var person3 ={name:'Dibya', age:16, location:'Millburn', graduated: true};

	//uses every single person in array
	var people = [person1,person2,person3];
	for(var i = 0; i < people.length; i++){
		if(people[i].graduated == true){
			document.getElementById('demo').innerHTML += people[i].name + '' + 
			" is graduated." + "<br>";
		}else{
			document.getElementById('demo').innerHTML += people[i].name + '' + 
			" is not  graduated." + "<br>";
		}

	}

}