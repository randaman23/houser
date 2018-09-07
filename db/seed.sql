insert into houses
(property_name,
address, 
city, 
state,
zipcode)
values(
'Happy Meadows',
'234 E 1400 S',
'Happy Place',
'Washington',
'12345')

alter table houses
add img_url text,
add monthly_morgage varchar(100)