# Design System - Page Sections

This directory contains reusable section components that make up the main landing page. Each component is self-contained and follows a consistent design pattern.

## Components

### `Navigation`
- Top navigation bar with logo, menu items, and CTA buttons
- Features: Logo display, navigation links, GitHub stars counter, login link, primary CTA button

### `Hero`
- Main landing section with headline and call-to-action
- Features: Large headline with brand colors, description text, dual CTA buttons, promotional badge

### `SessionsAPI`
- Feature showcase section for the Sessions API
- Features: Icon with title, description, feature grid (2x2), live status indicator

### `Stats`
- Key metrics display section
- Features: Three main statistics with large numbers and labels
- Props: Configurable via `stats` array

### `UseCases`
- Grid display of different use cases
- Features: Section header, grid of use case items with icons
- Highlights the first item ("AI Agents") with brand color

### `GitHubRepo`
- Open source promotion section
- Features: Centered layout with GitHub icon, description, and repository link button

### `ResearchGrants`
- Two-column informational section
- Features: Text content on left, placeholder visual on right

### `ReadyToBuild`
- Call-to-action section with pattern background
- Features: Decorative background pattern, branded icon, dual CTA buttons

### `Footer`
- Site footer with company information and links
- Features: Logo, company description, copyright, link sections, system status

## Usage

```tsx
import {
  Navigation,
  Hero,
  SessionsAPI,
  Stats,
  UseCases,
  GitHubRepo,
  ResearchGrants,
  ReadyToBuild,
  Footer
} from '@/components/sections';

// Use in your page component
<div>
  <Navigation />
  <Hero />
  <SessionsAPI />
  {/* ... other sections */}
</div>
```

## Design Tokens

### Colors
- Brand Primary: `#F73029`
- Background: `#FFFAF3`
- Text Primary: `text-gray-800`
- Text Secondary: `text-gray-600`

### Layout
- Max Width: `max-w-[72rem]`
- Padding: `px-8` (horizontal), varies for vertical

## Benefits

1. **Modularity**: Each section is independently maintainable
2. **Reusability**: Components can be reused across different pages
3. **Consistency**: Shared design patterns and styling
4. **Developer Experience**: Clear separation of concerns
5. **Performance**: Each component can be optimized individually 