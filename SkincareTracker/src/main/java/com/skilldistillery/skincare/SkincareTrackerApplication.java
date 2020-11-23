package com.skilldistillery.skincare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SkincareTrackerApplication extends SpringBootServletInitializer{

	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(SkincareTrackerApplication.class);
	  }
	
	public static void main(String[] args) {
		SpringApplication.run(SkincareTrackerApplication.class, args);
	}

}
