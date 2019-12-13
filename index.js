class MyQueue {
  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue (value) {
    this.stack1.push(value)
  }

  dequeue () {
    if (!this.stack2.length) {
      this.moveValues(this.stack1, this.stack2)
    }

    return this.stack2.pop()
  }

  moveValues(from, to) {
    let value = from.pop()
    while(value) {
      to.push(value)
      value = from.pop()
    }
  }
}

const queue = new MyQueue()
queue.enqueue('foo')
queue.enqueue('bar')
queue.enqueue('baz')

console.log(queue.dequeue())
queue.enqueue('hello')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)