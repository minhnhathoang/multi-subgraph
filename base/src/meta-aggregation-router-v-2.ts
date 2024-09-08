import {
  ClientData as ClientDataEvent,
  Error as ErrorEvent,
  Exchange as ExchangeEvent,
  Fee as FeeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Swapped as SwappedEvent
} from "../generated/MetaAggregationRouterV2/MetaAggregationRouterV2"
import {
  ClientData,
  Error,
  Exchange,
  Fee,
  OwnershipTransferred,
  Swapped
} from "../generated/schema"
import {Address, Bytes} from "@graphprotocol/graph-ts";


export function handleClientData(event: ClientDataEvent): void {
  let entity = new ClientData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.clientData = event.params.clientData

  entity.save()
}

export function handleError(event: ErrorEvent): void {
  let entity = new Error(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.reason = event.params.reason

  entity.save()
}

export function handleExchange(event: ExchangeEvent): void {
  let entity = new Exchange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.pair = event.params.pair
  entity.amountOut = event.params.amountOut
  entity.output = event.params.output

  entity.save()
}

export function handleFee(event: FeeEvent): void {
  let entity = new Fee(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.token = event.params.token;
  entity.totalAmount = event.params.totalAmount;
  entity.totalFee = event.params.totalFee;

  entity.recipients = event.params.recipients.map<Bytes>((recipient: Address): Bytes => {
    return recipient as Bytes;
  });

  entity.amounts = event.params.amounts;
  entity.isBps = event.params.isBps;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.save()
}

export function handleSwapped(event: SwappedEvent): void {
  let entity = new Swapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.address = event.address

  entity.blockNumber = event.block.number
  entity.blockHash = event.block.hash

  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index

  entity.logIndex = event.logIndex

  entity.sender = event.params.sender
  entity.srcToken = event.params.srcToken
  entity.dstToken = event.params.dstToken
  entity.dstReceiver = event.params.dstReceiver
  entity.spentAmount = event.params.spentAmount
  entity.returnAmount = event.params.returnAmount

  entity.save()
}
