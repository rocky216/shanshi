var express = require("express")
var router = express.Router()
import controller from "../app/controller/index"


router.post('/CustomerModule/Company/GetShopList', controller.search)

module.exports = router
