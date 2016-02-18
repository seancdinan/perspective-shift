function getMouseCoords(){
	return [event.clientX, event.clientY]
}

var text = 'X: ' + getMouseCoords()[0] + 'Y: '+ getMouseCoords()[1];

document.getElementByClass('ball1').innerHTML = 'TESTER';