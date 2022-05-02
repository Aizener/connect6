import { computed, ref } from 'vue'
import axios from '@/http/useAxios'

export default () => {
  const name = ref('')
  const handleConfirm = async () => {
    if (name.value.trim().length === 0) {
      return
    }
    const res = await axios.post('/users/create', { name: name.value })
    console.log('res', res)
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