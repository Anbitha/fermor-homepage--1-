export default function Forecast() {
  return (
    <section className="dark" id="forecast">
      <div className="wrap">
        <h2>Forecasting your future</h2>
        <p className="muted" style={{ margin: '16px 0 40px', maxWidth: 520 }}>
          Fermor projects your savings month by month, so you can see the effect of today's choices years from now.
        </p>
        <img className="fc" src="/images/forecast.webp" width="1200" height="453"
          alt="Wealth forecast showing total wealth today of 53,00,000 rupees growing to a projected 1,64,60,996 rupees in 10 years" />
      </div>
    </section>
  )
}
