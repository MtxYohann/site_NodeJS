import db from "../config/database.js"; // import de la connection avec la base de données

class product {
  constructor(id, name, price, description, image){
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  save() {
      return db.execute('INSERT INTO product (name, price, description, image) VALUES (?, ?, ?, ?)', [this.name, this.price, this.description, this.image]);
  }

  update() {
      return db.execute('UPDATE product SET name = ?, price = ?, description = ?, image = ? WHERE id = ?', [this.name, this.price, this.description, this.image, this.id]);
  }

  static fetch(productId) {
      return db.execute('SELECT * FROM product WHERE id = ?', [productId]);
  }

  static fetchAll() {
      return db.execute('SELECT * FROM product');
  }

  static delete(productId) {
      return db.execute('DELETE FROM product WHERE id = ?', [productId]);
  }
}

export default product;