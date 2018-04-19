<product-box>
  <div class="product-box">
    <h3 class="sub-title">アプリ・サービス</h3>
    <section>
      <a each={ app, key in opts.products.app } href={ app.link } target="_blank">
        <img src={ app.thumb } alt={ app.name } />
        <h4 class="name">{ app.name }</h4>
        <p class="description">{ app.description }</p>
        <small class="date">{ app.date }</small>
      </a>
    </section>

    <h3 class="sub-title">ライブラリ</h3>
    <section>
      <a each={ lib, key in opts.products.lib } href={ lib.link } target="_blank">
        <img src={ lib.thumb } alt={ lib.name } />
        <h4 class="name">{ lib.name }</h4>
        <p class="description">{ lib.description }</p>
        <small class="date">{ lib.date }</small>
      </a>
    </section>

    <h3 class="sub-title">デザイン</h3>
    <section>
      <a each={ design, key in opts.products.design } href={ design.link } target="_blank">
        <img src={ design.thumb } alt={ design.name } />
        <h4 class="name">{ design.name }</h4>
        <p class="description">{ design.description }</p>
        <small class="date">{ design.date }</small>
      </a>
    </section>

    <h3 class="sub-title">動画</h3>
    <section>
      <a each={ movie, key in opts.products.movie } href={ movie.link } target="_blank">
        <img src={ movie.thumb } alt={ movie.name } />
        <h4 class="name">{ movie.name }</h4>
        <p class="description">{ movie.description }</p>
        <small class="date">{ movie.date }</small>
      </a>
    </section>
  </div>
</product-box>
