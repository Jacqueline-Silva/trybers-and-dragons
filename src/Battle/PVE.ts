import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player1 = player;
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player1.lifePoints > 0
        && monster.lifePoints > 0) {
        this._player1.attack(monster);
        monster.attack(this._player1);
      }
    });
    return super.fight();
  }
}