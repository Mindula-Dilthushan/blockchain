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
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class MyBlockchain {

    constructor() {
        this.chain = [
            this.createGenesisBlock()
        ];
    }

    createGenesisBlock() {
        return new MyBlock(0, "01/10/2000", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let alphaCoin = new MyBlockchain();
alphaCoin.addBlock(new MyBlock(1, "01/10/2000", {amount: 2}));
alphaCoin.addBlock(new MyBlock(2, "02/10/2000", {amount: 3}));

console.log(JSON.stringify(alphaCoin, null, 2));