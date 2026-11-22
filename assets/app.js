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
    'cle-usb': 'Clé USB : un petit objet qui garde des fichiers et qu’on branche sur un port USB.'
  };

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
      });
      img.src = photoUrl(img.getAttribute('data-file'), img.getAttribute('data-w'));
    });
  }

  /* ---------- Navigation par ancre ---------- */
  var VIEWS = ['accueil', 'sequence', 'seance-1', 'seance-2', 'seance-3', 'lexique', 'credits'];
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
      if (el.classList.contains('write')) el.innerText = '';
      else if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
      else el.value = '';
    });
    $$('.ident input[data-id]').forEach(function (el) { el.value = ''; });
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
      'pile': 'Pile de la carte mère', 'disque': 'Disque dur', 'ssd': 'SSD', 'memoire': 'Mémoire vive', 'cle-usb': 'Clé USB'
    };
    var keys = Object.keys(names).sort(function (a, b) { return names[a].localeCompare(names[b], 'fr'); });
    box.innerHTML = keys.map(function (k) {
      var def = LEX[k].replace(/^[^:]+ : /, '');
      return '<div class="mot-card" data-search="' + (names[k] + ' ' + def).toLowerCase() + '"><b>' + names[k] + '</b>' + def + '</div>';
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
    initPhotos();
    initFields();
    initWords();
    buildLexique();
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
