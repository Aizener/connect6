import { computed, ref } from 'vue'
import axios from '@/http/useAxios'
import { useMainStore } from '@/store'

export default () => {
  const name = ref(''), mainStore = useMainStore()
  const handleConfirm = async () => {
    if (name.value.trim().length === 0) {
      return
    }
    const res: any = await axios.post('/users/create', { name: name.value })
    if (res.code === 200) {
      mainStore.updateUser(res.data.name)
    } else {
      alert(res.msg)
    }
  }
  const getStyle = computed(() => {
    return (
      name.value.trim().length === 0 ?
      {
        backgroundColor: 'gray',
      }
      : ''
    )
  })

  return {
    name,
    getStyle,
    handleConfirm
  }
}