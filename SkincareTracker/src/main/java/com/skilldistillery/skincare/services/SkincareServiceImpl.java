package com.skilldistillery.skincare.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.skincare.entities.Product;
import com.skilldistillery.skincare.repositories.SkincareRepository;

@Service
public class SkincareServiceImpl implements SkincareService {

	@Autowired
	private SkincareRepository repo;
	
	@Override
	public List<Product> getAllProducts() {
		return repo.findAll();
	}

}
