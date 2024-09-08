import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ClientData,
  Error,
  Exchange,
  Fee,
  OwnershipTransferred,
  Swapped
} from "../generated/MetaAggregationRouterV2/MetaAggregationRouterV2"

export function createClientDataEvent(clientData: Bytes): ClientData {
  let clientDataEvent = changetype<ClientData>(newMockEvent())

  clientDataEvent.parameters = new Array()

  clientDataEvent.parameters.push(
    new ethereum.EventParam("clientData", ethereum.Value.fromBytes(clientData))
  )

  return clientDataEvent
}

export function createErrorEvent(reason: string): Error {
  let errorEvent = changetype<Error>(newMockEvent())

  errorEvent.parameters = new Array()

  errorEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return errorEvent
}

export function createExchangeEvent(
  pair: Address,
  amountOut: BigInt,
  output: Address
): Exchange {
  let exchangeEvent = changetype<Exchange>(newMockEvent())

  exchangeEvent.parameters = new Array()

  exchangeEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  exchangeEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  exchangeEvent.parameters.push(
    new ethereum.EventParam("output", ethereum.Value.fromAddress(output))
  )

  return exchangeEvent
}

export function createFeeEvent(
  token: Address,
  totalAmount: BigInt,
  totalFee: BigInt,
  recipients: Array<Address>,
  amounts: Array<BigInt>,
  isBps: boolean
): Fee {
  let feeEvent = changetype<Fee>(newMockEvent())

  feeEvent.parameters = new Array()

  feeEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  feeEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )
  feeEvent.parameters.push(
    new ethereum.EventParam(
      "totalFee",
      ethereum.Value.fromUnsignedBigInt(totalFee)
    )
  )
  feeEvent.parameters.push(
    new ethereum.EventParam(
      "recipients",
      ethereum.Value.fromAddressArray(recipients)
    )
  )
  feeEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  feeEvent.parameters.push(
    new ethereum.EventParam("isBps", ethereum.Value.fromBoolean(isBps))
  )

  return feeEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSwappedEvent(
  sender: Address,
  srcToken: Address,
  dstToken: Address,
  dstReceiver: Address,
  spentAmount: BigInt,
  returnAmount: BigInt
): Swapped {
  let swappedEvent = changetype<Swapped>(newMockEvent())

  swappedEvent.parameters = new Array()

  swappedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam("srcToken", ethereum.Value.fromAddress(srcToken))
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam("dstToken", ethereum.Value.fromAddress(dstToken))
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "dstReceiver",
      ethereum.Value.fromAddress(dstReceiver)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "spentAmount",
      ethereum.Value.fromUnsignedBigInt(spentAmount)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "returnAmount",
      ethereum.Value.fromUnsignedBigInt(returnAmount)
    )
  )

  return swappedEvent
}
