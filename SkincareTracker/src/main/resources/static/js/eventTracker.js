window.addEventListener('load', function(){
	console.log('Script loaded');
	getAllProducts();
	init();
	
});


function init() {
	
	
	console.log('in init()');
	//TODO: Set up event listeners for buttons.
	//Find product By ID ------------------
	document.productForm.productButton.addEventListener('click', function(event) {
		event.preventDefault();
		var productId = document.productForm.productId.value;
		if (!isNaN(productId) && productId > 0) {
		findById(productId);
		}
	  });

	//Create Product -----------------------

	document.newProductForm.submit.addEventListener('click', function(evt){
		evt.preventDefault();
		addProduct(evt);
	  });


	//Update Product ----------------
	// let updateProductButton = document.getElementById('updateProductButton');
	// updateProductButton.addEventListener('click', function(e) {
	// 	e.preventDefault();
	// 	console.log('Updated Product.');
	// 	let form = document.createProductForm;
	// 	var updatedProductData = {
	// 		brand: form.brand.value,
	// 		name: form.name.value,
	// 		size: form.size.value,
	// 		expirationDate: form.expirationDate.value,
	// 		timeuse: form.timeuse.value,
	// 		quantity: form.quantity.value,
	// 		texture: form.texture.value
	// 	}
	// 	updateProduct(form.id.value, updatedProductData);
	// });

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
	xhr.open('GET', "api/products/" + productId);
	xhr.onreadystatechange = function() {
		console.log(JSON.stringify(xhr));
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let product = JSON.parse(xhr.responseText);
				displayProduct(product);
			} else {
				console.log("Product not found.");
				displayError("Product not found.")
			}
		}
	}
	xhr.send(null);
};

function displayError(msg) {
	let div = document.getElementById('productData');
	div.textContent = msg;
  };

function displayProduct(product) {
	let dataDiv = document.getElementById('productData');
	dataDiv.textContent='';
	let h3 =document.createElement('h3');
	h3.textContent = product.brand;
	dataDiv.appendChild(h3);
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	li.textContent = product.name;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = product.size;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = product.expirationDate;
	dataDiv.appendChild(ul);
}

function getAllProducts() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/products/");
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			if (xhr.responseText) {
				let products = JSON.parse(xhr.responseText);
				console.log(products);
				displayProducts(products);
			} else {
				console.log("Show all products is currently broken.");
			}
		}
	};
	xhr.send();
}

function displayProducts(products) {
	var table = document.createElement('table');
	table.style.border = 'solid';
	var head = document.createElement('thead');
	var headTr = document.createElement('tr');
	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var th4 = document.createElement('th');
	var th5 = document.createElement('th');
	var th6 = document.createElement('th');
	var th7 = document.createElement('th');
	var th8 = document.createElement('th');
	th1.textContent = 'Id';
	th2.textContent = 'Brand';
	th3.textContent = 'Name';
	th4.textContent = 'Size';
	th5.textContent = 'Expiration Date';
	th6.textContent = 'Time Use';
	th7.textContent = 'Quantity';
	th8.textContent = 'Texture';
	headTr.appendChild(th1);
	headTr.appendChild(th2);
	headTr.appendChild(th3);
	headTr.appendChild(th4);
	headTr.appendChild(th5);
	headTr.appendChild(th6);
	headTr.appendChild(th7);
	headTr.appendChild(th8);
	head.appendChild(headTr);
	table.appendChild(head);
	var tBody = document.createElement('tbody');
	for(let i = 0; i < products.length; i++) {
	  var tr = document.createElement('tr');
	  var td1 = document.createElement('td');
	  var td2 = document.createElement('td');
	  var td3 = document.createElement('td');
	  var td4 = document.createElement('td');
	  var td5 = document.createElement('td');
	  var td6 = document.createElement('td');
	  var td7 = document.createElement('td');
	  var td8 = document.createElement('td');
	  td1.textContent = products[i].id;
	  td2.textContent = products[i].brand;
	  td3.textContent = products[i].name;
	  td4.textContent = products[i].size;
	  td5.textContent = products[i].expirationDate;
	  td6.textContent = products[i].timeuse;
	  td7.textContent = products[i].quantity;
	  td8.textContent = products[i].texture;
	  td1.style.border='solid';
	  td2.style.border='solid';
	  td3.style.border='solid';
	  td4.style.border='solid';
	  td5.style.border='solid';
	  td6.style.border='solid';
	  td7.style.border='solid';
	  td8.style.border='solid';
	  tr.appendChild(td1);
	  tr.appendChild(td2);
	  tr.appendChild(td3);
	  tr.appendChild(td4);
	  tr.appendChild(td5);
	  tr.appendChild(td6);
	  tr.appendChild(td7);
	  tr.appendChild(td8);
	  tBody.appendChild(tr);
	}
	table.appendChild(tBody);
	document.body.appendChild(table);
};


function addProduct(e) {
 let form = document.newProductForm;
 let newProduct = {
	 brand: form.brand.value,
	 name: form.name.value,
	 size: form.size.value,
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
        getAllProducts();
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


function deleteProduct(productId) {
		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", "api/products/" + productId, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				let data = JSON.parse(xhr.responseText);
				console.log('Successfully deleted Product.')
				} else {
				console.error("delete failed");
			}
		}
		xhr.send(null);
};

