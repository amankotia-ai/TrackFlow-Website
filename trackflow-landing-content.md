# TrackFlow Landing Page Content

## Hero Section

### Main Headline
**Make each site visit as personal as a sales call**

### Subheading
Serve custom content to each of your website visitors based on their interests.

### CTA Button
**Start For Free**

---

## Value Proposition Section

### Header
**Why businesses use TrackFlow**

### Main Feature: Visitor Intelligence
**Transform anonymous visitors into qualified leads with personalized experiences.**

---

## Key Benefits Grid (4-Box Layout)

### 📈 Increase Pipeline
**UTM-powered personalization gets 74% more demos on average.** Show different content, offers, and CTAs based on exactly how visitors found your site - from Google Ads, social media, email campaigns, or direct referrals. Just like in a cold email, a personal touch goes a long way.

### 🎯 Speak to Your Visitors Directly  
**Deliver a custom-generated experience to your most engaged visitors.** Automatically adapt your messaging, offers, and content based on UTM parameters, visit count, and time spent on page.

### 🔍 Understand What Your Visitors Want
**See what your visitors are engaging with and why.** Track their journey across multiple visits, monitor element interactions, and understand which personalized content drives the highest conversions. Spend time with your leads that are most likely to convert.

### 🚀 Automatic Landing Page Creation
**Never build another landing page by hand again.** TrackFlow's rule engine automatically shows and hides content, adds CSS classes, and replaces text based on visitor behavior - letting you review personalized experiences before they go live.

---

## How It Works Section

### Header
**Website personalization on autopilot**

### Description
**TrackFlow determines what your website visitors are interested in, and modifies or creates content to move each one down the funnel.**

---

## Core Features (4-Icon Grid)

### 📊 Track Visitor Journeys
**Complete UTM parameter tracking and multi-visit intelligence**
- First-touch and last-touch UTM attribution
- Visit count and session-based personalization  
- Time-on-page triggered content changes
- Cross-session visitor recognition

### ✏️ Tailor Existing Copy
**CSS selector-based content replacement system**
- Replace any text, button, or link content
- UTM parameter condition matching
- Rule priority and conflict resolution
- Real-time content personalization

### 🎁 Per-Visit Personalization
**Dynamic experiences that evolve with each visit**
- Show/hide elements based on visit count
- Time-based content reveals
- Returning visitor exclusive content
- CSS class manipulation for styling changes

### 🎛️ Fine-Tune Personalization
**Flexible rule engine with precise targeting**
- Target elements using CSS selectors
- Combine multiple conditions (UTM + visit count + time)
- Hide, show, add/remove classes actions
- Rule execution tracking and analytics

---

## Marketing Intelligence Section

### Header
**For Marketing**

### Title
**More personalization, less work**

### Description
**Go beyond inserting a logo or a custom title. TrackFlow tracks each visitor's journey and automatically adapts content to meet their specific needs.**


## Sales Pipeline Section

### Header
**For Sales**

### Title  
**Turn page views into pipeline**

### Description
**Whenever a qualified prospect hits your website, TrackFlow can deliver targeted messaging, relevant case studies, or product demos. Move your leads down the funnel each time they visit your site.**

### Visitor Intent Breakdown
- **High Intent** (35%): Multiple visits, viewed pricing, engaged with demos
- **Medium Intent** (25%): Reviewed features, read documentation, spent significant time on site  
- **Low Intent** (30%): Single page visits, quick bounces, minimal engagement
- **Unknown** (10%): First-time visitors, insufficient data for classification

### Intent-Based Personalization Rules

#### High Intent Visitors (3+ visits, viewed pricing)
- **Rule**: `IF visit_count >= 3 AND page_history_contains = "/pricing"`
- **Actions**: 
  - Show hidden element `#demo-booking-calendar`
  - Replace `.main-cta` text with "Book Your Personal Demo"
  - Add CSS class "priority-visitor" to `.hero-section` for special styling
