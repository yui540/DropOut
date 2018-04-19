import riot from 'riot'
import route from 'riot-route'
import * as util from './lib/util'
import preload_json from './config/preload'
import history_json from './config/history'
import product_json from './config/product'

// components
import './components/history-box.tag'
import './components/product-box.tag'

// init
util.setRingSize()
util.bindNav()
util.bindCloseBtn()

// loading
util.startLoading(() => {
  util.preload(preload_json, () => {
    util.finLoad()
  }, data => {})
})

// render
riot.mount('history-box', { historys: history_json })
riot.mount('product-box', { products: product_json })
