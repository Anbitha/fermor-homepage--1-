'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Is Fermor free to use?', a: 'Tracking, goals and forecasting are free. Investments may carry small fund fees, which we show before you confirm.' },
  { q: 'Is my financial data safe?', a: 'Your data is encrypted in transit and at rest, and we never sell it to third parties.' },
  { q: 'Do I need money to start investing?', a: 'No. You can begin with a small amount and increase it whenever you like.' },
  { q: 'Can I link my bank accounts?', a: 'Yes. Link your accounts securely and Fermor categorises your spending automatically.' },
]

export default function Faq() {
  const [open, setOpen] = useState(null)
  return (
    <section className="soft" id="faq">
      <div className="wrap">
        <h2 style={{ textAlign: 'center' }}>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f, k) => (
            <div className={'q' + (open === k ? ' open' : '')} key={f.q}>
              <button aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
                {f.q}<span className="pl">+</span>
              </button>
              <div className="a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
