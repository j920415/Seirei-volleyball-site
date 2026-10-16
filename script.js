const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const translations = {
  ja: {
    schoolNameShort:'埼玉県立青嶺高等学校', navAbout:'部について', navMembers:'部員紹介', navSchedule:'活動予定', navGuide:'学校・世界観',
    contentsLabel:'コンテンツ', heroCopy1:'仲間と声を重ね、最後の一球まであきらめない。', heroCopy2:'青嶺高校バレーボール部のページへようこそ。', heroButton:'部員紹介を見る',
    aboutTitle:'青嶺高校バレーボール部', aboutLead1:'勝つことだけじゃない。', aboutLead2:'ここで過ごす時間も、僕らの青春だ。',
    aboutBody:'埼玉県立青嶺高等学校の男子バレーボール部。コートの中では真剣に、コートの外では自分たちらしく。選手とマネージャー、それぞれの立場からチームを支えています。',
    factPlace:'活動場所', factPlaceValue:'体育館', factActivities:'活動内容', factActivitiesValue:'練習・練習試合・公式戦', factValues:'大切にしていること', factValuesValue:'声をつなぐこと、仲間を信じること',
    fictionNote:'※このページは創作世界「青嶺高校」の設定紹介サイトです。', membersTitle:'部員紹介', membersLead:'同じコートに立つ、個性豊かな仲間たち。',
    searchLabel:'部員を探す', searchPlaceholder:'名前・ポジションで検索…', comingMembers:'ほかの部員たち', profileSoon:'プロフィール準備中', emptySearch:'該当する部員が見つかりませんでした。',
    scheduleTitle:'活動予定', scheduleLead:'練習も試合も、一日ずつ積み重ねて。', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土', sun:'日',
    practiceLegend:'通常練習（仮）', gameLegend:'試合予定（仮）', scheduleNote:'予定は動作確認用のサンプルです。正式な日程が決まったら編集できます。',
    guideTitle:'青嶺について', guideLead:'この物語の舞台と、コートの向こう側。', guideSchoolTitle:'学校について', guideSchoolBody:'埼玉県にある架空の県立高校。物語の舞台となる学校です。',
    guideClubTitle:'バレーボール部', guideClubBody:'選手たちとマネージャーが、練習や学校生活を通して日々を重ねています。',
    guideRelationTitle:'登場人物の関係', guideRelationBody:'プロフィールや関係性は、設定が確定したものから順次追加していきます。',
    pageTop:'PAGE TOP ↑', close:'閉じる', roleOH:'アウトサイドヒッター', roleL:'リベロ', monthSuffix:'月', yearSuffix:'年',
    position:'ポジション', school:'出身校', note:'人物メモ', grade:'学年', height:'身長', birthday:'誕生日',
    koutaRole:'アウトサイドヒッター / OUTSIDE HITTER', harutoRole:'リベロ / LIBERO',
    roleSetter:'セッター', roleOpposite:'オポジット', roleMiddle:'ミドルブロッカー', captain:'主将', viceCaptain:'副主将', grade3:'3年生', grade2:'2年生',
    gradeValue:'学年', heightValue:'身長', birthdayValue:'誕生日', jerseyValue:'背番号', dutyValue:'役職', captainDuty:'主将', viceCaptainDuty:'副主将',
    ritsuRole:'セッター / SETTER', takuyaRole:'オポジット / OPPOSITE', koutaRole:'アウトサイドヒッター / OUTSIDE HITTER', harukiRole:'オポジット / OPPOSITE', harutoRole:'リベロ / LIBERO', taiyouRole:'ミドルブロッカー / MIDDLE BLOCKER', akiRole:'ミドルブロッカー / MIDDLE BLOCKER',
    ritsuNote:'背番号1。チームの主将を務めるセッター。', takuyaNote:'背番号2。副主将を務めるオポジット。', koutaNote:'背番号3。アウトサイドヒッターとしてプレーする。', harukiNote:'背番号5。オポジットとしてプレーする。', harutoNote:'背番号6。リベロとして守備を担う。', taiyouNote:'背番号7。2年生のミドルブロッカー。', akiNote:'背番号8。2年生のミドルブロッカー。',
    height178:'178 cm', height188:'188 cm', height187:'187 cm', height190:'190 cm', height168:'168 cm', height184:'184 cm', birthday1122:'1999年11月22日', birthday0218:'1999年2月18日', birthday1215:'1999年12月15日', birthday0415:'1999年4月15日', birthday1212:'1999年12月12日', birthday0801:'2000年8月1日', birthday1031:'2000年10月31日',
    jersey1:'#1', jersey2:'#2', jersey3:'#3', jersey5:'#5', jersey6:'#6', jersey7:'#7', jersey8:'#8',
    koutaPosition:'アウトサイドヒッター', harutoPosition:'リベロ', koutaNote:'明るく、チームの空気を動かす存在。',
    koutaProfileNote:'高校時代の設定をもとにしたプロフィールです。学年・身長・誕生日などの詳細は、確定した設定に合わせて追記できます。',
    harutoProfileNote:'落ち着いた守備でチームを支えるリベロ。', prevMonth:'前の月', nextMonth:'次の月', abilitiesTitle:'PLAYER ABILITIES', abilitiesScale:'能力値 · 1–10', abilityAttack:'攻撃力', abilityDefense:'守備力', abilityServe:'サーブ', abilityReceive:'レシーブ', abilityBlock:'ブロック', abilitySpeed:'スピード',
    practiceEvent:'通常練習', gameEvent:'練習試合'
  },
  ko: {
    schoolNameShort:'사이타마현립 세이레이 고등학교', navAbout:'부 소개', navMembers:'선수 소개', navSchedule:'활동 일정', navGuide:'학교·세계관',
    contentsLabel:'콘텐츠', heroCopy1:'동료와 목소리를 잇고, 마지막 한 공까지 포기하지 않는다.', heroCopy2:'세이레이 고등학교 배구부 홈페이지에 오신 것을 환영합니다.', heroButton:'선수 소개 보기',
    aboutTitle:'세이레이 고등학교 배구부', aboutLead1:'승리만이 전부는 아니다.', aboutLead2:'이곳에서 보내는 시간도 우리의 청춘이다.',
    aboutBody:'사이타마현립 세이레이 고등학교 남자 배구부입니다. 코트 안에서는 진지하게, 코트 밖에서는 우리답게. 선수와 매니저가 각자의 자리에서 팀을 뒷받침합니다.',
    factPlace:'활동 장소', factPlaceValue:'체육관', factActivities:'활동 내용', factActivitiesValue:'훈련·연습 경기·공식 경기', factValues:'소중히 여기는 것', factValuesValue:'목소리를 잇는 것, 동료를 믿는 것',
    fictionNote:'※ 이 페이지는 창작 세계 「세이레이 고등학교」의 설정 소개 사이트입니다.', membersTitle:'선수 소개', membersLead:'같은 코트에 서는 개성 넘치는 동료들.',
    searchLabel:'선수 검색', searchPlaceholder:'이름·포지션으로 검색…', comingMembers:'그 밖의 부원들', profileSoon:'프로필 준비 중', emptySearch:'검색 결과가 없습니다.',
    scheduleTitle:'활동 일정', scheduleLead:'훈련도 시합도, 하루씩 차곡차곡.', mon:'월', tue:'화', wed:'수', thu:'목', fri:'금', sat:'토', sun:'일',
    practiceLegend:'정기 훈련(임시)', gameLegend:'시합 예정(임시)', scheduleNote:'일정은 기능 확인용 예시입니다. 공식 일정이 정해지면 수정할 수 있습니다.',
    guideTitle:'세이레이 소개', guideLead:'이 이야기의 무대와 코트 너머의 풍경.', guideSchoolTitle:'학교 소개', guideSchoolBody:'사이타마현에 있는 가상의 현립 고등학교. 이야기의 무대가 되는 학교입니다.',
    guideClubTitle:'배구부', guideClubBody:'선수들과 매니저가 훈련과 학교생활을 함께하며 하루하루를 쌓아 갑니다.',
    guideRelationTitle:'등장인물 관계', guideRelationBody:'프로필과 관계는 설정이 확정되는 대로 차례차례 추가합니다.',
    pageTop:'맨 위로 ↑', close:'닫기', roleOH:'아웃사이드 히터', roleL:'리베로', monthSuffix:'월', yearSuffix:'년',
    position:'포지션', school:'출신 학교', note:'인물 메모', grade:'학년', height:'신장', birthday:'생일',
    koutaRole:'아웃사이드 히터 / OUTSIDE HITTER', harutoRole:'리베로 / LIBERO',
    koutaPosition:'아웃사이드 히터', harutoPosition:'리베로', koutaNote:'밝은 성격으로 팀 분위기를 움직이는 존재.',
    koutaProfileNote:'고등학교 시절 설정을 바탕으로 한 프로필입니다. 학년·신장·생일 등은 확정된 설정에 맞춰 추가할 수 있습니다.',
    harutoProfileNote:'차분한 수비로 팀을 뒷받침하는 리베로.', prevMonth:'이전 달', nextMonth:'다음 달', abilitiesTitle:'PLAYER ABILITIES', abilitiesScale:'능력치 · 1–10', abilityAttack:'공격력', abilityDefense:'수비력', abilityServe:'서브', abilityReceive:'리시브', abilityBlock:'블로킹', abilitySpeed:'스피드',
    practiceEvent:'정기 훈련', gameEvent:'연습 경기'
  }
};
let currentLanguage = 'ja';

