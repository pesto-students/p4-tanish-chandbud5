-- create a table
CREATE TABLE CITIES (
  city char(20) NOT NULL,
  state char(20) NOT NULL
);
CREATE table WAREHOUSES(
   wid integer primary key,
   wname char(30),
   location char(20),
   city char(20) references CITIES(city)
);
CREATE TABLE STORES(
  sid integer primary key,
  storename char(30),
  location char(20),
  warehouse char(20) references WAREHOUSES(wid)
);
CREATE TABLE CUSTOMER (
  cno integer primary key,
  cname char(50),
  address varchar(50),
  city char(20)
);
CREATE TABLE ORDERINFO(
  ono integer primary key,
  ordered_by integer references CUSTOMER(cno),
  odate date
);
CREATE TABLE ITEMS(
  itemno integer primary key,
  itemName text,
  weight decimal (5,2),
  price decimal (5,2)
);
CREATE TABLE ITEMS_ORDERED(
  itemno integer references ITEMS(itemno),
  itemname char(50),
  orderno integer references ORDERINFO(ono),
  quantity integer,
  primary key(itemno, orderno)
);
CREATE TABLE STORE_ITEMS(
  store integer references STORES(sid),
  item integer references ITEMS(itemno),
  quantity integer
);

-- insert some values 
INSERT INTO CITIES VALUES ('Pune', 'Maharashtra');
INSERT INTO CITIES VALUES ('Vadodara', 'Gujarat');
INSERT INTO ITEMS VALUES (1, "KEYBOARD", 250.00, 500.00);
INSERT INTO ITEMS VALUES (2, "MOUSE", 100.00, 300.00);
INSERT INTO WAREHOUSES VALUES (1, "WEST WAREHOUSE", "Highway", 'Pune');
INSERT INTO WAREHOUSES VALUES (2, "Amazon warehouse", "Cross road", 'Vadodara');
INSERT INTO WAREHOUSES VALUES (3, "Flipkart warehouse", "City center", 'Pune');
INSERT INTO CUSTOMER VALUES(1, "Patil", "Opp City Hospital, India", 'Pune');
INSERT INTO CUSTOMER VALUES(2, "Patel", "Near Railway Station, India", 'Vadodara');
INSERT INTO CUSTOMER VALUES(3, "Shrivastav", "Twin towers, India", 'Pune');
INSERT INTO ORDERINFO VALUES(1,  1, '2022-10-05');
INSERT INTO ORDERINFO VALUES(2,  1, '2022-10-05');
INSERT INTO ORDERINFO VALUES(3,  2, '2022-10-05');
INSERT INTO ITEMS_ORDERED VALUES(1, "KEYBOARD", 1, 5);
INSERT INTO ITEMS_ORDERED VALUES(2, "MOUSE", 1, 5);
INSERT INTO ITEMS_ORDERED VALUES(1, "KEYBOARD", 2, 10);
INSERT INTO ITEMS_ORDERED VALUES(2, "MOUSE", 3, 15);
INSERT INTO STORES VALUES(1, "D-Mart", "Pune", 1);
INSERT INTO STORES VALUES(2, "Jio-Mart", "Vadodara", 2);
INSERT INTO STORES VALUES(3, "D-Mart", "Vadodara", 1);
INSERT INTO STORE_ITEMS VALUES (1, 1, 50);
INSERT INTO STORE_ITEMS VALUES (2, 1, 100);
INSERT INTO STORE_ITEMS VALUES (1, 2, 125);