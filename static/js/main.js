/**
 * ===== 功能初始化 =====
 * 各函数按模块独立 try-catch，单模块失败不影响其余功能。
 * 所有文案配置见 data.js。
 */

try { initPageTitle(); } catch (e) { console.warn(e); }
try { initCoverTitle(); } catch (e) { console.warn(e); }
try { initUser(); } catch (e) { console.warn(e); }
try { initAbout(); } catch (e) { console.warn(e); }
try { initFooterName(); } catch (e) { console.warn(e); }
try { initPoem(); } catch (e) { console.warn(e); }
try { initMusic(); } catch (e) { console.warn(e); }
try { initQuote(); } catch (e) { console.warn(e); }
try { initAnime(); } catch (e) { console.warn(e); }
try { initCategories(); } catch (e) { console.warn(e); }
try { initSubsites(); } catch (e) { console.warn(e); }
try { initFriends(); } catch (e) { console.warn(e); }
try { setInterval(function () { ascTime(SITE_DATA.siteInfo.startDate, document.getElementById('run-days')); }, 1000); } catch (e) { console.warn(e); }
try { initGames(); } catch (e) { console.warn(e); }
try { initAnimeToggle(); } catch (e) { console.warn(e); }
try { initTyped(); } catch (e) { console.warn(e); }
try { initJinrishici(); } catch (e) { console.warn(e); }

function initAnimeToggle() {
  var wrap = document.getElementById('anime-toggle');
  var strip = document.getElementById('anime-strip');
  if (!wrap || !strip) return;

  var count = strip.children.length;
  if (count === 0) return;

  strip.classList.add('collapsed');

  wrap.className = 'anime-toggle-wrap';

  var btn = document.createElement('button');
  btn.className = 'anime-toggle-btn';
  btn.textContent = '展开全部 (' + count + ')';
  btn.addEventListener('click', function () {
    strip.classList.toggle('collapsed');
    if (strip.classList.contains('collapsed')) {
      btn.textContent = '展开全部 (' + count + ')';
    } else {
      btn.textContent = '收起';
    }
  });

  wrap.appendChild(btn);
}

function initTyped() {
  var el = document.getElementById('typed-subtitle');
  if (!el) return;

  var list = [
    '人间有味是清欢',
    '但行好事，莫问前程',
    '少年与爱永不老去',
    '心有猛虎，细嗅蔷薇',
    '且将新火试新茶',
    '万物皆有裂痕，那是光照进来的地方',
    '幸得识卿桃花面',
    '以此轮皎洁的明月，共祝我们拥有长久的欢喜',
    '吹灭读书灯，一身都是月',
    '山高路远，看世界，找自己',
  ];

  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }

  if (typeof Typed === 'undefined') {
    console.warn('[Typed] library not loaded, showing static text');
    el.textContent = list[0];
    return;
  }

  console.log('[Typed] initializing with ' + list.length + ' strings');

  new Typed(el, {
    strings: list,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 600,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  });
}

function initJinrishici() {
  if (typeof jinrishici === 'undefined') return;

  jinrishici.load(function (result) {
    var content = result.data.content;
    var origin = result.data.origin || {};
    var title = origin.title || '今日诗词';
    var author = origin.author || '佚名';

    var titleEl = document.getElementById('poem-title');
    var contentEl = document.getElementById('poem-content');
    var authorEl = document.getElementById('poem-author');
    if (!contentEl || !authorEl) return;

    if (titleEl) titleEl.textContent = title;

    contentEl.innerHTML = '';
    var lines = content.split('\n').filter(Boolean);
    lines.forEach(function (line) {
      var p = document.createElement('p');
      p.textContent = line;
      contentEl.appendChild(p);
    });

    if (authorEl) authorEl.textContent = '— ' + author;
  });
}

function initGames() {
  var grid = document.getElementById('games-grid');
  if (!grid) return;
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.games) return;

  SITE_DATA.games.forEach(function (game) {
    var item = document.createElement('div');
    item.className = 'game-item';

    var link = document.createElement('a');
    link.className = 'game-link';
    link.href = game.url || '#';

    var polaroid = document.createElement('div');
    polaroid.className = 'polaroid';

    var img = document.createElement('img');
    img.loading = 'lazy';
    img.onerror = function () {
      this.src = 'data:image/svg+xml,' + encodeURIComponent('');
      this.style.objectFit = 'contain';
      this.style.padding = '20px';
    };
    img.src = game.cover;
    img.alt = game.name;

    var caption = document.createElement('span');
    caption.className = 'polaroid-caption';
    caption.textContent = game.name;

    polaroid.appendChild(img);
    polaroid.appendChild(caption);
    link.appendChild(polaroid);
    item.appendChild(link);

    var desc = document.createElement('p');
    desc.className = 'game-desc';
    desc.textContent = game.desc;
    item.appendChild(desc);

    if (game.uid) {
      var btn = document.createElement('button');
      btn.className = 'copy-uid-btn';
      btn.textContent = '复制 UID';
      btn.setAttribute('data-clipboard-text', game.uid);
      btn.addEventListener('click', function (e) {
        e.preventDefault();
      });
      item.appendChild(btn);
    }

    grid.appendChild(item);
  });

  if (typeof ClipboardJS !== 'undefined') {
    var clipboard = new ClipboardJS('.copy-uid-btn');
    clipboard.on('success', function (e) {
      e.clearSelection();
      showToast('UID ' + e.text + ' 已复制');
    });
    clipboard.on('error', function () {
      showToast('复制失败，请手动复制');
    });
  }
}

