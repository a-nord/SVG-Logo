class Shape {
	constructor(text, color, shapeColor) {
		this.text = text;
		this.color = color;
		this.shapeColor = shapeColor;
	}
}

// circle
class Circle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}

	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
		  <circle cx="50%" cy="50%" r="80" fill="${this.shapeColor}" />
		  <text x="50%" y="50%" font-size="50" text-anchor="middle" fill="${this.color}">
        ${this.text}
      </text>
		</svg>`;
	}
}

// triangle
class Triangle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}

	render() {
		return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,10 200,150 10,150" fill="${this.shapeColor}" />
		<text x="50%" y="60%" font-size="50" text-anchor="middle" fill="${this.color}">
    ${this.text}
    </text>
	</svg>`;
	}
}

// square
class Square extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}

	render() {
		return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" font-size="50" text-anchor="middle" fill="${this.color}">
        ${this.text}
        </text>
        </svg>`;
	}
}


let generateShape = (data) => {	
	switch (data.shape) {
		case "circle":
			return new Circle(data.text, data.textColor, data.shapeColor);
		case "triangle":
			return new Triangle(data.text, data.textColor, data.shapeColor);
		case "square":
			return new Square(data.text, data.textColor, data.shapeColor);
	}
};
module.exports = { Shape, Circle, Triangle, Square, generateShape };