export class Output {
  constructor() {
    this.list = []
  }

  add(unit) {
    this.list.push(unit)
  }

  clear() {
    this.list = []
  }
}
