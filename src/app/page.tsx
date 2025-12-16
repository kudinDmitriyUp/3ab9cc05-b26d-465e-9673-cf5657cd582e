"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="fluid"
      cardStyle="spotlight"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Focus Areas", id: "focus" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Fresh Fund"
          bottomLeftText="Tel-Aviv, Israel"
          bottomRightText="invest@freshfund.io"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Invest in Israeli Innovation"
          description="Fresh Fund backs exceptional founders building the future. We identify early-stage companies poised for exponential growth."
          tag="Tel-Aviv Based VC"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882885607-hbcae8du.jpg"
          imageAlt="Tel Aviv tech ecosystem"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Fresh Fund"
          description="We are a venture capital fund based in Tel-Aviv dedicated to identifying and nurturing exceptional founders. With deep expertise in technology and deep ties to the Israeli startup ecosystem, we provide not just capital but strategic guidance, network access, and operational support to help our portfolio companies scale globally."
          tag="About Us"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882886462-acrqzf0q.jpg"
          imageAlt="Fresh Fund team investment meeting"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "focus" }
          ]}
        />
      </div>

      <div id="focus" data-section="focus">
        <FeatureCardEleven
          title="Investment Focus Areas"
          description="We focus on sectors with transformative potential and strong market tailwinds"
          tag="Expertise"
          features={[
            {
              id: 1,
              title: "Enterprise Software",
              description: "B2B SaaS companies solving critical business challenges with innovative technology solutions. We look for founders with deep industry expertise and proven go-to-market strategies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882890013-dtpfpwds.jpg",
              imageAlt: "Enterprise software development"
            },
            {
              id: 2,
              title: "Fintech & Payments",
              description: "Financial technology disruptors reimagining payments, lending, and investment management. We support companies modernizing the financial infrastructure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882890925-did15at1.jpg",
              imageAlt: "Fintech payment technology"
            },
            {
              id: 3,
              title: "AI & Machine Learning",
              description: "Artificial intelligence applications creating new categories and solving previously intractable problems. From data analytics to autonomous systems.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882891777-ta6qpas4.jpg",
              imageAlt: "AI machine learning innovation"
            },
            {
              id: 4,
              title: "Cybersecurity",
              description: "Cybersecurity solutions protecting critical digital infrastructure. We invest in teams building the next generation of threat detection and prevention.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882893209-7w8jzu4i.jpg",
              imageAlt: "Cybersecurity protection technology"
            }
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardSeven
          title="Portfolio Companies"
          description="Selected companies from our portfolio that are reshaping their industries"
          tag="Success Stories"
          products={[
            {
              id: "1",
              name: "CloudVault Pro",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882887331-z8ismf7k.jpg",
              imageAlt: "CloudVault Pro fintech platform"
            },
            {
              id: "2",
              name: "NeuroAI Labs",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882888282-cj9g5liu.jpg",
              imageAlt: "NeuroAI Labs AI company"
            },
            {
              id: "3",
              name: "SecureNet Solutions",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882889115-aqaivnjr.jpg",
              imageAlt: "SecureNet Solutions cybersecurity"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced investors and operators driving Fresh Fund forward"
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "Avi Cohen",
              role: "Founder & Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882893840-6xb3og53.jpg",
              imageAlt: "Avi Cohen"
            },
            {
              id: "2",
              name: "Rachel Levi",
              role: "Investment Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882894578-4u3zapv7.jpg",
              imageAlt: "Rachel Levi"
            },
            {
              id: "3",
              name: "David Tal",
              role: "Operating Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882895463-y0t88iek.jpg",
              imageAlt: "David Tal"
            },
            {
              id: "4",
              name: "Noa Goren",
              role: "Investment Analyst",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882896047-x09n1nfg.jpg",
              imageAlt: "Noa Goren"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Portfolio Founders Say"
          description="Hear from the exceptional founders we've supported"
          tag="Testimonials"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Miri Shefet, CEO of CloudVault Pro",
              quote: "Fresh Fund didn't just provide capital. They brought strategic guidance, connected us with key customers, and helped us navigate scaling challenges. Their team understands the Israeli tech ecosystem deeply.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882896857-cgyvnuqu.jpg",
              imageAlt: "Miri Shefet"
            },
            {
              id: "2",
              nameTitle: "Yosef Katz, Founder of NeuroAI Labs",
              quote: "What sets Fresh Fund apart is their genuine commitment to our success. They've been instrumental in our Series A round and continue to provide valuable operational support.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882897714-nbyk5sfp.jpg",
              imageAlt: "Yosef Katz"
            },
            {
              id: "3",
              nameTitle: "Liat Abramov, CEO of SecureNet Solutions",
              quote: "Partnering with Fresh Fund was a turning point for us. Their network opened doors to enterprise customers and their expertise helped us scale responsibly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882898845-da33zfic.jpg",
              imageAlt: "Liat Abramov"
            },
            {
              id: "4",
              nameTitle: "Shmuel Rosen, Founder of DataFlow Technologies",
              quote: "Fresh Fund understood our vision from day one. Beyond capital, they provided the operational playbook and connections that accelerated our growth trajectory.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882899484-k86yo6ko.jpg",
              imageAlt: "Shmuel Rosen"
            },
            {
              id: "5",
              nameTitle: "Talia Mizrahi, CEO of VerticalAI",
              quote: "The team at Fresh Fund brings both financial acumen and deep sector expertise. They've been true partners in our journey from seed to Series B.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882900412-cy2k4eyk.jpg",
              imageAlt: "Talia Mizrahi"
            },
            {
              id: "6",
              nameTitle: "Ariel Ben-David, Founder of WebShield Security",
              quote: "Fresh Fund's personalized approach to investment and support is unmatched. They genuinely care about their portfolio companies' success, not just returns.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765882901096-3v9cblu2.jpg",
              imageAlt: "Ariel Ben-David"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about Fresh Fund"
          tag="FAQ"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What stage companies does Fresh Fund invest in?",
              content: "We typically invest in seed and Series A companies with exceptional founding teams and innovative technology. Our check sizes range from $500K to $3M, though we can participate in larger rounds."
            },
            {
              id: "2",
              title: "What is Fresh Fund's investment thesis?",
              content: "We focus on Israeli and international founders building technology solutions in enterprise software, fintech, AI/ML, and cybersecurity. We look for founders with deep domain expertise, strong unit economics, and the ambition to build global companies."
            },
            {
              id: "3",
              title: "Beyond capital, what value do you add?",
              content: "Our team brings decades of operating and investing experience. We provide strategic guidance, introductions to customers and partners, recruitment support, and operational frameworks based on best practices from successful exits."
            },
            {
              id: "4",
              title: "How long is your typical investment period?",
              content: "Our investment period is flexible based on company needs, typically 7-10 years. We're patient capital focused on long-term value creation rather than quick exits."
            },
            {
              id: "5",
              title: "Do you have a particular geography focus?",
              content: "While based in Tel-Aviv, we invest globally. However, we have special expertise and networks in Israeli startups and are committed to supporting the Israeli tech ecosystem."
            },
            {
              id: "6",
              title: "What is the application process?",
              content: "Send us your business plan, traction metrics, and founder bios to invest@freshfund.io. We review applications on a rolling basis and typically respond within 2-3 weeks."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to explore investment opportunities? Let's start a conversation about how Fresh Fund can support your vision."
          animationType="entrance-slide"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Send Inquiry", href: "mailto:invest@freshfund.io" },
            { text: "Schedule Call", href: "mailto:invest@freshfund.io?subject=Schedule%20Investment%20Discussion" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal logoText="Fresh Fund" />
      </div>
    </ThemeProvider>
  );
}