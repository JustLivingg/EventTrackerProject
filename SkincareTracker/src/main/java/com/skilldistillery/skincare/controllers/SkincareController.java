package com.skilldistillery.skincare.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skincare.entities.Product;
import com.skilldistillery.skincare.services.SkincareService;

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
}
