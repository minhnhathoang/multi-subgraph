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

export function handleClientData(event: ClientDataEvent): void {
  let entity = new ClientData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clientData = event.params.clientData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleError(event: ErrorEvent): void {
  let entity = new Error(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExchange(event: ExchangeEvent): void {
  let entity = new Exchange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pair = event.params.pair
  entity.amountOut = event.params.amountOut
  entity.output = event.params.output

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFee(event: FeeEvent): void {
  let entity = new Fee(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.token = event.params.token
  entity.totalAmount = event.params.totalAmount
  entity.totalFee = event.params.totalFee
  entity.recipients = event.params.recipients
  entity.amounts = event.params.amounts
  entity.isBps = event.params.isBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapped(event: SwappedEvent): void {
  let entity = new Swapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.srcToken = event.params.srcToken
  entity.dstToken = event.params.dstToken
  entity.dstReceiver = event.params.dstReceiver
  entity.spentAmount = event.params.spentAmount
  entity.returnAmount = event.params.returnAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
