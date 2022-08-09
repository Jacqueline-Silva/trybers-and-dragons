import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _archeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._archeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._archeInstances;
  }
}