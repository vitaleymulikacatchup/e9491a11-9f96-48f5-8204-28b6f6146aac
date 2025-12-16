"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Award, CheckCircle, Zap, Star, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="grid"
      cardStyle="solid-accent"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "product" },
            { name: "Why Us", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "FAQ", id: "faq" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887212542-6z3pb344.jpg"
          logoAlt="Premium Cars Logo"
          brandName="Premium Cars"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
          buttonClassName="rounded-theme shadow-lg"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Discover Your Dream Car"
          description="Premium selection of luxury vehicles with professional service and lifetime support"
          tag="Luxury Automotive"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887213777-pudbel2m.jpg"
          imageAlt="Premium luxury sports car in showroom"
          textPosition="center"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Browse Inventory", href: "product" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          titleClassName="text-6xl font-bold"
          descriptionClassName="text-xl text-accent"
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          title="Premium Automotive Excellence"
          description="With over 20 years of industry experience, we deliver the finest selection of luxury vehicles paired with exceptional customer service. Our expert team ensures every purchase meets the highest standards of quality and satisfaction."
          tag="About Our Dealership"
          tagIcon={Award}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887214924-u6uwcrwm.jpg"
          imageAlt="Modern luxury car dealership showroom"
          buttons={[
            { text: "Learn More About Us", href: "#" }
          ]}
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSixteen
          title="Why Choose Premium Cars"
          description="Experience the difference between ordinary and exceptional automotive retail"
          tag="Our Advantages"
          tagIcon={CheckCircle}
          negativeCard={{
            title: "Typical Dealerships",
            items: [
              "Limited vehicle selection",
              "High-pressure sales tactics",
              "No warranty support",
              "Inconsistent quality checks"
            ]
          }}
          positiveCard={{
            title: "Premium Cars Experience",
            items: [
              "Extensive luxury vehicle collection",
              "Transparent no-pressure sales process",
              "Lifetime warranty and support",
              "Every vehicle professionally inspected"
            ]
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Premium Collection"
          description="Handpicked luxury vehicles available for immediate purchase or test drive"
          tag="Featured Vehicles"
          tagIcon={Zap}
          products={[
            {
              id: "1",
              brand: "Premium Motors",
              name: "Executive Sedan 2024",
              price: "$72,500",
              rating: 5,
              reviewCount: "248",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887216319-ff13bagf.png",
              imageAlt: "Premium sedan 2024 model"
            },
            {
              id: "2",
              brand: "Premium Motors",
              name: "Performance Coupe",
              price: "$89,900",
              rating: 5,
              reviewCount: "192",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887217290-hc9gnib7.jpg",
              imageAlt: "Sports coupe luxury vehicle"
            },
            {
              id: "3",
              brand: "Premium Motors",
              name: "Luxury SUV Elite",
              price: "$95,000",
              rating: 5,
              reviewCount: "315",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887218231-ui4g4an8.jpg",
              imageAlt: "Premium luxury SUV Elite edition"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTen
          title="Trusted by Satisfied Customers"
          description="Real experiences from our valued clients who found their perfect vehicle"
          tag="Customer Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              title: "Exceptional Service from Start to Finish",
              quote: "The entire team at Premium Cars made my experience seamless. From test drive to final paperwork, everything was handled professionally and transparently. I couldn't be happier with my new vehicle.",
              name: "Michael Chen",
              role: "CEO, Tech Solutions Inc.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887219019-c8sfb0df.jpg",
              imageAlt: "Michael Chen customer portrait"
            },
            {
              id: "2",
              title: "Found My Dream Car Without Stress",
              quote: "I was nervous about buying luxury vehicles, but the knowledgeable staff guided me through every step. They listened to my needs and matched me with the perfect car. Highly recommend!",
              name: "Sarah Johnson",
              role: "Marketing Director, Creative Agency",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887220028-p05etnrs.jpg",
              imageAlt: "Sarah Johnson customer testimonial"
            },
            {
              id: "3",
              title: "Unbeatable Warranty and Support",
              quote: "Their lifetime warranty gave me complete peace of mind. Even after purchase, the support team remains responsive and helpful. This is customer service done right.",
              name: "David Rodriguez",
              role: "Business Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887220902-ssw8oxlm.jpg",
              imageAlt: "David Rodriguez business owner"
            },
            {
              id: "4",
              title: "Quality Vehicles, Quality People",
              quote: "Every vehicle in their showroom is pristine and thoroughly inspected. Combined with transparent pricing and honest advice, Premium Cars set the industry standard.",
              name: "Emma Williams",
              role: "Investment Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887221880-80p592l1.jpg",
              imageAlt: "Emma Williams investment professional"
            },
            {
              id: "5",
              title: "Best Buying Experience Ever",
              quote: "No pressure, no hidden fees, just genuine expertise and care. The entire process felt like working with trusted advisors rather than salespeople.",
              name: "James Thompson",
              role: "Entrepreneur",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887222991-kcvqr3xm.jpg",
              imageAlt: "James Thompson entrepreneur portrait"
            },
            {
              id: "6",
              title: "Exceeded All My Expectations",
              quote: "I've purchased from several dealerships before. Premium Cars stands apart through their attention to detail, honesty, and follow-up care. They earned a customer for life.",
              name: "Lisa Anderson",
              role: "Executive Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887223966-uomrd29t.jpg",
              imageAlt: "Lisa Anderson executive coach portrait"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions About Our Service"
          description="Find answers to frequently asked questions about purchasing, warranties, and our dealership"
          tag="Support"
          tagIcon={HelpCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765887224981-czprho7h.jpg"
          imageAlt="Professional car maintenance and service"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What warranty coverage do you provide?",
              content: "We offer comprehensive lifetime warranty on all vehicle systems and components. This includes engine, transmission, electrical systems, and more. Our warranty transfers to subsequent owners, protecting your investment for years to come."
            },
            {
              id: "2",
              title: "How do I schedule a test drive?",
              content: "Test drives are easy to arrange. Simply click the Schedule Test Drive button in our navigation menu or call our showroom. We can accommodate your preferred time and date. Bring a valid driver's license and we'll have your chosen vehicle ready."
            },
            {
              id: "3",
              title: "Do you accept trade-ins?",
              content: "Yes, we welcome trade-in vehicles. Our expert appraisers will provide a fair market valuation. The trade-in value can be applied directly to your new vehicle purchase, making the transition seamless."
            },
            {
              id: "4",
              title: "What financing options are available?",
              content: "We partner with leading financial institutions to offer competitive financing rates. Whether you prefer traditional loans or lease options, our finance team will find a solution tailored to your budget and needs."
            },
            {
              id: "5",
              title: "Are all vehicles professionally inspected?",
              content: "Every vehicle in our inventory undergoes a rigorous multi-point inspection by certified technicians. We verify mechanical systems, check service history, and ensure all components meet our high quality standards before listing."
            },
            {
              id: "6",
              title: "What is your return policy?",
              content: "We offer a 7-day satisfaction guarantee on all purchases. If you're not completely satisfied with your vehicle, return it for a full refund, no questions asked. Your confidence in our vehicles is paramount to us."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Premium Cars"
          logoWidth={140}
          logoHeight={48}
          columns={[
            {
              title: "Dealership",
              items: [
                { label: "Our Showroom", href: "#" },
                { label: "Hours & Location", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Inventory", href: "product" },
                { label: "Schedule Service", href: "#" },
                { label: "Financing", href: "#" },
                { label: "Trade-In Appraisal", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Warranty Info", href: "#" },
                { label: "Service History", href: "#" },
                { label: "Owner Resources", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog & News", href: "#" },
                { label: "Testimonials", href: "testimonial" },
                { label: "Partnerships", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Premium Cars. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}