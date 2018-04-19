import riot from 'riot'
import route from 'riot-route'
import * as util from './lib/util'
import preload_json from './config/preload'
import history_json from './config/history'

// components
import './components/history-box.tag'

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

riot.mount('history-box', { historys: history_json })
