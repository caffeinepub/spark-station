# Spark Station Agency Website

## Current State
The project has scaffolded backend (empty actor) and frontend shell (no App.tsx or page components). Generated images exist for team members and portfolio. The previous build attempt failed before the frontend was created.

## Requested Changes (Diff)

### Add
- Full multi-page React frontend with React Router: Home, Services, Portfolio, Team, Contact pages
- Custom animated cursor
- Loading/page transition animation
- Particle animation in hero
- Animated statistics counters
- Sticky navigation with mobile hamburger menu
- Floating WhatsApp button
- Contact form connected to backend
- Backend contact form submission storage (name, email, service, message, timestamp)

### Modify
- Backend: add submitInquiry and getInquiries functions

### Remove
- Nothing

## Implementation Plan
1. Generate Motoko backend with contact inquiry storage
2. Build full React frontend with all pages matching GitHub-dark design system
   - Colors: bg #0D1117, cards #161B22, accent #58A6FF, highlight #8B5CF6, text #E6EDF3
   - 5 pages: Home, Services, Portfolio, Team, Contact
   - Custom cursor, loading animation, animated counters, WhatsApp float button
   - Responsive design, smooth scroll, page transitions
3. Wire contact form to backend
4. Validate and deploy
