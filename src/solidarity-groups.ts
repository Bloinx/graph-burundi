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
  SolidarityGroupCreated as SolidarityGroupCreatedEvent,
} from "../generated/templates/SolidarityGroups/SolidarityGroups";
import { SolidarityGroup, User } from "../generated/schema";

import { BigInt, Bytes, log } from "@graphprotocol/graph-ts";

function loadUser(userId: Bytes): User | null {
  let user = User.load(userId);
  if (user == null) {
    log.error("User with id {} not found", [userId.toHexString()]);
    return null;
  }
  return user;
}

function loadSolidarityGroup(groupId: Bytes): SolidarityGroup | null {
  let solidarityGroup = SolidarityGroup.load(groupId);
  if (solidarityGroup == null) {
    log.error("Solidarity group with id {} not found", [groupId.toHexString()]);
    return null;
  }
  return solidarityGroup;
}

//Default
export function handleEndRound(event: EndRoundEvent): void {
  // let entity = new EndRound(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.roundAddress = event.params.roundAddress;
  // entity.startAt = event.params.startAt;
  // entity.endAt = event.params.endAt;
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}

//Updated
export function handleGiveShareLoan(event: GiveShareLoanEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // const shareLoanAmount = event.params.shareLoanAmount;
  // solidarityGroup.sharesFund = solidarityGroup.sharesFund.minus(
  //   shareLoanAmount.times(
  //     BigInt.fromI32(100).minus(solidarityGroup.interesRate)
  //   )
  // );
  // user.sharesDebt.plus(shareLoanAmount);
  // user.lastLoanDate = event.block.timestamp;
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}

//Updated
export function handleGiveSocialLoan(event: GiveSocialLoanEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Upload entities
  // const socialLoanAmount = event.params.socialLoanAmount;
  // solidarityGroup.socialFund =
  //   solidarityGroup.socialFund.minus(socialLoanAmount);
  // user.socialDebt = user.socialDebt.plus(socialLoanAmount);
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}

//Default
export function handlePayDonation(event: PayDonationEvent): void {
  // let entity = new PayDonation(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.user = event.params.user;
  // entity.payDonationAmount = event.params.payDonationAmount;
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}

//Updated
export function handlePayShareLoan(event: PayShareLoanEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // solidarityGroup.sharesFund = solidarityGroup.sharesFund.plus(
  //   event.params.payShareLoanAmount
  // );
  // user.sharesDebt = user.sharesDebt.minus(event.params.payShareLoanAmount);
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}

//Updated
export function handlePayShares(event: PaySharesEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // let shares = event.params.shareValuePayed.times(solidarityGroup.shareAmount);
  // user.sharesBalance = user.sharesBalance.plus(shares);
  // solidarityGroup.sharesFund = solidarityGroup.sharesFund.plus(shares);
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}

//Updated
export function handlePaySocial(event: PaySocialEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // user.socialBalance = user.socialBalance.plus(event.params.socialValuePayed);
  // solidarityGroup.socialFund = solidarityGroup.socialFund.plus(
  //   event.params.socialValuePayed
  // );
  // //Save entities
  // user.save();
  // solidarityGroup.save();
}

//Updated
export function handlePaySocialLoan(event: PaySocialLoanEvent): void {
  // //Load entities
  // let user = loadUser(event.params.user);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // const socialPayAmount = event.params.paySocialLoanAmount;
  // solidarityGroup.socialFund = solidarityGroup.socialFund.plus(socialPayAmount);
  // user.socialDebt = user.socialDebt.minus(socialPayAmount);
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}

//Updated
export function handleRemoveUser(event: RemoveUserEvent): void {
  // //Load entities
  // const userAddr = event.params.user;
  // let user = loadUser(userAddr);
  // if (user == null) return;
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // let users = solidarityGroup.registeredUsers;
  // if (users == null || users.length === 0) {
  //   log.error("no users on solidarityGroup: {}", [event.address.toHexString()]);
  //   return;
  // }
  // let updatedUsers = new Array<Bytes>();
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i] != userAddr) {
  //     updatedUsers.push(users[i]);
  //   }
  // }
  // solidarityGroup.registeredUsers = updatedUsers;
  // user.isActive = false;
  // //Save entities
  // user.save();
  // solidarityGroup.save();
}

//Default
export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  // let entity = new RoleAdminChanged(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.role = event.params.role;
  // entity.previousAdminRole = event.params.previousAdminRole;
  // entity.newAdminRole = event.params.newAdminRole;
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}

//Default
export function handleRoleGranted(event: RoleGrantedEvent): void {
  // let entity = new RoleGranted(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.role = event.params.role;
  // entity.account = event.params.account;
  // entity.sender = event.params.sender;
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}

//Default
export function handleRoleRevoked(event: RoleRevokedEvent): void {
  // let entity = new RoleRevoked(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.role = event.params.role;
  // entity.account = event.params.account;
  // entity.sender = event.params.sender;
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}

//Updated
export function handleSolidarityGroupCreated(
  event: SolidarityGroupCreatedEvent
): void {
  //Load entity
  let solidarityGroup = loadSolidarityGroup(event.address);
  if (solidarityGroup == null) return;

  //Update entity
  solidarityGroup.council = event.params.councilAddr;
  solidarityGroup.saveAmount = event.params.saveAmount;
  solidarityGroup.socialAmount = event.params.socialAmount;
  solidarityGroup.socialFund = BigInt.fromI32(2);
  solidarityGroup.shareAmount = BigInt.fromI32(4);
  solidarityGroup.sharesFund = BigInt.fromI32(0);
  solidarityGroup.meeting = BigInt.fromI32(0);
  solidarityGroup.interesRate = BigInt.fromI32(0);
  //Save entity
  solidarityGroup.save();
}

//Updated
export function handleRegisterUser(event: RegisterUserEvent): void {
  // //Create entities
  // let user = new User(event.params.user);
  // //Load entities
  // let solidarityGroup = loadSolidarityGroup(event.address);
  // if (solidarityGroup == null) return;
  // //Update entities
  // user.memberSince = event.block.timestamp;
  // user.sharesBalance = BigInt.fromI32(0);
  // user.socialBalance = BigInt.fromI32(0);
  // user.sharesDebt = BigInt.fromI32(0);
  // user.socialDebt = BigInt.fromI32(0);
  // if (solidarityGroup.registeredUsers == null) {
  //   solidarityGroup.registeredUsers = [user.id];
  // } else {
  //   if (solidarityGroup.registeredUsers == null) {
  //     solidarityGroup.registeredUsers = [user.id];
  //   } else {
  //     let registeredUsers = solidarityGroup.registeredUsers as Array<Bytes>;
  //     registeredUsers.push(user.id);
  //     solidarityGroup.registeredUsers = registeredUsers;
  //   }
  // }
  // user.isActive = true;
  // //Save entities
  // solidarityGroup.save();
  // user.save();
}
