import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Patent } from '@/types'

export const usePatentsStore = defineStore('patentsStore', () => {
  const patents = ref<Array<Patent>>([])

  async function load() {

  }

  return { patents, load }
})
