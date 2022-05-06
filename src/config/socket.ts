import { io } from 'socket.io-client'
import { useMainStore } from '@/store'

export const socket: any = {}
export default () => {
  const mainStore = useMainStore()

  socket.io = io('ws://localhost:3002')
  socket.io.on('connect', () => {
    console.log('connect.')
  })
  socket.io.on('createView', (data: any) => {
    mainStore.updateViews(data)
  })
}