export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="logo" style={{ color: '#fff' }}>Fer<span>mor</span></div>
          <p style={{ marginTop: 8, maxWidth: 260 }}>Smarter money decisions, made simple.</p>
        </div>
        <div className="cols">
          <div><b>Explore</b><a href="#what">What we do</a><a href="#forecast">Forecasting</a><a href="#invest">Investments</a></div>
          <div><b>Resources</b><a href="#news">News</a><a href="#faq">FAQ</a><a href="#start">Get started</a></div>
        </div>
        <div className="copy">© 2026 Fermor. All rights reserved.</div>
      </div>
    </footer>
  )
}
