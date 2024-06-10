// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

// $w.onReady(function (event) 
// {


// }


export function button3_mouseIn(event) {
	let fadeOptions = {
  		"duration":   100,
  		"delay":      0
	};
	
	$w('#button4').show("zoom", fadeOptions);
    
}


export function button4_mouseOut(event) {
	let fadeOptions = {
  		"duration":   400,
  		"delay":      0
	};
	
	$w('#button4').hide("zoom", fadeOptions);
}



/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function button2_mouseIn(event) 
{
	let fadeOptions = {
  		"duration":   100,
  		"delay":      0
	};
	
	$w('#button5').show("zoom", fadeOptions);
	
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function button5_mouseOut(event) 
{
	let fadeOptions = {
  		"duration":   400,
  		"delay":      0
	};
	
	$w('#button5').hide("zoom", fadeOptions);

}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function button1_mouseIn(event) {
	let fadeOptions = {
  		"duration":   100,
  		"delay":      0
	};
	
	$w('#button6').show("zoom", fadeOptions);
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function button6_mouseOut(event) {
	let fadeOptions = {
  		"duration":   400,
  		"delay":      0
	};
	
	$w('#button6').hide("zoom", fadeOptions);
}