/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

class Truck extends Vehicle {
  private licensePlateNumber: string
  private airPressure: number
  public color: string
  public maxSpeed: number
  private speed: number = 0
  public accelerationPower: number
  public accelerationTime: number
  public brakePower: number
  public brakeTime: number

  // constructor

  public constructor(color: string, maxSpeed: number, license: string) {
    this.licensePlateNumber = license
    this.color = color
    this.maxSpeed = maxSpeed
  }

  // getters

  public status(): void {
    super.status()
    console.log(` -> License Plate: ${this.licensePlate}`)
  }

  // method

  public accelerate(accelerationPower: number, accelerationTime: number): void {
    this.accelerationPower = accelerationPower
    this.accelerationTime = accelerationTime
    this.speed = super.accelerate
  }

  public break(breakPower: number, breakTime: number): void {
    this.breakPower = breakPower
    this.breakTime = breakTime
    this.speed = super.break
  }

  public Provide_Air(airPressure: number) {
    this.speed = this.speed = airPressure / 2
  }
}
export = Truck
