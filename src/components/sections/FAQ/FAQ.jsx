
import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is Mavian ProMiller?",
    a: "Mavian ProMiller is a next-generation milling system designed to improve efficiency, reduce energy consumption, and modernize flour mills using automation."
  },
  {
    q: "How does it improve production?",
    a: "It increases production output by 30–45% using optimized grinding, automation, and smart monitoring systems."
  },
  {
    q: "Is upfront investment required?",
    a: "No heavy upfront cost is required. The model is performance-based and aligned with business growth."
  },
  {
    q: "Do you provide support?",
    a: "Yes, full maintenance, monitoring, and long-term operational support is included."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-page">

      {/* HERO */}
      <div className="faq-hero">

        <div className="faq-hero-content">

          {/* <span className="faq-pill">SUPPORT CENTER</span> */}

          <h1>
            Frequently Asked
            Questions
          </h1>

          <p>
            Everything you need to know about Mavian ProMiller,
            technology, pricing model and performance.
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="faq-body">
        <div className="faq-content">

          {faqs.map((item, index) => {

            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`faq-card ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(isOpen ? null : index)}
              >

                <div className="faq-q">

                  <span>{item.q}</span>

                  <span className="icon">
                    {isOpen ? "−" : "+"}
                  </span>

                </div>

                <div className="faq-a">
                  <p>{item.a}</p>
                </div>

              </div>
            );

          })}

        </div>

      </div>

      
    </section>
  );
}