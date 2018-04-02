const load_icon = document.querySelector('.load-view__body__panel__icon_type_4 .icon')
const load_view = document.querySelector('.load-view')

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
 * ロードの開始タイミングを取得
 * @param fn : コールバック関数
 */
export const startLoading = fn => {
  load_icon.addEventListener('animationend', fn)
}

/**
 * ロードの終了
 */
export const finLoad = () => {
  load_view.setAttribute('data-state', 'start')  
}
