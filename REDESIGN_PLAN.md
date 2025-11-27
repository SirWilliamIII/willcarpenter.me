# Website Redesign Plan
**Will Carpenter Portfolio - Modernization & CTA Integration**

---

## Executive Summary

This plan outlines a comprehensive redesign of willcarpenter.me with a focus on modernizing the visual hierarchy, improving user engagement, and strategically incorporating CTAs to your featured projects (probablyfine.lol and f1.probablyfine.lol) near the top of the page.

---

## Current State Analysis

### Strengths
- Clean, professional design with good dark/light theme implementation
- Solid responsive foundation with Bootstrap 5
- Nice micro-interactions and animations (fade-in, hover effects)
- Well-organized content hierarchy
- Fast load times (static site)

### Areas for Improvement
1. **Visual Impact**: Hero section is functional but lacks a "wow" factor
2. **Content Flow**: Projects are buried at the bottom - visitors may never scroll that far
3. **Call-to-Action**: No clear funnel to drive traffic to your best work early
4. **Typography**: Could use more modern font pairings and hierarchy
5. **White Space**: Some sections feel cramped (especially "About" on mobile)
6. **Bug**: Stray "hello" text at `index.html:211`

---

## Strategic CTA Integration: "Subconscious" Approach

### Philosophy
Instead of aggressive CTAs, we'll use subtle, curiosity-driven elements that feel native to the design. The goal: make visitors *want* to click without feeling marketed to.

### Recommended Solutions (Pick Your Favorite)

#### **Option A: Hero Section Integration** ⭐ RECOMMENDED
**Where**: Directly in the hero section, right after your intro paragraph
**Why**: Highest visibility, feels natural as "recent work"
**How**:

```
Currently playing with:
→ probablyfine.lol - [one-line intriguing description]
→ f1.probablyfine.lol - [one-line intriguing description]
```

**Visual Treatment**:
- Small, understated links with subtle hover underlines
- Slightly lower opacity (0.7) to not compete with main CTAs
- Arrow prefix (→) for visual interest
- Could add a subtle pulse/glow animation on the domain names

**Example Copy**:
```
Currently playing with:
→ probablyfine.lol — A digital experiment in [describe what makes it interesting]
→ f1.probablyfine.lol — Real-time Formula 1 data playground
```

---

#### **Option B: Sticky Side Element**
**Where**: Fixed position on left/right edge of viewport
**Why**: Persistent visibility without being intrusive
**How**:

- Vertical tab that says "Side Projects →"
- Expands on hover to show the two links
- Disappears on mobile (under 768px)
- Positioned at ~40% from top

**Visual Treatment**:
- Minimal design, matches theme colors
- Subtle shadow for depth
- Smooth slide-out animation

---

#### **Option C: "Featured Work" Mini-Section**
**Where**: Between Hero and About sections
**Why**: Prime real estate, doesn't interrupt main narrative
**How**:

Create a minimal 2-column card layout:
```
┌─────────────────────┐  ┌─────────────────────┐
│  probablyfine.lol   │  │ f1.probablyfine.lol │
│  [screenshot]       │  │   [screenshot]      │
│  Brief tagline      │  │   Brief tagline     │
└─────────────────────┘  └─────────────────────┘
```

**Visual Treatment**:
- Small cards (200-300px height)
- Hover lift effect
- Subtle gradient borders
- Tag: "LIVE PROJECT" badge

---

#### **Option D: Inline About Section Links**
**Where**: Woven into your "About Me" copy naturally
**Why**: Feels most organic, tells a story
**How**:

Rewrite 1-2 sentences to reference these projects:

```
"...I've helped teams eliminate hours of tedious work, unblock
critical roadmaps, and surface insights that shift entire strategies.
I apply this same mindset to personal projects like
[probablyfine.lol](link) and [f1.probablyfine.lol](link), where
I explore [X] and [Y]."
```

**Visual Treatment**:
- Styled as normal links with underline-on-hover
- Opens in new tab
- Maybe add a tiny external link icon

---

## Visual Design Modernization

### 1. Hero Section Overhaul

**Current Issues**:
- Headshot placement feels rigid
- CTA buttons are standard
- Lots of vertical space on large screens

**Proposed Changes**:

