package com.skilldistillery.skincare.services;

import java.util.List;

import com.skilldistillery.skincare.entities.Product;

public interface SkincareService {

	List<Product> getAllProducts();
	
	public Product findById(Integer productId);
	
	public Product createProduct(Product product);
	
	public Product updateProduct(Integer productId, Product product);
	
	public boolean delete(Integer productId);
	
}
