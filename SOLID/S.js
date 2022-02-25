
/**
 * Single responsibility principle
 * one entity - one task
 */

/**
 * Bad
 */
{
  class Order {
    constructor({ date, products, address, deliveryDate, store } = {}) {
      this.date = date
      this.products = products
      this.address = address
      this.deliveryDate = deliveryDate
      this.store = store
    }

    save(obj) {
      this.store.save(obj)
    }

    log(obj) {
      console.log(obj)
    }
  }
}

/**
 * Good
 */

{
  class Order {
    constructor({ date, products, address, deliveryDate } = {}) {
      this.date = date
      this.products = products
      this.address = address
      this.deliveryDate = deliveryDate
    }
  }

  class Store {
    items = []
  
    save(obj) {
      this.items.push(obj)
    }
  }

  class Logger {
    log(obj) {
      console.log(obj);
    }
  }
}