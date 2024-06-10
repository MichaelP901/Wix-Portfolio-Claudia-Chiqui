// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	$w("#box1").hide();
	$w("#box2").hide();
	$w("#box3").hide();
	$w("#box4").hide();

	$w("#vectorImage3").hide();

});



export function vectorImage3_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w("#box1").hide();
	$w("#box2").hide();
	$w("#box3").hide();
	$w("#box4").hide();
	// $w("#vectorImage3").hide();
	$w("#gallery1").show("fade", fadeOptions);
}



/**
*	Adds an event handler that runs when an item in a gallery is
 clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onItemClicked)
*	 @param {$w.GalleryItemClickedEvent} event
*/
export function gallery1_itemClicked(event) 
{
	
	$w("#gallery1").onItemClicked( (event) => {
  		let itemDescription = event.item.description; // "Description"
  		let itemIndex = event.itemIndex;              // 3

		  let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

		if (itemIndex == 3)
		{


			$w('#box1').show();
			$w('#vectorImage3').show();
			
			// $w('#gallery1').hide();
		}
		else if (itemIndex == 2)
		{
			$w('#box2').show();
			$w('#vectorImage3').show();
			
		}
		else if (itemIndex == 1)
		{
			$w('#box3').show();
			$w('#vectorImage3').show();
			
		}
		else if (itemIndex == 0)
		{
			$w('#box4').show();
			$w('#vectorImage3').show();
			
		}
	} );
	

}


/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/





/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function image23_mouseIn(event) {
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box123').show("fade", fadeOptions);
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function box123_mouseOut(event) {
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box123').hide("fade", fadeOptions);
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function image24_mouseIn(event) {
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box124').show("fade", fadeOptions);
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function box124_mouseOut(event) {
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box124').hide("fade", fadeOptions);
}



/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage10_click(event) 
{
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box20').hide("fade", fadeOptions);
	$w('#vectorImage10').hide();
}

export function button1_click(event) 
{
	let fadeOptions = {
		"duration":   400,
  		"delay":      200
	};

	$w('#box20').show("fade", fadeOptions);
	$w('#vectorImage10').show();
}


/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage13_click(event) {
	$w('#box4').hide();
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage12_click(event) {
	$w('#box2').hide();
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage14_click(event) {
	$w('#box3').hide();
}