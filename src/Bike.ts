/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

class Bike extends Vehicle {
  public cadense: number = 0

  // constructor
  public constructor (color: string, maxSpeed: number) {
    super(color, maxSpeed)
  }

  // setters
  public status (): void {
    super.status()
    console.log(` -> Cadense: ${this.cadense}`)
  }

  // setters

  // method
  public accelerate (appliedPower: number): void {
    this.cademse = this.cadense + appliedPower
  }
}
export = Bike
