import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  EndRound,
  GiveShareLoan,
  GiveSocialLoan,
  PayDonation,
  PayShareLoan,
  PayShares,
  PaySocial,
  PaySocialLoan,
  RegisterUser,
  RemoveUser,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SolidarityGroupCreated
} from "../generated/SolidarityGroups/SolidarityGroups"

export function createEndRoundEvent(
  roundAddress: Address,
  startAt: BigInt,
  endAt: BigInt
): EndRound {
  let endRoundEvent = changetype<EndRound>(newMockEvent())

  endRoundEvent.parameters = new Array()

  endRoundEvent.parameters.push(
    new ethereum.EventParam(
      "roundAddress",
      ethereum.Value.fromAddress(roundAddress)
    )
  )
  endRoundEvent.parameters.push(
    new ethereum.EventParam(
      "startAt",
      ethereum.Value.fromUnsignedBigInt(startAt)
    )
  )
  endRoundEvent.parameters.push(
    new ethereum.EventParam("endAt", ethereum.Value.fromUnsignedBigInt(endAt))
  )

  return endRoundEvent
}

export function createGiveShareLoanEvent(
  user: Address,
  shareLoanAmount: BigInt
): GiveShareLoan {
  let giveShareLoanEvent = changetype<GiveShareLoan>(newMockEvent())

  giveShareLoanEvent.parameters = new Array()

  giveShareLoanEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  giveShareLoanEvent.parameters.push(
    new ethereum.EventParam(
      "shareLoanAmount",
      ethereum.Value.fromUnsignedBigInt(shareLoanAmount)
    )
  )

  return giveShareLoanEvent
}

export function createGiveSocialLoanEvent(
  user: Address,
  socialLoanAmount: BigInt
): GiveSocialLoan {
  let giveSocialLoanEvent = changetype<GiveSocialLoan>(newMockEvent())

  giveSocialLoanEvent.parameters = new Array()

  giveSocialLoanEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  giveSocialLoanEvent.parameters.push(
    new ethereum.EventParam(
      "socialLoanAmount",
      ethereum.Value.fromUnsignedBigInt(socialLoanAmount)
    )
  )

  return giveSocialLoanEvent
}

export function createPayDonationEvent(
  user: Address,
  payDonationAmount: BigInt
): PayDonation {
  let payDonationEvent = changetype<PayDonation>(newMockEvent())

  payDonationEvent.parameters = new Array()

  payDonationEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  payDonationEvent.parameters.push(
    new ethereum.EventParam(
      "payDonationAmount",
      ethereum.Value.fromUnsignedBigInt(payDonationAmount)
    )
  )

  return payDonationEvent
}

export function createPayShareLoanEvent(
  user: Address,
  payShareLoanAmount: BigInt
): PayShareLoan {
  let payShareLoanEvent = changetype<PayShareLoan>(newMockEvent())

  payShareLoanEvent.parameters = new Array()

  payShareLoanEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  payShareLoanEvent.parameters.push(
    new ethereum.EventParam(
      "payShareLoanAmount",
      ethereum.Value.fromUnsignedBigInt(payShareLoanAmount)
    )
  )

  return payShareLoanEvent
}

export function createPaySharesEvent(
  meeting: BigInt,
  user: Address,
  shareValuePayed: BigInt
): PayShares {
  let paySharesEvent = changetype<PayShares>(newMockEvent())

  paySharesEvent.parameters = new Array()

  paySharesEvent.parameters.push(
    new ethereum.EventParam(
      "meeting",
      ethereum.Value.fromUnsignedBigInt(meeting)
    )
  )
  paySharesEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  paySharesEvent.parameters.push(
    new ethereum.EventParam(
      "shareValuePayed",
      ethereum.Value.fromUnsignedBigInt(shareValuePayed)
    )
  )

  return paySharesEvent
}

export function createPaySocialEvent(
  meeting: BigInt,
  user: Address,
  socialValuePayed: BigInt
): PaySocial {
  let paySocialEvent = changetype<PaySocial>(newMockEvent())

  paySocialEvent.parameters = new Array()

  paySocialEvent.parameters.push(
    new ethereum.EventParam(
      "meeting",
      ethereum.Value.fromUnsignedBigInt(meeting)
    )
  )
  paySocialEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  paySocialEvent.parameters.push(
    new ethereum.EventParam(
      "socialValuePayed",
      ethereum.Value.fromUnsignedBigInt(socialValuePayed)
    )
  )

  return paySocialEvent
}

export function createPaySocialLoanEvent(
  user: Address,
  paySocialLoanAmount: BigInt
): PaySocialLoan {
  let paySocialLoanEvent = changetype<PaySocialLoan>(newMockEvent())

  paySocialLoanEvent.parameters = new Array()

  paySocialLoanEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  paySocialLoanEvent.parameters.push(
    new ethereum.EventParam(
      "paySocialLoanAmount",
      ethereum.Value.fromUnsignedBigInt(paySocialLoanAmount)
    )
  )

  return paySocialLoanEvent
}

export function createRegisterUserEvent(user: Address): RegisterUser {
  let registerUserEvent = changetype<RegisterUser>(newMockEvent())

  registerUserEvent.parameters = new Array()

  registerUserEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return registerUserEvent
}

export function createRemoveUserEvent(user: Address): RemoveUser {
  let removeUserEvent = changetype<RemoveUser>(newMockEvent())

  removeUserEvent.parameters = new Array()

  removeUserEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return removeUserEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSolidarityGroupCreatedEvent(
  councilAddr: Address,
  saveAmount: BigInt,
  socialAmount: BigInt
): SolidarityGroupCreated {
  let solidarityGroupCreatedEvent = changetype<SolidarityGroupCreated>(
    newMockEvent()
  )

  solidarityGroupCreatedEvent.parameters = new Array()

  solidarityGroupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "councilAddr",
      ethereum.Value.fromAddress(councilAddr)
    )
  )
  solidarityGroupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "saveAmount",
      ethereum.Value.fromUnsignedBigInt(saveAmount)
    )
  )
  solidarityGroupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "socialAmount",
      ethereum.Value.fromUnsignedBigInt(socialAmount)
    )
  )

  return solidarityGroupCreatedEvent
}