function initPageTitle() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.user) return;
  document.title = SITE_DATA.user.name;
}

function initCoverTitle() {
  if (typeof SITE_DATA === 'undefined') return;
  var el = document.getElementById('cover-title');
  if (el && SITE_DATA.siteInfo && SITE_DATA.siteInfo.coverTitle) {
    el.textContent = SITE_DATA.siteInfo.coverTitle;
  }
  var stampEl = document.getElementById('cover-stamp');
  if (stampEl && SITE_DATA.siteInfo && SITE_DATA.siteInfo.coverStamp) {
    stampEl.textContent = SITE_DATA.siteInfo.coverStamp;
  }
}

function initUser() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.user) return;
  var user = SITE_DATA.user;

  var nameEl = document.getElementById('user-name');
  if (nameEl) nameEl.textContent = user.name;

  var subnameEl = document.getElementById('user-subname');
  if (subnameEl) subnameEl.textContent = user.subname || '';

  var bioEl = document.getElementById('user-bio');
  if (bioEl) bioEl.textContent = user.bio;

  var avatarEl = document.getElementById('user-avatar');
  if (avatarEl) avatarEl.src = user.avatar;

  var socialsEl = document.getElementById('user-socials');
  if (socialsEl) {
    socialsEl.innerHTML = '';
    user.socials.forEach(function (s) {
      var a = document.createElement('a');
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', s.icon.replace('bi-', ''));
      a.innerHTML = '<i class="bi ' + s.icon + '"></i>';
      socialsEl.appendChild(a);
    });
  }
}

function initFooterName() {
  if (typeof SITE_DATA === 'undefined') return;
  var el = document.getElementById('footer-name');
  if (el && SITE_DATA.user) {
    el.textContent = SITE_DATA.user.name;
  }
  var stampEl = document.getElementById('footer-stamp');
  if (stampEl && SITE_DATA.siteInfo && SITE_DATA.siteInfo.footerStamp) {
    stampEl.textContent = SITE_DATA.siteInfo.footerStamp;
  }
  var yearEl = document.getElementById('copyright-year');
  if (yearEl && SITE_DATA.siteInfo && SITE_DATA.siteInfo.copyrightYear) {
    yearEl.textContent = SITE_DATA.siteInfo.copyrightYear;
  }
}

function initAbout() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.about) return;
  var about = SITE_DATA.about;

  var introEl = document.getElementById('about-intro');
  if (introEl) introEl.textContent = about.intro;

  var tagsEl = document.getElementById('about-tags');
  if (tagsEl) {
    tagsEl.innerHTML = '';
    about.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });
  }
}

function initPoem() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.poem) return;
  var poem = SITE_DATA.poem;

  var titleEl = document.getElementById('poem-title');
  if (titleEl) titleEl.textContent = poem.title;

  var contentEl = document.getElementById('poem-content');
  if (contentEl) {
    contentEl.innerHTML = '';
    poem.content.forEach(function (line) {
      var p = document.createElement('p');
      p.textContent = line;
      contentEl.appendChild(p);
    });
  }

  var authorEl = document.getElementById('poem-author');
  if (authorEl) authorEl.textContent = '— ' + poem.author;
}

function initQuote() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.quote) return;
  var textEl = document.getElementById('hitokoto');
  var fromEl = document.getElementById('hitokoto-from');
  if (textEl && textEl.textContent === 'Loading...') {
    textEl.textContent = SITE_DATA.quote.text;
  }
  if (fromEl && fromEl.textContent === '— 一言') {
    fromEl.textContent = '— ' + SITE_DATA.quote.from;
  }
}

