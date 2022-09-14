/*
Задача: реализовать очередь
Реализовать очередь, позволяющую выполнить проверочный код

Первым аргументом конструктора является функция — обработчик одной задачи, задача считаетcя обработанной после вызова коллбэка
Вторым количество параллельно обрабатываемых задач
Третьим коллбек, вызываемый по окончанию обработки всех задач
Проверочный код:
*/
const processTask = (task, resolve) => {
  // время обработки задачи от 500 до 1000мс
  const workTime = 500 + Math.floor(Math.random() * 500)

  setTimeout(() => {
    console.log(task)
    resolve()
  }, workTime)
}
const paralleledTasks = 2
const whenEmpty = () => console.log('Queue is empty')

class Queue {
  constructor(processTask, count, finishCallback) {
    this.tasks = []
    this.processTask = processTask
    this.count = count
    this.finishCallback = finishCallback
  }

  add(taskValue) {
    const promisified = () => new Promise((resolve) => {
      this.processTask(taskValue, resolve)
    })
    this.tasks.push(promisified)
  }

  async loop() {
    let tasksLeft = [...this.tasks]
    while (tasksLeft.length > 0) {
      const toExecute = tasksLeft.slice(0, this.count)
      const promises = toExecute.map(func => func())
      await Promise.all(promises)
      tasksLeft = tasksLeft.slice(this.count, tasksLeft.length)
    }
    this.finishCallback()
  }
}

const queue = new Queue(processTask, paralleledTasks, whenEmpty)

queue.add('task 1')
queue.add('task 2')
queue.add('task 3')
queue.loop()

/* 
example output:
task 2
task 1
task 3
Queue is empty

* поскольку задачи обрабатываются
* разное количество времени, то при
* paralleledTasks > 1 вывод может быть
* не последовательным как тут: сначала
* успела выполниться task 2, а потом task 1
*/



