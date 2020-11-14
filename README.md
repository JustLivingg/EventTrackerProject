# EventTrackerProject

### Skill Distillery Week 11 Homework Assignment

Skincare Product Tracker

### Overview

I decided to make a RESTful Services event tracker on my girlfriends Skincare products. This will be my first project that I wanted to be able to continuously work on an improve on with the more knowledge I gain. Skincare is something she really cares for so applying my knowledge for coding to find a way to track the type of products she uses, and eventually she will be able to write comments to say what they did for her skin. A skincare diary/tracker if you will.

This foundations of this project is REST API and eventually will be integrated with an Angular front end with Javascript.  

### Using the site with POSTMAN
- Get all
  ```
  GET http://localhost:8084/api/products
  ```
- Get product by Id.
  ```
  GET http://localhost:8084/api/products/{productId}
  ```
- Add/Create product
  ```
  POST http://localhost:8084/api/products
  ```
- Update product
  ```
  PUT http://localhost:8084/api/products/{productId}
  ```
- Delete product
  ```
  DEL ttp://localhost:8084/api/products/{productId}
  ```

Example JSON for updating Product

```
{
    "brand": "CeraVe",
    "name": "Moisturizing Cream",
    "size": 539,
    "expirationDate": "2021-04-02T23:00:00",
    "timeuse": "AM/PM",
    "quantity": 1,
    "texture": "Cream"
}
```

The last added product was 22, so the next product added will be 23.

Database Structure

![ER Diagram](jliv/SD/Java/EventTracker/pictures/dbtable.png)

Default SQL Database

![SQL Table](jliv/SD/Java/EventTracker/pictures/mysqldb.png)

### Technologies Used
- Spring Boot, Sprint REST, Spring Tool Suite
- MySQL, MySQL Workbench
- Java, JPA Repository
- Git / Github
