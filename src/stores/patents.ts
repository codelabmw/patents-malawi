import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Patent } from '@/types'
import { BrowserProvider, Contract } from 'ethers'
import { Contracts, WalletConnectService } from '@/services/WalletConnectService'

export const usePatentsStore = defineStore('patents', () => {
  const _patents = ref<Array<Patent>>([])
  const mine = ref<Array<Patent>>([])

  const patents = computed(() => _patents.value)

  async function load() {
    document.dispatchEvent(new Event(PatentsEvents.LOADING))

    const wallet_provider = WalletConnectService.instance.modal.getWalletProvider()
    const signer = await (new BrowserProvider(wallet_provider!)).getSigner()
    const patents_contract = new Contract(Contracts.Patents.address, Contracts.Patents.abi, signer)

    const patents_count = await patents_contract.count()
    
    _patents.value = await patents_contract.some(patents_count, 1)
    mine.value = await patents_contract.mine()

    document.dispatchEvent(new Event(PatentsEvents.LOADED))
  }

  return { patents: patents, mine, load }
})

export enum PatentsEvents {
  LOADING = 'PATENTS_LOADING',
  LOADED = 'PATENTS_LOADED',
}
