export default function Hero() {
  return (
    <section className="dark hero" id="top">
      <div className="wrap">
        <div>
          <h1>Your one-stop destination for all your financial decisions</h1>
          <p className="sub muted">Track what you spend, plan how you grow and reach your goals, all in one calm place.</p>
          <a className="btn" href="#start">Get started</a>
        </div>
        <img className="phone" src="/images/hero-phone.webp" width="371" height="720"
          alt="Fermor app home screen showing portfolio balance, growth chart and quick actions" />
      </div>
    </section>
  )
}
