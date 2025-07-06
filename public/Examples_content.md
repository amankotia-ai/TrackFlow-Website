### Detailed Rule Examples

#### UTM-Based Content Replacement
**Scenario**: Google Ads visitor lands on your pricing page
- **Rule Condition**: `IF utm_source = "google" AND utm_campaign = "pricing_ads"`
- **Target Element**: `.main-cta-button` (your main call-to-action button)
- **Action**: Replace text with "Get Started - 50% Off First Month!"
- **Result**: Generic "Sign Up" button becomes a compelling offer for Google Ads traffic

#### Multi-Visit Personalization  
**Scenario**: Returning visitor from LinkedIn who's visited 3+ times
- **Rule Condition**: `IF utm_source = "linkedin" AND visit_count >= 3`
- **Target Element**: `#hero-section` (main headline area)
- **Action**: Replace content with "Welcome back! Ready to see TrackFlow in action?"
- **Additional Rule**: Show hidden element `#returning-visitor-demo` (special demo booking section)

#### Time-Based Content Reveals
**Scenario**: Engaged visitor who's spent 2+ minutes reading your features
- **Rule Condition**: `IF time_on_page >= 120` (120 seconds)
- **Target Element**: `.pricing-hint` (hidden pricing teaser)
- **Action**: Show element + add CSS class "highlight-pricing"
- **Result**: Pricing information appears with yellow highlight after 2 minutes of engagement

#### Campaign-Specific Messaging
**Scenario**: Email newsletter subscriber clicks through to your homepage
- **Rule Condition**: `IF utm_medium = "email" AND utm_content = "newsletter_cta"`
- **Target Element**: `.main-headline`
- **Action**: Replace with "Thanks for reading our newsletter! Here's what's new..."
- **Additional Action**: Hide element `.generic-signup-form` and show `.subscriber-exclusive-content`
