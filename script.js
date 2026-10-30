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
    schoolNameShort:'埼玉県立青嶺高等学校', navAbout:'部について', navMembers:'部員紹介', navSchedule:'活動予定', navTownMap:'街の地図', navGuide:'学校・世界観',
    townMapEyebrow:'SEIREI TOWN', townMapTitle:'街の案内', townMapHint:'マーカーにカーソルを合わせるか、タップしてください。', townHomeLabel:'HOME', townMapFootnote:'住宅マーカーの位置は物語上の仮設定です。', houseTypeDetached:'一戸建て', houseTypeApartment:'マンション・アパート',
    contentsLabel:'コンテンツ', heroCopy1:'仲間と声を重ね、最後の一球まであきらめない。', heroCopy2:'青嶺高校バレーボール部のページへようこそ。', heroButton:'部員紹介を見る',
    aboutTitle:'青嶺高校バレーボール部', aboutLead1:'勝つことだけじゃない。', aboutLead2:'ここで過ごす時間も、僕らの青春だ。',
    aboutBody:'異なる個性を持つ部員たちが、一つのチームとなってボールをつないでいきます。コートの中では一つの点に真剣に向き合い、コートの外では仲間と共に青嶺らしい学校生活を送っています。',
    factPlace:'活動場所', factPlaceValue:'第一体育館', factActivities:'活動内容', factActivitiesValue:'練習・練習試合', factValues:'大切にしていること', factValuesValue:'声をつなぐこと、仲間を信じること',
    fictionNote:'※このページは創作世界「青嶺高校」の設定紹介サイトです。', membersTitle:'部員紹介', membersLead:'同じコートに立つ、個性豊かな仲間たち。',
    searchLabel:'部員を探す', searchPlaceholder:'名前・ポジションで検索…', comingMembers:'ほかの部員たち', profileSoon:'プロフィール準備中', emptySearch:'該当する部員が見つかりませんでした。',
    scheduleTitle:'活動予定', scheduleLead:'練習も試合も、一日ずつ積み重ねて。', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土', sun:'日',
    academicLegend:'学事日程', clubLegend:'部活動予定', holidayLegend:'祝日・特別休暇', birthdayLegend:'部員の誕生日', scheduleNote:'2019年度の学事日程とバレーボール部の予定です。',
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
    academicLegend:'学事日程', clubLegend:'部活動予定', holidayLegend:'祝日・特別休暇', birthdayLegend:'部員の誕生日', scheduleNote:'2019年度の学事日程とバレーボール部の予定です。',
    eventSemester:'新学期開始・入学式', eventClasses:'授業開始', eventRecruit:'新入部員募集', eventResume:'授業再開', eventMidterm:'1学期中間試験', eventNishigo:'西高との練習試合', eventCamp:'短期合宿', eventInterhigh:'インターハイ埼玉県予選', eventSports:'体育祭（クラス対抗）', eventFinal:'1学期期末試験', eventClosing:'1学期終業式', eventSummer:'夏休み開始', eventGoldenStart:'ゴールデンウィーク開始', eventGoldenEnd:'ゴールデンウィーク最終日'
  },
  ko: {
    schoolNameShort:'사이타마현립 세이레이 고등학교', navAbout:'부 소개', navMembers:'선수 소개', navSchedule:'활동 일정', navTownMap:'마을 지도', navGuide:'학교·세계관',
    townMapEyebrow:'SEIREI TOWN', townMapTitle:'세이레이 마을 안내', townMapHint:'마커에 마우스를 올리거나 눌러보세요.', townHomeLabel:'HOME', townMapFootnote:'집 마커의 위치는 이야기 속 임시 설정입니다.', houseTypeDetached:'단독주택', houseTypeApartment:'맨션·아파트',
    contentsLabel:'콘텐츠', heroCopy1:'동료와 목소리를 잇고, 마지막 한 공까지 포기하지 않는다.', heroCopy2:'세이레이 고등학교 배구부 홈페이지에 오신 것을 환영합니다.', heroButton:'선수 소개 보기',
    aboutTitle:'세이레이 고등학교 배구부', aboutLead1:'승리만이 전부는 아니다.', aboutLead2:'이곳에서 보내는 시간도 우리의 청춘이다.',
    aboutBody:'서로 다른 개성을 가진 부원들이 하나의 팀으로 모여 함께 공을 이어 나갑니다. 코트 안에서는 한 점을 위해 진지하게, 코트 밖에서는 동료들과 함께 세이레이만의 학교생활을 만들어 갑니다.',
    factPlace:'활동 장소', factPlaceValue:'제1체육관', factActivities:'활동 내용', factActivitiesValue:'훈련·연습 경기', factValues:'소중히 여기는 것', factValuesValue:'목소리를 잇는 것, 동료를 믿는 것',
    fictionNote:'※ 이 페이지는 창작 세계 「세이레이 고등학교」의 설정 소개 사이트입니다.', membersTitle:'선수 소개', membersLead:'같은 코트에 서는 개성 넘치는 동료들.',
    searchLabel:'선수 검색', searchPlaceholder:'이름·포지션으로 검색…', comingMembers:'그 밖의 부원들', profileSoon:'프로필 준비 중', emptySearch:'검색 결과가 없습니다.',
    scheduleTitle:'활동 일정', scheduleLead:'훈련도 시합도, 하루씩 차곡차곡.', mon:'월', tue:'화', wed:'수', thu:'목', fri:'금', sat:'토', sun:'일',
    academicLegend:'학사일정', clubLegend:'배구부 일정', holidayLegend:'공휴일·특별 연휴', birthdayLegend:'부원 생일', scheduleNote:'2019학년도 학사일정과 배구부 일정입니다.',
    guideTitle:'세이레이 소개', guideLead:'이 이야기의 무대와 코트 너머의 풍경.', guideSchoolTitle:'학교 소개', guideSchoolBody:'사이타마현에 있는 가상의 현립 고등학교. 이야기의 무대가 되는 학교입니다.',
    guideClubTitle:'배구부', guideClubBody:'선수들과 매니저가 훈련과 학교생활을 함께하며 하루하루를 쌓아 갑니다.',
    guideRelationTitle:'등장인물 관계', guideRelationBody:'프로필과 관계는 설정이 확정되는 대로 차례차례 추가합니다.',
    pageTop:'맨 위로 ↑', close:'닫기', roleOH:'아웃사이드 히터', roleL:'리베로', monthSuffix:'월', yearSuffix:'년',
    position:'포지션', school:'출신 학교', note:'인물 메모', grade:'학년', height:'신장', birthday:'생일',
    koutaRole:'아웃사이드 히터 / OUTSIDE HITTER', harutoRole:'리베로 / LIBERO',
    koutaPosition:'아웃사이드 히터', harutoPosition:'리베로', koutaNote:'밝은 성격으로 팀 분위기를 움직이는 존재.',
    koutaProfileNote:'고등학교 시절 설정을 바탕으로 한 프로필입니다. 학년·신장·생일 등은 확정된 설정에 맞춰 추가할 수 있습니다.',
    harutoProfileNote:'차분한 수비로 팀을 뒷받침하는 리베로.', prevMonth:'이전 달', nextMonth:'다음 달', abilitiesTitle:'PLAYER ABILITIES', abilitiesScale:'능력치 · 1–10', abilityAttack:'공격력', abilityDefense:'수비력', abilityServe:'서브', abilityReceive:'리시브', abilityBlock:'블로킹', abilitySpeed:'스피드',
    academicLegend:'학사일정', clubLegend:'배구부 일정', holidayLegend:'공휴일·특별 연휴', birthdayLegend:'부원 생일', scheduleNote:'2019학년도 학사일정과 배구부 일정입니다.',
    eventSemester:'신학기 시작 · 입학식', eventClasses:'정상 수업 시작', eventRecruit:'신입 부원 모집', eventResume:'수업 재개', eventMidterm:'1학기 중간고사', eventNishigo:'니시고와 연습 경기', eventCamp:'단기 합숙', eventInterhigh:'인터하이 사이타마현 예선', eventSports:'체육대회 (학급 대항전)', eventFinal:'1학기 기말고사', eventClosing:'1학기 종업식', eventSummer:'여름방학 시작', eventGoldenStart:'골든위크 시작', eventGoldenEnd:'골든위크 마지막 날'
  }
};

