// @ts-ignore  
import { Output } from '../output/output.mjs'

/**
 * Open-closed principle.
 * 
 * Enteties should be open for extention.
 * but closed for modification
 */

/**
 * Bad
 */

{
  const output = new Output()

  class Weapon {
    type: string
    damage: number
    range: number

    constructor({ type, damage, range }) {
      this.type = type
      this.damage = damage
      this.range = range
    }

    attack() {
      /**
       * extended old logic to implement crossbow behaviour, principle is broken
       */
      if (this.type === 'sword') {
        output.add(`Удар мечом с уроном ${this.damage}`)
      } else if (this.type === 'crossbow') {
        output.add(`Удар арбалетом с уроном ${this.damage}`)
      }
    }
  }

  class Character {
    name: string
    weapon: Weapon

    constructor({ name, weapon }) {
      this.name = name;
      this.weapon = weapon; 
    }

    attack() {
      this.weapon.attack()
    }

    changeWeapon(weapon) {
      this.weapon = weapon;
    }
  }

  const weapon = new Weapon({ type: 'sword', damage: 22, range: 2 })
  const character = new Character({ name: 'Nikita', weapon })
  character.attack()

  const crossbow = new Weapon({ type: 'crossbow', damage: 10, range: 40 })
  character.changeWeapon(crossbow)
  character.attack()
}

{
  const output = new Output()

  interface Attacker {
    attack: () => void
  }

  class Character implements Attacker {
    name: string
    weapon: Weapon

    constructor({ name, weapon }) {
      this.name = name;
      this.weapon = weapon; 
    }

    attack() {
      this.weapon.attack()
    }

    changeWeapon(weapon) {
      this.weapon = weapon;
    }
  }

  class Weapon implements Attacker {
    damage: number
    range: number

    constructor({ damage, range }) {
      this.damage = damage
      this.range = range
    }

    attack() {}
  }

  class Sword extends Weapon {
    attack() {
      output.add(`Удар мечом с уроном ${this.damage}`)
    }
  }

  class CrossBow extends Weapon {
    attack() {
      output.add(`Удар арбалетом с уроном ${this.damage}`)
    }
  }

  const weapon = new Sword({ damage: 22, range: 2 })
  const character = new Character({ name: 'Nikita', weapon })
  character.attack()

  const crossbow = new CrossBow({ damage: 10, range: 40 })
  character.changeWeapon(crossbow)
  character.attack()
}