function initMusic() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.music) return;
  var m = SITE_DATA.music;

  var container = document.getElementById('music-player');
  if (!container) return;

  var el = document.createElement('meting-js');
  el.setAttribute('server', m.server);
  el.setAttribute('type', m.type);
  el.setAttribute('id', m.id);
  el.setAttribute('fixed', 'false');
  el.setAttribute('autoplay', 'false');
  el.setAttribute('mutex', 'true');
  el.setAttribute('preload', 'none');
  el.setAttribute('theme', '#3a2c1b');
  el.setAttribute('order', 'random');

  var nameEl = document.createElement('p');
  nameEl.style.cssText = 'font-size:0.85rem;color:#b0a090;margin-top:8px;';
  // nameEl.textContent = '♫ ' + m.song + ' — ' + m.artist;

  container.appendChild(el);
  container.appendChild(nameEl);
}

function initAnime() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.anime) return;
  var anime = SITE_DATA.anime;

  var mainEl = document.getElementById('anime-grid-main');
  var stripEl = document.getElementById('anime-strip');
  if (!mainEl && !stripEl) return;

  if (mainEl) mainEl.innerHTML = '';
  if (stripEl) stripEl.innerHTML = '';

  anime.forEach(function (item, i) {
    var file = typeof item === 'string' ? item : item.src;
    var name = item.name || '番剧 ' + String.fromCharCode(65 + i);
    var polaroid = document.createElement('div');
    polaroid.className = 'polaroid';

    var img = document.createElement('img');
    img.src = 'static/img/bangumi/' + file;
    img.loading = 'lazy';
    img.onerror = function () {
      this.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect width="200" height="150" fill="%23f0e8d8" rx="8"/><text x="100" y="86" text-anchor="middle" fill="%23b8a088" font-size="28" font-family="sans-serif">?</text></svg>');
      this.style.objectFit = 'contain';
      this.style.padding = '20px';
    };

    var caption = document.createElement('span');
    caption.className = 'polaroid-caption';
    caption.textContent = name;

    polaroid.appendChild(img);
    polaroid.appendChild(caption);

    if (i < 4 && mainEl) {
      mainEl.appendChild(polaroid);
    } else if (stripEl) {
      stripEl.appendChild(polaroid);
    }
  });
}

function initCategories() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.categories) return;

  function buildCard(card, cat, iconClass) {
    if (!card) return;
    card.innerHTML = '';

    var h4 = document.createElement('h4');
    h4.innerHTML = '<i class="bi ' + iconClass + '"></i> ' + cat.title;
    card.appendChild(h4);

    cat.groups.forEach(function (group) {
      var div = document.createElement('div');
      div.className = 'link-group';

      var h5 = document.createElement('h5');
      h5.className = 'link-group-title';
      h5.textContent = group.label;
      div.appendChild(h5);

      var grid = document.createElement('div');
      grid.className = 'link-grid';
      group.links.forEach(function (link) {
        var a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        grid.appendChild(a);
      });
      div.appendChild(grid);
      card.appendChild(div);
    });
  }

  var toolsCard = document.getElementById('card-tools');
  if (toolsCard && SITE_DATA.categories[0]) {
    buildCard(toolsCard, SITE_DATA.categories[0], 'bi-tools');
  }

  var funCard = document.getElementById('card-fun');
  if (funCard && SITE_DATA.categories[1]) {
    var tape = funCard.querySelector('.tape');
    buildCard(funCard, SITE_DATA.categories[1], 'bi-controller');
    if (tape) funCard.prepend(tape);
  }
}

function initSubsites() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.subsites) return;
  var subsites = SITE_DATA.subsites;

  var grid = document.getElementById('subsites-grid');
  if (!grid) return;

  grid.innerHTML = '';
  grid.style.justifyContent = 'center';

  subsites.forEach(function (s) {
    var a = document.createElement('a');
    a.className = 'subsite-link';
    a.href = s.url;
    a.innerHTML = '<i class="bi ' + s.icon + '"></i> ' + s.name;
    grid.appendChild(a);
  });
}

function initFriends() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.friends) return;
  var friends = SITE_DATA.friends;

  var row = document.getElementById('friends-row');
  if (!row) return;

  row.innerHTML = '';

  friends.forEach(function (f) {
    var a = document.createElement('a');
    a.className = 'friend-card';
    a.href = f.url;

    var pin = document.createElement('div');
    pin.className = 'pin';
    a.appendChild(pin);

    var img = document.createElement('img');
    img.className = 'friend-avatar';
    img.src = f.avatar;
    img.alt = '';
    img.width = 36;
    img.height = 36;
    a.appendChild(img);

    var nameSpan = document.createElement('span');
    nameSpan.className = 'friend-name';
    nameSpan.textContent = f.name;
    a.appendChild(nameSpan);

    var descSpan = document.createElement('span');
    descSpan.className = 'friend-desc';
    descSpan.textContent = f.desc;
    a.appendChild(descSpan);

    row.appendChild(a);
  });
}

function showToast(msg) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(function () {
    el.classList.remove('show');
  }, 2000);
}
