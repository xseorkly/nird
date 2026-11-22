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
    'cycle-de-vie': 'Cycle de vie : toutes les étapes de la vie d’un objet : on le fabrique, on l’utilise, puis il devient un déchet.',
    'argument': 'Argument : une raison que l’on donne pour défendre son avis.',
    'donnees': 'Données personnelles : les informations qui concernent une personne : son nom, son adresse, ses photos, ses messages… Elles lui appartiennent.',
    'bios': 'BIOS : un petit programme rangé sur la carte mère. Il se réveille en premier quand on allume l’ordinateur, vérifie les pièces, puis lance le système d’exploitation.',
    'installer': 'Installer : copier un logiciel sur l’ordinateur et le préparer pour qu’il puisse fonctionner.',
    'carte-mission': 'Carte mission : une fiche qui explique, étape par étape, comment réaliser une tâche.',
    'role': 'Rôle : la tâche dont une personne est responsable dans un groupe.',
    'documenter': 'Documenter : garder une trace de son travail (photos, textes, dessins) pour pouvoir l’expliquer aux autres.',
    'public': 'Public : les personnes qui écoutent un exposé ou regardent une présentation.',
    'programme': 'Programme : une suite d’instructions, dans l’ordre, qui dit à l’ordinateur ce qu’il doit faire.',
    'scratch': 'Scratch : un logiciel pour programmer en assemblant des blocs, comme des pièces de puzzle. Il est installé dans PrimTux.',
    'boucle': 'Boucle : un bloc qui fait répéter des instructions plusieurs fois.',
    'condition': 'Condition : un bloc « si… alors » : les instructions ne s’exécutent que si quelque chose est vrai.'
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
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.5M4 12h.5M4 18h.5"/>',
    camera:'<path d="M3 8h4l2-3h6l2 3h4v11H3V8z"/><circle cx="12" cy="13" r="3.5"/>',
    heart:'<path d="M12 20s-7-4.4-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
    flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
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
    'co2':'icon:cloud','cycle-de-vie':'icon:refresh','argument':'icon:chat','donnees':'icon:lock','bios':'icon:gear','installer':'photo:Maxell_USB_flash_drive.jpg',
    'carte-mission':'icon:book','role':'icon:users','documenter':'icon:camera','public':'icon:users','programme':'icon:code','scratch':'icon:code',
    'boucle':'icon:refresh','condition':'icon:question'
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
  var VIEWS = ['accueil', 'sequence', 'seance-1', 'seance-2', 'seance-3', 'seance-4', 'seance-5', 'seance-6', 'seance-7', 'seance-8', 'seance-9', 'seance-10', 'seance-11', 'seance-12', 'seance-13', 'seance-14', 'lexique', 'credits'];
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


  /* ---------- Zones de dessin (souris, doigt ou stylet) ----------
     Crayon, gomme, pot de peinture, texte, règle, flèche et formes
     (rectangle, cercle, triangle, pentagone, hexagone, étoile).
     Une forme reste « en réglage » (poignées pour l'agrandir, la rétrécir
     ou la déplacer) tant qu'on ne clique pas à côté. Le dessin est gardé
     sur l'appareil sous forme d'image PNG. */
  var COLORS = [
    ['#1F3A2E', 'vert sapin'], ['#1B1B1B', 'noir'], ['#8A8F8C', 'gris'], ['#8B5A2B', 'marron'],
    ['#D33A2C', 'rouge'], ['#E8833A', 'orange'], ['#F2C230', 'jaune'], ['#6BAF73', 'vert clair'],
    ['#3E7A4A', 'vert'], ['#3A6EA5', 'bleu'], ['#7B4FA0', 'violet'], ['#E77FA8', 'rose']
  ];
  var SIZES = [['fin', 3], ['moyen', 6], ['épais', 12]];
  var TEXT_SIZE = { 3: 22, 6: 30, 12: 44 };
  var ICONS = {
    pen: '<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
    eraser: '<path d="M9 20h11"/><path d="M4 15l9-9 6 6-8 8H8z"/><path d="M8.5 10.5l6 6"/>',
    fill: '<path d="M4.5 11.5L11 5l7 7-6.5 6.5a2 2 0 0 1-2.8 0L4.5 14.3a2 2 0 0 1 0-2.8z"/><path d="M4.5 12.5h13"/><path d="M20 15.5c.9 1.3 1.4 2.3 1.4 2.9a1.4 1.4 0 0 1-2.8 0c0-.6.5-1.6 1.4-2.9z" fill="currentColor"/>',
    text: '<path d="M5 7V5h14v2"/><path d="M12 5v14"/><path d="M9 19h6"/>',
    line: '<path d="M3 16.5L16.5 3l4.5 4.5L7.5 21z"/><path d="M7 12.5l2 2M10 9.5l2 2M13 6.5l2 2"/>',
    arrow: '<path d="M5 19L19 5"/><path d="M10 5h9v9"/>',
    rect: '<rect x="3.5" y="6" width="17" height="12" rx="1"/>',
    ellipse: '<circle cx="12" cy="12" r="8.5"/>',
    triangle: '<path d="M12 4l9 16H3z"/>',
    pentagon: '<path d="M12 3l9 6.5-3.4 10.5H6.4L3 9.5z"/>',
    hexagon: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    outline: '<rect x="4.5" y="4.5" width="15" height="15" rx="2"/>',
    filled: '<rect x="4.5" y="4.5" width="15" height="15" rx="2" fill="currentColor"/>',
    undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
    redo: '<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'
  };
  var TOOLS = [['pen', 'Crayon'], ['eraser', 'Gomme'], ['fill', 'Pot de peinture'], ['text', 'Texte']];
  var SHAPES = [['line', 'Règle (trait droit)'], ['arrow', 'Flèche'], ['rect', 'Rectangle'], ['ellipse', 'Cercle'],
    ['triangle', 'Triangle'], ['pentagon', 'Pentagone'], ['hexagon', 'Hexagone'], ['star', 'Étoile']];
  var HINTS = {
    pen: 'Crayon : dessine à main levée.',
    eraser: 'Gomme : frotte pour effacer.',
    fill: 'Pot de peinture : clique à l’intérieur d’une forme fermée pour la colorier.',
    text: 'Texte : clique où tu veux écrire, tape ton mot puis appuie sur Entrée.',
    line: 'Règle : fais glisser pour tracer un trait bien droit (il se cale tout seul à l’horizontale ou à la verticale).',
    arrow: 'Flèche : fais glisser pour tracer une flèche, pratique pour légender ton dessin.',
    shape: 'Fais glisser pour dessiner la forme, ou clique une fois. Garde la touche Maj enfoncée pour une forme bien régulière.'
  };
  var EDIT_HINT = 'Tire sur les petits ronds bleus pour agrandir ou rétrécir la forme, fais-la glisser pour la déplacer. Tu peux encore changer sa couleur. Clique à côté pour la poser.';
  var CURSORS = { nw: 'nwse-resize', se: 'nwse-resize', ne: 'nesw-resize', sw: 'nesw-resize', n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', p1: 'grab', p2: 'grab' };

  // Polygones réguliers ramenés dans un carré 0..1 (ils remplissent toute la boîte)
  function unitPoly(n, inner) {
    var pts = [], k = inner ? 2 * n : n, i, a, r;
    for (i = 0; i < k; i++) {
      a = -Math.PI / 2 + i * 2 * Math.PI / k; r = (inner && i % 2) ? inner : 1;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    pts.forEach(function (p) { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); });
    return pts.map(function (p) { return [(p[0] - minX) / (maxX - minX), (p[1] - minY) / (maxY - minY)]; });
  }
  var UNIT = { triangle: [[0.5, 0], [1, 1], [0, 1]], pentagon: unitPoly(5), hexagon: unitPoly(6), star: unitPoly(5, 0.42) };
  function isLine(t) { return t === 'line' || t === 'arrow'; }
  function isShape(t) { return SHAPES.some(function (s) { return s[0] === t; }); }
  function bbox(s) { return { x1: Math.min(s.x1, s.x2), y1: Math.min(s.y1, s.y2), x2: Math.max(s.x1, s.x2), y2: Math.max(s.y1, s.y2) }; }
  function hexRgb(h) { h = h.replace('#', ''); return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)]; }

  function drawShape(c, s) {
    c.save();
    c.strokeStyle = s.color; c.fillStyle = s.color; c.lineWidth = s.size; c.lineCap = 'round'; c.lineJoin = 'round';
    c.beginPath();
    if (isLine(s.type)) {
      var ex = s.x2, ey = s.y2, a = Math.atan2(s.y2 - s.y1, s.x2 - s.x1), L = Math.max(18, s.size * 3.5);
      if (s.type === 'arrow') { ex -= Math.cos(a) * L * 0.6; ey -= Math.sin(a) * L * 0.6; }
      c.moveTo(s.x1, s.y1); c.lineTo(ex, ey); c.stroke();
      if (s.type === 'arrow') {
        c.lineWidth = Math.min(s.size, 4);
        c.beginPath(); c.moveTo(s.x2, s.y2);
        c.lineTo(s.x2 - L * Math.cos(a - 0.45), s.y2 - L * Math.sin(a - 0.45));
        c.lineTo(s.x2 - L * Math.cos(a + 0.45), s.y2 - L * Math.sin(a + 0.45));
        c.closePath(); c.fill(); c.stroke();
      }
      c.restore(); return;
    }
    var b = bbox(s), w = b.x2 - b.x1, h = b.y2 - b.y1;
    if (s.type === 'rect') c.rect(b.x1, b.y1, w, h);
    else if (s.type === 'ellipse') c.ellipse(b.x1 + w / 2, b.y1 + h / 2, Math.max(w / 2, 0.5), Math.max(h / 2, 0.5), 0, 0, Math.PI * 2);
    else UNIT[s.type].forEach(function (q, i) { var x = b.x1 + q[0] * w, y = b.y1 + q[1] * h; if (i) c.lineTo(x, y); else c.moveTo(x, y); });
    c.closePath();
    if (s.filled) c.fill();
    c.stroke();
    c.restore();
  }

  var drawActive = null; // zone de dessin utilisée en dernier (pour les raccourcis clavier)
  function initDraw() {
    $$('.draw[data-k]').forEach(setupDraw);
    document.addEventListener('keydown', function (e) {
      if (!drawActive) return;
      var t = e.target, typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
      if (typing) return;
      drawActive.key(e);
    });
    window.addEventListener('beforeprint', function () { $$('.draw').forEach(function (d) { if (d._commit) d._commit(); }); });
    window.addEventListener('resize', function () { $$('.draw').forEach(function (d) { if (d._redraw) d._redraw(); }); });
  }

  function setupDraw(box) {
    var key = 'f-' + box.getAttribute('data-k');
    var W = 1200, H = 520;
    box.innerHTML = '<div class="draw-tools no-print"></div><div class="draw-hint no-print" aria-live="polite"></div>' +
      '<div class="draw-stage"><canvas class="cv-main" width="' + W + '" height="' + H + '" aria-label="Zone de dessin"></canvas>' +
      '<canvas class="cv-over no-print" width="' + W + '" height="' + H + '" aria-hidden="true"></canvas></div>';
    var tools = $('.draw-tools', box), hint = $('.draw-hint', box), stage = $('.draw-stage', box);
    var cv = $('.cv-main', box), ov = $('.cv-over', box);
    var cx = cv.getContext('2d'), ox = ov.getContext('2d');
    var st = { tool: 'pen', color: COLORS[0][0], size: 6, filled: false };
    var pending = null, drag = null, textBox = null, undo = [], redo = [], saveT;

    /* --- barre d'outils --- */
    function ico(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[n] + '</svg>'; }
    function group(label, cls) {
      var g = document.createElement('div'); g.className = 'dt-group' + (cls ? ' ' + cls : '');
      if (label) g.innerHTML = '<span class="dt-label">' + label + '</span>';
      tools.appendChild(g); return g;
    }
    function button(parent, html, label, onClick, cls) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'dbtn' + (cls ? ' ' + cls : '');
      b.innerHTML = html; b.title = label; b.setAttribute('aria-label', label);
      b.addEventListener('click', onClick); parent.appendChild(b); return b;
    }
    var toolBtns = {};
    var gTools = group('Outils');
    TOOLS.forEach(function (t) { toolBtns[t[0]] = button(gTools, ico(t[0]) + '<span>' + t[1] + '</span>', t[1], function () { setTool(t[0]); }); });
    var gShapes = group('Règle et formes');
    SHAPES.forEach(function (t) { toolBtns[t[0]] = button(gShapes, ico(t[0]) + (t[0] === 'line' ? '<span>Règle</span>' : ''), t[1], function () { setTool(t[0]); }); });
    var gStyle = group('Trait');
    var bOut = button(gStyle, ico('outline'), 'Forme vide (seulement le contour)', function () { setFilled(false); });
    var bFull = button(gStyle, ico('filled'), 'Forme remplie de couleur', function () { setFilled(true); });
    var sizeBtns = SIZES.map(function (s) {
      return button(gStyle, '<i class="sz" style="width:' + (s[1] + 4) + 'px;height:' + (s[1] + 4) + 'px"></i>', 'Trait ' + s[0], function () { setSize(s[1]); });
    });
    var gColors = group('Couleurs', 'dt-colors');
    var swBtns = COLORS.map(function (c) {
      var b = button(gColors, '', 'Couleur ' + c[1], function () { setColor(c[0]); }, 'swatch');
      b.style.background = c[0]; b._c = c[0]; return b;
    });
    var pick = document.createElement('label'); pick.className = 'dbtn picker'; pick.title = 'Choisir une autre couleur';
    pick.innerHTML = '<input type="color" value="#1F3A2E" aria-label="Choisir une autre couleur">';
    gColors.appendChild(pick);
    pick.querySelector('input').addEventListener('input', function (e) { setColor(e.target.value); });
    var gAct = group('', 'dt-actions');
    var bUndo = button(gAct, ico('undo') + '<span>Annuler</span>', 'Annuler (Ctrl+Z)', doUndo);
    var bRedo = button(gAct, ico('redo') + '<span>Rétablir</span>', 'Rétablir (Ctrl+Y)', doRedo);
    button(gAct, ico('trash') + '<span>Tout effacer</span>', 'Tout effacer', function () {
      closeText(false); pending = null; snapshot(); paper(); drawOverlay();
      clearTimeout(saveT); drop(key); refresh();
    });

    function setTool(t) { closeText(true); commit(); st.tool = t; refresh(); }
    function setFilled(f) { st.filled = f; if (pending && !isLine(pending.type)) { pending.filled = f; changed(); } refresh(); }
    function setSize(s) { st.size = s; if (pending) { pending.size = s; changed(); } if (textBox) styleText(); refresh(); }
    function setColor(c) {
      st.color = c; if (st.tool === 'eraser') st.tool = 'pen';
      if (pending) { pending.color = c; changed(); }
      if (textBox) styleText();
      refresh();
    }
    function refresh() {
      Object.keys(toolBtns).forEach(function (k) { toolBtns[k].classList.toggle('on', k === st.tool); });
      bOut.classList.toggle('on', !st.filled); bFull.classList.toggle('on', st.filled);
      SIZES.forEach(function (s, i) { sizeBtns[i].classList.toggle('on', s[1] === st.size); });
      swBtns.forEach(function (b) { b.classList.toggle('on', b._c.toLowerCase() === st.color.toLowerCase()); });
      bUndo.disabled = !undo.length && !pending;
      bRedo.disabled = !redo.length;
      hint.textContent = pending ? EDIT_HINT : (HINTS[st.tool] || HINTS.shape);
      hint.classList.toggle('edit', !!pending);
      ov.style.cursor = st.tool === 'text' ? 'text' : (st.tool === 'fill' ? 'cell' : 'crosshair');
    }

    /* --- fond, annulation, enregistrement --- */
    function paper() { cx.fillStyle = '#fff'; cx.fillRect(0, 0, W, H); }
    function snapshot() { undo.push(cx.getImageData(0, 0, W, H)); if (undo.length > 15) undo.shift(); redo = []; }
    function doUndo() {
      closeText(false);
      if (pending) { pending = null; drawOverlay(); saveSoon(); refresh(); return; }
      if (!undo.length) return;
      redo.push(cx.getImageData(0, 0, W, H)); cx.putImageData(undo.pop(), 0, 0); saveSoon(); refresh();
    }
    function doRedo() {
      if (pending || !redo.length) return;
      undo.push(cx.getImageData(0, 0, W, H)); cx.putImageData(redo.pop(), 0, 0); saveSoon(); refresh();
    }
    function saveSoon() { clearTimeout(saveT); saveT = setTimeout(save, 250); }
    function save() {
      var out = cv;
      if (pending) { // la forme en réglage est gardée aussi, au cas où l'on quitte la page
        out = document.createElement('canvas'); out.width = W; out.height = H;
        var tx = out.getContext('2d'); tx.drawImage(cv, 0, 0); drawShape(tx, pending);
      }
      store(key, out.toDataURL('image/png')); flash();
    }
    function commit() {
      if (!pending) return;
      snapshot(); drawShape(cx, pending); pending = null; drawOverlay(); saveSoon(); refresh();
    }
    function changed() { drawOverlay(); saveSoon(); }

    /* --- calque de réglage des formes --- */
    function ratio() { var r = ov.getBoundingClientRect(); return W / (r.width || W); }
    function pos(e) { var r = ov.getBoundingClientRect(); return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height }; }
    function handles(s) {
      if (isLine(s.type)) return [['p1', s.x1, s.y1], ['p2', s.x2, s.y2]];
      var b = bbox(s), mx = (b.x1 + b.x2) / 2, my = (b.y1 + b.y2) / 2;
      return [['nw', b.x1, b.y1], ['n', mx, b.y1], ['ne', b.x2, b.y1], ['e', b.x2, my],
        ['se', b.x2, b.y2], ['s', mx, b.y2], ['sw', b.x1, b.y2], ['w', b.x1, my]];
    }
    function drawOverlay() {
      ox.clearRect(0, 0, W, H);
      if (!pending) return;
      drawShape(ox, pending);
      var r = ratio();
      ox.save();
      ox.strokeStyle = '#3A6EA5'; ox.lineWidth = 1.5 * r;
      if (!isLine(pending.type)) {
        var b = bbox(pending);
        ox.setLineDash([8 * r, 6 * r]); ox.strokeRect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1); ox.setLineDash([]);
      }
      handles(pending).forEach(function (h) {
        ox.beginPath(); ox.arc(h[1], h[2], 8 * r, 0, Math.PI * 2);
        ox.fillStyle = '#fff'; ox.fill(); ox.lineWidth = 3 * r; ox.strokeStyle = '#3A6EA5'; ox.stroke();
      });
      ox.restore();
    }
    function hitPending(p) {
      var r = ratio(), hs = handles(pending), i;
      for (i = 0; i < hs.length; i++) if (Math.hypot(p.x - hs[i][1], p.y - hs[i][2]) < 20 * r) return { mode: 'handle', handle: hs[i][0] };
      if (isLine(pending.type)) {
        var s = pending, dx = s.x2 - s.x1, dy = s.y2 - s.y1, len2 = dx * dx + dy * dy || 1;
        var t = Math.max(0, Math.min(1, ((p.x - s.x1) * dx + (p.y - s.y1) * dy) / len2));
        var d = Math.hypot(p.x - (s.x1 + t * dx), p.y - (s.y1 + t * dy));
        return d < Math.max(16 * r, s.size) ? { mode: 'move' } : null;
      }
      var b = bbox(pending), pad = 10 * r;
      return (p.x > b.x1 - pad && p.x < b.x2 + pad && p.y > b.y1 - pad && p.y < b.y2 + pad) ? { mode: 'move' } : null;
    }
    function normalize(s) { if (!s || isLine(s.type)) return; var b = bbox(s); s.x1 = b.x1; s.y1 = b.y1; s.x2 = b.x2; s.y2 = b.y2; }
    // Règle : le trait se cale à l'horizontale, à la verticale ou à 45° quand on en est proche
    function snapLine(s, moving, force) {
      var ax = moving === 'p1' ? s.x2 : s.x1, ay = moving === 'p1' ? s.y2 : s.y1;
      var bx = moving === 'p1' ? s.x1 : s.x2, by = moving === 'p1' ? s.y1 : s.y2;
      var len = Math.hypot(bx - ax, by - ay), a = Math.atan2(by - ay, bx - ax);
      var step = force ? Math.PI / 12 : Math.PI / 4, near = Math.round(a / step) * step;
      if (!force && Math.abs(near - a) > 5 * Math.PI / 180) return;
      bx = ax + Math.cos(near) * len; by = ay + Math.sin(near) * len;
      if (moving === 'p1') { s.x1 = bx; s.y1 = by; } else { s.x2 = bx; s.y2 = by; }
    }
    function squareUp(s) { // forme régulière (carré, cercle…) pendant le tracé
      var dx = s.x2 - s.x1, dy = s.y2 - s.y1, d = Math.max(Math.abs(dx), Math.abs(dy));
      s.x2 = s.x1 + (dx < 0 ? -d : d); s.y2 = s.y1 + (dy < 0 ? -d : d);
    }
    function defaultSize(s) {
      if (isLine(s.type)) { s.x2 = s.x1 + 180; s.y2 = s.y1; return; }
      var w = s.type === 'rect' ? 180 : 150, h = s.type === 'rect' ? 120 : 150;
      s.x1 -= w / 2; s.y1 -= h / 2; s.x2 = s.x1 + w; s.y2 = s.y1 + h;
    }

    /* --- crayon, gomme, pot de peinture --- */
    function strokeSeg(a, b) {
      cx.save();
      if (st.tool === 'eraser') { cx.strokeStyle = '#fff'; cx.lineWidth = st.size * 4 + 8; }
      else { cx.strokeStyle = st.color; cx.lineWidth = st.size; }
      cx.lineCap = 'round'; cx.lineJoin = 'round';
      cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x + 0.01, b.y); cx.stroke();
      cx.restore();
    }
    function floodFill(x0, y0, hex) {
      x0 = Math.floor(x0); y0 = Math.floor(y0);
      if (x0 < 0 || y0 < 0 || x0 >= W || y0 >= H) return false;
      var img = cx.getImageData(0, 0, W, H), d = img.data, rgb = hexRgb(hex);
      var i0 = (y0 * W + x0) * 4, tr = d[i0], tg = d[i0 + 1], tb = d[i0 + 2];
      if (Math.abs(tr - rgb[0]) < 6 && Math.abs(tg - rgb[1]) < 6 && Math.abs(tb - rgb[2]) < 6) return false;
      var TOL = 70, mask = new Uint8Array(W * H), stack = [x0, y0];
      function ok(i) { var j = i * 4; return !mask[i] && Math.abs(d[j] - tr) <= TOL && Math.abs(d[j + 1] - tg) <= TOL && Math.abs(d[j + 2] - tb) <= TOL; }
      while (stack.length) {
        var y = stack.pop(), x = stack.pop(), row = y * W;
        if (!ok(row + x)) continue;
        var l = x, r = x, k;
        while (l > 0 && ok(row + l - 1)) l--;
        while (r < W - 1 && ok(row + r + 1)) r++;
        for (k = l; k <= r; k++) mask[row + k] = 1;
        for (k = l; k <= r; k++) {
          if (y > 0 && ok(row - W + k)) stack.push(k, y - 1);
          if (y < H - 1 && ok(row + W + k)) stack.push(k, y + 1);
        }
      }
      // on déborde d'un pixel pour ne pas laisser de liseré blanc contre les traits
      for (var y2 = 0; y2 < H; y2++) for (var x2 = 0; x2 < W; x2++) {
        var i = y2 * W + x2;
        if (mask[i] !== 1) {
          if ((x2 > 0 && mask[i - 1] === 1) || (x2 < W - 1 && mask[i + 1] === 1) || (y2 > 0 && mask[i - W] === 1) || (y2 < H - 1 && mask[i + W] === 1)) mask[i] = 2;
          else continue;
        }
        var j = i * 4; d[j] = rgb[0]; d[j + 1] = rgb[1]; d[j + 2] = rgb[2]; d[j + 3] = 255;
      }
      cx.putImageData(img, 0, 0);
      return true;
    }

    /* --- texte --- */
    function styleText() {
      if (!textBox) return;
      var k = 1 / ratio(), fs = TEXT_SIZE[st.size] || 30;
      textBox.fs = fs; textBox.color = st.color;
      textBox.el.style.fontSize = (fs * k) + 'px'; textBox.el.style.color = st.color;
    }
    function openText(p) {
      var k = 1 / ratio(), inp = document.createElement('input');
      inp.type = 'text'; inp.className = 'draw-text'; inp.placeholder = 'Écris ici…';
      textBox = { el: inp, x: p.x, y: p.y };
      inp.style.left = (p.x * k) + 'px';
      stage.appendChild(inp); styleText();
      inp.style.top = (p.y * k - textBox.fs * k * 0.075) + 'px';
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); closeText(true); }
        else if (e.key === 'Escape') { e.preventDefault(); closeText(false); }
      });
      inp.addEventListener('input', function () { inp.size = Math.max(12, inp.value.length + 2); });
      inp.size = 12;
      inp.addEventListener('blur', function () { if (textBox && textBox.el === inp) closeText(true); });
      inp.focus();
      setTimeout(function () { if (textBox && textBox.el === inp) inp.focus(); }, 0);
    }
    function closeText(keep) {
      if (!textBox) return;
      var t = textBox, v = t.el.value.trim(); textBox = null;
      if (t.el.parentNode) t.el.parentNode.removeChild(t.el);
      if (!keep || !v) return;
      snapshot();
      cx.save(); cx.fillStyle = t.color; cx.textBaseline = 'top';
      cx.font = '700 ' + t.fs + 'px "Nunito Sans", Verdana, sans-serif';
      cx.fillText(v, t.x, t.y); cx.restore();
      saveSoon(); refresh();
    }

    /* --- gestes à la souris, au doigt ou au stylet --- */
    ov.addEventListener('pointerdown', function (e) {
      if (e.button) return;
      drawActive = api;
      var p = pos(e);
      if (textBox) { e.preventDefault(); closeText(true); return; }
      e.preventDefault();
      if (pending) {
        var h = hitPending(p);
        if (h) {
          drag = { mode: h.mode, handle: h.handle, start: p, orig: { x1: pending.x1, y1: pending.y1, x2: pending.x2, y2: pending.y2 } };
          ov.setPointerCapture(e.pointerId); return;
        }
        commit(); return; // un clic à côté pose la forme
      }
      var t = st.tool;
      if (t === 'pen' || t === 'eraser') {
        ov.setPointerCapture(e.pointerId);
        snapshot(); drag = { mode: 'stroke', last: p }; strokeSeg(p, p);
      } else if (t === 'fill') {
        snapshot();
        if (floodFill(p.x, p.y, st.color)) saveSoon(); else undo.pop();
        refresh();
      } else if (t === 'text') {
        openText(p);
      } else {
        ov.setPointerCapture(e.pointerId);
        redo = [];
        pending = { type: t, x1: p.x, y1: p.y, x2: p.x, y2: p.y, color: st.color, size: st.size, filled: st.filled && !isLine(t) };
        drag = { mode: 'create', start: p };
        drawOverlay(); refresh();
      }
    });
    ov.addEventListener('pointermove', function (e) {
      var p = pos(e);
      if (!drag) {
        if (pending) { var h = hitPending(p); ov.style.cursor = h ? (h.mode === 'move' ? 'move' : CURSORS[h.handle]) : 'default'; }
        return;
      }
      if (drag.mode === 'stroke') { strokeSeg(drag.last, p); drag.last = p; return; }
      var s = pending, o = drag.orig, dx = p.x - drag.start.x, dy = p.y - drag.start.y;
      if (drag.mode === 'create') {
        s.x2 = p.x; s.y2 = p.y;
        if (isLine(s.type)) snapLine(s, 'p2', e.shiftKey); else if (e.shiftKey) squareUp(s);
      } else if (drag.mode === 'move') {
        s.x1 = o.x1 + dx; s.y1 = o.y1 + dy; s.x2 = o.x2 + dx; s.y2 = o.y2 + dy;
      } else if (drag.mode === 'handle') {
        var hd = drag.handle;
        if (hd === 'p1') { s.x1 = o.x1 + dx; s.y1 = o.y1 + dy; snapLine(s, 'p1', e.shiftKey); }
        else if (hd === 'p2') { s.x2 = o.x2 + dx; s.y2 = o.y2 + dy; snapLine(s, 'p2', e.shiftKey); }
        else {
          if (hd.indexOf('w') > -1) s.x1 = o.x1 + dx;
          if (hd.indexOf('e') > -1) s.x2 = o.x2 + dx;
          if (hd.indexOf('n') > -1) s.y1 = o.y1 + dy;
          if (hd.indexOf('s') > -1) s.y2 = o.y2 + dy;
        }
      }
      drawOverlay();
    });
    function up() {
      if (!drag) return;
      var m = drag.mode; drag = null;
      if (m === 'stroke') { saveSoon(); refresh(); return; }
      if (m === 'create' && Math.abs(pending.x2 - pending.x1) < 8 && Math.abs(pending.y2 - pending.y1) < 8) defaultSize(pending);
      normalize(pending); drawOverlay(); saveSoon(); refresh();
    }
    ov.addEventListener('pointerup', up);
    ov.addEventListener('pointercancel', up);

    var api = {
      key: function (e) {
        var mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
        if (mod && k === 'z' && !e.shiftKey) { e.preventDefault(); doUndo(); }
        else if (mod && (k === 'y' || (k === 'z' && e.shiftKey))) { e.preventDefault(); doRedo(); }
        else if (pending && (e.key === 'Delete' || e.key === 'Backspace')) { e.preventDefault(); pending = null; changed(); refresh(); }
        else if (pending && (e.key === 'Enter' || e.key === 'Escape')) { e.preventDefault(); commit(); }
      }
    };
    box._commit = function () { closeText(true); commit(); };
    box._redraw = drawOverlay;
    box._clear = function () {
      closeText(false); pending = null; drag = null; undo = []; redo = [];
      clearTimeout(saveT); paper(); drawOverlay(); refresh();
    };

    paper();
    var saved = load(key);
    if (saved) { var im = new Image(); im.onload = function () { cx.drawImage(im, 0, 0); }; im.src = saved; }
    refresh();
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
      'ressource': 'Ressource', 'mine': 'Mine', 'co2': 'Gaz à effet de serre', 'cycle-de-vie': 'Cycle de vie',
      'argument': 'Argument', 'donnees': 'Données personnelles', 'bios': 'BIOS', 'installer': 'Installer', 'carte-mission': 'Carte mission', 'role': 'Rôle',
      'documenter': 'Documenter', 'public': 'Public', 'programme': 'Programme', 'scratch': 'Scratch', 'boucle': 'Boucle', 'condition': 'Condition'
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
