var jQuery = window.jQuery;
var peugeot_storage = {
    get: function(key) {
        var value = window.localStorage.getItem(key);
        if(null === value) {
            return null;
        } else {
            return JSON.parse(value);
        }
    },
    set: function(key, value) {
        return window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function(key, index) {
        if(typeof index === 'undefined')
            return window.localStorage.removeItem(key);
        else {
            var collection = this.collection(key);
            collection.splice(index, 1);
            this.set(key, collection);
        }
    },
    merge: function(key, ref, updation) {
        var value = this.get(key);
        value[ref] = jQuery.extend(value[ref], updation);
        this.set(key, value);
    },
    collection: function(key) {
        return this.get(key) || [];
    },
    push: function(key, item) {
        var collection = this.collection(key);
        collection.push(item);
        this.set(key, collection);
    },
    clear: function(key) {
        var collection = this.collection(key);
        collection.length = 0;
        this.set(key, collection);
    }
};

export default peugeot_storage;