function shirts (description, available, size, image) {
	this.description = description;
	this.available = available;
	this.size = size;
	this.image = image;
}

var shirtsArray = []

var father = new shirts('Darth Vadar with Mickey Mouse ears.', 42, 'medium', "img/father.jpg")
var home = new shirts('Grey t-shirt with a white disney castle logo.', 63, 'medium', 'img/home.jpg')
var noMatchingShirts = new shirts('Grey t-shirt.', 12, 'medium', "img/nomatchingshirts.jpg")
var alphabet = new shirts('Grey-Blue t-shirt with the "real" alphabet.', 92,'medium', "img/realalphabet.jpg")
var shapes = new shirts('Light grey t-shirt with pizzas of various sizes', 43, 'medium', "img/shapessizes.jpg")
var talent = new shirts('Dark grey t-shirt with funny meme', 54, 'medium', "img/talent.jpg")

shirtsArray.push(father)
shirtsArray.push(home)
shirtsArray.push(noMatchingShirts)
shirtsArray.push(alphabet)
shirtsArray.push(shapes)
shirtsArray.push(talent)

for(i = 0; i < shirtsArray.length; i++) {
	//go through the array and create variables and textNodes for each of the elements
	var tDescription = document.createTextNode(shirtsArray[i].description)
	var tAvailable = document.createTextNode(shirtsArray[i].available)
	var tSize = document.createTextNode(shirtsArray[i].size)
	var tImage = shirtsArray[i].image
	var tButton = document.createTextNode("Get It Now!")
	//create the new nodes to attach to the main shirts div
	var newColumn = document.createElement("div")
	var newDiv = document.createElement("div")
	var descriptionH1 = document.createElement("h1")
	var availableH4 = document.createElement("h4")
	var sizeH4 = document.createElement("h4")
	var image = document.createElement("img")
	var button = document.createElement("button")
	//append the new nodes to the Elements that were created above
	descriptionH1.appendChild(tDescription)
	availableH4.appendChild(tAvailable)
	sizeH4.appendChild(tSize)
	button.appendChild(tButton)
	button.className = "btn btn-primary btn-lg"
	image.src = tImage
	image.className = "img-responsive"
	//bootstrap
	newColumn.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + i + " thumbnail"
	newDiv.appendChild(descriptionH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(availableH4)
	newDiv.appendChild(button)
	newColumn.appendChild(newDiv)

	document.getElementById("shirts").appendChild(newColumn)
}