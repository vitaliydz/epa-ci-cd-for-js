var quotesy = require('quotesy');
const { v4: uuidv4 } = require('uuid');

const APP_NAME = "APP_V1";

class Quotes {
  constructor() {
    this.quotes = quotesy.parse_json().map(q => ({ ...q, isDeleted: false }));
  }

  random(tag) {
    const quotesFitered = tag ? this.quotes.filter(q => q.tags && q.tags.includes(tag)) : this.quotes;
    const length = quotesFitered.length;
    const randomIndex = Math.round(Math.random() * length);

    return quotesFitered[randomIndex];
  }


  getAll() {
    return [].concat(this.quotes);
  }

  getById(id) {
    const result = this.quotes.find(q => q.id == id);

    return result;
  }

  add(q) {
    const createdAt = (new Date()).getTime();
    const qNew = {
      ...q,
      id: uuidv4(),
      createdBy: APP_NAME,
      createdAt: createdAt,
      updatedAt: createdAt
    };

    this.quotes.push(qNew);

    return qNew;
  }

  update(qUpd) {
    const qIndex = this.quotes.findIndex(q => q.id == qUpd.id);

    if (qIndex < 0) return;

    const updatedAt = (new Date()).getTime();
    const qElement = this.quotes[qIndex];
    const qNewElement = { ...qElement, ...qUpd, updatedAt };

    this.quotes[qIndex] = qNewElement;

    return qNewElement;
  }

  delete(qId) {
    const qIndex = this.quotes.findIndex(q => q.id == qId);

    return qIndex > -1 && this.quotes.splice(qIndex, 1);
  }
}

module.exports = new Quotes();