```
┌─────────────────────────────────────────────────────┐
│ [Background: subtle gradient or pattern]            │
│                                                      │
│  Hi, my name is                                     │
│  WILL                                        [Photo] │
│  I partner with customers to fuel                   │
│  their success stories                              │
│                                                      │
│  [Brief paragraph]                                  │
│                                                      │
│  Currently playing with:                            │
│  → probablyfine.lol - [tagline]                    │
│  → f1.probablyfine.lol - [tagline]                 │
│                                                      │
│  [Resume Button] [GitHub] [LinkedIn]                │
│                                                      │
│  ↓ Scroll to explore ↓                              │
└─────────────────────────────────────────────────────┘
```

**Visual Enhancements**:
- Add subtle gradient background (light gradient in light mode, dark in dark mode)
- Implement text gradient on your name "Will" (trending in modern design)
- Floating/parallax effect on headshot
- Scroll indicator with animation
- Increase font size of headline

---

### 2. Typography Upgrades

**Current**: Alata, Lora, Roboto (Google Fonts)

**Recommendation**: Maintain but enhance hierarchy

```css
/* Suggested Font Sizes */
Hero H2 (Name):         clamp(60px, 10vw, 120px)  /* Bigger */
Hero H3 (Tagline):      clamp(32px, 6vw, 48px)
Section Headings:       clamp(28px, 5vw, 42px)
Body Text:              18px (up from 16px)
Small Text:             14px
```

**Add**:
- Variable font weights for more expressive hierarchy
- Letter spacing adjustments for headings (-0.02em)
- Line height improvements for readability (1.7 → 1.8)

---

### 3. Color System Enhancement

**Current**: Basic blue primary color

**Proposed**: Add more personality while maintaining professionalism

```css
:root {
  /* Primary Palette */
  --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #667eea;

  /* Light Mode */
  --background-color: #f8f9fa;          /* Lighter */
  --surface-color: #ffffff;              /* New - for cards */
  --text-color: #1a1a1a;                 /* Darker for contrast */

  /* Dark Mode */
  --background-color-dark: #0a0a0a;      /* Darker */
  --surface-color-dark: #1a1a1a;         /* New */
  --text-color-dark: #e8e8e8;            /* Softer white */

  /* Accent Colors */
  --success-color: #10b981;
  --info-color: #3b82f6;
}
```

---

### 4. Card & Component Redesign

**Projects Cards**:
- Current: Basic Bootstrap cards
- Proposed:
  - Remove visible borders in light mode (use subtle shadow only)
  - Increase border-radius to 1.5rem for modern feel
  - Add "glass morphism" effect on hover (blur background)
  - Lazy-load images with skeleton loaders
  - Add animated gradient border on hover

**Experience Cards**:
- Current: Timeline with cards
- Proposed:
  - Add connecting line between cards (vertical timeline)
  - Icons for each company/role
  - Hover expands card slightly with more details
  - Tag badges for technologies mentioned

---

### 5. Animations & Micro-interactions

**Add**:

1. **Scroll-triggered animations**:
   - Fade-in-up for sections as they enter viewport
   - Stagger animations for lists/cards

2. **Cursor Effects** (optional, modern touch):
   - Custom cursor on hover over links
   - Magnetic effect on buttons

3. **Loading States**:
   - Skeleton screens while images load
   - Smooth transitions between states

4. **Button Interactions**:
   - Ripple effect on click
   - Icon slide-in on hover
   - Gradient shift animation

---

### 6. Mobile-First Refinements

**Current Issues**:
- Some text feels cramped on mobile
- Images could be better optimized
- Touch targets could be larger

**Improvements**:
- Increase touch target size to 48x48px minimum
- Add more generous padding on mobile (24px vs current 16px)
- Stack hero content vertically on mobile with better spacing
- Simplified navigation for mobile (hamburger menu is fine)
- Consider bottom navigation bar for quick access

---

## Content Structure Recommendation

### Proposed Page Flow

1. **Hero Section** (with integrated project CTAs) ✨ NEW
2. **Featured Projects Mini-Section** (probablyfine.lol + f1) ✨ NEW
   *OR integrate into hero - choose one approach*
3. **About Me** (slightly condensed, more punchy)
4. **Experience Timeline** (visual upgrade)
5. **All Projects Showcase** (moved up from bottom)
6. **Contact/Footer**

**Rationale**:
- Get eyes on your best work within first 2 scrolls
- Projects get more visibility
- Natural flow from "who I am" → "what I've done for others" → "what I build"

