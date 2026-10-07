'use client'
import { useRef, useState } from 'react'

const art = {
  line: <svg width="90" viewBox="0 0 90 60"><path d="M5 50 L25 30 L40 40 L70 10" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  ring: <svg width="80" viewBox="0 0 80 60"><circle cx="40" cy="30" r="24" fill="none" stroke="#7FB0FF" strokeWidth="8" /><circle cx="40" cy="30" r="8" fill="#fff" /></svg>,
  bars: <svg width="90" viewBox="0 0 90 60"><rect x="10" y="30" width="14" height="25" fill="#fff" /><rect x="34" y="18" width="14" height="37" fill="#fff" /><rect x="58" y="6" width="14" height="49" fill="#0B1F4B" /></svg>,
  card: <svg width="80" viewBox="0 0 80 60"><rect x="8" y="12" width="64" height="38" rx="8" fill="none" stroke="#fff" strokeWidth="5" /><path d="M8 26H72" stroke="#7FB0FF" strokeWidth="6" /></svg>,
}

const items = [
  { title: 'How the 50/30/20 rule works', text: 'A simple way to split your salary.', bg: 'var(--navy)', art: art.line },
  { title: 'Emergency funds: how much is enough?', text: 'Aim for three to six months.', bg: 'var(--navy2)', art: art.ring },
  { title: 'Index funds for first-time investors', text: 'Low cost, broad exposure.', bg: '#8A93A6', art: art.bars },
  { title: 'Credit card habits that save money', text: 'Small changes, big savings.', bg: 'var(--navy)', art: art.card },
]

export default function News() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  const goTo = (x) => {
    const el = ref.current
    const card = el.children[Math.max(0, Math.min(items.length - 1, x))]
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }
  const onScroll = () => {
    const el = ref.current
    let best = 0, min = Infinity
    ;[...el.children].forEach((c, j) => {
      const d = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft)
      if (d < min) { min = d; best = j }
    })
    setActive(best)
  }

  return (
    <section className="light" id="news">
      <div className="wrap">
        <div className="nhead">
          <div>
            <h2>Get great insights</h2>
            <p className="muted" style={{ marginTop: 8 }}>Short reads on money, markets and habits.</p>
          </div>
          <div className="ctrl" style={{ margin: 0 }}>
            <button className="ar" onClick={() => goTo(active - 1)} aria-label="Previous news">‹</button>
            <div className="dots">
              {items.map((it, k) => (
                <button key={it.title} className={'dot' + (k === active ? ' on' : '')} onClick={() => goTo(k)} aria-label={'News ' + (k + 1)} />
              ))}
            </div>
            <button className="ar" onClick={() => goTo(active + 1)} aria-label="Next news">›</button>
          </div>
        </div>
        <div className="nt" ref={ref} onScroll={onScroll}>
          {items.map((it) => (
            <article className="nc" key={it.title} style={{ background: 'var(--gray)' }}>
              <div className="img" style={{ background: it.bg }}>{it.art}</div>
              <div className="b">
                <h3>{it.title}</h3>
                <p className="muted">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
