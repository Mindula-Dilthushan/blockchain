/**
 * blockchain@v0.0.1
 * Mindula Dilthushan
 * minduladilthushan1@gmail.com
 * 22-04-11
 */

const SHA256 = require('crypto-js/sha256')

class MyBlock {

    constructor(index, timestamp, data, previousHash = '') {

        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';

    }

    calculateHash(){



    }
}