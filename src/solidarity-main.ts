import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SolidarityGroupCreated as SolidarityGroupCreatedEvent,
} from "../generated/SolidarityMain/SolidarityMain";
import { SolidarityGroup, SolidarityGroupCreated } from "../generated/schema";

import { SolidarityGroups } from "../generated/templates";

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleSolidarityGroupCreated(
  event: SolidarityGroupCreatedEvent
): void {
  // let entity = new SolidarityGroupCreated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.childSolidarityGroup = event.params.childSolidarityGroup;

  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();

  //Instantiating data source tamplate
  SolidarityGroups.create(event.params.childSolidarityGroup);
  //Create etities
  let solidarityGroup = new SolidarityGroup(event.params.childSolidarityGroup);
  //Update entity
  solidarityGroup.council = event.address;
  solidarityGroup.saveAmount = BigInt.fromI32(0);
  solidarityGroup.socialAmount = BigInt.fromI32(0);
  solidarityGroup.socialFund = BigInt.fromI32(0);
  solidarityGroup.shareAmount = BigInt.fromI32(0);
  solidarityGroup.sharesFund = BigInt.fromI32(0);
  solidarityGroup.meeting = BigInt.fromI32(0);
  solidarityGroup.interesRate = BigInt.fromI32(0);

  //Save entity
  solidarityGroup.save();
}
