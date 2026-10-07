import Slider from './Slider'

const slides = [
  { title: 'Track your spending', text: 'See every rupee by category, automatically. Spot where your money goes before the month ends.',
    src: '/images/track-cashflow.webp', w: 688, h: 686, alt: 'Monthly cash flow card showing income, spending and potential savings' },
  { title: 'Make a personal plan to grow', text: 'Answer a few questions and get a plan that fits your income, habits and timeline.',
    src: '/images/plan-networth.webp', w: 687, h: 688, alt: 'Net worth card with growth chart and spending, investments and savings totals' },
  { title: 'Set goals', text: 'Save for a laptop, a trip or an emergency fund. Fermor shows how close you are and what to put aside.',
    src: '/images/goals.webp', w: 471, h: 787, alt: 'Goals card showing home, Europe trip and investment portfolio progress' },
]

export default function WhatWeDo() {
  return (
    <section className="light" id="what">
      <div className="wrap">
        <h2>What we do</h2>
        <p className="muted" style={{ marginTop: 12 }}>Three simple tools to take charge of your money.</p>
        <Slider slides={slides} label="What we do slides" />
      </div>
    </section>
  )
}
