//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

var newDiv = document.createElement('div');
const oldDiv = document.getElementById('a-1');
oldDiv.appendChild(newDiv)
newDiv.className = 'square';

newDiv.addEventListener('click', (e) => { 
	const input = document.querySelector('.question-label')
	if (input.textContent === "Question 1: if you click the square below the text changes 'x' to 'o' or vice versa") {
	 input.textContent = "Question 1: if you click the square below the text changes 'o' to 'o' or vice versa"
	} else {
		input.textContent = "Question 1: if you click the square below the text changes 'x' to 'o' or vice versa"
};
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
const ul = document.createElement('ul');
const div2 = document.getElementById('a-2');

for (i = 0; i <= colors.length -1; i++) {
    let li = document.createElement('li');
    let  btn = document.createElement("BUTTON");
	 li.innerHTML = colors[i];
	 ul.appendChild(li);
	 li.appendChild(btn);
	 btn.className = 'remove';
	 btn.textContent = 'remove';

};

div2.appendChild(ul);

div2.addEventListener('click', (e) => {
        const li = event.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
      });

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const calculateSphere = () => {
let radius = document.getElementById('radius');
let equationA = 4 * Math.PI * Math.pow(radius.value, 2);
let equationV = (4/3) * Math.PI * Math.pow(radius.value, 3);
let a = document.getElementById('area').value = equationA;
let v = document.getElementById('volume').value = equationV;

 };

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 

let div4 = document.getElementById('a-4');
let ul4 = document.createElement('ul');
let li = document.createElement('li');

let btn1 = document.createElement("BUTTON");
let btn2 = document.createElement("BUTTON");
let  btn3 = document.createElement("BUTTON");

div4.appendChild(ul4);
ul4.appendChild(li);


li.appendChild(btn1);
li.appendChild(btn2);
li.appendChild(btn3);


btn1.className ='question4';
btn2.className = 'question4';
btn3.className = 'question4';


btn1.textContent ='Hide1';
btn2.textContent ='Hide2';
btn3.textContent ='Hide3';



btn1.addEventListener('click', () => {
	let question1 = document.getElementById('a-1');
	
	if (question1.style.display == 'block') {
	    question1.style.display = 'none';
	    btn1.textContent = 'Show'
 } else { 
 	question1.style.display = 'block';
 	btn1.textContent = 'Hide1'
	
}
});

btn2.addEventListener('click', () => {
	let question2 = document.getElementById('a-2');
	
	if (question2.style.display == 'block') {
	    question2.style.display = 'none'; 
	    btn2.textContent = 'Show'
 } else { 
	question2.style.display = 'block';
	btn2.textContent = 'Hide2'
}
});

btn3.addEventListener('click', () => {

	let question3 = document.getElementById('a-3');
	
	if (question3.style.display == 'block') {
	    question3.style.display = 'none'; 
	    btn2.textContent = 'Hide3'
 } else {
    question3.style.display = 'block'
	btn3.textContent = 'Hide3';
}
});

//The buttons need to be pressed twice for them to hide the questions, I'm not sure why that is. Other than that they work properly. 
