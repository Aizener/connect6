import axios from './index'

const post = async (path: string, data: any) => {
  return await axios.post(path, data).catch(err => { throw err })
}

export default {
  post
}
