/* ===== Projet NIRD au cycle 3 — script du site ===== */
(function () {
  'use strict';

  /* ---------- Lexique : les mots expliqués pour des élèves de CM1-CM2 ---------- */
  var LEX = {
    'ordinateur': 'Une machine qui suit des instructions pour écrire, dessiner, calculer, chercher des informations ou jouer.',
    'logiciel': 'Une liste d’instructions qui dit à l’ordinateur ce qu’il doit faire. C’est un peu comme une recette de cuisine, mais pour l’ordinateur. Exemple : un logiciel de dessin.',
    'systeme': 'Système d’exploitation : le « chef d’orchestre » de l’ordinateur. C’est le premier logiciel qui démarre, et il fait fonctionner tous les autres. Exemples : Windows, Linux, PrimTux.',
    'mise-a-jour': 'Mise à jour : une nouvelle version d’un logiciel, pour corriger ses erreurs, le protéger ou l’améliorer.',
    'obsolete': 'Obsolète : se dit d’un objet qu’on considère comme dépassé, trop vieux, même s’il fonctionne encore.',
    'libre': 'Logiciel libre : un logiciel que tout le monde a le droit d’utiliser, d’étudier, de modifier et de partager. Sa « recette » est visible par tous.',
    'proprietaire': 'Logiciel propriétaire : un logiciel dont on ne peut pas voir ni changer la « recette ». Seul son fabricant décide de ce qu’on a le droit de faire avec.',
    'linux': 'Linux : une famille de systèmes d’exploitation libres, gratuits, qui fonctionnent bien sur les vieux ordinateurs.',
    'primtux': 'PrimTux : un système d’exploitation libre, fait par des enseignants pour l’école primaire. Il contient des logiciels pour apprendre.',
    'reconditionner': 'Reconditionner : remettre en état un appareil d’occasion (le nettoyer, le réparer, le réinstaller) pour qu’il puisse servir à nouveau.',
    'dechet': 'Déchet électronique : un appareil électrique ou électronique qu’on jette (ordinateur, téléphone, télévision…).',
    'recycler': 'Recycler : récupérer les matières d’un objet jeté (métal, plastique, verre) pour fabriquer d’autres objets.',
    'unite-centrale': 'Unité centrale : la grande boîte de l’ordinateur. Elle contient ses pièces les plus importantes, comme son « cerveau » (le processeur) et sa mémoire.',
    'peripherique': 'Périphérique : un appareil que l’on branche à l’unité centrale : écran, clavier, souris, imprimante, haut-parleurs…',
    'entree': 'Périphérique d’entrée : il envoie des informations VERS l’ordinateur. Exemples : le clavier, la souris.',
    'sortie': 'Périphérique de sortie : il reçoit des informations DE l’ordinateur et nous les montre. Exemples : l’écran, les haut-parleurs, l’imprimante.',
    'alimentation': 'Câble d’alimentation : le câble qui apporte l’électricité à l’appareil.',
    'video': 'Câble vidéo : le câble qui transporte l’image de l’unité centrale jusqu’à l’écran. Les plus courants s’appellent HDMI et VGA.',
    'port': 'Port (ou prise) : l’endroit où l’on branche un câble. Chaque câble a sa forme de prise.',
    'hypothese': 'Hypothèse : une idée qu’on propose pour expliquer quelque chose, et qu’on va ensuite vérifier.',
    'inventeur': 'Inventeur, inventrice : une personne qui imagine et fabrique un objet nouveau.',
    'carte-mere': 'Carte mère : la grande plaque, à l’intérieur de l’unité centrale, sur laquelle toutes les pièces sont branchées.',
    'pile': 'Pile de la carte mère : une petite pile ronde et plate qui permet à l’ordinateur de se souvenir de l’heure et de ses réglages quand il est éteint.',
    'disque': 'Disque dur : la pièce qui garde en mémoire les fichiers (photos, textes, logiciels) même quand l’ordinateur est éteint.',
    'ssd': 'SSD : une sorte de disque dur moderne, sans pièce qui tourne. Il est plus rapide, plus léger et moins fragile.',
    'memoire': 'Mémoire vive : la mémoire de travail de l’ordinateur. Elle s’efface quand on l’éteint.',
    'cle-usb': 'Clé USB : un petit objet qui garde des fichiers et qu’on branche sur un port USB.',
    'processeur': 'Processeur : la pièce qui fait tous les calculs. C’est un peu le « cerveau » de l’ordinateur.',
    'ventilateur': 'Ventilateur : une petite hélice qui souffle de l’air pour refroidir les pièces qui chauffent.',
    'bloc-alim': 'Bloc d’alimentation : la boîte métallique, dans l’unité centrale, qui transforme l’électricité de la prise pour toutes les pièces. On ne l’ouvre jamais : elle garde de l’électricité même débranchée.',
    'panne': 'Panne : quand un appareil ne fonctionne plus normalement.',
    'experience': 'Expérience : un test que l’on fait pour vérifier si une hypothèse est juste.',
    'ressource': 'Ressource : ce que l’on prend dans la nature pour fabriquer des objets : métaux, eau, pétrole, sable…',
    'mine': 'Mine : un endroit où l’on creuse la terre pour en extraire des métaux ou des minerais.',
    'co2': 'Gaz à effet de serre : des gaz qui réchauffent la planète. On compte leur quantité en kilos d’« équivalent CO₂ » (kg CO₂e).',
    'cycle-de-vie': 'Cycle de vie : toutes les étapes de la vie d’un objet : on le fabrique, on l’utilise, puis il devient un déchet.'
  };


  /* ---------- Icônes (traits simples, couleur héritée) ---------- */
  var ICONS = {
    pencil:'<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M14 6l4 4"/>',
    users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.2c2.8.3 5 2.4 5 5.8"/>',
    check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    gift:'<rect x="3" y="9" width="18" height="11" rx="2"/><path d="M12 9v11M3 13h18"/><path d="M12 9C10 5 6 5 7 8c.5 1 3 1 5 1zM12 9c2-4 6-4 5-1-.5 1-3 1-5 1z"/>',
    bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    book:'<path d="M4 5c3-1.5 6-1.5 8 0v15c-2-1.5-5-1.5-8 0V5zM20 5c-3-1.5-6-1.5-8 0v15c2-1.5 5-1.5 8 0V5z"/>',
    chat:'<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/>',
    refresh:'<path d="M20 11a8 8 0 0 0-14.5-4M4 13a8 8 0 0 0 14.5 4"/><path d="M5 3v4h4M19 21v-4h-4"/>',
    code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    layers:'<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    unlock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
    lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    wrench:'<path d="M15 4a5 5 0 0 0-4.6 6.9L4 17.3V20h2.7l6.4-6.4A5 5 0 0 0 20 9l-3 1-2-2 1-3z"/>',
    trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
    box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    cap:'<path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
    terminal:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
    plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v4"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
    question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7M12 17v.5"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4V3z"/>',
    cloud:'<path d="M7 18a4 4 0 0 1-.6-8 6 6 0 0 1 11.4 1.5A3.5 3.5 0 0 1 17.5 18H7z"/>',
    warn:'<path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18v.5"/>',
    hand:'<path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V5a1.5 1.5 0 0 1 3 0v8c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12a1.5 1.5 0 0 1 2.5-1.6L8 13"/>',
    battery:'<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M7 10v4M11 10v4"/>',
    arrows:'<path d="M4 12h14M14 8l4 4-4 4"/><path d="M4 6h6M4 18h6"/>'
  };
  function icon(n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || ICONS.star) + '</svg>';
  }
  /* illustration d'un mot : "photo:Fichier.jpg" ou "icon:nom" */
  function illHtml(spec, alt) {
    if (!spec) return '';
    var i = spec.indexOf(':'), kind = spec.slice(0, i), val = spec.slice(i + 1);
    if (kind === 'photo') return '<div class="mot-ill"><img data-file="' + val + '" data-w="400" alt="' + (alt || '') + '"></div>';
    return '<div class="mot-ill icon">' + icon(val) + '</div>';
  }
  var LEXILL = {
    'ordinateur':'photo:HP_ProDesk_600_G1_Tower_PC-001.jpg','logiciel':'icon:code','systeme':'icon:layers','mise-a-jour':'icon:refresh',
    'obsolete':'photo:Ewaste-pile.jpg','libre':'icon:unlock','proprietaire':'icon:lock','linux':'icon:terminal','primtux':'icon:cap',
    'reconditionner':'icon:wrench','dechet':'photo:Ewaste.jpg','recycler':'icon:refresh','unite-centrale':'photo:HP_ProDesk_600_G1_Tower_PC-001.jpg',
    'peripherique':'photo:IBM_Model_M_keyboard_(PS-2)_and_mouse.jpg','entree':'photo:IBM_Model_M_keyboard_(PS-2)_and_mouse.jpg','sortie':'photo:Computer_monitor.jpg',
    'alimentation':'photo:Cable-secteur.JPG','video':'photo:HDMI_Cable.JPG','port':'photo:PS2_keyboard_and_mouse_ports.jpg','hypothese':'icon:bulb',
    'inventeur':'icon:bulb','carte-mere':'photo:Computer_Motherboard_Closeup.jpg','pile':'photo:CR2032_battery,_Mitsubishi,_computer_backup_battery-2423.jpg',
    'disque':'photo:Laptop-hard-drive-exposed.jpg','ssd':'photo:Samsung_SSD_850_PRO_512GB.jpg','memoire':'photo:Computer_from_inside_018.jpg','cle-usb':'photo:Maxell_USB_flash_drive.jpg',
    'processeur':'photo:AMD_Ryzen_5_1600_processor_with_Wraith_Spire_cooler_-_detail_view_of_processor.jpg','ventilateur':'photo:CPU_fan_and_heatsink.jpg',
    'bloc-alim':'photo:ATX_Computer_power_supply_unit.jpg','panne':'icon:warn','experience':'icon:eye','ressource':'icon:box','mine':'photo:Chino_copper_mine.jpg',
    'co2':'icon:cloud','cycle-de-vie':'icon:refresh'
  };
  function initIllustrations() {
    $$('.mot-card[data-ill]').forEach(function (c) {
      var b = c.querySelector('b');
      c.insertAdjacentHTML('afterbegin', illHtml(c.getAttribute('data-ill'), b ? b.textContent : ''));
    });
    $$('[data-ico]').forEach(function (el) {
      el.insertAdjacentHTML('afterbegin', '<span class="ic">' + icon(el.getAttribute('data-ico')) + '</span>');
    });
  }

  var KEY = 'nird-c3-';
  function store(k, v) { try { localStorage.setItem(KEY + k, v); return true; } catch (e) { return false; } }
  function load(k) { try { return localStorage.getItem(KEY + k); } catch (e) { return null; } }
  function drop(k) { try { localStorage.removeItem(KEY + k); } catch (e) {} }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Photos Wikimedia Commons ---------- */
  function photoUrl(file, w) {
    return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=' + (w || 900);
  }
  function initPhotos() {
    $$('img[data-file]').forEach(function (img) {
      img.loading = 'lazy';
      img.addEventListener('error', function () {
        var f = img.closest('.photo'); if (f) f.classList.add('noimg');
        var m = img.closest('.mot-ill'); if (m) m.classList.add('broken');
      });
      img.src = photoUrl(img.getAttribute('data-file'), img.getAttribute('data-w'));
    });
  }

  /* ---------- Navigation par ancre ---------- */
  var VIEWS = ['accueil', 'sequence', 'seance-1', 'seance-2', 'seance-3', 'seance-4', 'seance-5', 'seance-6', 'lexique', 'credits'];
  function route() {
    var h = (location.hash || '#accueil').slice(1);
    if (VIEWS.indexOf(h) < 0) h = 'accueil';
    $$('.view').forEach(function (v) { v.classList.toggle('on', v.id === h); });
    $$('.nav a').forEach(function (a) {
      var t = a.getAttribute('href').slice(1);
      a.classList.toggle('on', t === h || (t === 'sequence' && h.indexOf('seance') === 0));
    });
    $('.nav').classList.remove('open');
    window.scrollTo(0, 0);
    revealNow();
    updateProgress();
  }

  /* ---------- Mode élève / enseignant ---------- */
  function setMode(m) {
    document.body.classList.toggle('prof', m === 'prof');
    $$('.mode button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-mode') === m); });
    store('mode', m);
  }

  /* ---------- Sauvegarde automatique des fiches ---------- */
  function fieldKey(el) { return 'f-' + el.getAttribute('data-k'); }
  function initFields() {
    $$('.write[data-k]').forEach(function (el) {
      el.setAttribute('contenteditable', 'true');
      var v = load(fieldKey(el)); if (v) el.innerText = v;
      el.addEventListener('input', function () { store(fieldKey(el), el.innerText); flash(); updateProgress(); });
    });
    $$('input[data-k], select[data-k]').forEach(function (el) {
      var v = load(fieldKey(el));
      if (el.type === 'checkbox') { if (v === '1') el.checked = true; }
      else if (el.type === 'radio') { if (v === el.value) el.checked = true; }
      else if (v !== null) el.value = v;
      var ev = (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'radio') ? 'change' : 'input';
      el.addEventListener(ev, function () {
        if (el.type === 'checkbox') store(fieldKey(el), el.checked ? '1' : '0');
        else if (el.type === 'radio') { if (el.checked) store(fieldKey(el), el.value); }
        else store(fieldKey(el), el.value);
        flash(); updateProgress();
      });
    });
    // l'identité (prénom, classe, groupe) est partagée par toutes les fiches
    $$('.ident input').forEach(function (el) {
      el.addEventListener('input', function () {
        $$('.ident input[data-id="' + el.getAttribute('data-id') + '"]').forEach(function (o) {
          if (o !== el) o.value = el.value;
        });
      });
    });
  }
  var flashTimer;
  function flash() {
    $$('.toolbar .info').forEach(function (i) { i.textContent = 'Enregistré sur cet appareil ✓'; });
    clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { $$('.toolbar .info').forEach(function (i) { i.textContent = ''; }); }, 1600);
  }
  function updateProgress() {
    $$('.view').forEach(function (v) {
      var fields = $$('.fiche .write[data-k]', v);
      var bar = $('.progress-txt', v);
      if (!fields.length || !bar) return;
      var done = fields.filter(function (f) { return f.innerText.trim().length > 0; }).length;
      bar.textContent = done + ' / ' + fields.length + ' zones remplies';
    });
  }


  /* ---------- Zones de dessin (souris, doigt ou stylet) ---------- */
  var COLORS = ['#1F3A2E', '#B4531A', '#3A6EA5', '#3E7A4A', '#E8833A'];
  function initDraw() {
    $$('.draw[data-k]').forEach(function (box) {
      var key = 'f-' + box.getAttribute('data-k');
      box.innerHTML = '<div class="draw-tools no-print"></div><canvas width="1200" height="520" aria-label="Zone de dessin"></canvas>';
      var tools = box.querySelector('.draw-tools'), cv = box.querySelector('canvas'), cx = cv.getContext('2d');
      var color = COLORS[0], size = 5, eraser = false, drawing = false, last = null;
      COLORS.forEach(function (c, i) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'swatch' + (i === 0 ? ' on' : '');
        b.style.background = c; b.setAttribute('aria-label', 'Couleur ' + (i + 1));
        b.addEventListener('click', function () { color = c; eraser = false; mark(b); });
        tools.appendChild(b);
      });
      [['Fin', 4], ['Épais', 10]].forEach(function (t, i) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'tbtn' + (i === 0 ? ' on2' : ''); b.textContent = t[0];
        b.addEventListener('click', function () { size = t[1]; $$('.tbtn', tools).forEach(function (x) { x.classList.remove('on2'); }); b.classList.add('on2'); });
        tools.appendChild(b);
      });
      var er = document.createElement('button'); er.type = 'button'; er.className = 'tbtn'; er.textContent = 'Gomme';
      er.addEventListener('click', function () { eraser = true; mark(er); }); tools.appendChild(er);
      var cl = document.createElement('button'); cl.type = 'button'; cl.className = 'tbtn'; cl.textContent = 'Tout effacer';
      cl.addEventListener('click', function () { clearCanvas(); drop(key); }); tools.appendChild(cl);
      function mark(b) { $$('.swatch, .tbtn', tools).forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); }
      function clearCanvas() { cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height); }
      function pos(e) { var r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * cv.width / r.width, y: (e.clientY - r.top) * cv.height / r.height }; }
      clearCanvas();
      var saved = load(key);
      if (saved) { var im = new Image(); im.onload = function () { cx.drawImage(im, 0, 0); }; im.src = saved; }
      cv.addEventListener('pointerdown', function (e) { drawing = true; last = pos(e); cv.setPointerCapture(e.pointerId); dot(last); });
      cv.addEventListener('pointermove', function (e) { if (!drawing) return; var p = pos(e); line(last, p); last = p; });
      function end() { if (!drawing) return; drawing = false; store(key, cv.toDataURL('image/png')); flash(); }
      cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end); cv.addEventListener('pointerleave', end);
      function line(a, b) {
        cx.strokeStyle = eraser ? '#fff' : color; cx.lineWidth = eraser ? 30 : size; cx.lineCap = 'round'; cx.lineJoin = 'round';
        cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
      }
      function dot(a) { line(a, { x: a.x + 0.1, y: a.y + 0.1 }); }
      box._clear = clearCanvas;
    });
  }

  /* ---------- Effacer une fiche (boîte de dialogue maison) ---------- */
  var pendingClear = null;
  function askClear(view) {
    pendingClear = view;
    $('#modal').classList.add('on');
  }
  function doClear() {
    if (!pendingClear) return;
    $$('[data-k]', pendingClear).forEach(function (el) {
      drop(fieldKey(el));
      if (el.classList.contains('draw')) return;
      if (el.classList.contains('write')) el.innerText = '';
      else if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
      else el.value = '';
    });
    $$('.ident input[data-id]').forEach(function (el) { el.value = ''; });
    $$('.draw', pendingClear).forEach(function (d) { if (d._clear) d._clear(); });
    $$('.feedback', pendingClear).forEach(function (f) { f.textContent = ''; f.className = 'feedback'; });
    $$('.sort-row', pendingClear).forEach(function (r) { r.classList.remove('good', 'bad'); });
    $('#modal').classList.remove('on');
    pendingClear = null;
    updateProgress();
  }

  /* ---------- Impression ---------- */
  function doPrint() {
    try { window.print(); }
    catch (e) { /* certains lecteurs intégrés bloquent l'impression */ }
  }

  /* ---------- Auto-correction ---------- */
  function check(btn) {
    var zone = btn.closest('[data-check]');
    var total = 0, ok = 0;
    $$('[data-answer]', zone).forEach(function (el) {
      total++;
      var good = el.getAttribute('data-answer').split('|');
      var val;
      if (el.classList.contains('sort-row')) {
        var r = $('input:checked', el); val = r ? r.value : '';
        el.classList.toggle('good', good.indexOf(val) >= 0);
        el.classList.toggle('bad', good.indexOf(val) < 0);
      } else {
        val = (el.value || '').trim().toLowerCase();
        el.style.borderBottomColor = good.indexOf(val) >= 0 ? 'var(--green)' : 'var(--rust)';
      }
      if (good.indexOf(val) >= 0) ok++;
    });
    var fb = $('.feedback', zone);
    fb.textContent = ok === total ? 'Bravo, tout est juste ! (' + ok + '/' + total + ')' : ok + ' bonne(s) réponse(s) sur ' + total + '. Relis et corrige ce qui est en orange.';
    fb.className = 'feedback ' + (ok === total ? 'good' : 'bad');
  }

  /* ---------- Mots expliqués au survol / au clic ---------- */
  function initWords() {
    var pop = $('#pop');
    $$('.mot').forEach(function (m) {
      m.setAttribute('tabindex', '0');
      function show() {
        var d = LEX[m.getAttribute('data-mot')]; if (!d) return;
        pop.innerHTML = '<b>' + m.textContent + '</b><br>' + d;
        pop.style.display = 'block';
        var r = m.getBoundingClientRect();
        var x = Math.min(r.left, window.innerWidth - 340);
        pop.style.left = Math.max(10, x) + 'px';
        pop.style.top = (r.bottom + 8 + pop.offsetHeight > window.innerHeight ? r.top - pop.offsetHeight - 8 : r.bottom + 8) + 'px';
      }
      m.addEventListener('mouseenter', show);
      m.addEventListener('focus', show);
      m.addEventListener('click', show);
      m.addEventListener('mouseleave', function () { pop.style.display = 'none'; });
      m.addEventListener('blur', function () { pop.style.display = 'none'; });
    });
  }

  /* ---------- Page lexique ---------- */
  function buildLexique() {
    var box = $('#lex-list'); if (!box) return;
    var names = {
      'ordinateur': 'Ordinateur', 'logiciel': 'Logiciel', 'systeme': 'Système d’exploitation', 'mise-a-jour': 'Mise à jour',
      'obsolete': 'Obsolète', 'libre': 'Logiciel libre', 'proprietaire': 'Logiciel propriétaire', 'linux': 'Linux', 'primtux': 'PrimTux',
      'reconditionner': 'Reconditionner', 'dechet': 'Déchet électronique', 'recycler': 'Recycler', 'unite-centrale': 'Unité centrale',
      'peripherique': 'Périphérique', 'entree': 'Périphérique d’entrée', 'sortie': 'Périphérique de sortie', 'alimentation': 'Câble d’alimentation',
      'video': 'Câble vidéo', 'port': 'Port', 'hypothese': 'Hypothèse', 'inventeur': 'Inventeur, inventrice', 'carte-mere': 'Carte mère',
      'pile': 'Pile de la carte mère', 'disque': 'Disque dur', 'ssd': 'SSD', 'memoire': 'Mémoire vive', 'cle-usb': 'Clé USB',
      'processeur': 'Processeur', 'ventilateur': 'Ventilateur', 'bloc-alim': 'Bloc d’alimentation', 'panne': 'Panne', 'experience': 'Expérience',
      'ressource': 'Ressource', 'mine': 'Mine', 'co2': 'Gaz à effet de serre', 'cycle-de-vie': 'Cycle de vie'
    };
    var keys = Object.keys(names).sort(function (a, b) { return names[a].localeCompare(names[b], 'fr'); });
    box.innerHTML = keys.map(function (k) {
      var def = LEX[k].replace(/^[^:]+ : /, '');
      return '<div class="mot-card" data-search="' + (names[k] + ' ' + def).toLowerCase() + '">' + illHtml(LEXILL[k], names[k]) + '<b>' + names[k] + '</b>' + def + '</div>';
    }).join('');
    $('#lex-search').addEventListener('input', function (e) {
      var q = e.target.value.trim().toLowerCase();
      $$('#lex-list .mot-card').forEach(function (c) { c.style.display = c.getAttribute('data-search').indexOf(q) >= 0 ? '' : 'none'; });
    });
  }

  /* ---------- Apparition au défilement ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function revealNow() {
    $$('.view.on .reveal:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  /* ---------- Démarrage ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initIllustrations();
    buildLexique();
    initPhotos();
    initFields();
    initDraw();
    initWords();
    setMode(load('mode') || 'eleve');
    $$('.mode button').forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); }); });
    $$('[data-go-mode]').forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-go-mode')); }); });
    $$('[data-print]').forEach(function (b) { b.addEventListener('click', doPrint); });
    $$('[data-clear]').forEach(function (b) { b.addEventListener('click', function () { askClear(b.closest('.view')); }); });
    $$('[data-check-btn]').forEach(function (b) { b.addEventListener('click', function () { check(b); }); });
    $('#modal-yes').addEventListener('click', doClear);
    $('#modal-no').addEventListener('click', function () { $('#modal').classList.remove('on'); pendingClear = null; });
    $('.burger').addEventListener('click', function () { $('.nav').classList.toggle('open'); });
    window.addEventListener('hashchange', route);
    route();
  });
})();
