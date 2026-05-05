export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#1F241C]">
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatSlow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes softShimmer {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            35% {
              opacity: 0.18;
            }
            100% {
              transform: translateX(120%);
              opacity: 0;
            }
          }

          @keyframes slowPulse {
            0%, 100% {
              opacity: 0.35;
              transform: scale(1);
            }
            50% {
              opacity: 0.55;
              transform: scale(1.04);
            }
          }

          .animate-fade-up {
            animation: fadeUp 0.8s ease-out both;
          }

          .animate-fade-up-delay-1 {
            animation: fadeUp 0.8s ease-out 0.12s both;
          }

          .animate-fade-up-delay-2 {
            animation: fadeUp 0.8s ease-out 0.24s both;
          }

          .animate-fade-up-delay-3 {
            animation: fadeUp 0.8s ease-out 0.36s both;
          }

          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }

          .animate-soft-pulse {
            animation: slowPulse 8s ease-in-out infinite;
          }

          .premium-shimmer {
            position: relative;
            overflow: hidden;
          }

          .premium-shimmer::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 45%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.38),
              transparent
            );
            transform: translateX(-120%);
            animation: softShimmer 6.5s ease-in-out infinite;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-fade-up,
            .animate-fade-up-delay-1,
            .animate-fade-up-delay-2,
            .animate-fade-up-delay-3,
            .animate-float-slow,
            .animate-soft-pulse,
            .premium-shimmer::after {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E2D2B8]/40 bg-[#F7F4ED]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
          <a
            href="#top"
            className="flex items-center gap-3 transition duration-300 hover:scale-[1.02]"
          >
            <img
              src="/birch-logo.png"
              alt="Birch Studio logo"
              className="h-12 w-8 object-contain transition duration-300 hover:rotate-[2deg]"
            />

            <span className="text-2xl md:text-3xl font-semibold tracking-tight">
              Birch Studio
            </span>
          </a>

          <div className="hidden md:flex gap-10 text-sm text-[#1F241C]/60">
            <a href="#services" className="hover:text-[#2F3D2C] transition">
              Services
            </a>

            <a href="#pricing" className="hover:text-[#2F3D2C] transition">
              Pricing
            </a>

            <a href="#contact" className="hover:text-[#2F3D2C] transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-[#2F3D2C] text-white px-5 py-2 rounded-full text-sm transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1F241C] hover:shadow-lg"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-[-240px] right-[-220px] w-[620px] h-[620px] rounded-full bg-[#E2D2B8]/35 blur-[120px] animate-soft-pulse" />
        <div className="absolute bottom-[-260px] left-[-220px] w-[560px] h-[560px] rounded-full bg-[#6F7F63]/10 blur-[120px] animate-soft-pulse" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <div className="animate-fade-up">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#E2D2B8]/35 text-xs tracking-[0.25em] text-[#7A5C3E]">
              DESIGN-LED • BRAND-FIRST • BUILT FAST
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 tracking-tight">
              Premium websites
              <br />
              that elevate your brand.
            </h1>

            <p className="text-lg text-[#1F241C]/65 mb-10 max-w-xl leading-relaxed">
              Birch Studio designs clean, modern websites that make your
              business look more credible, feel more established, and give
              customers a clear path to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#2F3D2C] text-white px-8 py-4 rounded-full text-sm text-center transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1F241C] hover:shadow-xl"
              >
                Start My Project
              </a>

              <a
                href="#pricing"
                className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-8 py-4 rounded-full text-sm text-center transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2D2B8]/30"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <div className="rounded-[2rem] bg-[#E2D2B8]/35 p-5 shadow-xl transition duration-500 hover:scale-[1.02] animate-float-slow animate-fade-up-delay-1">
            <div className="rounded-[1.5rem] bg-[#FFFDF8] p-6 min-h-[420px] border border-[#E2D2B8]/50 premium-shimmer">
              <div className="flex justify-between items-center border-b border-[#E2D2B8]/40 pb-4 mb-8">
                <div className="font-semibold text-[#2F3D2C]">
                  Brand Website Preview
                </div>

                <div className="text-xs text-[#7A5C3E]/70">
                  READY TO LAUNCH
                </div>
              </div>

              <div className="h-40 rounded-2xl bg-[#6F7F63] mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]" />

                <div className="absolute left-5 top-5">
                  <div className="h-3 w-24 rounded-full bg-white/40 mb-4" />
                  <div className="h-5 w-44 rounded-full bg-white/80 mb-3" />
                  <div className="h-5 w-32 rounded-full bg-white/60 mb-6" />
                  <div className="h-9 w-28 rounded-full bg-[#F7F4ED]" />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="h-4 rounded-full bg-[#E2D2B8] w-3/4" />
                <div className="h-4 rounded-full bg-[#E2D2B8]/60 w-full" />
                <div className="h-4 rounded-full bg-[#E2D2B8]/60 w-5/6" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 transition duration-300 hover:bg-[#E2D2B8]/20" />
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 transition duration-300 hover:bg-[#E2D2B8]/20" />
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 transition duration-300 hover:bg-[#E2D2B8]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VALUE */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-[#E2D2B8]/60 bg-[#FFFDF8] p-6 md:p-8 animate-fade-up-delay-2 transition duration-500 hover:shadow-xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Polished brand presence
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Make the business feel established online.
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Clear service explanation
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Help visitors understand your offer fast.
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Contact-ready flow
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Make it simple for customers to reach out.
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Mobile-ready build
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Built for the way customers browse now.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="bg-[#2F3D2C] text-white px-7 py-4 rounded-full text-sm text-center transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1F241C] hover:shadow-xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto mb-16 animate-fade-up">
          <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
            What we build.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up">
            <p className="text-sm text-[#7A5C3E]/60 mb-10">01</p>

            <h3 className="text-2xl font-semibold mb-4">
              Brand Websites
            </h3>

            <p className="text-[#1F241C]/60 leading-relaxed">
              A clean digital home for your services, story, credibility, and
              contact path.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-1">
            <p className="text-sm text-white/40 mb-10">02</p>

            <h3 className="text-2xl font-semibold mb-4">
              Fast Launches
            </h3>

            <p className="text-white/65 leading-relaxed">
              AI-assisted development helps move faster without losing design
              quality or structure.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-2">
            <p className="text-sm text-[#7A5C3E]/60 mb-10">03</p>

            <h3 className="text-2xl font-semibold mb-4">
              Ongoing Support
            </h3>

            <p className="text-[#1F241C]/60 leading-relaxed">
              Edits, fixes, new sections, and improvements after launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BREAK */}
      <section className="py-16 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#2F3D2C] text-white p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center animate-fade-up premium-shimmer">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-white/45 mb-3">
              Ready when you are
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Give your brand a better first impression.
            </h2>
          </div>

          <a
            href="#contact"
            className="bg-[#F7F4ED] text-[#2F3D2C] px-8 py-4 rounded-full text-sm text-center transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white"
          >
            Start My Project
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
              Process
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              How it works.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2 animate-fade-up">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">
                01 / Strategy
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Clarify the offer
              </h3>

              <p className="text-[#1F241C]/60 leading-relaxed">
                We define what your business needs to communicate and what
                action the website should drive.
              </p>
            </div>

            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2 animate-fade-up-delay-1">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">
                02 / Build
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Design with taste
              </h3>

              <p className="text-[#1F241C]/60 leading-relaxed">
                We build a clean, mobile-ready site that makes the business feel
                more credible.
              </p>
            </div>

            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2 animate-fade-up-delay-2">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">
                03 / Launch
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Go live and improve
              </h3>

              <p className="text-[#1F241C]/60 leading-relaxed">
                We launch the site, connect the lead flow, and support future
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP / WHAT'S INCLUDED */}
      <section className="py-28 px-6 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-[2.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/40 shadow-[0_10px_30px_rgba(31,36,28,0.06)] p-10 md:p-12 h-full min-h-[620px] flex flex-col animate-fade-up transition duration-500 hover:shadow-xl">
            <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-8 uppercase">
              Who We Help
            </p>

            <div className="h-px w-full bg-[#E2D2B8]/60 mb-8" />

            <h2 className="text-[42px] md:text-[52px] xl:text-[58px] leading-[0.95] tracking-tight font-semibold mb-8">
              Built for growing businesses.
            </h2>

            <p className="text-[#1F241C]/60 text-lg leading-9 max-w-2xl mb-10">
              Birch Studio is built for local service businesses, coaches,
              contractors, real estate teams, home service companies, and
              founders who need to look more credible online.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-auto">
              <div className="rounded-[1.25rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] px-5 py-5 text-[#1F241C]/70 text-lg transition duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#FFFDF8]">
                Coaches and consultants
              </div>

              <div className="rounded-[1.25rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] px-5 py-5 text-[#1F241C]/70 text-lg transition duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#FFFDF8]">
                Contractors and trades
              </div>

              <div className="rounded-[1.25rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] px-5 py-5 text-[#1F241C]/70 text-lg transition duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#FFFDF8]">
                Local service businesses
              </div>

              <div className="rounded-[1.25rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] px-5 py-5 text-[#1F241C]/70 text-lg transition duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#FFFDF8]">
                Founders and small brands
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#31442C] to-[#243422] text-white p-10 md:p-12 h-full min-h-[620px] flex flex-col animate-fade-up-delay-1 transition duration-500 hover:shadow-xl">
            <p className="text-sm tracking-[0.3em] text-white/55 mb-8 uppercase">
              What’s Included
            </p>

            <div className="h-px w-full bg-white/15 mb-8" />

            <h2 className="text-[42px] md:text-[52px] xl:text-[58px] leading-[0.95] tracking-tight font-semibold mb-8 text-white">
              Everything needed to launch.
            </h2>

            <p className="text-white/75 text-lg leading-9 max-w-2xl mb-10">
              Every build is designed to give your business a stronger first
              impression, a clearer offer, and a working path for customer
              inquiries.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-auto">
              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Custom homepage
              </div>

              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Mobile responsive design
              </div>

              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Contact form to inbox
              </div>

              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Basic SEO setup
              </div>

              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Launch support
              </div>

              <div className="rounded-[1.25rem] bg-white/10 border border-white/5 px-5 py-5 text-white/90 text-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Post-launch edits available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto mb-20 animate-fade-up">
          <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Simple packages.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 h-full flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up">
            <p className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 mb-8 uppercase">
              Best for simple launches
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Starter
            </h3>

            <p className="text-5xl font-semibold mb-6">
              $500
            </p>

            <div className="h-px w-full bg-[#E2D2B8]/60 mb-6" />

            <p className="text-[#1F241C]/60 mb-8 leading-8">
              A clean one-page site for a simple business presence.
            </p>

            <ul className="space-y-3 text-[#1F241C]/60 mb-10">
              <li>• One-page website</li>
              <li>• Mobile responsive</li>
              <li>• Basic contact section</li>
            </ul>

            <div className="mt-auto">
              <a
                href="#contact"
                className="w-full block border border-[#CDB99A] text-[#7A5C3E] px-6 py-4 rounded-full text-lg text-center transition hover:bg-[#EDE4D5]"
              >
                Start Project
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-r from-[#31442C] to-[#243422] text-white p-8 h-full flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-1">
            <p className="text-sm tracking-[0.25em] text-white/60 mb-6 uppercase">
              Most popular
            </p>

            <p className="text-sm tracking-[0.25em] text-white/60 mb-8 uppercase">
              Best for service businesses
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Business
            </h3>

            <p className="text-5xl font-semibold mb-6">
              $1,500
            </p>

            <div className="h-px w-full bg-white/15 mb-6" />

            <p className="text-white/75 mb-8 leading-8">
              A custom website built to show the brand and capture leads.
            </p>

            <ul className="space-y-3 text-white/85 mb-10">
              <li>• Multi-section site</li>
              <li>• Custom design direction</li>
              <li>• SEO-ready structure</li>
              <li>• Launch support</li>
            </ul>

            <div className="mt-auto">
              <a
                href="#contact"
                className="w-full block bg-[#F7F4ED] text-[#2F3D2C] px-6 py-4 rounded-full text-lg text-center transition hover:bg-white"
              >
                Start Project
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 h-full flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-2">
            <p className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 mb-8 uppercase">
              Best for custom brands
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Premium
            </h3>

            <p className="text-5xl font-semibold mb-6">
              $3,000+
            </p>

            <div className="h-px w-full bg-[#E2D2B8]/60 mb-6" />

            <p className="text-[#1F241C]/60 mb-8 leading-8">
              A deeper build with stronger content and custom direction.
            </p>

            <ul className="space-y-3 text-[#1F241C]/60 mb-10">
              <li>• Custom features</li>
              <li>• Branding refinement</li>
              <li>• Priority delivery</li>
              <li>• Ongoing support</li>
            </ul>

            <div className="mt-auto">
              <a
                href="#contact"
                className="w-full block border border-[#CDB99A] text-[#7A5C3E] px-6 py-4 rounded-full text-lg text-center transition hover:bg-[#EDE4D5]"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-[#2F3D2C] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <p className="text-sm tracking-[0.3em] text-white/40 mb-4 uppercase">
              Contact
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Tell us about your project.
            </h2>

            <p className="text-white/65 max-w-lg leading-relaxed mb-8">
              We’ll respond with next steps and help you decide the right build
              for your business.
            </p>

            <div className="grid gap-3 text-sm text-white/55">
              <p>
                Based in Atlanta, GA
              </p>

              <p>
                Remote projects available
              </p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xpqbwpbr"
            method="POST"
            className="space-y-4 animate-fade-up-delay-1"
          >
            <input
              type="hidden"
              name="_next"
              value="https://repository-name-birch-studio-site.vercel.app/#contact"
            />

            <input
              name="name"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:scale-[1.01]"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:scale-[1.01]"
              placeholder="Email"
            />

            <input
              name="business"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:scale-[1.01]"
              placeholder="Business name"
            />

            <textarea
              name="message"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 h-36 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:scale-[1.01]"
              placeholder="What do you need built?"
            />

            <button
              type="submit"
              className="bg-[#E2D2B8] text-[#2F3D2C] px-6 py-4 rounded-full w-full transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#F7F4ED] hover:shadow-xl"
            >
              Start My Project
            </button>

            <p className="text-xs text-white/40 text-center">
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F241C] text-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/birch-logo.png"
                alt="Birch Studio logo"
                className="h-12 w-8 object-contain transition duration-300 hover:scale-105"
              />

              <p className="text-2xl font-semibold">
                Birch Studio
              </p>
            </div>

            <p className="text-white/50 leading-relaxed">
              Creative web development for growing businesses.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <a
              href="#services"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Services
            </a>

            <a
              href="#pricing"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Contact
            </a>
          </div>

          <p className="text-white/40 text-sm">
            © 2026 Birch Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}