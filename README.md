1.callbackes and promises 

2.types of for usage 
        1.for
        2.forEach
        3.for-in (for(var index in array)) returns index 
                  a.  let array = [10,20,30];
                    for (let index in array) {
                    console.log(index);
                    });
                     o/p=> 0,1,2
                   b. var obj= {a:1,b:2};
                    for (let prop in obj) {
                        console.log(prop);
                    } 
                    o/p=> a, b
        4.for-of (for(var val of array)) returns value 
                    a.let array = [10,20,30];
                    for (var value of array) {
                    console.log(value);
                    }
                    o/p=> 10,20,30

3.Map :
        let map = new Map();
        map.set("A",1);
        map.set("B",2);
        map.set("C",3);
        
        clear: function clear()
        constructor: function Map()
        delete: function delete()
        entries: function entries()
        forEach: function forEach()
        get: function get()
        has: function has()
        keys: function keys()
        set: function set()
        size: Getter
        values: function values()
        Symbol(Symbol.iterator): function entries()
        Symbol(Symbol.toStringTag): "Map"                    