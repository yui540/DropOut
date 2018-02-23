console.log('##############################################')
console.log(' どーもーココロヤミです')
console.log(' そんなにこのサイトの仕組みが知りたいの？')
console.log(' ↓ ここにコードがあるから、Starつけてよね❤️')
console.log(' https://github.com/yuki540net/DropOut')
console.log('##############################################')

import * as util from './lib/util'
import preload_json from './config/preload'

setTimeout(() => {
  testPreload(() => {
    util.finisheLoadView()
  }, (per) => {
    util.updateCharPanel(per)
    util.updateProgressBar(per)
  })
}, 1200)

/**
 * プリロードのテスト
 */
function testPreload(fn, progress) {
  let per = 0
  let timer = setInterval(() => {
    per += 0.04
    progress(per)
    if(per >= 1) {
      clearInterval(timer)
      fn()
    }
  }, 200)
}
