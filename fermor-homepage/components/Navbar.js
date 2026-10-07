const links = [['what', 'What we do'], ['ask', 'Ask us'], ['forecast', 'Forecasting'], ['invest', 'Investments'], ['news', 'News'], ['faq', 'FAQ']]

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#top" className="logo">Fer<span>mor</span></a>
        {links.map(([id, label]) => (
          <a key={id} className="l" href={'#' + id}>{label}</a>
        ))}
        <a className="btn" href="#start">Sign in</a>
      </nav>
    </header>
  )
}
