'use strict'

class Reality {
  constructor(name, controls, sensors, goals, tickCallback) {
    this.name = name
    this.controls = controls
    this.sensors = sensors
    this.goals = goals
    this.tickCallback = tickCallback
  }
}
class Control {
  constructor(name, type, initial) {
    this.name = name
    this.type = type
    this.value = initial
  }
}
class Sensor {
  constructor(name, type, initial, min, max) {
    this.name = name
    this.type = type
    this.value = initial
    if (this.type == 'integer') {
      this.min = min
      this.max = max
    }
  }
}
class Goal {
  constructor(name, sensorTarget, maxOrMin) {
    this.name = name
    this.sensorTarget = sensorTarget
    this.maxOrMin = maxOrMin
  }
}
