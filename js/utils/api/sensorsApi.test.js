import { retrieveSensorsData } from "./sensorsApi";
import { data } from "../../../data/mock-homepage-data";

describe('sensor API Unit Test Suites', () => {
  it('should return the mocked data', () => {
    expect(retrieveSensorsData()).toBe(data.facades)

  })
})