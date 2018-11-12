(function() {
    
    // task 1
    function checkUndef (a) {
        return a === undefined;
    }


    //task 2
    function checkNull(a) {
        return a === null;
    }


    //task 3
    function checkNaN (a) {
        return a===NaN;
    }
    

    //task 4
    function checkEmptyObj (obj) {
        if (Object.keys(obj).length == 0) {
            return true;
        } else return false;
    }


    //task 5
    function square (a) {
        return a*a;           //возведение в квадрат
    
    }    
 
    function objMap (obj, func) {
        var newObj = {};
        for (var key in obj) {
            newObj[key]= func(obj[key]);
        }
        return newObj;
    }


    //task 6
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    //task 7
    function deepСomparison(a, b) {
        if (a === b) return true;
      
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object")
          return false;
      
        var propsInA = 0, propsInB = 0;
      
        for (var prop in a)
          propsInA += 1;
      
        for (var prop in b) {
          propsInB += 1;
          if (!(prop in a) || !deepСomparison(a[prop], b[prop]))
            return false;
        }
      
        return propsInA == propsInB;
      }


    //task 8
    
    function compare(a) {
        return a>10;
    }

    function deleteProps (obj, func) {
        var newObj= {};
        for(var key in obj) {
            if (!func(obj[key])) {
                delete obj[key];
            } else {
                newObj[key]=obj[key];
            }
        }
        return newObj;

    }




  })();