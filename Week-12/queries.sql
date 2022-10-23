-- fetch some values
SELECT * FROM ITEMS WHERE weight=(SELECT min(weight) from ITEMS);
SELECT * FROM WAREHOUSES WHERE city="Pune";
SELECT * FROM ITEMS_ORDERED having orderno IN (SELECT ono from ORDERINFO where ordered_by IN (SELECT cno FROM CUSTOMER WHERE cname = 'Patil'));
SELECT name, max(c) from (SELECT WAREHOUSES.wname as name, count(STORES.warehouse) as c from STORES LEFT JOIN WAREHOUSES ON STORES.warehouse = WAREHOUSES.wid group by STORES.warehouse having count(*)) as store_count;
SELECT itemName, min(q) from (SELECT itemname, SUM(quantity) as q from ITEMS_ORDERED GROUP BY itemno) as derived_table;
SELECT * FROM ITEMS_ORDERED INNER JOIN ORDERINFO ON ITEMS_ORDERED.orderno = ORDERINFO.ono INNER JOIN CUSTOMER on ORDERINFO.ordered_by = CUSTOMER.cno;