const members = {
  ritsu: { name:'藤崎 律', roman:'FUJISAKI RITSU', roleKey:'ritsuRole', rows:[['jerseyValue','jersey1'],['dutyValue','captainDuty'],['position','roleSetter'],['gradeValue','grade3'],['heightValue','height178'],['birthdayValue','birthday1122']], noteKey:'ritsuNote', searchTerms:'藤崎 律 ふじさき りつ 후지사키 리츠 setter 세터 주장 captain 3年 178 1999年11月22日' },
  takuya: { name:'石田 拓也', roman:'ISHIDA TAKUYA', roleKey:'takuyaRole', rows:[['jerseyValue','jersey2'],['dutyValue','viceCaptainDuty'],['position','roleOpposite'],['gradeValue','grade3'],['heightValue','height188'],['birthdayValue','birthday0218']], noteKey:'takuyaNote', searchTerms:'石田 拓也 いしだ たくや 이시다 타쿠야 opposite 아포짓 부주장 vice captain 3年 188 1999年2月18日' },
  kouta: { name:'高橋 康太', roman:'TAKAHASHI KOUTA', roleKey:'koutaRole', rows:[['jerseyValue','jersey3'],['position','koutaPosition'],['gradeValue','grade3'],['heightValue','height187'],['birthdayValue','birthday1215']], noteKey:'koutaNote', searchTerms:'高橋 康太 たかはし こうた 타카하시 코우타 아웃사이드 히터 アウトサイドヒッター OH 3年 187 1999年12月15日' },
  haruki: { name:'白川 春樹', roman:'SHIRAKAWA HARUKI', roleKey:'harukiRole', rows:[['jerseyValue','jersey5'],['position','roleOpposite'],['gradeValue','grade3'],['heightValue','height190'],['birthdayValue','birthday0415']], noteKey:'harukiNote', searchTerms:'白川 春樹 しらかわ はるき 시라카와 하루키 opposite 아포짓 3年 190 1999年4月15日' },
  haruto: { name:'水野 陽翔', roman:'MIZUNO HARUTO', roleKey:'harutoRole', rows:[['jerseyValue','jersey6'],['position','harutoPosition'],['gradeValue','grade3'],['heightValue','height168'],['birthdayValue','birthday1212']], noteKey:'harutoNote', searchTerms:'水野 陽翔 みずの はると 미즈노 하루토 libero 리베로 3年 168 1999年12月12日' },
  taiyou: { name:'赤城 太陽', roman:'AKAGI TAIYOU', roleKey:'taiyouRole', rows:[['jerseyValue','jersey7'],['position','roleMiddle'],['gradeValue','grade2'],['heightValue','height184'],['birthdayValue','birthday0801']], noteKey:'taiyouNote', searchTerms:'赤城 太陽 あかぎ たいよう 아카기 타이요 middle blocker 미들 블로커 2年 184 2000年8月1日' },
  aki: { name:'篠原 晶', roman:'SHINOHARA AKI', roleKey:'akiRole', rows:[['jerseyValue','jersey8'],['position','roleMiddle'],['gradeValue','grade2'],['heightValue','height188'],['birthdayValue','birthday1031']], noteKey:'akiNote', searchTerms:'篠原 晶 しのはら あき 시노하라 아키 middle blocker 미들 블로커 2年 188 2000年10月31日' }
};

