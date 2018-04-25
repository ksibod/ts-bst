import test from 'ava'
import BST from '../src/BST'

const initString: string = 'test'
const initInt: number = 10

let stringTree: BST<string>
let intTree: BST<number>


test('Create a new BST<String>', t => {
    stringTree = new BST<string>()
    stringTree.insert(initString)
    t.pass()
})

test('Create a new BST<Number>', t => {
    intTree = new BST<number>()
    intTree.insert(initInt)
    t.pass()
})

test('Left and right nodes are null', t => {
    t.falsy(stringTree.left)
    t.falsy(stringTree.right)
    t.falsy(intTree.left)
    t.falsy(intTree.right)
})

test('Initial values are equal', t => {
    t.is(stringTree.value, initString)
    t.is(intTree.value, initInt)
})

test('Trees contain the values', t => {
    t.truthy(stringTree.contains(initString))
    t.truthy(intTree.contains(initInt))
})

test('Insert into trees', t => {
    const temp = 'temp'
    const twenty = 20
    stringTree.insert(temp)
    intTree.insert(twenty)
    t.truthy(stringTree.contains(temp))
    t.truthy(intTree.contains(twenty))
})

test('Minimum values', t => {
    t.is(stringTree.minimum(), 'temp')
    t.is(intTree.minimum(), 10)
})

test('Maximum values', t => {
    t.is(stringTree.maximum(), 'test')
    t.is(intTree.maximum(), 20)
})


