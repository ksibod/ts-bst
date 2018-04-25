"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Orders_1 = require("./Orders");
var BST = (function () {
    function BST(val) {
        this.value = val ? val : null;
        this.left = null;
        this.right = null;
    }
    BST.prototype.insert = function (val) {
        if (this.value == null) {
            this.value = val;
        }
        else if (val <= this.value) {
            if (!this.left) {
                this.left = new BST(val);
            }
            else {
                this.left.insert(val);
            }
        }
        else {
            if (!this.right) {
                this.right = new BST(val);
            }
            else {
                this.right.insert(val);
            }
        }
    };
    BST.prototype.contains = function (val) {
        if (val == this.value) {
            return true;
        }
        else if (val < this.value) {
            if (!this.left) {
                return false;
            }
            return this.left.contains(val);
        }
        else {
            if (!this.right) {
                return false;
            }
            return this.right.contains(val);
        }
    };
    BST.prototype.minimum = function () {
        if (!this.left) {
            return this.value;
        }
        else {
            return this.left.minimum();
        }
    };
    BST.prototype.maximum = function () {
        if (!this.right) {
            return this.value;
        }
        else {
            return this.right.maximum();
        }
    };
    BST.prototype.depthFirst = function (func, order) {
        if (order === Orders_1.Order.PRE) {
            func(this.value);
        }
        if (this.left) {
            this.left.depthFirst(func, order);
        }
        if (order === Orders_1.Order.IN) {
            func(this.value);
        }
        if (this.right) {
            this.right.depthFirst(func, order);
        }
        if (order === Orders_1.Order.POST) {
            func(this.value);
        }
    };
    BST.prototype.breadthFirst = function (func) {
        var queue = [this];
        while (queue.length) {
            var node = queue.shift();
            func(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    };
    return BST;
}());
exports.default = BST;
//# sourceMappingURL=BST.js.map