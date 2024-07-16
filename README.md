# Qingtian-Liao-Xiangran-Zeng-Online-Media-Design-

Description about the algorithm used:

HTML and CSS are used to create the canvas and define its layout.
The JavaScript code is used to draw the dandelions on the canvas. 

The function drawDandelion is used to draw the dandelions, it has different sections:
- Stems and seeds are drawn using for-loops to iterate and create multiple dandelions at different positions with different sizes.
- ctx.moveTo: define the position of the point to move to (without drawing anything)
- ctx.lineTo: draw a line from the current position of the drawing cursor to a new specified point
- we mainly used ctx.moveTo and ctx.lineTo to draw stems on the ground and the seeds
- ctx.arc: create circles at the top of the stems which simulate dandelion seeds.
- stems are drawn by creating a series of vertical lines
- seeds stems are drawn by creating a series of circles at the top of the stems, the size of the circles increase with each iteration of the loop.
- 
- 
- 


Description about the technology used:
Description about the end result:
