type PriorityQueueType<T> = {
  value: T
  priority: number
}

export class PriorityQueue<T> {
  private _values: PriorityQueueType<T>[] = []
  constructor() {
    this._values = []
  }

  get values() {
    return this._values
  }

  enqueue(value: T, priority: number) {
    this._values.push({ value, priority })
    this.sort()
  }

  dequeue() {
    return this._values.shift()?.value
  }

  sort() {
    this._values.sort((a, b) => a.priority - b.priority)
  }
}
