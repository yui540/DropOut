const root                     = document.getElementById('root')
const load_icon                = document.querySelector('.load-view__body__panel__icon_type_4 .icon')
const load_view                = document.querySelector('.load-view')
const load_view_body_close     = document.querySelector('.load-view__body__close')
const gab_animation            = document.querySelector('.gab-animation')
const gab_animation__end_block = document.querySelector('.gab-animation__close .end-block')
const calling                  = document.querySelector('.calling')
const calling__end             = document.querySelector('.calling__end')
const end_animation            = document.querySelector('.end-animation')
const end_animation__end       = document.querySelector('.end-animation .window img')
const top_page                 = document.querySelector('.top-page')
const top_page__wrap           = document.querySelector('.top-page .wrap')

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
 * top-page__ringのサイズを設定
 */
export const setRingSize = () => {
  const default_size = 650
  const window_size = top_page.clientHeight
  const per = window_size / default_size
  
  top_page__wrap.style.transform = `scale(${ per })`
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

  load_view_body_close.addEventListener('animationend', e => {
    if(e.animationName === 'load-view__close-2') {
      root.removeChild(load_view)
      startGabAnimation()
    }
  })
}

/**
 * gab-animationの開始
 */
export const startGabAnimation = () => {
  gab_animation.setAttribute('data-state', 'start')

  gab_animation__end_block.addEventListener('animationend', e => {
    if(e.animationName === 'gab-animation__close'
      || e.animationName === 'gab-animation__close__sp') {
      root.removeChild(gab_animation)
      startCalling()
    }
  })
}

/**
 * callingの開始
 */
export const startCalling = () => {
  calling.setAttribute('data-state', 'start')

  calling__end.addEventListener('animationend', e => {
    if(e.animationName === 'calling__end') {
      root.removeChild(calling)
      startEndAnimation()
    }
  })
}

/**
 * end-animationの開始
 */
export const startEndAnimation = () => {
  end_animation.setAttribute('data-state', 'start')

  end_animation__end.addEventListener('animationend', e => {
    root.removeChild(end_animation)
  })
}
