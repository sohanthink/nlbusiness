import React from "react";
import Banner from "@/components/service/innerpages/Banner";
import Section2 from "@/components/service/innerpages/Section2";
import Pricing from "@/components/service/innerpages/Pricing";
import Video from "@/components/service/innerpages/Video";
import Step from "@/components/service/usimmigration/Step";
import Subscribe from "@/components/common/Subscribe";
import Testimonial from "@/components/Home/Testimonial";
import Blog from "@/components/common/Blog";
import Contact from "@/components/service/innerpages/Contact";
import Faq from "@/components/service/innerpages/Faq";

// Suggested images for Corporate Presentation
import corporatePresBanner from "@/public/images/services/small-business/corporate/banner.png";
import businessMeeting from "@/public/images/services/small-business/corporate/presentation.png";

const CorporatePresentationPage = () => {
  return (
    <>
      <Banner
        title="Corporate Presentation - Professional Business Decks"
        breadcrumb="Small Business / Corporate Presentation"
      />

      <Section2
        title="Professional Presentations for Business Growth"
        p1="A compelling corporate presentation is essential for attracting partners, securing clients, and building credibility with stakeholders. Whether you're presenting to potential clients, strategic partners, or internal teams, your presentation must communicate professionalism, expertise, and value proposition clearly and effectively."
        p2="We create sophisticated corporate presentations that showcase your business in the best possible light. Our decks are designed to build trust, demonstrate expertise, and drive business development outcomes across various corporate scenarios."
        src={corporatePresBanner}
      />

      <Pricing
        startingPrice="C$ 2,200"
        daysUntilDraft="6-9 business days"
        rushServiceText="Quick turnaround for important meetings"
        numberOfPages="15-25 slides"
        packageTitle="Corporate Presentation Package"
        packageSubtitle="Professional Business Decks"
        includedFeatures={[
          "Company overview and value proposition",
          "Service/Product portfolio showcase",
          "Client success stories and case studies",
          "Team expertise and qualifications",
          "Market position and differentiation",
          "Strategic partnerships overview",
          "Performance metrics and achievements",
          "Future roadmap and growth plans",
          "Client onboarding process",
          "Two design concepts with unlimited revisions",
        ]}
        whatIncludedTitle="Presentation Specialization"
        whatIncludedSubtitle="Designed for Business Development"
        whatIncludedFeatures={[
          "Brand-aligned professional design",
          "Client-focused messaging",
          "Case study development",
          "Multi-purpose deck adaptation",
          "Presentation coaching tips",
          "Multiple format delivery",
        ]}
        processTitle="Our Presentation Process"
        processSubtitle="5 Steps to Professional Decks"
        processSteps={[
          "Objective Analysis: Define presentation goals and audience",
          "Content Strategy: Develop key messages and structure",
          "Visual Design: Create brand-consistent, professional slides",
          "Review & Refine: Optimize for impact and clarity",
          "Final Delivery: Provide presentation-ready materials",
        ]}
      />

      <Video title="Professional Business Presentations" videoId="XXXXXXXXX" />

      <Section2
        title="Business Development Through Professional Presentations"
        p1="In corporate environments, first impressions matter tremendously. A poorly designed presentation can undermine your credibility, while a professional deck can open doors to new opportunities, partnerships, and client relationships. Your presentation represents your brand and capabilities to important stakeholders."
        p2="Our corporate presentations focus on key business objectives:"
        p3="Credibility Building: Establishing trust and professional reputation. Value Demonstration: Clearly communicating your unique advantages. Client Engagement: Creating compelling reasons to choose your services. Partnership Development: Showing mutual benefits of collaboration. Strategic Alignment: Demonstrating understanding of client needs. Growth Opportunities: Highlighting potential for long-term relationships."
        p4="With our corporate presentation expertise, you'll have a versatile tool that can be adapted for various business scenarios, from client pitches and partnership meetings to internal strategy sessions and industry conferences."
        src={businessMeeting}
        variant="right"
      />

      <Faq
        title="Corporate Presentation FAQs"
        subtitle="Common questions about business presentations"
        faqs={[
          {
            question:
              "What's the difference between corporate and investor presentations?",
            answer:
              "Corporate presentations focus on building client relationships and demonstrating service value, while investor presentations emphasize financial returns and growth potential. The messaging, tone, and content focus differ significantly.",
          },
          {
            question:
              "How many slides should a corporate presentation include?",
            answer:
              "Typically 15-25 slides, depending on the purpose. Client pitches may be shorter (15-18 slides), while comprehensive capability presentations might be longer (20-25 slides). The key is maintaining engagement throughout.",
          },
          {
            question:
              "Should we include pricing in our corporate presentation?",
            answer:
              "Generally no. Focus on value and solutions rather than specific pricing. Pricing discussions are better handled separately once you've established the value proposition and understand client needs.",
          },
          {
            question:
              "How do you customize presentations for different industries?",
            answer:
              "We research industry-specific terminology, challenges, and success metrics. Each presentation is tailored to address the unique pain points and opportunities relevant to your target audience's industry.",
          },
        ]}
      />

      <Step />
      <Testimonial />
      <Subscribe />
      <Blog />

      <Contact
        title="Ready to Elevate Your Business Presentations?"
        subtitle="Speak with our corporate presentation experts to create professional decks that build credibility and drive business development success."
      />
    </>
  );
};

export default CorporatePresentationPage;
