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
	
	///Methods start here.
	
	@Override
	public List<Product> getAllProducts() {
		return repo.findAll();
	}

	@Override
	public Product createProduct(Product product) {
		repo.saveAndFlush(product);
		return product;
	}

//	###TODO Stub out method for updating.....
	
	@Override
	public boolean delete(Integer productId) {
		boolean deleted = false;
		Optional<Product> prodOpt = repo.findById(productId);
		if(prodOpt.isPresent()) {
			repo.delete(prodOpt.get());
			repo.deleteById(productId);
			deleted = true;
		}
		return deleted;
	}
}
