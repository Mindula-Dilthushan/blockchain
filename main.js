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
        return new MyBlock(0, "01/01/2022", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let alphaCoin = new MyBlockchain();

alphaCoin.addBlock(new MyBlock(1, "01/01/2022", {amount: 23}));
alphaCoin.addBlock(new MyBlock(2, "02/01/2022", {amount: 17}));
alphaCoin.addBlock(new MyBlock(3, "03/01/2022", {amount: 10}));
alphaCoin.addBlock(new MyBlock(4, "04/01/2022", {amount: 1}));
alphaCoin.addBlock(new MyBlock(5, "05/01/2022", {amount: 26}));

console.log('blockchain valid ? : ' + alphaCoin.isChainValid());

console.log(JSON.stringify(alphaCoin, null, 2));