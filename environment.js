var User = function() {
	this.direction = direction,
	this.x = x,
	this.y = y;
};

var Map = function(xsize, ysize) { 

	// Creates the space.
	
	this.size = size,
	this.wallGrid = new UnitArray(xsize, ysize);
};

var UnitArray = function(name, xsize, ysize) { 
	
	//Creates the object containers for the space
	
	var this.name = name,
	var this.field = new Array(xsize),
	var i = 0;
	while i < xsize
		this.field[i] = new Array(ysize);
	console.log("UnitArray" + name + ": ");
	console.log("x-dimension: " + xsize);
	console.log("y-deminsion: " + ysize);
};

var UnitArray.Vertex = function(xCoord, yCoord) {
	var this.xCoord = xCoord,
	var this.yCoord = yCoord;
	var this.vertexID = convertVertexID([xCoord, yCoord]);
		// This will generate a unique ID for every possible pair of
		// coordinates in any geerated field, such that the original
		// coordinates are gettable from the ID itself.

	var this.connectedVerticies = []; // Contains list of verticies connected
									  // to this one by walls.
};

var Vertex.convertVertexID = function(input) { 

	//converts a vertex ID# to [xCoord, yCoord]
	
	if input.type == Array
		return (yCoord / (10*(this.prototype.xsize.length))) - xCoord;
	else if input.type == Number
		return (xCoord + yCoord * (10*(this.prototype.xsize.length)))
};

var Vertex.applyConnection = function(vertexID_1, vertexID_2) {

	// Connects two verticies to each other with a wall.

	if vertexID_1 && vertexID_2
		vertex = new Vertex(xCoord, yCoord);
}