var chalk = require('chalk');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
  }
}

class Book extends Product {
  constructor(name, price, isbn) {
    super(name, price);
    this.isbn = isbn;
  }
}

class DVD extends Product {
  constructor(name, price, moovie) {
    super(name, price);
    this.moovie = moovie;
  }
}

class VideoGame extends Product {
  constructor(name, price, platform) {
    super(name, price);
    this.platform = platform;
  }
}

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};