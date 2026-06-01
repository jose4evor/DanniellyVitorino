---
name: Dra. Danielly Vitorino Dental Identity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#62fae3'
  on-secondary-container: '#007165'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is anchored in the intersection of clinical excellence and empathetic care. The brand personality is **Professional, Clinical, and Serene**, specifically tailored for a specialized dental practice focusing on Periodontics and Hospital Dentistry. 

The aesthetic follows a **Modern Corporate** approach with a **Tactile** softness. It prioritizes high legibility and a sense of "sterile warmth"—conveying the cleanliness of a clinic while removing the "medical anxiety" through soft edges and rhythmic whitespace. The UI should evoke an immediate sense of trust and precision, positioning the practitioner as an authority in high-complexity dental care.

## Colors

The palette is designed to balance authority with vitality:
- **Primary (Deep Navy):** Used for headings, primary buttons, and structural elements to establish professional weight and stability.
- **Secondary (Soft Teal):** Used for accents, success states, and call-to-action highlights, representing health, hygiene, and the clinical nature of periodontics.
- **Neutral (Slate & Cloud):** A range of cool grays used for body text and subtle backgrounds to maintain a high-contrast, clean environment.
- **White Space:** Extensive use of pure white (#FFFFFF) is mandatory to simulate the clinical environment and ensure the UI feels "breathable" and accessible.

## Typography

This design system utilizes a dual-font strategy to balance character with functionality. 
- **Montserrat** provides a geometric, confident structure for headings, reflecting the precision required in dental surgery and periodontics. 
- **Inter** is used for all functional and body text to ensure maximum readability, especially for older patients or those accessing home care information on mobile devices. 

Tracking should be slightly tightened for large headlines and slightly loosened for small labels to maintain clarity.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a premium, editorial feel, transitioning to a fluid model for mobile. 
- **Desktop:** 12-column grid with a 1200px max-width.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column grid with 20px side margins.

Vertical rhythm is strictly maintained using a 8px baseline. Large section spacing (80px+) should be used to separate clinical services (e.g., Home Care vs. Hospital Dentistry) to ensure information is not overwhelming for the user.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 
- Surfaces should primarily be flat or slightly raised using a subtle shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`. 
- High-priority cards (like "Book a Consultation") use a secondary shadow to appear more interactive.
- Use semi-transparent white overlays (0.8 opacity) for navigation bars to maintain a sense of depth without cluttering the clinical aesthetic.

## Shapes

The design system employs **Rounded** corners to project approachability and safety. Sharp 90-degree angles are avoided to reduce "clinical coldness." 
- Standard components (inputs, buttons) use a 0.5rem (8px) radius.
- Large containers and image cards use 1rem (16px) to create a soft, modern framing for dental photography.

## Components

### Buttons
- **Primary:** Deep Navy background, white text, 8px radius. High-contrast for "Schedule Appointment."
- **Secondary:** Soft Teal background or border. Used for "Learn More" or specific service categories.
- **Ghost:** Transparent with Navy text, used for low-priority navigation.

### Input Fields
- White background with a 1px border (#E2E8F0). Focus state uses a 2px Teal border. Labels are always visible above the field in **Inter Semi-Bold**.

### Cards
- Used for Service highlights (Periodontics, Home Care). Cards must include a generous 32px internal padding and utilize the "Soft" elevation style.

### Specialized Components
- **Service Badge:** Small, pill-shaped labels using the Secondary (Teal) color at 10% opacity with 100% opacity text for categorizing "Hospital" vs "Home Care" services.
- **Testimonial Slider:** High-quality portrait imagery paired with italicized Inter typography to build patient trust.