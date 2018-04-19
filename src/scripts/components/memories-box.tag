<memories-box>
  <div class="memories-box">
    <a each={ me, key in opts.memories } href={ me.link } target="_blank">
      <img src={ me.thumb } alt={ me.title } />
      <h4 class="title">{ me.title }</h4>
      <small class="date">{ me.date }</span>
    </a>
  </div>
</memories-box>
