import { notFound } from "next/navigation";
import { FadeUp } from "@/components/motion.utils";

// Project data - matches the data in work/page.tsx
const projects = [
  {
    slug: "watermelon-hub",
    name: "Watermelon Hub",
    image: "https://images.unsplash.com/photo-1551836022-decipe-d6f488e3e0f4?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#0B3D0B] to-[#16A34A]",
    challenge: "Businesses need scalable sales and support teams without the overhead.",
    solution: "We built a conversion-focused website showcasing their team-building and campaign management services.",
    result: "A professional online presence that helps attract clients seeking outsourced sales and support.",
    stats: ["B2B Service Design", "Responsive Website", "Conversion-Focused Layout"],
    description: "Watermelon Hub is positioned as a full-service outsourced sales and support partner. The website explains how businesses can access team building, recruitment, onboarding, role-specific training, campaign management, KPI tracking, performance reporting, and multilingual or international campaign support.",
    mainMessage: "The outsourced sales & support teams that scale with your business.",
    features: [
      "Turnkey team building, recruitment, and training",
      "Daily campaign management and performance reporting",
      "Multilingual and international campaign support",
      "Custom team building",
      "Training and enablement",
      "Campaign management",
      "Discovery, recruit and train, launch and manage process",
      "Quick demo concept for Admin and Agent workflows using local mock data",
      "Book-a-demo and Get-in-touch calls to action",
      "Login path for the platform experience"
    ],
    designDirection: "Describe the design as a practical B2B interface using a green, cream, and white visual system. Highlight the concise hero message, checklist-style benefits, structured service cards, numbered process steps, and workflow/interface mockup.",
    caseStudyCopy: "Watermelon Hub is a B2B sales and customer-support operations website designed to position outsourced teams as a strategic growth partner. The experience clarifies a complex service offering through a focused hero message, service cards, a three-stage delivery process, scalability benefits, and a workflow-demo concept. The result is a practical digital presence that helps prospective clients understand the service model and move toward a demo or consultation.",
    ctaLabel: "View Case Study",
    url: "https://water-melon-hub.vercel.app/"
  },
  {
    slug: "mouad-icap",
    name: "Mouad.Icap",
    image: "https://images.unsplash.com/photo-1556912656-b80a7302e9ff?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#6B2108] to-[#D97706]",
    challenge: "Barber shops need a strong online presence to showcase their services and attract clients.",
    solution: "We created a premium, dark-themed website with service discovery and appointment-oriented contact flows.",
    result: "A grooming brand website that combines classic barbering with contemporary style.",
    stats: ["Barber Shop Branding", "Service Discovery", "Appointment UX"],
    description: "Mouad.Icap is a customer-facing grooming brand built around the combination of classic barbering techniques and contemporary style. The website positions the shop as a destination for dependable craftsmanship, modern looks, and a comfortable customer experience.",
    mainMessage: "Smooth Experience. Your go-to barber shop for classic and modern styles.",
    features: [
      "Home, About, Services, Contact, Blog, and Book Appointment navigation",
      "Contact Us Now call to action",
      "Explore Styles call to action",
      "About and mission sections",
      "Core values: Excellence, Respect, Innovation, and Passion",
      "Professional grooming tools section",
      "Customer testimonials",
      "Newsletter subscription field",
      "Facebook and Instagram links",
      "Contact form with name, email, and Next button"
    ],
    designDirection: "Describe the design as a premium, dark-themed grooming experience with warm gold and orange accents, large display typography, barber photography, service imagery, and prominent appointment/contact calls to action.",
    caseStudyCopy: "Mouad.Icap is a modern barber shop website designed to make grooming feel personal, premium, and easy to explore. The experience combines strong visual direction with clear service categories, brand values, client testimonials, social proof, and appointment-focused calls to action. By presenting haircutting, beard grooming, skincare, and youth services in a structured way, the website helps visitors understand the offer before they make contact.",
    ctaLabel: "Explore Services",
    url: "https://barber-shop-web-app-mhma.vercel.app/"
  },
  {
    slug: "mercel-life",
    name: "Mercel Life",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#0B3D0B] to-[#10B981]",
    challenge: "Designers need a portfolio that effectively displays their skills and attracts clients.",
    solution: "We developed a clean, editorial personal-brand portfolio with clear social proof and a direct call-to-action.",
    result: "A personal portfolio that positions the designer as a graphic and UI/UX expert.",
    stats: ["Graphic Design Portfolio", "UI/UX Case Studies", "Personal Branding"],
    description: "Mercel Life is a personal portfolio website for Adebisi Marcelina, presented as a Graphic Designer and UI/UX Designer. The site communicates a focus on visual design, usability, audience connection, and meaningful business outcomes. Its structure supports personal branding, project presentation, credibility, and direct client contact.",
    mainMessage: "I create captivating visuals and intuitive user interfaces that help businesses connect with their audience and achieve meaningful results.",
    features: [
      "Graphic Designer and UI/UX Designer profile positioning",
      "About, Services, Skills, Portfolio, Blog, Experience, and Contact navigation",
      "Schedule Call CTA",
      "View Work CTA",
      "Downloadable resume link",
      "Facebook, LinkedIn, and Instagram links",
      "Featured Work section",
      "Client stories and testimonials",
      "Trusted companies section",
      "Profile and project imagery",
      "Dark-mode control",
      "Footer contact and social links"
    ],
    designDirection: "Describe the design as a clean, editorial personal-brand portfolio with a light background, green accents, profile photography, dark text, a dark-mode option, and a prominent Schedule Call CTA.",
    caseStudyCopy: "Mercel Life is a personal portfolio website for Adebisi Marcelina, a Graphic Designer and UI/UX Designer. The experience combines a clear personal introduction, social proof, resume access, social links, project storytelling, and a direct Schedule Call CTA. The structure helps prospective clients understand the designer’s positioning, review credibility signals, explore the work, and begin a conversation.",
    ctaLabel: "Schedule a Call",
    url: "https://mercel-life.vercel.app/"
  }
];

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Project Details • You own 100%</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(36px,6vw,72px)] font-[800] leading-[0.9] tracking-[-0.04em] text-[#F5F3EF]">
              {project.name}
            </h1>
            <p className="mt-4 max-w- text- leading-[1.6] text-white/40">
              {project.mainMessage}
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1fr]">
          {/* Project Image */}
          <FadeUp delay={0.1} className="relative h-96 rounded- overflow-hidden bg-[#0A0A0B]">
            <img src={project.image} alt={`${project.name} website screenshot`} className="absolute inset-0 h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 mix-blend-overlay`} />
          </FadeUp>

          {/* Project Details */}
          <div className="space-y-6">
            <FadeUp delay={0.2}>
              <div className="space-y-4">
                <h2 className="font-syne text- font-[700] text-[#F5F3EF]">Project Overview</h2>
                <p className="text- leading-[1.7] text-white/40">
                  {project.description}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-4">
                <h2 className="font-syne text- font-[700] text-[#F5F3EF]">Key Features</h2>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#8B5CF6] text-white/20 shrink-0">
                        {/* Optional: could use a checkmark icon here */}
                      </span>
                      <p className="text- leading-[1.7] text-white/40">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="space-y-4">
                <h2 className="font-syne text- font-[700] text-[#F5F3EF]">Design Approach</h2>
                <p className="text- leading-[1.7] text-white/40">
                  {project.designDirection}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="space-y-4">
                <h2 className="font-syne text- font-[700] text-[#F5F3EF]">Case Study Summary</h2>
                <p className="text- leading-[1.7] text-white/40">
                  {project.caseStudyCopy}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.6} className="pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-4">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text- font-medium hover:bg-white/[0.06]">
                  Visit Live Site
                </a>
                <a href="/work" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text- font-medium hover:bg-white/[0.06]">
                  Back to All Projects
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        <FadeUp className="mt-20 flex justify-center">
          <a href="/contact" className="rounded-full bg-[#F5F3EF] px-7 py-3.5 text- font-semibold text-black hover:bg-white">Start your project →</a>
        </FadeUp>
      </div>
    </main>
  );
}