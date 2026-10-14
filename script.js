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

const members = {
  kouta: {
    name: '高橋 康太', roman: 'TAKAHASHI KOUTA', role: 'アウトサイドヒッター / OUTSIDE HITTER',
    rows: [['ポジション', 'アウトサイドヒッター'], ['出身校', '青嶺高校'], ['人物メモ', '明るく、チームの空気を動かす存在。']],
    note: '高校時代の設定をもとにしたプロフィールです。学年・身長・誕生日などの詳細は、確定した設定に合わせて追記できます。'
  },
  haruto: {
    name: '水野 陽翔', roman: 'MIZUNO HARUTO', role: 'リベロ / LIBERO',
    rows: [['ポジション', 'リベロ'], ['学年', '3年生'], ['身長', '168 cm'], ['誕生日', '12月12日']],
    note: '落ち着いた守備でチームを支えるリベロ。背番号など、ほかの確定設定もこの欄に追加できます。'
  }
};
const dialog = document.getElementById('memberDialog');
const dialogContent = document.getElementById('dialogContent');
document.querySelectorAll('[data-member]').forEach(card => {
  card.addEventListener('click', () => {
    const m = members[card.dataset.member];
    if (!m) return;
    dialogContent.innerHTML = `
      <div class="profile-head"><span class="profile-role">${m.role}</span><h2>${m.name}</h2><p>${m.roman}</p></div>
      <div class="profile-body"><table class="profile-table"><tbody>${m.rows.map(row => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`).join('')}</tbody></table><p class="profile-note">${m.note}</p></div>`;
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
    const visible = card.dataset.name.toLowerCase().includes(query);
    card.hidden = !visible;
    if (visible) shown++;
  });
  emptyMessage.hidden = shown > 0;
});

let displayedYear = 2026;
let displayedMonth = 9; // zero-based: October
const monthTitle = document.getElementById('monthTitle');
const calendarGrid = document.getElementById('calendarGrid');
// Sample events are deliberately marked as provisional in the page.
const events = {
  '2026-10-03': {label:'通常練習', type:'practice'},
  '2026-10-10': {label:'練習試合', type:'game'},
  '2026-10-17': {label:'通常練習', type:'practice'},
  '2026-10-24': {label:'練習試合', type:'game'},
  '2026-10-31': {label:'通常練習', type:'practice'}
};
function renderCalendar() {
  monthTitle.textContent = `${displayedYear}年 ${displayedMonth + 1}月`;
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
      day = prevMonthDays - mondayOffset + i + 1;
      current = false;
      const d = new Date(displayedYear, displayedMonth - 1, day);
      dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    } else if (i >= mondayOffset + daysInMonth) {
      day = i - (mondayOffset + daysInMonth) + 1;
      current = false;
      const d = new Date(displayedYear, displayedMonth + 1, day);
      dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    } else {
      day = i - mondayOffset + 1;
      dateKey = `${displayedYear}-${String(displayedMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    }
    if (!current) cell.classList.add('muted');
    const num = document.createElement('span');
    num.className = 'day-num';
    num.textContent = day;
    cell.appendChild(num);
    if (events[dateKey]) {
      const event = document.createElement('span');
      event.className = `day-event ${events[dateKey].type === 'game' ? 'game' : ''}`;
      event.textContent = events[dateKey].label;
      cell.appendChild(event);
    }
    calendarGrid.appendChild(cell);
  }
}
document.getElementById('prevMonth').addEventListener('click', () => {
  displayedMonth--;
  if (displayedMonth < 0) { displayedMonth = 11; displayedYear--; }
  renderCalendar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
  displayedMonth++;
  if (displayedMonth > 11) { displayedMonth = 0; displayedYear++; }
  renderCalendar();
});
renderCalendar();
