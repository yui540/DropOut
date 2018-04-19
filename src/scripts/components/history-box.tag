<history-box>
  <div class="history-box">
    <section each={ history, key in opts.historys }>
      <p class="version">{ "version_" + history.version }</p>
      <h4 class="title">{ history.title }</h4>
      <img src={ history.thumb } alt={ history.title } />
      <a href={ history.link } target="_blank">{ "v" + history.version + "を見る" }</a>
    </section>
  </div>
</history-box>