// Shared 1–10 ability ratings for the Seirei roster.
// Order: attack, defense, serve, receive, block, speed.
const memberAbilities = {
  ritsu:  [7, 8, 7, 7, 6, 8],
  takuya: [7, 10, 7, 9, 7, 7],
  kouta:  [10, 8, 9, 8, 7, 8],
  haruki: [8, 8, 8, 8, 8, 8],
  haruto: [4, 9, 5, 10, 1, 9],
  taiyou: [7, 9, 7, 8, 10, 7],
  aki:    [9, 7, 10, 7, 7, 8]
};
// Korean labels and values for all roster profiles.
Object.assign(translations.ko, {
  ritsuRole:'세터 / SETTER', takuyaRole:'아포짓 / OPPOSITE',
  koutaRole:'아웃사이드 히터 / OUTSIDE HITTER', harukiRole:'아포짓 / OPPOSITE',
  harutoRole:'리베로 / LIBERO', taiyouRole:'미들 블로커 / MIDDLE BLOCKER', akiRole:'미들 블로커 / MIDDLE BLOCKER',
  roleSetter:'세터', roleOpposite:'아포짓', roleMiddle:'미들 블로커',
  captain:'주장', viceCaptain:'부주장', captainDuty:'주장', viceCaptainDuty:'부주장',
  ritsuNote:'등번호 1번. 팀의 주장을 맡은 세터.',
  takuyaNote:'등번호 2번. 부주장을 맡은 아포짓.',
  koutaNote:'등번호 3번. 아웃사이드 히터로 활약한다.',
  harukiNote:'등번호 5번. 아포짓으로 활약한다.',
  harutoNote:'등번호 6번. 수비를 책임지는 리베로.',
  taiyouNote:'등번호 7번. 2학년 미들 블로커.',
  akiNote:'등번호 8번. 2학년 미들 블로커.',
  grade3:'3학년', grade2:'2학년',
  height178:'178cm', height188:'188cm', height187:'187cm', height190:'190cm',
  height168:'168cm', height184:'184cm',
  birthday1122:'1999년 11월 22일', birthday0218:'1999년 2월 18일', birthday1215:'1999년 12월 15일',
  birthday0415:'1999년 4월 15일', birthday1212:'1999년 12월 12일', birthday0801:'2000년 8월 1일', birthday1031:'2000년 10월 31일',
  jersey1:'1번', jersey2:'2번', jersey3:'3번', jersey5:'5번', jersey6:'6번', jersey7:'7번', jersey8:'8번',
  gradeValue:'학년', heightValue:'신장', birthdayValue:'생일', jerseyValue:'등번호', dutyValue:'직책',
  koutaPosition:'아웃사이드 히터', harutoPosition:'리베로',
  koutaNote:'밝은 성격으로 팀 분위기를 움직이는 존재.',
  koutaProfileNote:'고등학교 시절 설정을 바탕으로 한 프로필입니다. 학년·신장·생일 등은 확정된 설정에 맞춰 추가할 수 있습니다.',
  harutoProfileNote:'차분한 수비로 팀을 뒷받침하는 리베로.'
});