// Additional second-semester and tournament calendar labels.
Object.assign(translations.ja, {
  eventInterhighTournament:'インターハイ全国大会', eventJointCamp:'埼玉県内高校合同合宿',
  eventSecondSemester:'2学期始業式', eventCultureFestival:'文化祭',
  eventSecondMidterm:'2学期中間試験', eventPracticeMatch:'練習試合',
  eventHarukoQualifiers:'春高バレー埼玉県予選', eventSecondFinal:'2学期期末試験',
  eventSecondClosing:'2学期終業式', eventWinterBreak:'冬休み開始',
  eventHarukoNationals:'春高バレー全国大会', eventThirdSemester:'3学期授業再開',
  eventYearEndExams:'学年末試験', eventGraduation:'卒業式', eventThirdClosing:'3学期終業式', eventSpringBreak:'春休み開始'
});
Object.assign(translations.ko, {
  eventInterhighTournament:'인터하이 전국대회', eventJointCamp:'사이타마현 고교 배구부 합동 합숙',
  eventSecondSemester:'2학기 시업식', eventCultureFestival:'문화제',
  eventSecondMidterm:'2학기 중간고사', eventPracticeMatch:'배구부 연습경기',
  eventHarukoQualifiers:'하루코 사이타마현 예선', eventSecondFinal:'2학기 기말고사',
  eventSecondClosing:'2학기 종업식', eventWinterBreak:'겨울방학 시작',
  eventHarukoNationals:'하루코 전국대회', eventThirdSemester:'3학기 수업 재개',
  eventYearEndExams:'학년말 시험', eventGraduation:'졸업식', eventThirdClosing:'3학기 종업식', eventSpringBreak:'봄방학 시작'
});
let currentLanguage = 'ja';

