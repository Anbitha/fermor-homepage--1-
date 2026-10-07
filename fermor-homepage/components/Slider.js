'use client'
import { useState } from 'react'

export default function Slider({ slides, label }) {
  const [i, setI] = useState(0)
  const n = slides.length
  const go = (x) => setI((x + n) % n)

  return (
    <>
      <div className="sl">
        <div className="track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s) => (
            <div className="slide" key={s.title}>
              <div>
                <h3>{s.title}</h3>
                {s.heading && <p><b>{s.heading}</b></p>}
                <p style={s.heading ? { marginTop: 8 } : undefined}>{s.text}</p>
              </div>
              <div className="viz">
                <img src={s.src} width={s.w} height={s.h} alt={s.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ctrl" role="group" aria-label={label}>
        <button className="ar" onClick={() => go(i - 1)} aria-label="Previous slide">‹</button>
        <div className="dots">
          {slides.map((s, k) => (
            <button key={s.title} className={'dot' + (k === i ? ' on' : '')} onClick={() => go(k)} aria-label={'Slide ' + (k + 1)} />
          ))}
        </div>
        <button className="ar" onClick={() => go(i + 1)} aria-label="Next slide">›</button>
      </div>
    </>
  )
}
