import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { EndRound } from "../generated/schema"
import { EndRound as EndRoundEvent } from "../generated/SolidarityGroups/SolidarityGroups"
import { handleEndRound } from "../src/solidarity-groups"
import { createEndRoundEvent } from "./solidarity-groups-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let roundAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let startAt = BigInt.fromI32(234)
    let endAt = BigInt.fromI32(234)
    let newEndRoundEvent = createEndRoundEvent(roundAddress, startAt, endAt)
    handleEndRound(newEndRoundEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EndRound created and stored", () => {
    assert.entityCount("EndRound", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EndRound",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "roundAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EndRound",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startAt",
      "234"
    )
    assert.fieldEquals(
      "EndRound",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "endAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