const members = {
  ritsu: { name:'藤崎 律', roman:'FUJISAKI RITSU', roleKey:'ritsuRole', rows:[['jerseyValue','jersey1'],['dutyValue','captainDuty'],['position','roleSetter'],['gradeValue','class3_1'],['heightValue','height178'],['birthdayValue','birthday1122']], noteKey:'ritsuNote', searchTerms:'藤崎 律 ふじさき りつ 후지사키 리츠 setter 세터 주장 captain 3年 178 1999年11月22日' },
  takuya: { name:'石田 拓也', roman:'ISHIDA TAKUYA', roleKey:'takuyaRole', rows:[['jerseyValue','jersey2'],['dutyValue','viceCaptainDuty'],['position','roleOpposite'],['gradeValue','class3_3'],['heightValue','height188'],['birthdayValue','birthday0218']], noteKey:'takuyaNote', searchTerms:'石田 拓也 いしだ たくや 이시다 타쿠야 opposite 아포짓 부주장 vice captain 3年 188 1999年2月18日' },
  kouta: { name:'高橋 康太', roman:'TAKAHASHI KOUTA', roleKey:'koutaRole', rows:[['jerseyValue','jersey3'],['position','koutaPosition'],['gradeValue','class3_4'],['heightValue','height187'],['birthdayValue','birthday1215']], noteKey:'koutaNote', searchTerms:'高橋 康太 たかはし こうた 타카하시 코우타 아웃사이드 히터 アウトサイドヒッター OH 3年 187 1999年12月15日' },
  haruki: { name:'白川 春樹', roman:'SHIRAKAWA HARUKI', roleKey:'harukiRole', rows:[['jerseyValue','jersey5'],['position','roleOpposite'],['gradeValue','class3_5'],['heightValue','height190'],['birthdayValue','birthday0415']], noteKey:'harukiNote', searchTerms:'白川 春樹 しらかわ はるき 시라카와 하루키 opposite 아포짓 3年 190 1999年4月15日' },
  haruto: { name:'水野 陽翔', roman:'MIZUNO HARUTO', roleKey:'harutoRole', rows:[['jerseyValue','jersey6'],['position','harutoPosition'],['gradeValue','class3_4'],['heightValue','height168'],['birthdayValue','birthday1212']], noteKey:'harutoNote', searchTerms:'水野 陽翔 みずの はると 미즈노 하루토 libero 리베로 3年 168 1999年12月12日' },
  taiyou: { name:'赤城 太陽', roman:'AKAGI TAIYOU', roleKey:'taiyouRole', rows:[['jerseyValue','jersey7'],['position','roleMiddle'],['gradeValue','class2_4'],['heightValue','height184'],['birthdayValue','birthday0801']], noteKey:'taiyouNote', searchTerms:'赤城 太陽 あかぎ たいよう 아카기 타이요 middle blocker 미들 블로커 2年 184 2000年8月1日' },
  aki: { name:'篠原 晶', roman:'SHINOHARA AKI', roleKey:'akiRole', rows:[['jerseyValue','jersey8'],['position','roleMiddle'],['gradeValue','class2_4'],['heightValue','height188'],['birthdayValue','birthday1031']], noteKey:'akiNote', searchTerms:'篠原 晶 しのはら あき 시노하라 아키 middle blocker 미들 블로커 2年 188 2000年10月31日' }
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

translations.ja.class3_1 = '3年1組'; translations.ko.class3_1 = '3학년 1반';
translations.ja.class3_3 = '3年3組'; translations.ko.class3_3 = '3학년 3반';
translations.ja.class3_4 = '3年4組'; translations.ko.class3_4 = '3학년 4반';
translations.ja.class3_5 = '3年5組'; translations.ko.class3_5 = '3학년 5반';
translations.ja.class2_4 = '2年4組'; translations.ko.class2_4 = '2학년 4반';
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
  refreshTownHomePopup();
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

let displayedYear = 2019;
let displayedMonth = 3; // April 2019: start of the Japanese academic year.
const monthTitle = document.getElementById('monthTitle');
const calendarGrid = document.getElementById('calendarGrid');
const events = {
  '2019-04-02': [{labelKey:'eventSemester', type:'academic'}],
  '2019-04-03': [{labelKey:'eventClasses', type:'academic'}],
  '2019-04-05': [{labelKey:'eventRecruit', type:'club'}],
  '2019-04-27': [{labelKey:'eventGoldenStart', type:'holiday', range:true}],
  '2019-05-06': [{labelKey:'eventGoldenEnd', type:'holiday', range:true}],
  '2019-05-07': [{labelKey:'eventResume', type:'academic'}],
  '2019-05-11': [{labelKey:'eventNishigo', type:'club'}],
  '2019-05-13': [{labelKey:'eventMidterm', type:'academic', range:true}],
  '2019-05-17': [{labelKey:'eventCamp', type:'club', range:true}],
  '2019-05-25': [{labelKey:'eventInterhigh', type:'club', range:true}],
  '2019-06-14': [{labelKey:'eventSports', type:'academic'}],
  '2019-07-08': [{labelKey:'eventFinal', type:'academic', range:true}],
  '2019-07-19': [{labelKey:'eventClosing', type:'academic'}],
  '2019-07-20': [{labelKey:'eventSummer', type:'academic'}],
  '2019-07-30': [{labelKey:'eventInterhighTournament', type:'club', range:true}],
  '2019-08-11': [{labelKey:'eventJointCamp', type:'club', range:true}],
  '2019-09-02': [{labelKey:'eventSecondSemester', type:'academic'}],
  '2019-09-26': [{labelKey:'eventCultureFestival', type:'academic', range:true}],
  '2019-10-15': [{labelKey:'eventSecondMidterm', type:'academic', range:true}],
  '2019-10-19': [{labelKey:'eventPracticeMatch', type:'club'}],
  '2019-11-02': [{labelKey:'eventPracticeMatch', type:'club'}],
  '2019-11-08': [{labelKey:'eventHarukoQualifiers', type:'club', range:true}],
  '2019-12-10': [{labelKey:'eventSecondFinal', type:'academic', range:true}],
  '2019-12-23': [{labelKey:'eventSecondClosing', type:'academic'}],
  '2019-12-24': [{labelKey:'eventWinterBreak', type:'academic'}],
  '2020-01-05': [{labelKey:'eventHarukoNationals', type:'club', range:true}],
  '2020-01-08': [{labelKey:'eventThirdSemester', type:'academic'}],
  '2020-02-25': [{labelKey:'eventYearEndExams', type:'academic', range:true}],
  '2020-03-02': [{labelKey:'eventGraduation', type:'academic'}],
  '2020-03-19': [{labelKey:'eventThirdClosing', type:'academic'}],
  '2020-03-20': [{labelKey:'eventSpringBreak', type:'academic'}]
};
// Recurring birthdays are kept separate from dated school/club events.
// They are generated for every displayed year, so future calendar years need no re-entry.
const recurringBirthdays = [
  {month:4, day:15, ja:'白川 春樹 誕生日', ko:'하루키 생일'},
  {month:8, day:1, ja:'赤城 太陽 誕生日', ko:'타이요 생일'},
  {month:10, day:31, ja:'篠原 晶 誕生日', ko:'아키 생일'},
  {month:11, day:22, ja:'藤崎 律 誕生日', ko:'리츠 생일'},
  {month:12, day:12, ja:'水野 陽翔 誕生日', ko:'하루토 생일'},
  {month:12, day:15, ja:'高橋 康太 誕生日', ko:'코우타 생일'},
  {month:2, day:18, ja:'石田 拓也 誕生日', ko:'타쿠야 생일'}
];
const activeFilters = {academic:true, club:true, holiday:true, birthday:true};
const dateRanges = [
  {start:'2019-04-27', end:'2019-05-06', type:'holiday'},
  {start:'2019-05-13', end:'2019-05-15', type:'academic'},
  {start:'2019-05-17', end:'2019-05-19', type:'club'},
  {start:'2019-05-25', end:'2019-05-26', type:'club'},
  {start:'2019-07-08', end:'2019-07-10', type:'academic'},
  {start:'2019-07-30', end:'2019-08-03', type:'club'},
  {start:'2019-08-11', end:'2019-08-17', type:'club'},
  {start:'2019-09-26', end:'2019-09-27', type:'academic'},
  {start:'2019-10-15', end:'2019-10-17', type:'academic'},
  {start:'2019-11-08', end:'2019-11-10', type:'club'},
  {start:'2019-12-10', end:'2019-12-12', type:'academic'},
  {start:'2020-01-05', end:'2020-01-12', type:'club'},
  {start:'2020-02-25', end:'2020-02-27', type:'academic'}
];
function rangeTypeFor(dateKey) {
  const range = dateRanges.find(item => dateKey >= item.start && dateKey <= item.end);
  return range ? range.type : null;
}
function isGoldenWeek(dateKey) { return rangeTypeFor(dateKey) === 'holiday'; }
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
    const rangeType = rangeTypeFor(dateKey);
    const num = document.createElement('span'); num.className = 'day-num'; num.textContent = day; cell.appendChild(num);
    const dayEvents = [...(events[dateKey] || [])];
    const birthday = recurringBirthdays.find(item => item.month === displayedMonth + 1 && item.day === day);
    if (current && birthday) dayEvents.push({type:'birthday', label: currentLanguage === 'ja' ? birthday.ja : birthday.ko});
    // Keep multi-day bars inside the displayed month; adjacent-month cells stay visually clean.
    if (current && rangeType && activeFilters[rangeType]) {
      const rangeEvent = dayEvents.find(eventData => eventData.type === rangeType);
      const bar = document.createElement('span');
      bar.className = `day-event ${rangeType} range-segment`;
      if (rangeEvent) {
        bar.classList.add('range-mark');
        bar.textContent = t[rangeEvent.labelKey];
      } else {
        bar.setAttribute('aria-hidden', 'true');
      }
      cell.appendChild(bar);
    }
    dayEvents.forEach(eventData => {
      if (!activeFilters[eventData.type] || (eventData.range && rangeType === eventData.type)) return;
      const event = document.createElement('span');
      event.className = `day-event ${eventData.type}`;
      event.textContent = eventData.label || t[eventData.labelKey];
      cell.appendChild(event);
    });
    calendarGrid.appendChild(cell);
  }
}
document.querySelectorAll('.legend-filter').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.filter;
    activeFilters[type] = !activeFilters[type];
    button.classList.toggle('active', activeFilters[type]);
    button.setAttribute('aria-pressed', String(activeFilters[type]));
    renderCalendar();
  });
});
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

