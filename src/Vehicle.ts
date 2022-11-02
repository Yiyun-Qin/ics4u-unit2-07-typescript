/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

class Vehicle {
  public color: string
  private speed: number = 0
  private maximumSpeed: number
  private licensePlate: string
  private cadence: number = 0

  // constructor
  public constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maximumSpeed = maxSpeed
  }

  // getters
  public status(): void {
    console.log(` -> Speed: ${this.speed}`)
    console.log(` -> MaxSpeed: ${this.maximumSpeed}`)
    console.log(` -> Color: ${this.color}`)
  }

  // setters

  // method
  public accelerate(
    accelerationPower: number,
    accelerationTime: number
  ): number {
    this.speed = accelerationPower * accelerationTime + this.speed
    return this.speed
  }

  public break(breakPower: number, breakTime: number): number {
    this.speed = this.speed - breakPower * breakTime
    return this.speed
  }
}
export = Vehicle
