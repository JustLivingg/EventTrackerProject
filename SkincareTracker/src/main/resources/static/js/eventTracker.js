window.addEventListener('load', function(){
	console.log('Script loaded');
	
	showAllProducts();
	// init();
});


function init() {
	console.log('in init()');
	//TODO: Set up event listeners for buttons.
	// Find product By ID ------------------
	document.productForm.productButton.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('Product ID found!');
		letProductId = document.productForm.productId.value;
		findById(productId);
	});

	//Create Product -----------------------
	let createProductButton = document.createProductForm.createProductButton;
	createProductButton.addEventListener('click', function(e) {

		e.preventDefault();
		console.log('Product created');
		let form = document.createProductForm
		var productData = {
			brand: form.brand.value,
			name: form.name.value,
			size: form.size.value,
			expirationDate: form.expirationDate.value,
			timeuse: form.timeuse.value,
			quantity: form.quantity.value,
			texture: form.texture.value
		}
		createProduct(productData);
	});


	//Update Product ----------------
	let updateProductButton = document.getElementById('updateProductButton');
	updateProductButton.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('Updated Product.');
		let form = document.createProductForm;
		var updatedProductData = {
			brand: form.brand.value,
			name: form.name.value,
			size: form.size.value,
			expirationDate: form.expirationDate.value,
			timeuse: form.timeuse.value,
			quantity: form.quantity.value,
			texture: form.texture.value
		}
		updateProduct(form.id.value, updatedProductData);
	});

	//Delete Product ----------------------
	document.productForm.deleteProductButton.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('Product deleted.');
		let productId = document.productForm.productId.value;
		deleteProduct(productId);
	});

};


//Functions for the HTML page. 

function findById(productId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/products/" + productId, true);
	xhr.onreadystatechange = function() {
		console.log(JSON.stringify(xhr));
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let product = JSON.parse(xhr.responseText);
				return product;
			} else {
				console.log("Find by Id is currently not working.");
			}
		}
	}
	xhr.send(null);
};

function showAllProducts() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/products/", true);
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			console.log(xhr);
			if (xhr.responseText) {
				let products = JSON.parse(xhr.responseText);
				console.log(products);
				displayProducts(products);
			} else {
				console.log("Show all products is currently broken.");
			}
		}
	}
	xhr.send(null);
};

function addProduct(e) {
 let form = document.newProductForm;
 let newProduct = {
	 brand: form.brand.value,
	 name: form.name.value,
	 size: form.size.value,
	 expirationDate: form.expirationDate.value,
	 timeuse: form.timeuse.value,
	 quantity: form.quantity.value,
	 texture: form.texture.value
 };
 console.log(newProduct);
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'api/products');
   xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let savedProduct = JSON.parse(xhr.responseText);
        displayFilm(savedProduct);
      }
      else {
        console.error('Error creating product, status=' + xhr.status);
        console.error(xhr.responseText);
        displayError('Invalid product data.');
      }
    }
  };
  xhr.setRequestHeader('Content-type','application/json')
  xhr.send(JSON.stringify(newProduct));
};


function deleteProduct(event) {
	event.preventDefault();
		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", "api/products/" + this.product.id, true);
		xhr.onload = function() {
			if (xhr.readyState === 4 && xhr.status > 199 && xhr.status < 300) {
				console.log("success");
				showAllSites();
				} else {
				console.error("delete failed");
			}
		}
		xhr.send(null);
};

