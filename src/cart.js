import peugeot_storage from './storage';
var peugeot_cart = {
    handlers: [],
    add: function(item) {
        peugeot_storage.push('cart_items', item);
        this.notify();
    },
    remove: function(itemIndex) {
        peugeot_storage.remove('cart_items', itemIndex);
        this.notify();
    },
    update: function (itemIndex, item) {
        peugeot_storage.merge('cart_items', itemIndex, item);
        this.notify();
    },
    clear: function() {
        peugeot_storage.clear('cart_items');
        this.notify();
    },
    getItems: function() {
        return peugeot_storage.collection('cart_items');
    },
    notify: function() {
        this.handlers.forEach(function(handler) {
            handler();
        });
    },
    listen: function(callback) {
        this.handlers.push(callback);
    },
    removeHandler: function(callback) {
        var index = this.handlers.indexOf(callback);
        this.handlers.splice(index, 1);
    }
};

export default peugeot_cart;