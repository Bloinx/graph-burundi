import {
  EndRound as EndRoundEvent,
  GiveShareLoan as GiveShareLoanEvent,
  GiveSocialLoan as GiveSocialLoanEvent,
  PayDonation as PayDonationEvent,
  PayShareLoan as PayShareLoanEvent,
  PayShares as PaySharesEvent,
  PaySocial as PaySocialEvent,
  PaySocialLoan as PaySocialLoanEvent,
  RegisterUser as RegisterUserEvent,
  RemoveUser as RemoveUserEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SolidarityGroupCreated as SolidarityGroupCreatedEvent
} from "../generated/SolidarityGroups/SolidarityGroups"
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
} from "../generated/schema"

export function handleEndRound(event: EndRoundEvent): void {
  let entity = new EndRound(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundAddress = event.params.roundAddress
  entity.startAt = event.params.startAt
  entity.endAt = event.params.endAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGiveShareLoan(event: GiveShareLoanEvent): void {
  let entity = new GiveShareLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.shareLoanAmount = event.params.shareLoanAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGiveSocialLoan(event: GiveSocialLoanEvent): void {
  let entity = new GiveSocialLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.socialLoanAmount = event.params.socialLoanAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayDonation(event: PayDonationEvent): void {
  let entity = new PayDonation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.payDonationAmount = event.params.payDonationAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayShareLoan(event: PayShareLoanEvent): void {
  let entity = new PayShareLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.payShareLoanAmount = event.params.payShareLoanAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayShares(event: PaySharesEvent): void {
  let entity = new PayShares(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.meeting = event.params.meeting
  entity.user = event.params.user
  entity.shareValuePayed = event.params.shareValuePayed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaySocial(event: PaySocialEvent): void {
  let entity = new PaySocial(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.meeting = event.params.meeting
  entity.user = event.params.user
  entity.socialValuePayed = event.params.socialValuePayed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaySocialLoan(event: PaySocialLoanEvent): void {
  let entity = new PaySocialLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.paySocialLoanAmount = event.params.paySocialLoanAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegisterUser(event: RegisterUserEvent): void {
  let entity = new RegisterUser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveUser(event: RemoveUserEvent): void {
  let entity = new RemoveUser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSolidarityGroupCreated(
  event: SolidarityGroupCreatedEvent
): void {
  let entity = new SolidarityGroupCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.councilAddr = event.params.councilAddr
  entity.saveAmount = event.params.saveAmount
  entity.socialAmount = event.params.socialAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
