class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  getTemp() {
    return this.temperature;
  }

  up(value) {
    this.temperature += value;
    if (this.temperature > 25 && this.powerSaving === true) {
      this.temperature = 25;
    } else if (this.temperature > 32) {
      this.temperature = 32;
    }
  }

  down(value) {
    this.temperature -= value;
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature < 26) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
    
  }
}

module.exports = Thermostat;