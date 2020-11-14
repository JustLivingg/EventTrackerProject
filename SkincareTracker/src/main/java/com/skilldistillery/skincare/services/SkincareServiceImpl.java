package com.skilldistillery.skincare.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.skincare.entities.Product;
import com.skilldistillery.skincare.repositories.SkincareRepository;

@Service
public class SkincareServiceImpl implements SkincareService {

	@Autowired
	private SkincareRepository repo;

	/// Methods start here.

	@Override
	public List<Product> getAllProducts() {
		return repo.findAll();
	}
	
	@Override
	public Product findById(Integer productId) {
		Optional<Product> prodOpt = repo.findById(productId);
		Product prod = null;
		if(prodOpt.isPresent()) {
			prod = prodOpt.get();
		}
		return prod;
	}
	
	@Override
	public Product createProduct(Product product) {
		repo.saveAndFlush(product);
		return product;
	}


	public Product updateProduct(Integer productId, Product product) {
		Optional<Product> prodOpt = repo.findById(productId);
		Product updatedProduct = null;
		if (prodOpt.isPresent()) {
			updatedProduct = prodOpt.get();
			if (product.getBrand() != null) {
				updatedProduct.setBrand(product.getBrand());
			}
			if (product.getName() != null) {
				updatedProduct.setName(product.getName());
			}
			if (product.getSize() != 0) {
				updatedProduct.setSize(product.getSize());
			}
			if (product.getExpirationDate() != null) {
				updatedProduct.setExpirationDate(product.getExpirationDate());
			}
			if (product.getTimeuse() != null) {
				updatedProduct.setTimeuse(product.getTimeuse());
			}
			if (product.getQuantity() != 0) {
				updatedProduct.setQuantity(product.getQuantity());
			}
			if (product.getTexture() != null) {
				updatedProduct.setTexture(product.getTexture());
			}
			repo.flush();
		}
		return updatedProduct;
	}

	@Override
	public boolean delete(Integer productId) {
		boolean deleted = false;
		Optional<Product> prodOpt = repo.findById(productId);
		if (prodOpt.isPresent()) {
			repo.delete(prodOpt.get());
//			repo.deleteById(productId);
			deleted = true;
		}
		return deleted;
	}
}
