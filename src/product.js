var chalk = require('chalk');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency + this.getDuration();
  }

  getDuration() {
    return ',duration : ?';
  }
}

class Book extends Product {
  constructor(name, price, isbn, minDuration, maxDuration) {
    super(name, price);
    this.isbn = isbn;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }

  getDuration() {
    return ',duration : between ' + this.minDuration + ' minutes and ' + this.maxDuration + ' minutes';
  }
}

class DVD extends Product {
  constructor(name, price, moovie, runningTime) {
    super(name, price);
    this.moovie = moovie;
    this.runningTime = runningTime;
  }

  getDuration() {
    return ',duration : ' + this.runningTime + ' minutes';
  }

}

class VideoGame extends Product {
  constructor(name, price, platform, minDuration, maxDuration) {
    super(name, price);
    this.platform = platform;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }

  getDuration() {
    return ',duration : between ' + this.minDuration + ' minutes and ' + this.maxDuration + ' minutes';
  }
}

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};