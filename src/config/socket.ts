import { io } from 'socket.io-client'
import { useMainStore } from '@/store'

export default () => {
  const mainStore = useMainStore()

  const socket = io('ws://localhost:3002')
  socket.on('createView', (data: any) => {
    mainStore.updateViews(data)
  })
}