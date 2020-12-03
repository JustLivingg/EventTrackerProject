package com.skilldistillery.skincare.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skincare.entities.Product;
import com.skilldistillery.skincare.services.SkincareService;

@CrossOrigin({"*", "http://localhost:4205"})
@RequestMapping("api")
@RestController
public class SkincareController {

	@Autowired
	private SkincareService skinSvc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
	
	@GetMapping("products")
	public List<Product> findAllProducts(){
		return skinSvc.getAllProducts();
		}
	
	@GetMapping("products/{productId}")
	public Product findById(@PathVariable Integer productId) {
		return skinSvc.findById(productId);
	}
	
	@PostMapping("products")
	public Product create(@RequestBody Product product, HttpServletRequest request, HttpServletResponse response) {

		try {
			skinSvc.createProduct(product);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(product.getId());
		} catch (Exception e) {
			response.setStatus(400);
		}

		return product;
	}
	
	@PutMapping("products/{productId}")
	public Product updateProduct(@PathVariable Integer productId, HttpServletResponse response, @RequestBody Product product) {
		try {
			product = skinSvc.updateProduct(productId, product);
			if (product == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(404);
			product = null;
		}

		return product;
	}
	
	@DeleteMapping("products/{productId}")
	public void deleteProduct(@PathVariable Integer productId,
						HttpServletResponse response
			) {
		try {
			boolean deleted = skinSvc.delete(productId);
			if (deleted) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
		response.setStatus(400);
		}
	}

}
