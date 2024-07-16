# Qingtian-Liao-Xiangran-Zeng-Online-Media-Design-

Description about the algorithm used:

The function drawDandelion is used to draw the dandelions, it has different sections:
- stems and seeds are drawn using for-loops to iterate and create multiple dandelions at different positions with different sizes.
- ctx.moveTo: define the position of the point to move to (without drawing anything)
- ctx.lineTo: draw a line from the current position of the drawing cursor to a new specified point
- we mainly used ctx.moveTo and ctx.lineTo to draw stems on the ground and the seeds
- ctx.arc: create circles at the top of the stems which simulate dandelion seeds.
- stems are drawn by creating a series of vertical lines
- seeds stems are drawn by creating a series of circles at the top of the stems, the size of the circles increase with each iteration of the loop.
- we added flying dandelion seeds by creating a number of small circles that move vertically across the canvas and each of the circle has a vertical line as its own "stem".
- we used Math.random to generate random coordinates for the seeds that are flying. 


Description about the technology used:

HTML and CSS are used to create the canvas (HTML) and define its layout(CSS).
JavaScript is used to draw the dandelions on the canvas and manipulate its output dynamically. 

Description about the end result:
The canvas is black and the dandelions are white. 
We have six big dandelions growing on the ground with different height.
There are flying seeds of the dandelions all over the canvas and when the user reloads the page, those flying seeds will appear at a new position. 
