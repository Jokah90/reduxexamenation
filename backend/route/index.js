const { Router } = require('express')
const router = new Router()
const fs = require('fs')



router.get('/', (req, res) => {
    const menu = fs.createReadStream('data/menu.json')
    menu.pipe(res)
})

module.exports = router