import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const views = ref<Array<string>>([])
  const players = ref<Array<string>>([])
  const user = ref<string>('')

  const updateUser = (name: string) => {
    user.value = name
  }
  const updateViews = (newViews: Array<string>) => {
    views.value = newViews
  }
  
  return {
    user,
    views,
    players,
    updateUser,
    updateViews
  }
})
