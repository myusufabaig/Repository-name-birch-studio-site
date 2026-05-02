export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#F7F4ED] text-[#1F241C]"
    >
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#E2D2B8]/40 bg-[#F7F4ED]/85 backdrop-blur-md"
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5"
        >
          <a
            href="#top"
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Birch Studio
          </a>

          <div
            className="hidden md:flex gap-10 text-sm text-[#1F241C]/60"
          >
            <a
              href="#services"
              className="hover:text-[#2F3D2C] transition"
            >
              Services
            </a>

            <a
              href="#work"
              className="hover:text-[#2F3D2C] transition"
            >
              Brand
            </a>

            <a
              href="#process"
              className="hover:text-[#2F3D2C] transition"
            >
              Process
            </a>

            <a
              href="#pricing"
              className="hover:text-[#2F3D2C] transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="hover:text-[#2F3D2C] transition"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-[#2F3D2C] text-white px-5 py-2 rounded-full text-sm transition hover:scale-105 hover:bg-[#1F241C]"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="pt-40 pb-28 px-6 relative overflow-hidden"
      >
        <div
          className="absolute top-[-240px] right-[-220px] w-[620px] h-[620px] rounded-full bg-[#E2D2B8]/35 blur-[120px]"
        />

        <div
          className="absolute bottom-[-260px] left-[-220px] w-[560px] h-[560px] rounded-full bg-[#6F7F63]/10 blur-[120px]"
        />

        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative"
        >
          <div>
            <div
              className="inline-block mb-6 px-4 py-2 rounded-full bg-[#E2D2B8]/35 text-xs tracking-[0.25em] text-[#7A5C3E]"
            >
              DESIGN-LED • BUILT FAST • MADE TO CONVERT
            </div>

            <h1
              className="text-5xl md:text-7xl font-semibold leading-tight mb-8 tracking-tight"
            >
              Websites that look premium,
              <br />
              and turn visitors into customers.
            </h1>

            <p
              className="text-lg text-[#1F241C]/65 mb-10 max-w-xl leading-relaxed"
            >
              Birch Studio builds modern websites for real businesses — clean,
              warm, mobile-ready, and structured to help visitors understand
              your brand and take the next step.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="bg-[#2F3D2C] text-white px-8 py-4 rounded-full text-sm text-center transition hover:scale-105 hover:bg-[#1F241C]"
              >
                Start My Project
              </a>

              <a
                href="#work"
                className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-8 py-4 rounded-full text-sm text-center transition hover:bg-[#E2D2B8]/30"
              >
                See The Brand Showcase
              </a>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <div
            className="rounded-[2rem] bg-[#E2D2B8]/35 p-5 shadow-xl transition duration-500 hover:scale-[1.02]"
          >
            <div
              className="rounded-[1.5rem] bg-[#FFFDF8] p-6 min-h-[420px] border border-[#E2D2B8]/50"
            >
              <div
                className="flex justify-between items-center border-b border-[#E2D2B8]/40 pb-4 mb-8"
              >
                <div
                  className="font-semibold text-[#2F3D2C]"
                >
                  Brand Website Preview
                </div>

                <div
                  className="text-xs text-[#7A5C3E]/70"
                >
                  LIVE STRUCTURE
                </div>
              </div>

              <div
                className="h-40 rounded-2xl bg-[#6F7F63] mb-6 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]"
                />

                <div
                  className="absolute left-5 top-5"
                >
                  <div
                    className="h-3 w-24 rounded-full bg-white/40 mb-4"
                  />

                  <div
                    className="h-5 w-44 rounded-full bg-white/80 mb-3"
                  />

                  <div
                    className="h-5 w-32 rounded-full bg-white/60 mb-6"
                  />

                  <div
                    className="h-9 w-28 rounded-full bg-[#F7F4ED]"
                  />
                </div>
              </div>

              <div
                className="space-y-3 mb-8"
              >
                <div
                  className="h-4 rounded-full bg-[#E2D2B8] w-3/4"
                />

                <div
                  className="h-4 rounded-full bg-[#E2D2B8]/60 w-full"
                />

                <div
                  className="h-4 rounded-full bg-[#E2D2B8]/60 w-5/6"
                />
              </div>

              <div
                className="grid grid-cols-3 gap-3"
              >
                <div
                  className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"
                />

                <div
                  className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"
                />

                <div
                  className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section
        className="px-6 pb-20"
      >
        <div
          className="max-w-7xl mx-auto rounded-full border border-[#E2D2B8]/60 bg-[#FFFDF8] px-6 py-4"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs tracking-[0.25em] uppercase text-[#7A5C3E]/70"
          >
            <p>
              Fast Builds
            </p>

            <p>
              Clean Design
            </p>

            <p>
              Mobile Ready
            </p>

            <p>
              Lead Focused
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-[#FFFDF8]"
      >
        <div
          className="max-w-7xl mx-auto mb-20"
        >
          <p
            className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase"
          >
            Services
          </p>

          <h2
            className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight"
          >
            Built for businesses that want more than a basic website.
          </h2>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <div
            className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <p
              className="text-sm text-[#7A5C3E]/60 mb-10"
            >
              01
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              Brand-First Websites
            </h3>

            <p
              className="text-[#1F241C]/60 leading-relaxed"
            >
              Custom websites built around your business, your offer, your
              visual style, and the type of customers you want to attract.
            </p>
          </div>

          <div
            className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <p
              className="text-sm text-white/40 mb-10"
            >
              02
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              AI-Assisted Speed
            </h3>

            <p
              className="text-white/65 leading-relaxed"
            >
              AI helps move production faster, while a controlled workflow keeps
              the structure, design, and final site clean.
            </p>
          </div>

          <div
            className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <p
              className="text-sm text-[#7A5C3E]/60 mb-10"
            >
              03
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              Monthly Support
            </h3>

            <p
              className="text-[#1F241C]/60 leading-relaxed"
            >
              Ongoing edits, fixes, performance improvements, new sections, and
              support after the site goes live.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND SHOWCASE */}
      <section
        id="work"
        className="py-32 px-6 bg-[#F7F4ED]"
      >
        <div
          className="max-w-7xl mx-auto"
        >
          <div
            className="mb-16"
          >
            <p
              className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase"
            >
              Brand Showcase
            </p>

            <h2
              className="text-4xl md:text-6xl font-semibold max-w-4xl leading-tight"
            >
              A website should make your business feel clearer, warmer, and
              easier to trust.
            </h2>
          </div>

          <div
            className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-stretch"
          >
            {/* LEFT SIDE */}
            <div
              className="rounded-[2.5rem] border border-[#E2D2B8]/50 bg-[#FFFDF8] p-8 md:p-10 shadow-[0_20px_60px_rgba(47,61,44,0.06)]"
            >
              <div
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                <span
                  className="inline-flex items-center rounded-full bg-[#E2D2B8]/40 px-4 py-2 text-xs tracking-[0.18em] text-[#7A5C3E] uppercase"
                >
                  Brand • Structure • Revenue
                </span>

                <span
                  className="inline-flex items-center rounded-full border border-[#DCCBB0] px-4 py-2 text-xs text-[#1F241C]/60"
                >
                  Built for real businesses
                </span>
              </div>

              <div
                className="mb-8"
              >
                <p
                  className="text-sm uppercase tracking-[0.25em] text-[#7A5C3E]/60 mb-3"
                >
                  What We Create
                </p>

                <h3
                  className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                >
                  A polished place for your brand to live online.
                </h3>

                <p
                  className="text-lg text-[#1F241C]/65 max-w-2xl leading-relaxed"
                >
                  Birch Studio creates websites that give your business a clear
                  digital home — a place to show what you do, explain your
                  offer, build trust, and guide visitors toward the next step.
                </p>
              </div>

              <div
                className="grid md:grid-cols-3 gap-4 mb-10"
              >
                <div
                  className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5"
                >
                  <p
                    className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3"
                  >
                    Showcase
                  </p>

                  <p
                    className="text-sm text-[#1F241C]/70 leading-relaxed"
                  >
                    Present your business with a cleaner visual system,
                    stronger hierarchy, and a better first impression.
                  </p>
                </div>

                <div
                  className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5"
                >
                  <p
                    className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3"
                  >
                    Clarity
                  </p>

                  <p
                    className="text-sm text-[#1F241C]/70 leading-relaxed"
                  >
                    Make it easy for visitors to understand what you do, who you
                    help, and why they should reach out.
                  </p>
                </div>

                <div
                  className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5"
                >
                  <p
                    className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3"
                  >
                    Guidance
                  </p>

                  <p
                    className="text-sm text-[#1F241C]/70 leading-relaxed"
                  >
                    Create a smoother path from interest to action through
                    better structure, calls-to-action, and contact flow.
                  </p>
                </div>
              </div>

              <div
                className="space-y-8 mb-10"
              >
                <div
                  className="border-t border-[#E2D2B8]/60 pt-6"
                >
                  <p
                    className="text-sm tracking-[0.2em] uppercase text-[#7A5C3E]/60 mb-2"
                  >
                    Your Website Should Show The Business
                  </p>

                  <p
                    className="text-[#1F241C]/70 leading-relaxed"
                  >
                    The right site gives people a place to understand your
                    services, your personality, your quality, your process, and
                    why your business is worth trusting. It should feel like the
                    best version of the company — not just a page with text on
                    it.
                  </p>
                </div>

                <div
                  className="border-t border-[#E2D2B8]/60 pt-6"
                >
                  <p
                    className="text-sm tracking-[0.2em] uppercase text-[#7A5C3E]/60 mb-2"
                  >
                    The Business Case
                  </p>

                  <p
                    className="text-[#1F241C]/70 leading-relaxed"
                  >
                    Good design is not just aesthetic. Research supports the
                    idea that speed, clarity, and user experience can influence
                    conversion, engagement, and revenue. The design makes the
                    brand easier to trust, and the structure makes the next step
                    easier to take.
                  </p>
                </div>

                <div
                  className="border-t border-[#E2D2B8]/60 pt-6"
                >
                  <p
                    className="text-sm tracking-[0.2em] uppercase text-[#7A5C3E]/60 mb-2"
                  >
                    What We Build Around
                  </p>

                  <div
                    className="grid sm:grid-cols-2 gap-3 text-sm text-[#1F241C]/70"
                  >
                    <div
                      className="rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 px-4 py-3"
                    >
                      Brand positioning and first impression
                    </div>

                    <div
                      className="rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 px-4 py-3"
                    >
                      Clear service and offer structure
                    </div>

                    <div
                      className="rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 px-4 py-3"
                    >
                      Stronger call-to-action placement
                    </div>

                    <div
                      className="rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50 px-4 py-3"
                    >
                      Contact flow with lead capture
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-6"
              >
                <p
                  className="text-sm tracking-[0.25em] uppercase text-[#7A5C3E]/60 mb-4"
                >
                  Research Support
                </p>

                <p
                  className="text-[#1F241C]/70 leading-relaxed mb-6"
                >
                  Industry research shows that better digital experiences can
                  affect performance. Google and Deloitte found that improving
                  mobile site speed by 0.1 seconds was associated with higher
                  retail conversions and higher average order value. Baymard
                  research also shows that checkout UX improvements can create
                  meaningful conversion lift for ecommerce experiences.
                </p>

                <div
                  className="grid sm:grid-cols-3 gap-4"
                >
                  <div
                    className="rounded-[1.5rem] bg-[#2F3D2C] text-white p-5"
                  >
                    <p
                      className="text-xs tracking-[0.22em] uppercase text-white/45 mb-3"
                    >
                      Speed Impact
                    </p>

                    <p
                      className="text-3xl font-semibold"
                    >
                      +8.4%
                    </p>

                    <p
                      className="text-xs text-white/50 mt-2 leading-relaxed"
                    >
                      Retail conversion lift tied to 0.1s mobile speed
                      improvement.
                    </p>
                  </div>

                  <div
                    className="rounded-[1.5rem] bg-[#E2D2B8]/35 p-5"
                  >
                    <p
                      className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3"
                    >
                      Spend Impact
                    </p>

                    <p
                      className="text-3xl font-semibold text-[#1F241C]"
                    >
                      +9.2%
                    </p>

                    <p
                      className="text-xs text-[#1F241C]/50 mt-2 leading-relaxed"
                    >
                      Retail average order value lift observed in the same
                      study.
                    </p>
                  </div>

                  <div
                    className="rounded-[1.5rem] bg-[#E2D2B8]/35 p-5"
                  >
                    <p
                      className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-3"
                    >
                      Checkout UX
                    </p>

                    <p
                      className="text-3xl font-semibold text-[#1F241C]"
                    >
                      35%
                    </p>

                    <p
                      className="text-xs text-[#1F241C]/50 mt-2 leading-relaxed"
                    >
                      Potential conversion-rate gain from checkout UX
                      improvements.
                    </p>
                  </div>
                </div>

                <p
                  className="text-xs text-[#1F241C]/45 mt-4 leading-relaxed"
                >
                  Research figures are industry benchmarks, not Birch Studio
                  client results.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="rounded-[2.5rem] bg-[#EDE6D8] border border-[#E2D2B8]/60 p-5 md:p-6 shadow-[0_20px_60px_rgba(47,61,44,0.08)]"
            >
              <div
                className="rounded-[2rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-5 md:p-6 h-full"
              >
                <div
                  className="flex items-center justify-between border-b border-[#E2D2B8]/50 pb-4 mb-6"
                >
                  <div
                    className="flex items-center gap-2"
                  >
                    <span
                      className="w-3 h-3 rounded-full bg-[#D8C5A4]"
                    />

                    <span
                      className="w-3 h-3 rounded-full bg-[#B9A98C]"
                    />

                    <span
                      className="w-3 h-3 rounded-full bg-[#8D9A82]"
                    />
                  </div>

                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#7A5C3E]/55"
                  >
                    Brand Preview
                  </p>
                </div>

                <div
                  className="rounded-[1.75rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4 border-b border-[#E2D2B8]/50 bg-[#FBF8F2]"
                  >
                    <div
                      className="text-sm font-semibold text-[#1F241C]"
                    >
                      Your Brand Here
                    </div>

                    <div
                      className="hidden sm:flex gap-4 text-xs text-[#1F241C]/55"
                    >
                      <span>
                        Services
                      </span>

                      <span>
                        Story
                      </span>

                      <span>
                        Contact
                      </span>
                    </div>
                  </div>

                  <div
                    className="p-5"
                  >
                    <div
                      className="rounded-[1.5rem] bg-[#7D8D71] h-52 mb-5 relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]"
                      />

                      <div
                        className="absolute left-5 top-5 max-w-[220px]"
                      >
                        <div
                          className="h-3 w-24 rounded-full bg-white/45 mb-4"
                        />

                        <div
                          className="h-5 w-40 rounded-full bg-white/80 mb-3"
                        />

                        <div
                          className="h-5 w-32 rounded-full bg-white/65 mb-6"
                        />

                        <div
                          className="h-9 w-28 rounded-full bg-[#F7F4ED]"
                        />
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-3 gap-3 mb-5"
                    >
                      <div
                        className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4"
                      >
                        <div
                          className="h-3 w-14 rounded-full bg-[#E2D2B8] mb-3"
                        />

                        <div
                          className="h-8 w-10 rounded-full bg-[#F0E7D6]"
                        />
                      </div>

                      <div
                        className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4"
                      >
                        <div
                          className="h-3 w-16 rounded-full bg-[#E2D2B8] mb-3"
                        />

                        <div
                          className="h-8 w-12 rounded-full bg-[#F0E7D6]"
                        />
                      </div>

                      <div
                        className="rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4"
                      >
                        <div
                          className="h-3 w-12 rounded-full bg-[#E2D2B8] mb-3"
                        />

                        <div
                          className="h-8 w-9 rounded-full bg-[#F0E7D6]"
                        />
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-5 gap-3"
                    >
                      <div
                        className="col-span-3 rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 p-4"
                      >
                        <div
                          className="h-4 w-28 rounded-full bg-[#DCCBB0] mb-4"
                        />

                        <div
                          className="space-y-3"
                        >
                          <div
                            className="h-3 rounded-full bg-[#EFE5D3] w-full"
                          />

                          <div
                            className="h-3 rounded-full bg-[#EFE5D3] w-5/6"
                          />

                          <div
                            className="h-3 rounded-full bg-[#EFE5D3] w-4/6"
                          />
                        </div>
                      </div>

                      <div
                        className="col-span-2 rounded-2xl bg-[#2F3D2C] p-4 flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className="h-3 w-16 rounded-full bg-white/30 mb-3"
                          />

                          <div
                            className="h-7 w-20 rounded-full bg-white/85 mb-2"
                          />

                          <div
                            className="h-3 w-full rounded-full bg-white/25"
                          />
                        </div>

                        <div
                          className="h-10 rounded-full bg-[#F7F4ED] mt-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="grid sm:grid-cols-2 gap-4 mt-6"
                >
                  <div
                    className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5"
                  >
                    <p
                      className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-2"
                    >
                      Brand Space
                    </p>

                    <p
                      className="text-sm text-[#1F241C]/70 leading-relaxed"
                    >
                      A place to show your logo, services, story, work, and
                      credibility without feeling crowded.
                    </p>
                  </div>

                  <div
                    className="rounded-[1.5rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5"
                  >
                    <p
                      className="text-xs tracking-[0.22em] uppercase text-[#7A5C3E]/60 mb-2"
                    >
                      Customer Path
                    </p>

                    <p
                      className="text-sm text-[#1F241C]/70 leading-relaxed"
                    >
                      A cleaner path from first impression to inquiry, quote
                      request, booking, or sale.
                    </p>
                  </div>
                </div>

                <div
                  className="mt-6 rounded-[1.5rem] bg-[#2F3D2C] p-6 text-white"
                >
                  <p
                    className="text-xs tracking-[0.22em] uppercase text-white/45 mb-3"
                  >
                    What the buyer gets
                  </p>

                  <div
                    className="grid grid-cols-2 gap-3 text-sm text-white/75"
                  >
                    <div
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      A stronger first impression
                    </div>

                    <div
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      Clear service explanation
                    </div>

                    <div
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      Better mobile experience
                    </div>

                    <div
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      A real lead capture path
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-10 flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2F3D2C] px-8 py-4 text-sm text-white transition hover:scale-[1.02] hover:bg-[#1F241C]"
            >
              Build A Brand Showcase
            </a>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section
        className="py-24 px-6 bg-[#FFFDF8]"
      >
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
        >
          <div
            className="rounded-[2rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] p-8"
          >
            <p
              className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 uppercase mb-5"
            >
              Focus
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              Built around one clear action.
            </h3>

            <p
              className="text-[#1F241C]/60 leading-relaxed"
            >
              Every page is structured around the next step you want a visitor
              to take.
            </p>
          </div>

          <div
            className="rounded-[2rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] p-8"
          >
            <p
              className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 uppercase mb-5"
            >
              Brand
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              A home for the business.
            </h3>

            <p
              className="text-[#1F241C]/60 leading-relaxed"
            >
              Your website should show your work, explain your value, and make
              the business feel established online.
            </p>
          </div>

          <div
            className="rounded-[2rem] border border-[#E2D2B8]/50 bg-[#F7F4ED] p-8"
          >
            <p
              className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 uppercase mb-5"
            >
              Support
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
            >
              Ready after launch.
            </h3>

            <p
              className="text-[#1F241C]/60 leading-relaxed"
            >
              A website should keep improving. We can help with edits, updates,
              and refinements after it goes live.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="py-28 px-6"
      >
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <div>
            <p
              className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase"
            >
              Process
            </p>

            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              A thoughtful workflow, not random AI code.
            </h2>
          </div>

          <div
            className="space-y-8"
          >
            <div
              className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2"
            >
              <p
                className="text-sm text-[#7A5C3E]/60 mb-2"
              >
                01 / Strategy
              </p>

              <h3
                className="text-xl font-semibold mb-2"
              >
                Clarify the brand and offer
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                We define what your business needs to communicate, what
                visitors need to understand, and what action the website should
                drive.
              </p>
            </div>

            <div
              className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2"
            >
              <p
                className="text-sm text-[#7A5C3E]/60 mb-2"
              >
                02 / Build
              </p>

              <h3
                className="text-xl font-semibold mb-2"
              >
                Design with taste
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                We build a warm, clean, mobile-ready site that makes your
                business feel more credible and easier to trust.
              </p>
            </div>

            <div
              className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2"
            >
              <p
                className="text-sm text-[#7A5C3E]/60 mb-2"
              >
                03 / Launch
              </p>

              <h3
                className="text-xl font-semibold mb-2"
              >
                Deploy and improve
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                We launch the site, connect the lead flow, and support future
                updates so the website can keep getting better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-28 px-6 bg-[#FFFDF8]"
      >
        <div
          className="max-w-7xl mx-auto mb-20"
        >
          <p
            className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase"
          >
            Pricing
          </p>

          <h2
            className="text-4xl md:text-5xl font-semibold"
          >
            Simple packages. Serious output.
          </h2>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <div
            className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="text-xl font-semibold mb-4"
            >
              Starter
            </h3>

            <p
              className="text-4xl font-semibold mb-4"
            >
              $500
            </p>

            <p
              className="text-[#1F241C]/60 mb-6 leading-relaxed"
            >
              A clean one-page site for a quick launch or simple business
              presence.
            </p>

            <ul
              className="space-y-2 text-sm text-[#1F241C]/60 mb-8"
            >
              <li>
                • One-page website
              </li>

              <li>
                • Mobile responsive
              </li>

              <li>
                • Basic contact section
              </li>
            </ul>

            <a
              href="#contact"
              className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition hover:bg-[#E2D2B8]/30"
            >
              Start
            </a>
          </div>

          <div
            className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <p
              className="text-xs tracking-[0.3em] text-white/50 mb-4"
            >
              MOST POPULAR
            </p>

            <h3
              className="text-xl font-semibold mb-4"
            >
              Business
            </h3>

            <p
              className="text-4xl font-semibold mb-4"
            >
              $1,500
            </p>

            <p
              className="text-white/65 mb-6 leading-relaxed"
            >
              A custom business website built to show the brand clearly and
              guide visitors toward inquiries.
            </p>

            <ul
              className="space-y-2 text-sm text-white/70 mb-8"
            >
              <li>
                • Multi-section site
              </li>

              <li>
                • Custom design direction
              </li>

              <li>
                • SEO-ready structure
              </li>

              <li>
                • Launch support
              </li>
            </ul>

            <a
              href="#contact"
              className="bg-[#F7F4ED] text-[#2F3D2C] px-6 py-3 rounded-full w-full block text-center transition hover:bg-white"
            >
              Start
            </a>
          </div>

          <div
            className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="text-xl font-semibold mb-4"
            >
              Premium
            </h3>

            <p
              className="text-4xl font-semibold mb-4"
            >
              $3,000+
            </p>

            <p
              className="text-[#1F241C]/60 mb-6 leading-relaxed"
            >
              A deeper build for brands that need more sections, stronger
              content structure, and more custom direction.
            </p>

            <ul
              className="space-y-2 text-sm text-[#1F241C]/60 mb-8"
            >
              <li>
                • Custom features
              </li>

              <li>
                • Branding refinement
              </li>

              <li>
                • Priority delivery
              </li>

              <li>
                • Ongoing support
              </li>
            </ul>

            <a
              href="#contact"
              className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition hover:bg-[#E2D2B8]/30"
            >
              Start
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-28 px-6"
      >
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <div>
            <p
              className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase"
            >
              Questions
            </p>

            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Built to move fast without feeling rushed.
            </h2>
          </div>

          <div
            className="space-y-6"
          >
            <div
              className="border-t border-[#E2D2B8]/60 pt-6"
            >
              <h3
                className="text-xl font-semibold mb-2"
              >
                How fast can a site launch?
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                Simple landing pages can move quickly. Larger builds depend on
                the number of sections, content, and custom features needed.
              </p>
            </div>

            <div
              className="border-t border-[#E2D2B8]/60 pt-6"
            >
              <h3
                className="text-xl font-semibold mb-2"
              >
                Do you only build with AI?
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                No. AI helps speed up production, but the structure, design
                decisions, quality control, and final implementation are handled
                through a professional workflow.
              </p>
            </div>

            <div
              className="border-t border-[#E2D2B8]/60 pt-6"
            >
              <h3
                className="text-xl font-semibold mb-2"
              >
                Can the site be updated later?
              </h3>

              <p
                className="text-[#1F241C]/60 leading-relaxed"
              >
                Yes. Support can include edits, new sections, content changes,
                or continued improvements after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 bg-[#2F3D2C] text-white"
      >
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <div>
            <p
              className="text-sm tracking-[0.3em] text-white/40 mb-4 uppercase"
            >
              Contact
            </p>

            <h2
              className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
            >
              Tell us about your project.
            </h2>

            <p
              className="text-white/65 max-w-lg leading-relaxed"
            >
              We’ll respond with next steps and help you decide the right build
              for your business.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xpqbwpbr"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_next"
              value="https://repository-name-birch-studio-site.vercel.app/#contact"
            />

            <input
              name="name"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition focus:outline-none focus:ring-4 focus:ring-white/20"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition focus:outline-none focus:ring-4 focus:ring-white/20"
              placeholder="Email"
            />

            <input
              name="business"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 transition focus:outline-none focus:ring-4 focus:ring-white/20"
              placeholder="Business name"
            />

            <textarea
              name="message"
              className="w-full rounded-2xl bg-[#F7F4ED] text-[#1F241C] px-4 py-4 h-36 transition focus:outline-none focus:ring-4 focus:ring-white/20"
              placeholder="What do you need built?"
            />

            <button
              type="submit"
              className="bg-[#E2D2B8] text-[#2F3D2C] px-6 py-4 rounded-full w-full transition hover:scale-[1.02] hover:bg-[#F7F4ED]"
            >
              Start My Project
            </button>

            <p
              className="text-xs text-white/40 text-center"
            >
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="bg-[#1F241C] text-white px-6 py-10"
      >
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6"
        >
          <div>
            <p
              className="text-2xl font-semibold mb-2"
            >
              Birch Studio
            </p>

            <p
              className="text-white/50 leading-relaxed"
            >
              Creative web development for growing businesses.
            </p>
          </div>

          <div
            className="flex flex-col md:items-end gap-2"
          >
            <a
              href="#services"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Services
            </a>

            <a
              href="#work"
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

          <p
            className="text-white/40 text-sm"
          >
            © 2026 Birch Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}