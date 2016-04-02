'use strict'
let simpleTurret = new Reality(
  'simple turret',
  [new Control('fire', 'pushButton', false)],
  [new Sensor('ammunition', 'integer', 50, 0, 50), new Sensor('trappedSoldiers', 'integer', 300, 0, 300), new Sensor('missileComing', 'boolean', false)],
  [new Goal('allSoldiersEscape', 'trappedSoldiers', 'minimize')],
  function(tick) {
    Math.random() 
  }
)
