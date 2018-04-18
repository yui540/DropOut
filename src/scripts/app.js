import riot from 'riot'
import route from 'riot-route'
import * as util from './lib/util'
import preload_json from './config/preload'

// components
import './components/app.tag'

// init
util.setRingSize()
util.bindNav()

// loading
util.startLoading(() => {
  util.preload(preload_json, () => {
    util.finLoad()
  }, data => {})
})

riot.mount('app')
