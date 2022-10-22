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