# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName
FROM Categories
JOIN
Products
ON Categories.CategoryID = Products.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
FROM Orders
JOIN
Shippers
ON Orders.OrderDate < '1997-01-09'
AND Orders.shipperID == Shippers.ShipperID

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT prod.ProductName, ord.Quantity , ord.OrderID
FROM OrderDetails ord
JOIN
Products prod
ON prod.ProductID == ord.ProductID
and ord.OrderID == 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT ord.OrderID, cus.CustomerName , emp.LastName
FROM Orders ord
JOIN
Employees emp
JOIN
Customers cus
ON ord.CustomerID == cus.CustomerID
and ord.EmployeeID == emp.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
