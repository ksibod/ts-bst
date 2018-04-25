import { Order } from './Orders'

class BST<T> {

    value: T
    left: BST<T>
    right: BST<T>
    size: number

    constructor(val?: T) {
        this.value = val ? val : null
        this.left = null
        this.right = null
        this.size = val ? 1 : 0
    }

    insert(val: T): void {
        if (this.value == null) {
            this.value = val
            this.size++
        }
        else if (val <= this.value) {
            if (!this.left) {
                this.left = new BST<T>(val)
                this.size++
            }
            else {
                this.left.insert(val)
            }
        }
        else {
            if (!this.right) {
                this.right = new BST<T>(val)
                this.size++
            }
            else {
                this.right.insert(val)
            }
        }
    }

    contains(val: T): boolean {
        if (val == this.value) {
            return true
        }
        else if (val < this.value) {
            if (!this.left) {
                return false
            }
            return this.left.contains(val)
        }
        else {
            if (!this.right) {
                return false
            }
            return this.right.contains(val)
        }
    }

    minimum(): T {
        if (!this.left) {
            return this.value
        }
        else {
            return this.left.minimum()
        }
    }

    maximum(): T {
        if (!this.right) {
            return this.value
        }
        else {
            return this.right.maximum()
        }
    }

    depthFirst(func: (val: T) => any, order: Order): void {
        if (order === Order.PRE) {
            func(this.value)
        }
        if (this.left) {
            this.left.depthFirst(func, order)
        }
        if (order === Order.IN) {
            func(this.value)
        }
        if (this.right) {
            this.right.depthFirst(func, order)
        }
        if (order === Order.POST) {
            func(this.value)
        }
    }

    breadthFirst(func: (val: T) => any): void {
        const queue: BST<T>[] = [this]
        while (queue.length) {
            const node = queue.shift()
            func(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

}

export default BST