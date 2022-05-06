import { useMainStore } from '@/store'
import { storeToRefs } from 'pinia'
import { socket } from '@/config/socket'
import { computed } from 'vue'

export default () => {
  const mainStore = useMainStore()
  const { players, user } = storeToRefs(mainStore)
  const isJoin = computed(() => {
    return players.value.includes(user.value)
  })
  const handleConfirm = () => {
    if (isJoin.value) {
      socket.io.emit('playerLeave', mainStore.user, (res: any) => {
        if (res.code === 200) {
          mainStore.updatePlayers(res.data.players)
          mainStore.updateViews(res.data.views)
        } else {
          alert(res.msg)
        }
      })
      return
    }
    socket.io.emit('playerJoin', mainStore.user, (res: any) => {
      if (res.code === 200) {
        mainStore.updatePlayers(res.data.players)
        mainStore.updateViews(res.data.views)
      } else {
        alert(res.msg)
      }
    })
  }

  return {
    isJoin,
    players,
    handleConfirm
  }
}