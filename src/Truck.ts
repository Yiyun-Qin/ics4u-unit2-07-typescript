/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

import Vehicle from './Vehicle'

export class Truck extends Vehicle {
  private readonly licensePlateNumber: string
  private speedTruck: number = 0

  // constructor

  public constructor (color: string, maxSpeed: number, license: string) {
    super(color, maxSpeed)
    this.licensePlateNumber = license
  }

  // getters
  public status (): void {
    super()
    console.log(` -> License Plate: ${this.licensePlateNumber}`)
  }

  public speed (): number {
    this.speedTruck = super.speed()
    return this.speedTruck
  }

  // method

  public accelerate (accelerationPower: number, accelerationTime: number): void {
    super(accelerationPower, accelerationTime)
  }

  public break (breakPower: number, breakTime: number): void {
    super(breakPower, breakTime)
  }

  public applyAir (airPressure: number): void {
    this.speedTruck = this.speedTruck - airPressure / 2
  }
}
