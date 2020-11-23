package com.skilldistillery.skincare.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.skilldistillery.skincare.entities.Product;

public interface SkincareRepository extends JpaRepository<Product, Integer> {

}
