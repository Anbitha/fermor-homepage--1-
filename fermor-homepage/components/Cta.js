export default function Cta() {
  return (
    <section className="soft cta" id="start">
      <div className="wrap">
        <svg viewBox="0 0 120 120" width="96" aria-hidden="true">
          <circle cx="60" cy="60" r="56" fill="#0B1F4B" />
          <path d="M34 76 L52 56 L66 68 L88 40" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M74 40H88V54" fill="none" stroke="#7FB0FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 style={{ marginTop: 20 }}>Get started on your financial journey now</h2>
        <p className="muted">Create your free account in under two minutes.</p>
        <a className="btn navy" href="#start">Get started</a>
      </div>
    </section>
  )
}
