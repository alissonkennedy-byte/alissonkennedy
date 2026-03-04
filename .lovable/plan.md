

## Ultra-Luxury Home Redesign Plan

### Overview
Redesign all home page sections for a more imposing, ultra-luxury feel while keeping all text and navigation unchanged. The uploaded photos will be used in the Hero section.

### Changes by File

#### 1. Copy uploaded images to project
- Copy `Perfil_5-3.png` to `src/assets/` for the Hero section portrait (the seated suit photo is the most executive/luxury feel for a hero)

#### 2. `src/index.css` — Global refinements
- Increase `section-spacing` to `py-24 md:py-36` and `section-spacing-lg` to `py-28 md:py-40`
- Add a new background variable for dark-gray sections: `--bg-elevated: 0 0% 7%`
- Increase `.container-premium` max-width slightly to `1200px`
- Make `.step-indicator` larger (h-14 w-14)
- Add new utility `.section-dark` with slightly lighter bg for contrast alternation

#### 3. `src/components/sections/HeroSection.tsx` — Two-column, full viewport
- Change to a two-column grid layout: left = text + CTA, right = large portrait photo
- Set `min-h-screen` for full viewport height
- Import and use the uploaded portrait image on the right, filling the column height with `object-cover`
- Make CTA button larger (`px-12 py-6 text-lg`)
- Left-align text on desktop, center on mobile
- Photo hidden on mobile, shown on md+ breakpoint

#### 4. `src/components/sections/ManifestoSection.tsx` — Pure black, refined
- Set explicit `bg-[#000]` for pure black background
- Add a thin gold line (`w-20 h-px bg-primary`) above the title
- Reduce text column width to `max-w-xl`
- Increase title size to `text-3xl md:text-4xl lg:text-5xl`
- Increase body text `leading-[2]` for more breathing room

#### 5. `src/components/sections/FilosofiaSection.tsx` — Dark gray background
- Add `bg-[hsl(0,0%,7%)]` for subtle contrast from surrounding pure-black sections

#### 6. `src/components/sections/EcosystemSection.tsx` — Dark gray background, gold-bordered cards
- Set `bg-[hsl(0,0%,6%)]` background
- Add `border-primary/30` to cards by default, `border-primary/60` on hover
- Increase icon container size and make icons more prominent
- Increase section title to `text-3xl md:text-4xl lg:text-5xl`
- Add caps subtitle below section label

#### 7. `src/components/sections/ServiceTiersSection.tsx` — Robust cards, featured highlight
- Increase card `min-h` and padding
- Make featured "Lifestyle Membership" card slightly scaled up (`md:scale-105`) with stronger gold border
- Add subtle shadow to all cards
- Improve price typography hierarchy (larger price, smaller period)

#### 8. `src/components/sections/FounderSection.tsx` — Gold frame, quote style
- Increase photo size slightly (`w-96 h-96 md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]`)
- Add gold accent borders on two sides of the image (left and bottom) using pseudo-element or wrapper div
- Style the first paragraph's opening sentence as a pull-quote (larger text, italic or distinct styling)

#### 9. `src/components/sections/ProtocolSection.tsx` — Horizontal timeline
- Replace vertical card grid with a horizontal timeline layout
- Four steps in a row connected by a gold horizontal line
- Each step: gold circle number on top, step title below, subtitle below that
- The gold connecting line runs through the circles
- On mobile: stack vertically with a vertical gold line

### Key Constraints
- No text changes whatsoever
- No navigation changes
- All existing animations (scroll-reveal) preserved
- Mobile responsiveness maintained throughout

