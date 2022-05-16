const mysqlcon = require('../../connection');

//CREATE table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(56),
        category varchar(26),
        product_name varchar(66),
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

//ADD initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, 'images/jack daniel.jpg', 'Whiskey', 'jack daniel', 20), 
            (2, 'images/jhonny walker.jpg', 'Whiskey', 'jhonny walker', 26),
            (3, 'images/Macallan.jpg', 'Whiskey', 'Macallan', 24),
            (4, 'images/Glenfiddich.jpg', 'Whiskey', 'Glenfiddich', 28),
            (5, 'images/Cabernet Sauvignon.jpg', 'Wine', 'Cabernet Sauvignon', 12),
            (6, 'images/Rosenblum.jpg', 'Wine', 'Rosenblum', 10),
            (7, 'images/Sutter Home.jpg', 'Wine', 'Sutter Home', 14),
            (8, 'images/Carlo Rossi.jpg', 'Wine', 'Carlo Rossi', 19),
            (9, 'images/bacardi.jpg', 'Rum', 'bacardi', 15),
            (10, 'images/captain morgan.jpg', 'Rum', 'captain morgan', 17),
            (11, 'images/milabu.jpg', 'Rum', 'milabu', 8),
            (12, 'images/bumbu.jpg', 'Rum', 'bumbu', 10),
            (13, 'images/budweiser.jpg', 'Beer', 'budweiser', 4),
            (14, 'images/heineken.jpg', 'Beer', 'heineken', 4),
            (15, 'images/samuel adams.jpg', 'Beer', 'samuel adams', 4),
            (16, 'images/coors light.jpg', 'Beer', 'coors light', 3.5)
             `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};