// Copyright (c) 2020 Curvegrid Inc.

import provider from "@truffle/hdwallet-provider";
import { getHost, getConfig } from "./config";

/**
 * The MultiBaas provider.
 *
 * You need the `MB_PLUGIN_API_KEY` environment variable set, or a `mb_plugin_api_file` present.
 */
export default class Provider extends provider {
  /**
   * Create a provider from the given development ID and private keys/mnemonics/wallet.
   *
   * For parameters other than `deploymentID`, consult
   * https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider
   * @param deploymentID The MultiBaas deployment ID.
   */
  constructor(
    mnemonic: string | string[],
    deploymentID: string,
    addressIndex?: number,
    numAddresses?: number,
    shareNonce?: boolean,
    walletHdpath?: string
  ) {
    super(
      mnemonic,
      `${getHost(deploymentID)}/web3/${getConfig().apiKey}`,
      addressIndex,
      numAddresses,
      shareNonce,
      walletHdpath
    );
  }
}