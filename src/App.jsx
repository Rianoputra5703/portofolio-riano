// ====== EDIT DATAMU DI SINI ======
const PROFIL = {
  nama: 'Febriano Saputra',
 peran: 'Web Developer',
  foto: '/foto.jpg',
  bio: 'Mahasiswa Teknik Informatika yang fokus pada pengembangan web dengan Laravel dan MySQL di sisi backend, serta React di sisi frontend.',
  skills: {
    Frontend: ['React','HTML/CSS', 'Laravel'],
    Backend: ['xampp', 'Supabase'],
    Tools: ['Git/GitHub', 'Vercel', 'VS Code'],
  },
  kontak: [
    ['Email', 'rianoputra330@gmail.com'],
    ['GitHub', 'https://github.com/Rianoputra5703'],
    ['LinkedIn', 'https://www.linkedin.com/in/febriano-saputra-43055b447/'],
  ],
}

const PROYEK = [
  {
    judul: 'Toko Riano',
    jenis: 'Website E-Commerce',
    desk: 'Website toko online untuk produk digital, undangan digital, dan jasa pembuatan website. Data produk dikelola dengan Supabase dan di-deploy di Vercel.',
    tek: ['React', 'Supabase', 'Vercel'],
    repo: '',
    demo: 'https://toko-riano.vercel.app/',
  },
  {
    judul: 'Brewtopia',
    jenis: 'Website Company Profile',
    desk: 'Website coffee shop dengan konsep cozy dan modern, dibuat responsif dan di-deploy di Vercel.',
    tek: ['React', 'Supabase', 'Vercel'],
    repo: '',
    demo: 'https://brewtopia-psi.vercel.app/',
  },
]
// ====== BATAS EDIT ======

export default function App() {
  return (
    <div className="wrap">
      <header className="hero">
        {PROFIL.foto && <img className="foto" src={PROFIL.foto} alt={`Foto ${PROFIL.nama}`} />}
        <div>
          <span className="tag">{PROFIL.peran}</span>
          <h1>{PROFIL.nama}</h1>
          <p className="mu">{PROFIL.bio}</p>
        </div>
      </header>

      <section>
        <h2>Keahlian</h2>
        {Object.entries(PROFIL.skills).map(([grup, list]) => (
          <div key={grup} style={{ marginBottom: 14 }}>
            <p className="mu" style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 600 }}>{grup}</p>
            <div className="chips">{list.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        ))}
      </section>

      <section>
        <h2>Proyek</h2>
        <div className="grid">
          {PROYEK.map((p) => (
            <article className="card" key={p.judul}>
              <span className="ty">{p.jenis}</span>
              <h3>{p.judul}</h3>
              <p>{p.desk}</p>
              <div className="chips small">{p.tek.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="row">
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Kode</a>}
                {p.demo && <a className="btn p" href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="row">
          {PROFIL.kontak.map(([n, u]) => <a key={n} className="btn" href={u} target="_blank" rel="noreferrer">{n}</a>)}
        </div>
        <p className="mu">© {new Date().getFullYear()} {PROFIL.nama}</p>
      </footer>
    </div>
  )
}