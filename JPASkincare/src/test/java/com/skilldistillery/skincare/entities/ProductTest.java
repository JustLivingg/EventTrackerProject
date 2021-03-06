package com.skilldistillery.skincare.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProductTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Product product;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("SkincarePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		product = em.find(Product.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		product = null;
	}
	
	@Test
	void test() {
		assertNotNull(product);
		assertEquals("Naturium", product.getBrand());
		assertEquals("Retinol Complex Serum", product.getName());
		assertEquals(30, product.getSize());
		assertEquals(2021, product.getExpirationDate().getYear());
		assertEquals("PM", product.getTimeuse());
		assertEquals(1, product.getQuantity());
		assertEquals("Serum", product.getTexture());
	}

}
