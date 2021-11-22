# Binary Search Tree
### 
**Implementation in TypeScript**

Feel free to read up on them if you are interested.

This lib includes a basic implementation with a few exposed methods.  The binary search tree is genericized for whatever data you are trying to store/lookup.

```
import { BST } from 'ts-bst';
const numBst = new BST<number>();
const strBst = new BST<string>();
```


#
## BST Methods
### **insert** -> `void`
```
numBst.insert(4);
numBst.insert(6);

strBst.insert('apple');
strBst.insert('banana');
```
### **contains** -> `boolean`

```
const hasValue = numBst.insert(4); // true

const hasOrange = strBst.insert('orange'); // false
```
### **minimum** -> `T`
```
const min = numBst.minimum();
console.log(min === 4); // true
```
### **maximum** -> `T`
```
const max = strBst.maximum();
console.log(max); // 'banana'
```
#
