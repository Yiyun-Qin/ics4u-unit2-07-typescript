/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

import Vehicle from './Vehicle'

export class Bike extends Vehicle {
  public cadense: number = 0

  // constructor
  public constructor (color: string, maxSpeed: number) {
    super(color, maxSpeed)
  }

  // getters

  // setters

  public status (): void {
    super.status()
    this.speedCar = this.cadense * 2
    console.log(` -> Cadense: ${this.cadense}`)
  }

  public Ring_Bell (): void {
    console.log("Ding ding!\n")
  }

  // method
  public accelerate (appliedPower: number): void {
    this.cadense = this.cadense + appliedPower
    this.speedCar = this.cadense * 2
  }
}
