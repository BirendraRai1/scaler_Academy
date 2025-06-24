
var RandomizedSet = function() {
    this.set = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
      if(this.set.has(val))
        return false
      this.set.add(val)
      return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val)
        return true
    }
    return false

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let arr = [...this.set]
    return arr[Math.floor(Math.random()*arr.length)]
};