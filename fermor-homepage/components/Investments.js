import Slider from './Slider'

const slides = [
  { title: 'Stocks', heading: "Own a piece of India's top companies", text: 'Buy shares of leading companies and follow live prices and daily moves in one place.',
    src: '/images/stocks.webp', w: 406, h: 337, alt: 'Stocks card showing HDFC Bank, SBI and Maruti Suzuki prices with trend lines' },
  { title: 'Mutual funds', heading: 'Start small. Build big.', text: 'Begin a monthly SIP from just ₹500 and let steady investing do the work.',
    src: '/images/mutual-funds.webp', w: 406, h: 382, alt: 'Mutual fund card showing a 500 rupee monthly SIP on the 17th' },
  { title: 'ETFs', heading: 'Invest broader', text: 'Get exposure to top indices, sectors and themes, all in one place.',
    src: '/images/etfs.webp', w: 406, h: 443, alt: 'ETF card with an upward trend chart and an Explore ETFs button' },
]

export default function Investments() {
  return (
    <section className="mid" id="invest">
      <div className="wrap">
        <h2>Grow with Fermor investments</h2>
        <p className="muted" style={{ marginTop: 12 }}>Stocks, mutual funds and ETFs, with no jargon and no hidden fees.</p>
        <Slider slides={slides} label="Investment slides" />
      </div>
    </section>
  )
}
