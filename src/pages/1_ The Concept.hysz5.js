// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});




/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function box3_mouseOut(event) {
	
	let effectOptions = {
		"duration": 10,
		"delay": 100
	};
	let dalay = {
		"duration": 500,
		"delay": 500
	};

	$w('#box3').hide("zoom", effectOptions);
	// $w('#image4').hide("zoom", effectOptions);
	//$w('#image5').show("none", dalay);
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function box2_mouseIn(event) 
{
	let effectOptions = {
	"duration": 10,
	"delay": 100
	};

	let dalay = {
		"duration": 500,
		"delay": 500
	};

	$w('#box3').show("zoom", effectOptions);

	//$w('#image4').show("zoom", effectOptions);

	//$w('#image5').hide("none", dalay);
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function box3_click(event) {
	
	let effectOptions = {
	"duration": 10,
	"delay": 100
	};

	$w('#box4').show("fade", effectOptions);
	$w('#vectorImage3').show("fade", effectOptions);

}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage3_click(event) {
	let effectOptions = {
	"duration": 10,
	"delay": 100
	};

	
	$w('#box4').hide("fade", effectOptions);
	$w('#vectorImage3').hide("fade", effectOptions);
}