---

## Quick Wins (Low Effort, High Impact)

1. **Remove "hello" text** at line 211 (bug fix)
2. **Add scroll indicator** to hero section (CSS only)
3. **Increase body font size** from 16px → 18px
4. **Add subtle gradient** to hero background
5. **Implement Option A** for project CTAs (just HTML/CSS)
6. **Improve button hover states** with scale + shadow

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Fix bugs (remove "hello")
- Implement CTA integration (Option A recommended)
- Typography updates
- Color system enhancement

### Phase 2: Visual Polish (Week 2)
- Hero section redesign
- Card component updates
- Animation improvements

### Phase 3: Content Restructure (Week 3)
- Reorder sections
- Optimize copy
- Add new project section

### Phase 4: Performance & Testing (Week 4)
- Image optimization
- Animation performance
- Cross-browser testing
- Mobile UX refinement

---

## Mockup Descriptions

### Hero Section (Desktop - Light Mode)
```
┌───────────────────────────────────────────────────────────┐
│ [WTC3]                              [About][Experience][…] │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  Hi, my name is                                           │
│  ╔══════════════════╗                           ╭───────╮ │
│  ║   W  I  L  L     ║  (gradient text)          │ [IMG] │ │
│  ╚══════════════════╝                           │ float │ │
│                                                  ╰───────╯ │
│  I partner with customers to fuel                         │
│  their success stories                                    │
│                                                            │
│  My career in technology has been a dynamic journey...    │
│                                                            │
│  ✨ Currently playing with:                               │
│  → probablyfine.lol - [Intriguing one-liner]             │
│  → f1.probablyfine.lol - [Intriguing one-liner]          │
│     (subtle glow on hover)                                │
│                                                            │
│  ┌────────────┐  ┌────┐ ┌────┐                           │
│  │   Resume   │  │ GH │ │ LI │                           │
│  └────────────┘  └────┘ └────┘                           │
│                                                            │
│                      ↓                                     │
│                 (animated)                                 │
└───────────────────────────────────────────────────────────┘
```

### Featured Projects Mini-Section
```
┌───────────────────────────────────────────────────────────┐
│                    Featured Work                          │
│  ┌────────────────────┐        ┌────────────────────┐    │
│  │ [LIVE PROJECT]     │        │ [LIVE PROJECT]     │    │
│  │ ┌────────────────┐ │        │ ┌────────────────┐ │    │
│  │ │  [Screenshot]  │ │        │ │  [Screenshot]  │ │    │
│  │ └────────────────┘ │        │ └────────────────┘ │    │
│  │                    │        │                    │    │
│  │ probablyfine.lol   │        │f1.probablyfine.lol │    │
│  │ [Tagline here]     │        │ [Tagline here]     │    │
│  │                    │        │                    │    │
│  │ Explore →          │        │ Explore →          │    │
│  └────────────────────┘        └────────────────────┘    │
│         (hover: lift + glow)                              │
└───────────────────────────────────────────────────────────┘
```

---

## Recommended CTA Copy

For probablyfine.lol:
- "Experimental digital playground"
- "Where ideas go to play"
- "A collection of digital experiments"
- "Proof that side projects are probably fine"

For f1.probablyfine.lol:
- "Real-time F1 data visualization"
- "Formula 1 meets data science"
- "Live racing analytics playground"
- "Where speed meets statistics"

---

## Success Metrics

Track these after redesign:
- Average time on page (expect +30%)
- Scroll depth (target: 80% reach projects section)
- Click-through rate on probablyfine.lol CTAs (target: 15%+)
- Mobile bounce rate (target: <40%)

---

## Final Recommendation

**Best Approach for Your Goals**:

1. **Implement Option A** (Hero Section Integration) for CTAs
   - Highest visibility
   - Most "subconscious" feel
   - Easy to implement

2. **Quick visual wins**:
   - Typography scale increase
   - Hero gradient background
   - Button hover improvements

3. **Phase the rest** over 2-3 weeks
   - Don't rush the redesign
   - Test each change
   - Get feedback

---

## Next Steps

1. Review this plan and choose your preferred CTA integration style
2. I can implement Phase 1 changes immediately
3. Create screenshots/mockups if you need visual references
4. A/B test CTA positions if you're unsure

Let me know which direction resonates with you and we'll make it happen!