- **Result**: Calendar booking widget appears, priority messaging displayed

#### Medium Intent Visitors (2+ visits, 60+ seconds on site)
- **Rule**: `IF visit_count >= 2 AND time_on_page >= 60`
- **Actions**:
  - Show element `#free-trial-offer` (hidden by default)
  - Replace `.secondary-cta` with "Start Your Free Trial"
  - Hide generic `.signup-form` and show `.trial-signup-form`
- **Result**: Free trial offer becomes prominent, streamlined signup process

#### Low Intent Visitors (single visit, <30 seconds)
- **Rule**: `IF visit_count == 1 AND time_on_page < 30`
- **Actions**:
  - Show `.educational-content-banner`
  - Replace `.main-headline` with "New to UTM tracking? Start here..."
  - Add class "beginner-friendly" to navigation for simplified menu
- **Result**: Educational content prioritized, simplified user experience

---

## Technical Implementation

### Simple Integration
- **One-Line Script**: Add single JavaScript file to any website
- **Automatic Setup**: No complex configuration required
- **CSS Selector Targeting**: Point and click element selection
- **Real-Time Application**: Content changes apply instantly

### Performance Optimized
- **<50ms Response Time**: Lightning-fast content personalization
- **Offline Capability**: Failed requests automatically retry
- **Cache Management**: Smart caching for repeat visitors
- **Minimal Impact**: Lightweight script with async loading

### Platform Support
- **Universal Compatibility**: Works with any website or CMS
- **Popular Platforms**: WordPress, Wix, Squarespace, Webflow
- **E-commerce Ready**: Shopify, WooCommerce, Magento
- **Framework Agnostic**: React, Vue, Angular, or plain HTML



## Getting Started

### Quick Setup Process
1. **Add Script** - Single line of JavaScript on your website
2. **Create Rules** - Define conditions and content replacements
3. **Target Elements** - Use CSS selectors to specify what to change
4. **Launch Campaign** - UTM parameters trigger personalization automatically

### Integration Methods
- **Direct Script**: Copy/paste into website HTML
- **WordPress Plugin**: Easy installation for WordPress sites
- **Webflow Integration**: Native support for Webflow projects
- **API Access**: Custom integration for developers

---

## Technical Specifications

### Tracking Capabilities
- **UTM Parameters**: Source, medium, campaign, term, content
- **Visitor Data**: Client ID, session ID, visit count, referrer
- **Event Tracking**: Clicks, form submissions, page views
- **Session Management**: 30-minute timeout, cross-tab tracking

### Content Targeting
- **CSS Selectors**: Target any element on the page
- **Element Types**: Text, buttons, links, images, forms
- **Mutation Observer**: Handle dynamically loaded content
- **Rule Priority**: Latest created rule takes precedence

### Data Storage
- **Local Storage**: Client-side visitor identification
- **Database**: Server-side analytics and rule storage
- **Attribution**: First-touch and last-touch UTM tracking
- **Privacy**: GDPR and CCPA compliant data handling

---

## Customer Success Stories

### "Conversion rate jumped 40% in the first week"
**Sarah Johnson, Marketing Director at TechCorp**
*"We set up different landing page headlines for our Google Ads vs. LinkedIn campaigns. The UTM-based personalization immediately improved our lead quality."*

### "Setup took 10 minutes, results were instant"  
**Mike Chen, Growth Lead at StartupXYZ**
*"Just added the script and created rules for our email vs. social traffic. Our 'Book a Demo' conversion rate went from 2.1% to 3.8%."*

### "Finally, personalization that actually works"
**Jessica Rodriguez, E-commerce Manager**
*"We tried other tools but they were too complex. TrackFlow's simple rule system made it easy to show different offers to different traffic sources."*

---

## Call-to-Action Section

### Primary CTA
**Start Your Free Trial Today**

### Secondary CTA  
**See Live Demo**

### Contact Information
**Questions? Email us at hello@trackflow.live** 