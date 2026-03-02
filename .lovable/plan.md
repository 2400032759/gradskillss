

# GradSkills — Landing Page Implementation Plan

## Overview
A modern, premium single-page landing page for GradSkills, an EdTech platform that transforms engineering students into product builders through an 11-week structured program.

## Design System
- **Theme**: Light-only with pure white background
- **Colors**: Black + purple gradient (#a855f7 → #d946ef) as accent, near-black headings, soft gray body text
- **Typography**: Lexend for headings, Poppins for body text
- **Cards**: Rounded-xl/2xl with soft shadows
- **Spacing**: Premium large padding between all sections
- **Effects**: Smooth scroll, subtle hover animations, glassmorphism navbar

## Sections to Build

### 1. Glassmorphism Navigation Bar
- GradSkills logo (from provided URL) + brand name
- Links: The Gap · Program · Outcomes · For Colleges · Pricing · Contact
- Sticky with frosted glass effect (backdrop-blur, semi-transparent background)
- Primary CTA button: "Book a Pilot Workshop" with purple gradient
- Mobile hamburger menu

### 2. Hero Section
- Badge showing "5+ Years in Industry Training · 5,000+ Students Trained"
- Bold headline: "From Engineering Student To Product Builder — In 11 Weeks"
- Subheadline describing the 3 deliverables (portfolio website, mobile app, AI system)
- Two CTAs: primary gradient button + secondary outlined button for colleges/TPOs
- Clean, spacious layout

### 3. The Gap Section
- Title: "Engineering Education Is Strong. Deployment Experience Is Not."
- Three problem cards with icons: Theory vs Shipping, Career Confusion, Placement Pressure
- Concluding statement about the education-employability gap

### 4. The GradSkills Approach (Program) Section
- Section intro about product-based learning
- Three module cards with duration, learning points, and final outcomes:
  - Module 1: Web Development with AI (4 weeks)
  - Module 2: Mobile App Development (4 weeks)
  - Module 3: AI Systems & Automation (3 weeks)
- Each card shows key learnings and the tangible deliverable

### 5. What Makes GradSkills Different (Outcomes) Section
- Four differentiator blocks:
  1. Real Deployments — not just assignments
  2. AI as a Core Workflow Skill
  3. Built for Engineering Students
  4. Backed by Experience (5+ years, 5,000+ students)

### 6. For Colleges & TPOs Section
- Three benefit cards: Industry-Ready Students, Improved Shortlisting, Structured Delivery
- Three-step implementation model: Pilot Workshop → Cohort Selection → Launch & Track

### 7. Pricing Section
- Three pricing tier cards side by side:
  - Single Module: ₹4,999
  - Any Two Modules: ₹7,499
  - Flagship Program: ₹9,999 (highlighted/featured)
- Each card lists included features

### 8. Student Impact Section
- Key outcomes listed with clean iconography (confidence, deployment lifecycle, AI knowledge, portfolio assets)
- Emphasis on "learner to builder" transformation

### 9. Final CTA Section
- Bold headline: "Build Graduates Who Can Ship, Not Just Study."
- CTA button + contact info (email/phone placeholders)
- Purple gradient background accent

### 10. Footer
- Brand info, quick links, contact details
- Clean minimal design

## Technical Approach
- Component-based architecture with one component per section
- Smooth anchor scroll navigation using section IDs
- Fully responsive (mobile-first)
- CSS animations for scroll reveals and hover effects
- Google Fonts: Lexend + Poppins loaded via index.html

