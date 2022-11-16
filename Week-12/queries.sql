-- Find the item that has minimum weight
Select * from items
where weight = (select MIN(weight) from items);

-- Find the different warehouses in “Pune”.
Select * from warehouses w
inner join cities ct
on w.city_id = ct.id
where ct.city = 'Pune'


-- Find the details of items ordered by a customer “Mr. Patil”/Customer 1
select * from orders o
inner join customer cst
on o.customer_id = cst.cno
inner join ordered_quantity junction_table
on o.id = junction_table.order_id
inner join items itm
on junction_table.item_id = itm.id
where cname = 'Customer 1'

-- Find a Warehouse which has maximum stores
select wname, count(store_name) from stores st
inner join warehouses w
on st.warehouses_id = w.id 
group by wname
having count(store_name) = (select max(count) from (select wname, count(store_name) from stores st
inner join warehouses w
on st.warehouses_id = w.id 
group by wname) iq)

-- Find an item which is ordered for a minimum number of times
select it.id, it.description, count(item_id) min_count from items it
inner join ordered_quantity oq
on it.id = oq.item_id
inner join orders od
on oq.order_id = od.id
group by it.id, it.description
having count(item_id) = (select min(count) from (select it.id, it.description, count(item_id) from items it
inner join ordered_quantity oq
on it.id = oq.item_id
inner join orders od
on oq.order_id = od.id
group by it.id, it.description) as iq)

-- Find the detailed orders given by each customer.