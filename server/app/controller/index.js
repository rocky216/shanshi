import axios from "axios"
import fetch from "./index"

class Footer {
  constructor() {

  }

  async search(req, res){
    const options={
      url: 'http://wap.pushans.com/CustomerModule/Company/GetShopList',
      method: 'post',
    }
    await fetch(options)
  }

}

export default new Footer()
