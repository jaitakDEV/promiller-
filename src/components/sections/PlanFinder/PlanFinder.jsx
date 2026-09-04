import React, { useMemo, useState } from "react";
import "./PlanFinder.css";

const QUESTIONS = [
  {
    key: "capacity",
    question: "What's your mill's daily capacity?",
    color: "#f5841f",
    options: [
      {
        value: "starter",
        label: "Under 40 TPD",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#f5841f" strokeWidth="2">
            <rect x="4" y="10" width="4" height="10" />
            <rect x="10" y="6" width="4" height="14" />
            <rect x="16" y="13" width="4" height="7" />
          </svg>
        ),
      },
      {
        value: "growth",
        label: "40–150 TPD",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#f5841f" strokeWidth="2">
            <rect x="4" y="10" width="4" height="10" />
            <rect x="10" y="6" width="4" height="14" />
            <rect x="16" y="3" width="4" height="17" />
          </svg>
        ),
      },
      {
        value: "enterprise",
        label: "150+ TPD, or multiple mills",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#f5841f" strokeWidth="2">
            <path d="M4 20V10M10 20V4M16 20v-9M20 20V7" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    key: "worry",
    question: "What worries you most right now?",
    color: "#7c3aed",
    options: [
      {
        value: "starter",
        label: "High, unpredictable power bills",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
            <path
              d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        value: "growth",
        label: "Unplanned breakdowns eating output",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        value: "enterprise",
        label: "No single view across all my units",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        ),
      },
    ],
  },
  {
    key: "count",
    question: "How many mills do you currently run?",
    color: "#0f9d74",
    options: [
      {
        value: "starter",
        label: "Just one",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#0f9d74" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="3" />
          </svg>
        ),
      },
      {
        value: "growth",
        label: "2–5 mills",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#0f9d74" strokeWidth="2">
            <rect x="3" y="4" width="8" height="8" rx="2" />
            <rect x="13" y="4" width="8" height="8" rx="2" />
          </svg>
        ),
      },
      {
        value: "enterprise",
        label: "6 or more",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="#0f9d74" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        ),
      },
    ],
  },
];

const RESULTS = {
  starter: {
    name: "Starter",
    desc: "A lean ProMiller setup sized for a single small mill — live monitoring and energy tracking, without the extra complexity.",
  },
  growth: {
    name: "Growth",
    desc: "The complete WonderMill + ProMiller system, installed at our cost — you share savings during payback.",
  },
  enterprise: {
    name: "Enterprise",
    desc: "A multi-mill command centre with one unified dashboard, priority support and rollout tailored to every unit you run.",
  },
};

const TOTAL_STEPS = QUESTIONS.length;
const TIER_ORDER = ["starter", "growth", "enterprise"];

export default function PlanFinder() {
  const [step, setStep] = useState(1); // 1..TOTAL_STEPS, then "result"
  const [answers, setAnswers] = useState({});

  const isResult = step === "result";

  const progressPercent = isResult
    ? 100
    : ((step - 1) / TOTAL_STEPS) * 100 + 100 / TOTAL_STEPS / 2;

  const result = useMemo(() => {
    const tally = { starter: 0, growth: 0, enterprise: 0 };
    Object.values(answers).forEach((val) => {
      if (tally[val] !== undefined) tally[val] += 1;
    });
    let best = "growth";
    let bestScore = -1;
    TIER_ORDER.forEach((tier) => {
      if (tally[tier] > bestScore) {
        bestScore = tally[tier];
        best = tier;
      }
    });
    return RESULTS[best];
  }, [answers]);

  function selectOption(questionKey, value) {
    const nextAnswers = { ...answers, [questionKey]: value };
    setAnswers(nextAnswers);

    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      setStep("result");
    }
  }

  function goBack() {
    if (isResult) {
      setStep(TOTAL_STEPS);
    } else if (step > 1) {
      setStep(step - 1);
    }
  }

  function retake() {
    setAnswers({});
    setStep(1);
  }

  const showBack = isResult || step > 1;

  return (
    <section id="plan-finder">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Not Sure Where To Start?</div>
          <h2>
            Find Your <span className="grad">ProMiller Fit</span> In 30 Seconds
          </h2>
          <p>
            Answer three quick questions and we'll point you to the right plan
            for your mill.
          </p>
        </div>

        <div className="quiz-card">
          {!isResult && (
            <div className="quiz-progress-row">
              <span className="quiz-progress-step">
                Question {step} of {TOTAL_STEPS}
              </span>
              <div className="quiz-progress-track">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          {!isResult &&
            QUESTIONS.map((q, idx) => {
              const stepNumber = idx + 1;
              if (stepNumber !== step) return null;
              return (
                <div className="quiz-step active" key={q.key}>
                  <div className="quiz-question">{q.question}</div>
                  <div className="quiz-options">
                    {q.options.map((opt) => (
                      <div
                        className={`quiz-option${
                          answers[q.key] === opt.value ? " selected" : ""
                        }`}
                        key={opt.value}
                        role="button"
                        tabIndex={0}
                        onClick={() => selectOption(q.key, opt.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            selectOption(q.key, opt.value);
                          }
                        }}
                      >
                        <div className="quiz-option-icon">{opt.icon}</div>
                        <div className="quiz-option-text">{opt.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

          {isResult && (
            <div className="quiz-step active" id="quizResultStep">
              <div className="quiz-result">
                <div className="quiz-result-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="quiz-result-tag">Recommended For You</div>
                <div className="quiz-result-name">{result.name}</div>
                <div className="quiz-result-desc">{result.desc}</div>
                <div className="quiz-result-actions">
                  {/* <a href="#pricing" className="btn-gradient">
                    See Full Plan Details →
                  </a> */}
                  <span className="quiz-back-link" onClick={retake}>
                    Retake the quiz
                  </span>
                </div>
              </div>
            </div>
          )}

          {showBack && (
            <div className="quiz-back" onClick={goBack}>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
