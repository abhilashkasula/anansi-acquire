const Corporate = require('./corporate');

class Corporations {
  constructor(){
    this.phoenix = Corporate.create('phoenix');
    this.quantum = Corporate.create('quantum');
    this.hydra = Corporate.create('hydra');
    this.fusion = Corporate.create('fusion');
    this.america = Corporate.create('america');
    this.sackson = Corporate.create('sackson');
    this.zeta = Corporate.create('zeta');
  }
  
  establishCorporate(corporate, tiles){
    if(!this[corporate].activeStatus){
      this[corporate].establish(tiles);
      return true;
    }
    return false;
  }

  mergeCorporate(bigCorp, smallCorp, mergerTile){
    if(!this[smallCorp].stableStatus){
      const tiles = this[smallCorp].defunct();
      this[bigCorp].addTiles(tiles);
      this[bigCorp].addTiles(mergerTile);
      return true;
    }
    return false;
  }

  getInactiveCorporate(){
    const inactiveCorporate = [];
    const corpStatus = this.status;
    for (const corp in corpStatus){
      if(!corpStatus[corp].isActive){
        inactiveCorporate.push(corp);
      }
    }
    return inactiveCorporate;
  }

  get status() {
    return {
      phoenix: this.phoenix.status,
      quantum: this.quantum.status,
      hydra: this.hydra.status,
      fusion: this.fusion.status,
      america: this.america.status,
      sackson: this.sackson.status,
      zeta: this.zeta.status
    };
  }
}

module.exports = Corporations;