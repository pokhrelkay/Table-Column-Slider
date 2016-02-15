
# Features
Slide selected columns of a table <br>
Slide Directions: Left/Right

<h1>How To Use</h1>

<b>Initialize</b>

	tableColumnSlider.init();
	
<b>Configure Options</b>
  
    tableColumnSlider.init({
  	  wrapper: postListTable, // select your table
  	  columnClass: 'addToSlide', // class name in each thead>th to include that column in the slide 
  	  showDefault: 'showDefault', // class name in each thead>th to show that column initially
  	  next: '.next', // next button selector
  	  prev: '.prev' // previous button selector
  	});
