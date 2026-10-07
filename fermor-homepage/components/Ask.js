'use client'
import { useRef, useState, useEffect } from 'react'

const faqs = [
  { q: "Can I get a car?", a: "It depends on your numbers. A common guide is to keep the total monthly cost of a car (EMI, fuel and insurance) under about 15% of your take-home pay, with roughly 20% paid upfront. Share your income and spending and Fermor shows what fits." },
  { q: "How much should I save each month?", a: "A good start is 20% of your income, split between an emergency fund and your goals. If that feels like too much, begin with 5% and raise it every few months." },
  { q: "Is it too early for me to start investing?", a: "Not if you already have a small emergency fund. You can start a monthly SIP from ₹500 and increase it as your income grows." },
  { q: "How do I pay off debt faster?", a: "List your debts by interest rate. Pay the minimum on all of them and put every extra rupee towards the highest-rate one first." },
]
const fallback = "Good question. Get started and Fermor will look at your income, spending and goals to answer it properly."

export default function Ask() {
  const [msgs, setMsgs] = useState([{ from: 'bot', text: "Hi, I'm Fermor. Pick a question below or type your own." }])
  const [value, setValue] = useState('')
  const chat = useRef(null)

  useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight
  }, [msgs])

  const pick = (f) => setMsgs((m) => [...m, { from: 'me', text: f.q }, { from: 'bot', text: f.a }])
  const submit = (e) => {
    e.preventDefault()
    const v = value.trim()
    if (!v) return
    setMsgs((m) => [...m, { from: 'me', text: v }, { from: 'bot', text: fallback, link: true }])
    setValue('')
  }

  return (
    <section className="mid ask" id="ask">
      <div className="wrap">
        <div>
          <h2>Think you're lost and don't know where to start?<span>We've got your back.</span></h2>
          <p className="lead muted">Ask a real money question and get a plain answer, with no jargon.</p>
        </div>
        <div className="askbox">
          <h3>Ask me anything</h3>
          <div className="chat" ref={chat} aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={'msg ' + (m.from === 'me' ? 'me' : 'bot')}>
                {m.text}{m.link && <> <a href="#start">Get started</a></>}
              </div>
            ))}
          </div>
          <form className="askform" onSubmit={submit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type your question" aria-label="Ask me anything" autoComplete="off" />
            <button type="submit">Ask</button>
          </form>
          <ul className="sugg">
            {faqs.map((f) => (
              <li key={f.q}>
                <button type="button" onClick={() => pick(f)}><span>{f.q}</span><span aria-hidden="true">›</span></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
