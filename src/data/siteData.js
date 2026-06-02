export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Teams', href: '#teams' },
  { label: 'Players', href: '#players' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Leaderboards', href: '#leaderboards' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Total Players', value: 140, suffix: '+' },
  { label: 'Tournament Wins', value: 68, suffix: '' },
  { label: 'Active Rosters', value: 5, suffix: '' },
  { label: 'Community Members', value: 45, suffix: 'K+' },
]

export const teams = [
  {
    game: 'Free Fire Max',
    win: 74,
    logo: 'FF',
    lineup: ['Rogue', 'Titan', 'Pulse', 'Nova'],
    roles: ['IGL', 'Sniper', 'Support', 'Rusher'],
    coach: 'Coach Zed',
  },
  {
    game: 'BGMI',
    win: 79,
    logo: 'BG',
    lineup: ['Falcon', 'Vortex', 'Sync', 'Arrow'],
    roles: ['IGL', 'Rusher', 'Support', 'Sniper'],
    coach: 'Coach Kael',
  },
  {
    game: 'Indus',
    win: 71,
    logo: 'IN',
    lineup: ['Echo', 'Raiden', 'Knell', 'Oni'],
    roles: ['IGL', 'Sniper', 'Support', 'Rusher'],
    coach: 'Coach Ares',
  },
  {
    game: 'Pokémon Unite',
    win: 76,
    logo: 'PU',
    lineup: ['Volt', 'Mira', 'Drake', 'Ivy'],
    roles: ['Attacker', 'Defender', 'Speedster', 'Support'],
    coach: 'Coach Hex',
  },
  {
    game: 'FIFA',
    win: 81,
    logo: 'FC',
    lineup: ['Zenith', 'Quantum'],
    roles: ['Striker', 'Midfielder'],
    coach: 'Coach Orion',
  },
]

export const players = [
  { tag: 'GOAT_Raiden', role: 'IGL', kd: 3.8, hs: 42, win: 72, matches: 480, badges: ['MVP', 'Clutch King'] },
  { tag: 'GOAT_Nova', role: 'Sniper', kd: 4.2, hs: 51, win: 75, matches: 512, badges: ['Ace', 'Top Frag'] },
  { tag: 'GOAT_Pulse', role: 'Support', kd: 2.9, hs: 35, win: 69, matches: 449, badges: ['MVP', 'Team Player'] },
]

export const tournaments = [
  {
    name: 'GOAT Ascension Cup',
    status: 'Upcoming',
    prize: '$35,000',
    endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000).toISOString(),
  },
  {
    name: 'Neon Strike League',
    status: 'Live',
    prize: '$70,000',
    live: true,
  },
  {
    name: 'Crimson Arena Masters',
    status: 'Completed',
    prize: '$50,000',
    completed: true,
  },
]

export const leaderboardTabs = [
  {
    id: 'teams',
    title: 'Team Rankings',
    rows: [
      { rank: 1, name: 'GOAT BGMI', points: 2840 },
      { rank: 2, name: 'GOAT Free Fire', points: 2710 },
      { rank: 3, name: 'GOAT Unite', points: 2595 },
    ],
  },
  {
    id: 'mvp',
    title: 'MVP Players',
    rows: [
      { rank: 1, name: 'GOAT_Nova', points: 98 },
      { rank: 2, name: 'GOAT_Raiden', points: 94 },
      { rank: 3, name: 'GOAT_Pulse', points: 89 },
    ],
  },
  {
    id: 'kills',
    title: 'Kill Leaderboard',
    rows: [
      { rank: 1, name: 'GOAT_Nova', points: 1240 },
      { rank: 2, name: 'GOAT_Raiden', points: 1188 },
      { rank: 3, name: 'GOAT_Pulse', points: 902 },
    ],
  },
  {
    id: 'weekly',
    title: 'Weekly Top Performers',
    rows: [
      { rank: 1, name: 'GOAT_Shadow', points: 420 },
      { rank: 2, name: 'GOAT_Volt', points: 398 },
      { rank: 3, name: 'GOAT_Echo', points: 376 },
    ],
  },
]

export const matches = [
  { date: 'Jun 4', event: 'BGMI Scrim', opponent: 'Nova Clan', time: '19:00 IST', live: false },
  { date: 'Jun 5', event: 'Ascension Qualifier', opponent: 'Crimson X', time: '20:30 IST', live: true },
  { date: 'Jun 2', event: 'FF Max Finals', opponent: 'Hyper Unit', score: '3-1', result: 'W' },
]

export const sponsors = ['Nexus Gear', 'HyperVolt Energy', 'Phantom Labs', 'Aether Studios', 'Pulse Network']

export const shopItems = [
  { name: 'GOAT Pro Jersey', price: '₹1,999', tag: 'Bestseller' },
  { name: 'Arena Hoodie', price: '₹2,499', tag: 'New' },
  { name: 'Elite Mousepad XL', price: '₹899', tag: 'Limited' },
]