// Intro screen and seven-track Seirei OST player.
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
    { id: 'summer-court', title: 'Summer Court Rhythm', src: 'audio/Summer-Court-Rhythm.mp3', season: 'summer' },
    { id: 'summer-rally', title: 'Summer Rally', src: 'audio/Summer-Rally.mp3', season: 'summer' },
    { id: 'spring-match', title: '春の試合前', src: 'audio/春の試合前.mp3', season: 'spring' },
    { id: 'sakura-time', title: '桜の時間', src: 'audio/桜の時間.mp3', season: 'spring' },
    { id: 'autumn-court', title: '秋のコート', src: 'audio/Autumn-Court.mp3', season: 'autumn' },
    { id: 'autumn-afterglow', title: 'Autumn Afterglow', src: 'audio/Autumn-Afterglow.mp3', season: 'autumn' },
    { id: 'snowlight-memories', title: 'Snowlight Memories', src: 'audio/Snowlight-Memories.mp3', season: 'winter' },
    { id: 'snowy-afternoon-classroom', title: '雪降る午後の教室', src: 'audio/Snowy-Afternoon-Classroom.mp3', season: 'winter' }
  ];

  function applySeasonTheme(season) {
    player.dataset.season = season;
    player.setAttribute('aria-label', `Seirei original soundtrack player - ${season}`);
  }
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
    applySeasonTheme(track.season);
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

  enter.addEventListener('click', () => {
    if (entered) return;
    entered = true;

    // Start the visual transition immediately. Audio playback can be delayed by
    // the browser, so it must never block the intro from opening.
    player.hidden = false;
    intro.classList.add('is-opening');
    window.setTimeout(() => {
      intro.hidden = true;
      document.body.classList.add('intro-complete');
    }, 1250);

    // Attempt playback independently; a playback/network error should not
    // prevent the page transition.
    chooseTrack(0, true).catch(() => updatePlayButton(false));
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


// Seirei Town Map: independent pastel home-marker layer.
const townMapFrame = document.getElementById('townMapFrame');
const townHomeMarkers = document.getElementById('townHomeMarkers');
const townHomePopup = document.getElementById('townHomePopup');
const townPopupName = document.getElementById('townPopupName');
const townPopupDescription = document.getElementById('townPopupDescription');
const townPopupKicker = document.getElementById('townPopupKicker');
const townPopupClose = document.getElementById('townPopupClose');

Object.assign(translations.ja, {
  townLegendHome:'登場人物の家', townLegendStation:'駅', townLegendPark:'公園', townLegendShrine:'神社',
  townSpotStation:'駅', townSpotPark:'公園', townSpotShrine:'神社',
  townStationDetail:'大宮公園駅。街の西側にある、通学や買い物の起点。',
  townParkDetail:'大宮公園。池や緑に囲まれた、街の大きな憩いの場所。',
  townShrineDetail:'街の東側にある神社。木々に囲まれた静かな境内。',
  townMapFootnote:'住宅マーカーは物語上の位置です。実際の住所を示すものではありません。'
});
Object.assign(translations.ko, {
  townLegendHome:'등장인물의 집', townLegendStation:'역', townLegendPark:'공원', townLegendShrine:'신사',
  townSpotStation:'역', townSpotPark:'공원', townSpotShrine:'신사',
  townStationDetail:'오미야코엔역. 마을 서쪽에 있는 통학과 외출의 출발점.',
  townParkDetail:'오미야 공원. 연못과 푸른 나무가 어우러진 마을의 큰 쉼터.',
  townShrineDetail:'마을 동쪽의 신사. 나무들에 둘러싸인 조용한 경내.',
  townMapFootnote:'집 마커는 이야기 속의 위치이며 실제 주소를 나타내지 않습니다.'
});

// The positions are placed on visible building clusters in the illustration,
// not on roads, the pond, or park lawns. They are fictional story locations.
const townHomes = [
  { id:'ritsu', name:'藤崎 律', ko:'후지사키 리츠', x:73, y:16, type:'detached' },
  { id:'takuya', name:'石田 拓也', ko:'이시다 타쿠야', x:82, y:48, type:'detached' },
  { id:'kouta', name:'高橋 康太', ko:'타카하시 코우타', x:8, y:57, type:'apartment' },
  { id:'haruki', name:'白川 春樹', ko:'시라카와 하루키', x:35, y:48, type:'detached' },
  { id:'haruto', name:'水野 陽翔', ko:'미즈노 하루토', x:61, y:51, type:'detached' },
  { id:'taiyou', name:'赤城 太陽', ko:'아카기 타이요', x:10, y:34, type:'apartment' },
  { id:'aki', name:'篠原 晶', ko:'시노하라 아키', x:78, y:78, type:'apartment' }
];

// Major neighborhood landmarks are separate from character residences.
const townSpots = [
  { id:'station', kind:'station', icon:'🚉', x:15, y:48, name:'大宮公園駅', ko:'오미야코엔역', detailKey:'townStationDetail' },
  { id:'park', kind:'park', icon:'🌳', x:45, y:72, name:'大宮公園', ko:'오미야 공원', detailKey:'townParkDetail' },
  { id:'shrine', kind:'shrine', icon:'⛩️', x:92, y:36, name:'神社', ko:'신사', detailKey:'townShrineDetail' }
];
let selectedTownHome = null;

function refreshTownHomePopup() {
  if (!townHomePopup || !selectedTownHome) return;
  const t = translations[currentLanguage];
  const item = selectedTownHome;
  townPopupName.textContent = currentLanguage === 'ko' ? item.ko : item.name;
  if (townPopupDescription) townPopupDescription.textContent = item.detailKey ? t[item.detailKey] : '';
  if (townPopupKicker) {
    townPopupKicker.textContent = item.kind
      ? t[item.kind === 'station' ? 'townSpotStation' : item.kind === 'park' ? 'townSpotPark' : 'townSpotShrine']
      : t.townHomeLabel;
  }
}
function closeTownHomePopup() {
  if (townHomePopup) townHomePopup.hidden = true;
  selectedTownHome = null;
  townHomeMarkers?.querySelectorAll('.town-map-marker').forEach(el => el.classList.remove('is-selected'));
}
function showTownHome(item, button) {
  if (!townHomePopup || !townPopupName) return;
  townHomeMarkers.querySelectorAll('.town-map-marker').forEach(el => el.classList.remove('is-selected'));
  button.classList.add('is-selected');
  selectedTownHome = item;
  refreshTownHomePopup();
  townHomePopup.hidden = false;
}
function addTownMarker(item) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `town-map-marker ${item.kind ? `town-marker-${item.kind}` : 'town-marker-home'}`;
  button.style.left = `${item.x}%`;
  button.style.top = `${item.y}%`;
  button.dataset.markerId = item.id;
  button.textContent = item.icon || '⌂';
  const label = currentLanguage === 'ko' ? item.ko : item.name;
  button.setAttribute('aria-label', label);
  button.title = label;
  button.addEventListener('mouseenter', () => showTownHome(item, button));
  button.addEventListener('focus', () => showTownHome(item, button));
  button.addEventListener('click', () => showTownHome(item, button));
  townHomeMarkers.appendChild(button);
}
if (townMapFrame && townHomeMarkers) {
  townSpots.forEach(addTownMarker);
  townHomes.forEach(home => addTownMarker({ ...home, icon:'🏠' }));
}
townPopupClose?.addEventListener('click', closeTownHomePopup);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeTownHomePopup(); });
