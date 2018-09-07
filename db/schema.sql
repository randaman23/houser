drop table if exists houses

create table houses(
id serial primary key,
property_name varchar(100), 
address varchar(70), 
city varchar(70), 
state text, 
zipcode varchar(20)
)