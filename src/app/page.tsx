export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#1F241C]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E2D2B8]/40 bg-[#F7F4ED]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">
            Birch Studio
          </div>

          <div className="hidden md:flex gap-10 text-sm text-[#1F241C]/60">
            <a href="#services" className="hover:text-[#2F3D2C] transition">Services</a>
            <a href="#work" className="hover:text-[#2F3D2C] transition">Work</a>
            <a href="#process" className="hover:text-[#2F3D2C] transition">Process</a>
            <a href="#pricing" className="hover:text-[#2F3D2C] transition">Pricing</a>
            <a href="#contact" className="hover:text-[#2F3D2C] transition">Contact</a>
          </div>

          <a href="#contact" className="bg-[#2F3D2C] text-white px-5 py-2 rounded-full text-sm transition hover:scale-105 hover:bg-[#1F241C]">
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#E2D2B8]/35 text-xs tracking-[0.25em] text-[#7A5C3E]">
              DESIGN-LED • BUILT FAST • MADE TO CONVERT
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 tracking-tight">
              Websites that look premium,
              <br />
              and turn visitors into customers.
            </h1>

            <p className="text-lg text-[#1F241C]/65 mb-10 max-w-xl">
              We design and build modern websites for real businesses—fast,
              clean, and structured to turn visitors into customers.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="bg-[#2F3D2C] text-white px-8 py-4 rounded-full text-sm transition hover:scale-105 hover:bg-[#1F241C]">
                Start My Project
              </a>

              <a href="#services" className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-8 py-4 rounded-full text-sm transition hover:bg-[#E2D2B8]/30">
                View Work
              </a>
            </div>
          </div>

          {/* MOCKUP */}
          <div className="rounded-[2rem] bg-[#E2D2B8]/35 p-5 shadow-xl transition duration-500 hover:scale-[1.02]">
            <div className="rounded-[1.5rem] bg-[#FFFDF8] p-6 min-h-[420px] border border-[#E2D2B8]/50">
              <div className="flex justify-between items-center border-b border-[#E2D2B8]/40 pb-4 mb-8">
                <div className="font-semibold text-[#2F3D2C]">Client Website</div>
                <div className="text-xs text-[#7A5C3E]/70">LIVE PREVIEW</div>
              </div>

              <div className="h-40 rounded-2xl bg-[#6F7F63] mb-6"></div>

              <div className="space-y-3 mb-8">
                <div className="h-4 rounded-full bg-[#E2D2B8] w-3/4"></div>
                <div className="h-4 rounded-full bg-[#E2D2B8]/60 w-full"></div>
                <div className="h-4 rounded-full bg-[#E2D2B8]/60 w-5/6"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"></div>
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"></div>
                <div className="h-24 rounded-2xl bg-[#F7F4ED] border border-[#E2D2B8]/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-full border border-[#E2D2B8]/60 bg-[#FFFDF8] px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs tracking-[0.25em] uppercase text-[#7A5C3E]/70">
            <p>Fast Builds</p>
            <p>Clean Design</p>
            <p>Mobile Ready</p>
            <p>Lead Focused</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
            Services
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight">
            Built for businesses that want more than a basic website.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-sm text-[#7A5C3E]/60 mb-10">01</p>
            <h3 className="text-2xl font-semibold mb-4">Creative Websites</h3>
            <p className="text-[#1F241C]/60">
              Designed around your business, your personality, and the customers
              you want to attract.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-sm text-white/40 mb-10">02</p>
            <h3 className="text-2xl font-semibold mb-4">AI Speed</h3>
            <p className="text-white/65">
              AI helps us move fast, while a structured workflow keeps the site
              reliable and controlled.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-sm text-[#7A5C3E]/60 mb-10">03</p>
            <h3 className="text-2xl font-semibold mb-4">Monthly Support</h3>
            <p className="text-[#1F241C]/60">
              Ongoing edits, fixes, monitoring, and improvements after launch.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      {/* SELECTED WORK */}
<{/* SELECTED WORK */}
<section id="work" className="py-32 px-6">
  <div className="max-w-7xl mx-auto mb-20">
    <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
      Selected Work
    </p>
    <h2 className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight">
      Visual systems that make businesses feel more credible.
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

    {/* 🔥 CASE STUDY CARD */}
    <div className="group rounded-[2.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 mb-8">
        <div className="flex items-center justify-between border-b border-[#E2D2B8]/50 pb-4 mb-6">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E2D2B8]"></span>
            <span className="w-3 h-3 rounded-full bg-[#E2D2B8]/70"></span>
            <span className="w-3 h-3 rounded-full bg-[#E2D2B8]/40"></span>
          </div>
          <p className="text-xs text-[#7A5C3E]/60">CASE STUDY</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-48 rounded-2xl bg-[#6F7F63] transition group-hover:bg-[#5F7254]"></div>

          <div className="col-span-2 space-y-3">
            <div className="h-4 rounded-full bg-[#E2D2B8] w-4/5"></div>
            <div className="h-4 rounded-full bg-[#E2D2B8]/60"></div>
            <div className="h-4 rounded-full bg-[#E2D2B8]/50 w-3/4"></div>
            <div className="h-20 rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50 mt-6"></div>
          </div>
        </div>
      </div>

      <p className="text-sm tracking-[0.25em] text-[#7A5C3E]/60 uppercase mb-3">
        Service Business Rebuild
      </p>

      <h3 className="text-2xl font-semibold mb-3">
        Turning a basic website into a clearer lead engine.
      </h3>

      <p className="text-[#1F241C]/60 mb-6">
        We restructured the site around trust, clarity, and one clear conversion path:
        getting qualified visitors to reach out.
      </p>

      <div className="grid grid-cols-3 gap-4 border-t border-[#E2D2B8]/50 pt-6">
        <div>
          <p className="text-2xl font-semibold">3x</p>
          <p className="text-xs text-[#1F241C]/50">Clearer CTA path</p>
        </div>

        <div>
          <p className="text-2xl font-semibold">48hr</p>
          <p className="text-xs text-[#1F241C]/50">Build sprint</p>
        </div>

        <div>
          <p className="text-2xl font-semibold">100%</p>
          <p className="text-xs text-[#1F241C]/50">Mobile ready</p>
        </div>
      </div>
    </div>

    {/* SUPPORTING PROJECT */}
    <div className="group rounded-[2.5rem] bg-[#FFFDF8] border border-[#E2D2B8]/50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/50 p-5 mb-8">
        <div className="flex items-center justify-between border-b border-[#E2D2B8]/50 pb-4 mb-6">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#6F7F63]/60"></span>
            <span className="w-3 h-3 rounded-full bg-[#E2D2B8]/70"></span>
            <span className="w-3 h-3 rounded-full bg-[#7A5C3E]/30"></span>
          </div>
          <p className="text-xs text-[#7A5C3E]/60">LANDING PAGE</p>
        </div>

        <div className="h-28 rounded-2xl bg-[#E2D2B8] mb-4"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-28 rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50"></div>
          <div className="h-28 rounded-2xl bg-[#6F7F63] transition group-hover:bg-[#5F7254]"></div>
          <div className="h-28 rounded-2xl bg-[#FFFDF8] border border-[#E2D2B8]/50"></div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-3">
        Local Business Landing Page
      </h3>

      <p className="text-[#1F241C]/60 mb-5">
        A warm, direct landing page structure designed to explain value quickly and capture leads.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full bg-[#E2D2B8]/35 text-xs text-[#7A5C3E]">Conversion</span>
        <span className="px-3 py-1 rounded-full bg-[#E2D2B8]/35 text-xs text-[#7A5C3E]">Clean Layout</span>
        <span className="px-3 py-1 rounded-full bg-[#E2D2B8]/35 text-xs text-[#7A5C3E]">Responsive</span>
      </div>
    </div>

  </div>
</section>

  


   

      {/* PROCESS */}
      <section id="process" className="py-28 px-6 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              A thoughtful workflow, not random AI code.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">01 / Strategy</p>
              <h3 className="text-xl font-semibold mb-2">Clarify the offer</h3>
              <p className="text-[#1F241C]/60">
                We define the site structure, message, sections, and conversion path.
              </p>
            </div>

            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">02 / Build</p>
              <h3 className="text-xl font-semibold mb-2">Develop with taste</h3>
              <p className="text-[#1F241C]/60">
                We use modern tools and AI-assisted development to build quickly
                without losing design quality.
              </p>
            </div>

            <div className="border-t border-[#E2D2B8]/60 pt-6 transition duration-300 hover:translate-x-2">
              <p className="text-sm text-[#7A5C3E]/60 mb-2">03 / Launch</p>
              <h3 className="text-xl font-semibold mb-2">Deploy and maintain</h3>
              <p className="text-[#1F241C]/60">
                We launch the site, monitor it, and handle future updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-7xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] text-[#7A5C3E]/60 mb-4 uppercase">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Simple packages. Serious output.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-4xl font-semibold mb-4">$500</p>
            <p className="text-[#1F241C]/60 mb-6">
              Single-page site for quick launches.
            </p>
            <ul className="space-y-2 text-sm text-[#1F241C]/60 mb-8">
              <li>• One-page website</li>
              <li>• Mobile responsive</li>
              <li>• Basic contact section</li>
            </ul>
            <a href="#contact" className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition hover:bg-[#E2D2B8]/30">
              Start
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#2F3D2C] text-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
              MOST POPULAR
            </p>
            <h3 className="text-xl font-semibold mb-4">Business</h3>
            <p className="text-4xl font-semibold mb-4">$1,500</p>
            <p className="text-white/65 mb-6">
              Custom business website built to convert.
            </p>
            <ul className="space-y-2 text-sm text-white/70 mb-8">
              <li>• Multi-section site</li>
              <li>• Custom design direction</li>
              <li>• SEO-ready structure</li>
              <li>• Launch support</li>
            </ul>
            <a href="#contact" className="bg-[#F7F4ED] text-[#2F3D2C] px-6 py-3 rounded-full w-full block text-center transition hover:bg-white">
              Start
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#F7F4ED] border border-[#E2D2B8]/40 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-semibold mb-4">$3,000+</p>
            <p className="text-[#1F241C]/60 mb-6">
              Advanced build for brands that need more.
            </p>
            <ul className="space-y-2 text-sm text-[#1F241C]/60 mb-8">
              <li>• Custom features</li>
              <li>• Branding refinement</li>
              <li>• Priority delivery</li>
              <li>• Ongoing support</li>
            </ul>
            <a href="#contact" className="border border-[#7A5C3E]/40 text-[#7A5C3E] px-6 py-3 rounded-full w-full block text-center transition hover:bg-[#E2D2B8]/30">
              Start
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-[#2F3D2C] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] text-white/40 mb-4 uppercase">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Tell us about your project.
            </h2>
            <p className="text-white/65 max-w-lg">
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
            <p className="text-2xl font-semibold mb-2">Birch Studio</p>
            <p className="text-white/50">
              Creative web development for growing businesses.
            </p>
          </div>

          <p className="text-white/40 text-sm">
            © 2026 Birch Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}