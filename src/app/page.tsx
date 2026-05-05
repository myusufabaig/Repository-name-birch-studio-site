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

            <a href="#brand" className="hover:text-[#2F3D2C] transition">
              Brand
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
              DESIGN-LED • FAST BUILD • LEAD-FOCUSED
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 tracking-tight">
              Premium websites
              <br />
              for more leads.
            </h1>

            <p className="text-lg text-[#1F241C]/65 mb-10 max-w-xl leading-relaxed">
              Birch Studio designs clean, modern websites that make your
              business look more trustworthy and make it easier for customers to
              reach out.
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
                  LEAD READY
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
                  Make the business look established online.
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Clear service explanation
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Help visitors understand what you offer fast.
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold mb-2">
                  Lead-ready contact flow
                </p>
                <p className="text-sm text-[#1F241C]/55">
                  Send quote requests directly to your inbox.
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
              Give your business a better first impression.
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

      {/* BRAND */}
      <section id="brand" className="py-28 px-6 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 animate-fade-up">
            <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
              Brand Showcase
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              Make your business easier to trust.
            </h2>

            <p className="text-lg text-[#1F241C]/60 max-w-2xl mt-6 leading-relaxed">
              We create a clean online home for your brand — a place to show
              your services, tell your story, build credibility, and make it
              easy for customers to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
            {/* LEFT COPY */}
            <div className="rounded-[2.5rem] border border-[#E2D2B8]/50 bg-[#FFFDF8] p-8 md:p-10 shadow-[0_20px_60px_rgba(47,61,44,0.06)] animate-fade-up-delay-1 transition duration-500 hover:shadow-2xl">
              <div className="grid gap-4 mb-8">
                <div className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3">
                    Show the brand
                  </p>

                  <p className="text-sm text-[#1F241C]/70 leading-relaxed">
                    Give visitors a clear first impression of who you are and
                    what makes the business credible.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3">
                    Explain the offer
                  </p>

                  <p className="text-sm text-[#1F241C]/70 leading-relaxed">
                    Make your services easy to understand without making people
                    dig for answers.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3">
                    Guide the next step
                  </p>

                  <p className="text-sm text-[#1F241C]/70 leading-relaxed">
                    Give visitors a clear path to call, book, request a quote,
                    or send a message.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3">
                    Support growth
                  </p>

                  <p className="text-sm text-[#1F241C]/70 leading-relaxed">
                    Build a site that can be updated as the business grows.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-6 transition duration-300 hover:shadow-lg">
                <p className="text-sm tracking-[0.25em] uppercase text-[#7A5C3E]/60 mb-4">
                  Why it matters
                </p>

                <p className="text-[#1F241C]/65 leading-relaxed mb-6">
                  Most customers check a business online before they ever call,
                  book, or ask for a quote. A better website helps your business
                  feel more real, more trustworthy, and easier to choose.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-[1.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-semibold mb-2">
                      Look established
                    </p>

                    <p className="text-sm text-[#1F241C]/60 leading-relaxed">
                      Give visitors confidence that your business is active,
                      serious, and professional.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-semibold mb-2">
                      Build trust faster
                    </p>

                    <p className="text-sm text-[#1F241C]/60 leading-relaxed">
                      Show your services, story, work, and contact path without
                      making people search.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-semibold mb-2">
                      Get more inquiries
                    </p>

                    <p className="text-sm text-[#1F241C]/60 leading-relaxed">
                      Make it easier for customers to call, book, request a
                      quote, or send a message.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT BRAND MOCKUP */}
            <div className="rounded-[2.5rem] bg-[#EDE6D8] border border-[#E2D2B8]/60 p-5 md:p-6 shadow-[0_20px_60px_rgba(47,61,44,0.08)] animate-fade-up-delay-2 transition duration-500 hover:shadow-2xl">
              <div className="rounded-[2rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-5 md:p-6 h-full premium-shimmer">
                <div className="flex items-center justify-between border-b border-[#E2D2B8]/50 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#D8C5A4]" />
                    <span className="w-3 h-3 rounded-full bg-[#B9A98C]" />
                    <span className="w-3 h-3 rounded-full bg-[#8D9A82]" />
                  </div>

                  <p className="text-xs tracking-[0.2em] uppercase text-[#7A5C3E]/55">
                    Brand Preview
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2D2B8]/50 bg-[#FBF8F2]">
                    <div className="text-sm font-semibold text-[#1F241C]">
                      Your Brand Here
                    </div>

                    <div className="hidden sm:flex gap-4 text-xs text-[#1F241C]/55">
                      <span>Services</span>
                      <span>Story</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="rounded-[1.5rem] bg-[#7D8D71] h-52 mb-5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

                      <div className="absolute left-5 top-5 max-w-[220px]">
                        <div className="h-3 w-24 rounded-full bg-white/45 mb-4" />
                        <div className="h-5 w-40 rounded-full bg-white/80 mb-3" />
                        <div className="h-5 w-32 rounded-full bg-white/65 mb-6" />
                        <div className="h-9 w-28 rounded-full bg-[#F7F4ED]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4 transition duration-300 hover:-translate-y-1">
                        <div className="h-3 w-14 rounded-full bg-[#E2D2B8] mb-3" />
                        <div className="h-8 w-10 rounded-full bg-[#F0E7D6]" />
                      </div>

                      <div className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4 transition duration-300 hover:-translate-y-1">
                        <div className="h-3 w-16 rounded-full bg-[#E2D2B8] mb-3" />
                        <div className="h-8 w-12 rounded-full bg-[#F0E7D6]" />
                      </div>

                      <div className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4 transition duration-300 hover:-translate-y-1">
                        <div className="h-3 w-12 rounded-full bg-[#E2D2B8] mb-3" />
                        <div className="h-8 w-9 rounded-full bg-[#F0E7D6]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                      <div className="col-span-3 rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4">
                        <div className="h-4 w-28 rounded-full bg-[#DCCBB0] mb-4" />

                        <div className="space-y-3">
                          <div className="h-3 rounded-full bg-[#EFE5D3] w-full" />
                          <div className="h-3 rounded-full bg-[#EFE5D3] w-5/6" />
                          <div className="h-3 rounded-full bg-[#EFE5D3] w-4/6" />
                        </div>
                      </div>

                      <div className="col-span-2 rounded-2xl bg-[#2F3D2C] p-4 flex flex-col justify-between transition duration-300 hover:scale-[1.02]">
                        <div>
                          <div className="h-3 w-16 rounded-full bg-white/30 mb-3" />
                          <div className="h-7 w-20 rounded-full bg-white/85 mb-2" />
                          <div className="h-3 w-full rounded-full bg-white/25" />
                        </div>

                        <div className="h-10 rounded-full bg-[#F7F4ED] mt-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-[#2F3D2C] p-6 text-white">
                  <p className="text-xs tracking-[0.22em] uppercase text-white/45 mb-3">
                    What the buyer gets
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
                    <div className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
                      Stronger first impression
                    </div>

                    <div className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
                      Clear service explanation
                    </div>

                    <div className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
                      Better mobile experience
                    </div>

                    <div className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
                      Real lead capture path
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center animate-fade-up-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2F3D2C] px-8 py-4 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#1F241C] hover:shadow-xl"
            >
              Build A Better Website
            </a>
          </div>
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

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-16 animate-fade-up">
          <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Simple packages.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">
              Starter
            </h3>

            <p className="text-4xl font-semibold mb-4">
              $500
            </p>

            <p className="text-[#1F241C]/60 mb-6 leading-relaxed">
              A clean one-page site for a simple business presence.
            </p>

            <ul className="space-y-2 text-sm text-[#1F241C]/60 mb-8">
              <li>• One-page website</li>
              <li>• Mobile responsive</li>
              <li>• Basic contact section</li>
            </ul>

            <a
              href="#contact"
              className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2D2B8]/30"
            >
              Start
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-1">
            <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
              MOST POPULAR
            </p>

            <h3 className="text-xl font-semibold mb-4">
              Business
            </h3>

            <p className="text-4xl font-semibold mb-4">
              $1,500
            </p>

            <p className="text-white/65 mb-6 leading-relaxed">
              A custom website built to show the brand and capture leads.
            </p>

            <ul className="space-y-2 text-sm text-white/70 mb-8">
              <li>• Multi-section site</li>
              <li>• Custom design direction</li>
              <li>• SEO-ready structure</li>
              <li>• Launch support</li>
            </ul>

            <a
              href="#contact"
              className="bg-[#F7F4ED] text-[#2F3D2C] px-6 py-3 rounded-full w-full block text-center transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Start
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up-delay-2">
            <h3 className="text-xl font-semibold mb-4">
              Premium
            </h3>

            <p className="text-4xl font-semibold mb-4">
              $3,000+
            </p>

            <p className="text-[#1F241C]/60 mb-6 leading-relaxed">
              A deeper build with stronger content and custom direction.
            </p>

            <ul className="space-y-2 text-sm text-[#1F241C]/60 mb-8">
              <li>• Custom features</li>
              <li>• Branding refinement</li>
              <li>• Priority delivery</li>
              <li>• Ongoing support</li>
            </ul>

            <a
              href="#contact"
              className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2D2B8]/30"
            >
              Start
            </a>
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

            <p className="text-white/65 max-w-lg leading-relaxed">
              We’ll respond with next steps and help you decide the right build
              for your business.
            </p>
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
              href="#brand"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Brand
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