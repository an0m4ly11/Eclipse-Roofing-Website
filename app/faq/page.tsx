"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type FaqItem = {
  question: string
  answer: React.ReactNode
}

const faqs: FaqItem[] = [
  {
    question: "Are Eclipse staff and crews trained and experienced?",
    answer: (
      <div className="space-y-4">
        <p>
          Our current crews are staffed by knowledgeable and trained technicians; many who have been with us from the
          beginning. They are certified and follow all safety guidelines while onsite and during the installation
          process. New hires are partnered with experienced roofing or eavestrough technicians who work side by side
          providing high quality work and results.
        </p>
        <p className="font-semibold text-foreground">
          We are now certified installers for CertainTeed shingle roof applications
        </p>
        <p>
          <a
            href="https://www.certainteed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Please click this link to visit the CertainTeed website for more information!
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "Do we warranty our projects and materials?",
    answer: (
      <div className="space-y-4">
        <p>
          All projects are covered by our standard labour warranty of 10 years; and 15 years labour warranty for
          premium materials and installations.
        </p>
        <p>All materials are covered as specified by the manufacturer&apos;s warranties.</p>
      </div>
    ),
  },
  {
    question: "Do we warranty repairs?",
    answer: (
      <p>
        No, we do not warranty repairs, but if an issue (ie. leak) continues after our visit, Eclipse will return to
        reassess the repair work for free.
      </p>
    ),
  },
  {
    question: "Do we provide free quotes?",
    answer: (
      <div className="space-y-4">
        <p>
          Eclipse provides free quotes to our current and potential customers. Please call our office at
          1-888-945-6696 ext. 0 or 647-258-9434 ext. 0 to arrange an appointment.
        </p>
        <p className="italic">
          Please Note: All quote appointments are weather permitting, if there are high winds or inclement weather a
          staff member will be in touch to re-book.
        </p>
      </div>
    ),
  },
  {
    question: "What payment methods do we accept?",
    answer: (
      <p>
        Eclipse currently accepts cheques; certified cheques; money orders; credit cards (Visa & Mastercard);
        e-transfers and cash.
      </p>
    ),
  },
  {
    question: "What should you expect after a quote appointment?",
    answer: (
      <div className="space-y-4">
        <p>
          The majority of our quotes are sent electronically by email and you will be provided with a detailed PDF
          document.
        </p>
        <p>
          Our quotes contain the scope of work for your project, photos, drawings, or diagrams if required, overview of
          material warranties, colour options, a glossary and Eclipse Roofing&apos;s terms and conditions.
        </p>
        <p>
          If you have any questions regarding the quote, our office staff or managers can be contacted directly to
          provide additional information.
        </p>
        <p>
          If you would like to move forward with a project and sign with our company, we can provide contracts via email
          or arrange an in-person appointment with a project manager. During the appointment you can sign and discuss
          project details or logistics (ie. Planning, choose colours, property protection, etc.).
        </p>
        <p>
          Project dates are provided during the signing process but also rely on the weather and dates may change. We
          may be able to offer an earlier date if another project finishes early; or it may be pushed back due to
          extreme or unfavourable weather conditions.
        </p>
        <p>Referrals or insurance documentation can also be provided before or during the signing process.</p>
        <p>
          Our project managers can also provide references from previous clients or addresses of previous projects that
          you may drive by and view from the street.
        </p>
        <p>
          During the project planning and installation process, our clients can always reach our staff by phone (during
          office hours) or by email (during/ after office hours) and we endeavour to be in touch or reply as soon as
          possible!
        </p>
        <p>
          Completed projects are inspected by a senior manager and we typically arrange another in-person meeting to
          discuss or receive feedback to ensure you are satisfied with the results.
        </p>
        <p>
          An invoice will be forwarded for your review and payment after the final inspection and warranties can be sent
          by email or paper copies mailed or given in person.
        </p>
      </div>
    ),
  },
  {
    question: "Do we have insurance?",
    answer: (
      <p>
        Yes, we do! Our projects and clients are insured to (but not limited to) two million. Eclipse will be happy to
        provide documentation to our clients regarding our coverage.
      </p>
    ),
  },
  {
    question: "Do we have WSIB coverage?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, we are covered by WSIB and we provide documentation and our WSIB number to our clients to ensure peace of
          mind during the project process.
        </p>
        <p>
          Please click on this link to visit the WSIB website to view our clearance certificate (Type in: Eclipse
          Roofing Ltd){" "}
          <a
            href="https://clearances.wsib.ca/Clearances/eclearance/start?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 break-words"
          >
            https://clearances.wsib.ca/Clearances/eclearance/start?lang=en
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "Do we subcontract our signed projects to other companies?",
    answer: (
      <div className="space-y-4">
        <p>
          No, we do not subcontract any roofing project to another company. All projects are performed by trained
          Eclipse Roofing technicians who are supervised by project and site managers from start to finish.
        </p>
        <p className="italic">
          Please Note: If there is a request for specialty work that we do not provide, Eclipse will be happy to give a
          referral at the customer&apos;s behest. We are happy to coordinate and work alongside another contractor to
          ensure you are satisfied with your completed project!
        </p>
        <p>
          For specialty copper and metal work, we partner with{" "}
          <a
            href="https://signaturecopper.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold underline underline-offset-4"
          >
            Signature Copper
          </a>
          .
        </p>
      </div>
    ),
  },
]

export default function FaqPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-3xl animate-on-scroll">
              <span className="inline-block px-3 py-1 bg-muted rounded-full text-foreground/60 text-xs font-medium mb-6">
                Frequently Asked Questions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                Your Questions, Answered
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything you need to know about working with Eclipse Roofing, from warranties and quotes to insurance
                and payment methods.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="pb-20 lg:pb-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 animate-on-scroll">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-2xl px-6 last:border-b"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 lg:py-32 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-on-scroll text-balance">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Our team is here to help. Reach out for a free quote or to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold px-8">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full font-semibold px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a href="tel:+18889456696">Call 1-888-945-6696</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
