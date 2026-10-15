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
    koutaPosition:'アウトサイドヒッター', harutoPosition:'リベロ', koutaNote:'明るく、チームの空気を動かす存在。',
    koutaProfileNote:'高校時代の設定をもとにしたプロフィールです。学年・身長・誕生日などの詳細は、確定した設定に合わせて追記できます。',
    harutoProfileNote:'落ち着いた守備でチームを支えるリベロ。', prevMonth:'前の月', nextMonth:'次の月',
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
    harutoProfileNote:'차분한 수비로 팀을 뒷받침하는 리베로.', prevMonth:'이전 달', nextMonth:'다음 달',
    practiceEvent:'정기 훈련', gameEvent:'연습 경기'
  }
};
let currentLanguage = 'ja';

const members = {
  kouta: {
    name: '高橋 康太', roman: 'TAKAHASHI KOUTA', roleKey: 'koutaRole',
    rows: [['position', 'koutaPosition'], ['school', 'school']],
    noteKey: 'koutaProfileNote',
    searchTerms: '高橋 康太 たかはし こうた 타카하시 코우타 코우타 아웃サイドヒッター 아웃사이드 히터 OH 3年 187 12月15日'
  },
  haruto: {
    name: '水野 陽翔', roman: 'MIZUNO HARUTO', roleKey: 'harutoRole',
    rows: [['position', 'harutoPosition'], ['gradeValue', 'grade3'], ['heightValue', 'height168'], ['birthdayValue', 'birthday1212']],
    noteKey: 'harutoProfileNote',
    searchTerms: '水野 陽翔 みずの はると 미즈노 하루토 하루토 リベロ 리베로 libero 3年 3학년 168 12月12日 12월12일'
  }
};
translations.ja.grade3 = '3年生'; translations.ko.grade3 = '3학년';
translations.ja.height168 = '168 cm'; translations.ko.height168 = '168 cm';
translations.ja.birthday1212 = '12月12日'; translations.ko.birthday1212 = '12월 12일';
translations.ja.gradeValue = '学年'; translations.ko.gradeValue = '학년';
translations.ja.heightValue = '身長'; translations.ko.heightValue = '신장';
translations.ja.birthdayValue = '誕生日'; translations.ko.birthdayValue = '생일';

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
function renderMemberDialog(key) {
  const m = members[key];
  if (!m) return;
  const t = translations[currentLanguage];
  const rows = m.rows.map(([labelKey, valueKey]) => {
    const label = t[labelKey] || labelKey;
    const value = t[valueKey] || valueKey;
    return `<tr><th>${label}</th><td>${value}</td></tr>`;
  }).join('');
  dialogContent.innerHTML = `
    <div class="profile-head"><span class="profile-role">${t[m.roleKey]}</span><h2>${m.name}</h2><p>${m.roman}</p></div>
    <div class="profile-body"><table class="profile-table"><tbody>${rows}</tbody></table><p class="profile-note">${t[m.noteKey]}</p></div>`;
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
