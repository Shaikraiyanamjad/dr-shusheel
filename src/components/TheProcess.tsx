'use client';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'Meet Dr. Susheel for a no-obligation assessment. We analyse your smile goals and discuss the right treatment approach.',
  },
  {
    number: '02',
    title: '3D Smile Scan',
    desc: 'Using advanced iTero scanning technology, we create a precise 3D model of your teeth to design your custom aligner plan.',
  },
  {
    number: '03',
    title: 'Custom Aligners',
    desc: 'Your series of precision-crafted aligners arrive, each one gently guiding your teeth towards their ideal position.',
  },
  {
    number: '04',
    title: 'Reveal Your Smile',
    desc: 'Watch your transformation unfold. We guide you through every stage until your smile is exactly as you envisioned.',
  },
];

export default function TheProcess() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: '#EAF7F3' }}>
      <div className="max-w-7xl mx-auto">

        {/* HEADER (inline replacement for SectionHeader) */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6DBFAA]">
            The Process
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#101828]">
            Your Invisalign Journey
          </h2>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Four thoughtful steps from consultation to your new smile — transparent, precise, and centred around your comfort.
          </p>
        </div>

        {/* CONNECTING LINE */}
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#6DBFAA]/40" />

          {/* STEPS */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center animate-fadeUp"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* NUMBER */}
                <div className="relative mb-6 flex items-center justify-center w-[72px] h-[72px]">
                  <span
                    className="absolute font-bold select-none"
                    style={{
                      fontSize: '60px',
                      color: '#C5E8E0',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>

                  <span
                    className="relative z-10 font-medium"
                    style={{ fontSize: '14px', color: '#6DBFAA' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <p
                  className="font-medium mb-3"
                  style={{ fontSize: '16px', color: '#1A2331' }}
                >
                  {step.title}
                </p>

                {/* DESCRIPTION */}
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: '13px',
                    color: '#6B7B8D',
                    lineHeight: '1.8',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SIMPLE SSR-SAFE ANIMATION */}
      <style jsx>{`
        .animate-fadeUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.7s ease-out forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}