translations.ja.grade3 = '3年生'; translations.ko.grade3 = '3학년';
translations.ja.grade2 = '2年生'; translations.ko.grade2 = '2학년';
translations.ja.height168 = '168 cm'; translations.ko.height168 = '168 cm';
translations.ja.gradeValue = '学年'; translations.ko.gradeValue = '학년';
translations.ja.heightValue = '身長'; translations.ko.heightValue = '신장';
translations.ja.birthdayValue = '誕生日'; translations.ko.birthdayValue = '생일';
translations.ja.position = 'ポジション'; translations.ko.position = '포지션';

function setLanguage(language, save = true) {
  currentLanguage = translations[language] ? language : 'ja';
  const t = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('[data-set-language]').forEach(button => {
    const active = button.dataset.setLanguage === currentLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const prev = document.getElementById('prevMonth');
  const next = document.getElementById('nextMonth');
  if (prev) prev.setAttribute('aria-label', t.prevMonth);
  if (next) next.setAttribute('aria-label', t.nextMonth);
  renderCalendar();
  if (dialog.open && dialog.dataset.memberKey) renderMemberDialog(dialog.dataset.memberKey);
  if (save) {
    try { localStorage.setItem('seirei-language', currentLanguage); } catch (_) {}
  }
}

document.querySelectorAll('[data-set-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.setLanguage));
});

const dialog = document.getElementById('memberDialog');
const dialogContent = document.getElementById('dialogContent');

function renderAbilityChart(key, t) {
  const values = memberAbilities[key];
  if (!values) return '';
  const labels = [
    t.abilityAttack, t.abilityDefense, t.abilityServe,
    t.abilityReceive, t.abilityBlock, t.abilitySpeed
  ];
  const cx = 180, cy = 118, maxRadius = 76;
  const point = (index, radius) => {
    const angle = (-90 + index * 60) * Math.PI / 180;
    return `${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`;
  };
  const polygonPoints = radius => values.map((value, index) =>
    point(index, radius * value / 10)
  ).join(' ');
  const grid = [2, 4, 6, 8, 10].map(level =>
    `<polygon points="${Array.from({length: 6}, (_, i) => point(i, maxRadius * level / 10)).join(' ')}" />`
  ).join('');
  const axes = labels.map((label, index) => {
    const angle = (-90 + index * 60) * Math.PI / 180;
    return `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(angle) * maxRadius).toFixed(2)}" y2="${(cy + Math.sin(angle) * maxRadius).toFixed(2)}" />`;
  }).join('');
  const labelPositions = labels.map((label, index) => {
    const angle = (-90 + index * 60) * Math.PI / 180;
    const x = cx + Math.cos(angle) * 101;
    const y = cy + Math.sin(angle) * 101;
    const anchor = Math.cos(angle) > 0.35 ? 'start' : Math.cos(angle) < -0.35 ? 'end' : 'middle';
    const dy = Math.sin(angle) < -0.7 ? -2 : Math.sin(angle) > 0.7 ? 12 : 4;
    return `<text x="${x.toFixed(2)}" y="${(y + dy).toFixed(2)}" text-anchor="${anchor}">${label}</text>`;
  }).join('');
  const dots = values.map((value, index) => {
    const angle = (-90 + index * 60) * Math.PI / 180;
    const radius = maxRadius * value / 10;
    return `<circle cx="${(cx + Math.cos(angle) * radius).toFixed(2)}" cy="${(cy + Math.sin(angle) * radius).toFixed(2)}" r="3" />`;
  }).join('');
  return `
    <section class="ability-section" aria-label="${t.abilitiesTitle}">
      <div class="ability-heading">
        <h3>${t.abilitiesTitle}</h3>
        <p>${t.abilitiesScale}</p>
      </div>
      <svg class="ability-chart" viewBox="0 0 360 244" role="img" aria-label="${labels.map((label, i) => `${label} ${values[i]}`).join(', ')}">
        <g class="ability-grid">${grid}</g>
        <g class="ability-axes">${axes}</g>
        <polygon class="ability-shape" points="${polygonPoints(maxRadius)}" />
        <g class="ability-dots">${dots}</g>
        <g class="ability-labels">${labelPositions}</g>
      </svg>
      <div class="ability-values">${labels.map((label, i) => `<span><b>${label}</b><strong>${values[i]}</strong></span>`).join('')}</div>
    </section>`;
}

function renderMemberDialog(key) {
  const m = members[key];
  if (!m) return;
  const t = translations[currentLanguage];
  const rows = m.rows.map(([labelKey, valueKey]) => {
    const label = t[labelKey] || labelKey;
    const value = t[valueKey] || valueKey;
    return `<tr><th>${label}</th><td>${value}</td></tr>`;
  }).join('');

const portraitFiles = {
  ritsu: 'images/Fujisaki-Ritsu.png',
  takuya: 'images/Ishida-Takuya.png',
  kouta: 'images/Takahashi-Kouta.png',
  haruki: 'images/Shirakawa-Haruki.png',
  haruto: 'images/Mizuno-Haruto.png',
  taiyou: 'images/Akagi-Taiyou.png',
  aki: 'images/Shinohara-Aki.png'
};
  const portrait = portraitFiles[key]
    ? `<div class="profile-portrait"><img src="${portraitFiles[key]}" alt="${m.name}"></div>`
    : '';

  dialogContent.innerHTML = `
    <div class="profile-head">
      <span class="profile-role">${t[m.roleKey]}</span>
      <h2>${m.name}</h2>
      <p>${m.roman}</p>
    </div>
    <div class="profile-body">
      <div class="profile-layout">
        <div class="profile-details">
          <table class="profile-table"><tbody>${rows}</tbody></table>
        </div>
        ${portrait}
      </div>
      ${renderAbilityChart(key, t)}
    </div>`;

  dialog.dataset.memberKey = key;
}
document.querySelectorAll('[data-member]').forEach(card => {
  card.addEventListener('click', () => {
    renderMemberDialog(card.dataset.member);
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const search = document.getElementById('memberSearch');
const memberCards = [...document.querySelectorAll('#memberGrid [data-member]')];
const emptyMessage = document.getElementById('emptyMessage');
search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let shown = 0;
  memberCards.forEach(card => {
    const m = members[card.dataset.member];
    const visible = (m.searchTerms + ' ' + card.dataset.name).toLowerCase().includes(query);
    card.hidden = !visible;
    if (visible) shown++;
  });
  emptyMessage.hidden = shown > 0;
});

let displayedYear = 2026;
let displayedMonth = 9;
const monthTitle = document.getElementById('monthTitle');
const calendarGrid = document.getElementById('calendarGrid');
const events = {
  '2026-10-03': {labelKey:'practiceEvent', type:'practice'},
  '2026-10-10': {labelKey:'gameEvent', type:'game'},
  '2026-10-17': {labelKey:'practiceEvent', type:'practice'},
  '2026-10-24': {labelKey:'gameEvent', type:'game'},
  '2026-10-31': {labelKey:'practiceEvent', type:'practice'}
};
function renderCalendar() {
  const t = translations[currentLanguage];
  monthTitle.textContent = currentLanguage === 'ja'
    ? `${displayedYear}年 ${displayedMonth + 1}月`
    : `${displayedYear}년 ${displayedMonth + 1}월`;
  calendarGrid.innerHTML = '';
  const firstDay = new Date(displayedYear, displayedMonth, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const prevMonthDays = new Date(displayedYear, displayedMonth, 0).getDate();
  const totalCells = Math.ceil((mondayOffset + daysInMonth) / 7) * 7;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    let day, dateKey, current = true;
    if (i < mondayOffset) {
      day = prevMonthDays - mondayOffset + i + 1; current = false;
      const d = new Date(displayedYear, displayedMonth - 1, day);
      dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    } else if (i >= mondayOffset + daysInMonth) {
      day = i - (mondayOffset + daysInMonth) + 1; current = false;
      const d = new Date(displayedYear, displayedMonth + 1, day);
      dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    } else {
      day = i - mondayOffset + 1;
      dateKey = `${displayedYear}-${String(displayedMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    }
    if (!current) cell.classList.add('muted');
    const num = document.createElement('span'); num.className = 'day-num'; num.textContent = day; cell.appendChild(num);
    if (events[dateKey]) {
      const event = document.createElement('span');
      event.className = `day-event ${events[dateKey].type === 'game' ? 'game' : ''}`;
      event.textContent = t[events[dateKey].labelKey];
      cell.appendChild(event);
    }
    calendarGrid.appendChild(cell);
  }
}
document.getElementById('prevMonth').addEventListener('click', () => {
  displayedMonth--; if (displayedMonth < 0) { displayedMonth = 11; displayedYear--; } renderCalendar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
  displayedMonth++; if (displayedMonth > 11) { displayedMonth = 0; displayedYear++; } renderCalendar();
});

document.addEventListener('DOMContentLoaded', () => {
  let savedLanguage = 'ja';
  try { savedLanguage = localStorage.getItem('seirei-language') || 'ja'; } catch (_) {}
  setLanguage(savedLanguage, false);
});

// Intro screen and three-track Seirei OST player.
(() => {
  const intro = document.getElementById('introScreen');
  const enter = document.getElementById('introEnter');
  const music = document.getElementById('seireiTheme');
  const player = document.getElementById('musicPlayer');
  const trackSelect = document.getElementById('musicTrack');
  const toggle = document.getElementById('musicToggle');
  const prev = document.getElementById('musicPrev');
  const next = document.getElementById('musicNext');
  if (!intro || !enter || !music || !player || !trackSelect || !toggle || !prev || !next) return;

  const tracks = [
    { id: 'summer-court', title: 'Summer Court Rhythm', src: 'audio/Summer-Court-Rhythm.mp3' },
    { id: 'summer-rally', title: 'Summer Rally', src: 'audio/Summer-Rally.mp3' },
    { id: 'spring-match', title: '春の試合前', src: 'audio/春の試合前.mp3' }
  ];
  let currentIndex = 0;
  let entered = false;

  function updatePlayButton(isPlaying) {
    toggle.textContent = isPlaying ? '♫ PAUSE' : '♫ PLAY';
    toggle.setAttribute('aria-pressed', String(isPlaying));
    toggle.setAttribute('aria-label', isPlaying ? '음악 일시정지' : '음악 재생');
  }

  async function chooseTrack(index, autoplay = false) {
    currentIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentIndex];
    trackSelect.value = track.id;
    music.src = track.src;
    music.load();
    if (autoplay) {
      try {
        music.volume = 0.45;
        await music.play();
        updatePlayButton(true);
      } catch (_) {
        updatePlayButton(false);
      }
    } else {
      music.pause();
      updatePlayButton(false);
    }
  }

  enter.addEventListener('click', async () => {
    if (entered) return;
    entered = true;
    player.hidden = false;
    await chooseTrack(0, true);
    intro.classList.add('is-opening');
    window.setTimeout(() => {
      intro.hidden = true;
      document.body.classList.add('intro-complete');
    }, 1250);
  });

  toggle.addEventListener('click', async () => {
    if (music.paused) {
      try {
        if (!music.src) await chooseTrack(currentIndex, false);
        await music.play();
        updatePlayButton(true);
      } catch (_) {
        updatePlayButton(false);
      }
    } else {
      music.pause();
      updatePlayButton(false);
    }
  });

  trackSelect.addEventListener('change', async () => {
    const index = tracks.findIndex(track => track.id === trackSelect.value);
    const shouldContinue = !music.paused;
    await chooseTrack(index < 0 ? 0 : index, shouldContinue);
  });
  prev.addEventListener('click', () => chooseTrack(currentIndex - 1, true));
  next.addEventListener('click', () => chooseTrack(currentIndex + 1, true));
  music.addEventListener('ended', () => chooseTrack(currentIndex + 1, true));
})();
