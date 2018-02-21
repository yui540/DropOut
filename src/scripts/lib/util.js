const load_view = document.getElementById('load-view')
const char_panel = document.querySelectorAll('.blocks .block')
const progress_bar = document.getElementById('progress-bar')

/**
 * 画像のプリロード
 * @param images   : 画像パスの配列
 * @param fn       : コールバック関数
 * @param progress : 読み込み状況取得用コールバック関数
 */
export const preload = (images, fn, progress) => {
  const len  = images.length
  let load = 0

  images.forEach((image, key) => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      load += 1
      progress({
        size : len,
        load : load,
        per  : load / len
      })

      if(load >= len) fn()
    }
  })
}

/**
 * スマートフォンかどうかの真偽
 * @return bool
 */
export const isSP = () => {
  const useragent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(useragent)
}

/**
 * PCかどうかの真偽
 * return bool
 */
export const isPC = () => {
  return !isSP()
}

/**
 * 指定した時間に要素を非表示にする
 * @param selector : セレクタ名
 * @param time     : 時間
 */
export const hiddenTimeout = (selector, time) => {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'none'
  }, time)
}

/**
 * キャラクターパネルの更新
 * @param per : 割合
 */
export const updateCharPanel = (per) => {
  if(per >= 0.14) char_panel[0].setAttribute('data-state', 'true')
  if(per >= 0.28) char_panel[1].setAttribute('data-state', 'true')
  if(per >= 0.42) char_panel[2].setAttribute('data-state', 'true')
  if(per >= 0.57) char_panel[3].setAttribute('data-state', 'true')
  if(per >= 0.71) char_panel[4].setAttribute('data-state', 'true')
  if(per >= 0.85) char_panel[5].setAttribute('data-state', 'true')
  if(per >= 1.00) char_panel[6].setAttribute('data-state', 'true')
}

/**
 * プログレスバーの更新
 * @param per : 割合
 */
export const updateProgressBar = (per) => {
  progress_bar.children[0].style.width = `${ per * 100 }%`
}

/**
 * モーションパート
 */
export const finisheLoadView = () => {
  load_view.setAttribute('data-state', 'fin')
}
