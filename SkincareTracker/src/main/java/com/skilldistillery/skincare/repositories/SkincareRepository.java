package com.skilldistillery.skincare.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skincare.entities.Product;

public interface SkincareRepository extends JpaRepository<Product, Integer> {

}
