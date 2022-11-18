const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('constructs with a temp of 20 degress', () => {
    const thermo = new Thermostat;
    expect(thermo.getTemp()).toEqual(20);
  });

  it('increases temp to 22 degrees', () => {
    const thermo = new Thermostat;
    thermo.up(2);
    expect(thermo.getTemp()).toEqual(22);
  });

  it('decreases temp to 18 degrees', () => {
    const thermo = new Thermostat;
    thermo.down(2);
    expect(thermo.getTemp()).toEqual(18);
  });

  it('decreases temp to 10 deg min limit', () => {
    const thermo = new Thermostat;
    thermo.down(18);
    expect(thermo.getTemp()).toEqual(10);
  });

  it('fails to increase temp above 25 degrees with power save on', () => {
    const thermo = new Thermostat;
    thermo.up(10);
    expect(thermo.getTemp()).toEqual(25);
  });

  it('fails to increase temp above 32 degrees with power save off', () => {
    const thermo = new Thermostat;
    thermo.powerSaving = false;
    thermo.up(15);
    expect(thermo.getTemp()).toEqual(32);
  });

  it('resets temp to 20 degrees', () => {
    const thermo = new Thermostat;
    thermo.down(2);
    thermo.reset();
    expect(thermo.getTemp()).toEqual(20);
  });

  it('returns low-usage when below 18 degrees', () => {
    const thermo = new Thermostat;
    thermo.down(3);
    expect(thermo.energyUsage()).toEqual('low-usage');
  });

  it('returns medium-usage when between 18 and 25 degrees', () => {
    const thermo = new Thermostat;
    expect(thermo.energyUsage()).toEqual('medium-usage');
  });

  it('returns high-usage when above 26 degrees', () => {
    const thermo = new Thermostat;
    thermo.powerSaving = false;
    thermo.up(15);
    expect(thermo.energyUsage()).toEqual('high-usage');
  });



});