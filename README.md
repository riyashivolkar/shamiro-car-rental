# Shamiro Rent A Car - Premium Self Drive Car Rental Website

A stunning, modern, and fully responsive website for **Shamiro Rent A Car**, a premium self-drive car rental service in Goa. Built with Next.js, React, Tailwind CSS, and TypeScript.

## 🎨 Design Features

### Color Palette
- **Primary**: Black (#1a1a1a) - Premium luxury feel
- **Accent**: Vibrant Yellow (#ffd700) - Bold highlights and CTAs
- **Background**: White (#ffffff) - Clean, readable surfaces
- **Secondary Neutrals**: Light grays for backgrounds and borders

### Typography
- **Primary Font**: Poppins (Bold headings)
- **Secondary Font**: Inter (Body text)
- Modern, clean, and highly readable hierarchy

### Design Elements
- Transparent navbar that becomes solid on scroll
- Hero section with luxury car background image
- Rounded cards with soft shadows and hover effects
- Smooth animations and transitions
- Mobile-first responsive design
- Premium automotive branding aesthetic

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Tablet** (768px to 1024px)
- **Mobile** (375px to 767px)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Home page (composes all sections)
│   ├── globals.css         # Global styles and design tokens
├── components/
│   ├── navbar.tsx          # Navigation bar with scroll effect
│   ├── hero.tsx            # Hero section with booking form
│   ├── featured-cars.tsx   # Car gallery with pricing
│   ├── why-us.tsx          # Features/benefits section
│   ├── reviews.tsx         # Customer testimonials
│   ├── cta-section.tsx     # Call-to-action section
│   ├── footer.tsx          # Footer with contact info
├── public/
│   ├── hero-car.jpg        # Hero background image
│   ├── car-1.jpg           # Mercedes S-Class
│   ├── car-2.jpg           # BMW 7 Series
│   ├── car-3.jpg           # Audi Q7
```

## 🔧 Key Components

### Navbar (`navbar.tsx`)
- Fixed positioning with transparent initial state
- Turns solid on scroll (scroll detection at 50px)
- Mobile-responsive hamburger menu
- Smooth navigation links to all sections
- Logo branding with yellow accent

### Hero Section (`hero.tsx`)
- Full-screen background image of luxury car
- Bold headline: "Premium Self Drive Cars in Goa"
- Booking form with:
  - Location dropdown
  - Pickup & Return date pickers
  - Car type selector
  - Search button
- Call-to-action buttons (Book Now, WhatsApp Chat)
- Dark overlay for text readability

### Featured Cars (`featured-cars.tsx`)
- Three premium vehicle cards
- Car images with pricing
- Vehicle specifications:
  - Number of seats
  - Fuel type
  - Transmission
  - AC availability
- Star ratings and customer reviews
- Quick booking buttons
- Hover scale animation effects

### Why Choose Us (`why-us.tsx`)
- Six key benefits highlighted
- Icons with accent color
- Card-based layout with hover effects
- Features include:
  - Trusted & Insured
  - Quick Bookings
  - Best Prices
  - 24/7 Support
  - Goa Coverage
  - Premium Fleet

### Customer Reviews (`reviews.tsx`)
- Six verified customer testimonials
- Star ratings
- Customer avatars (emojis)
- Location and date information
- Statistics section with:
  - 4.9★ Average Rating
  - 2500+ Happy Customers
  - 98% Satisfaction Rate

### CTA Section (`cta-section.tsx`)
- Dark background with white text
- Primary call-to-action for WhatsApp booking
- Secondary phone call option
- Four benefit boxes highlighting:
  - Instant Confirmation
  - Special Discounts
  - Flexible Cancellation
  - Personalized Service

### Footer (`footer.tsx`)
- Dark background matching header
- Brand information and social links
- Quick navigation links
- Service categories
- Contact information
- Copyright and legal links

## 🎯 Features

✅ **Modern UI/UX**
- Clean, minimal design
- Intuitive navigation
- Clear visual hierarchy

✅ **Premium Feel**
- Luxury automotive branding
- High-quality imagery
- Elegant typography
- Soft shadows and rounded corners

✅ **Fully Responsive**
- Mobile-first approach
- Adaptive layouts
- Touch-friendly buttons

✅ **Interactive Elements**
- Scroll-triggered navbar effect
- Hover animations on cards and buttons
- Smooth transitions
- Form inputs with icons

✅ **Accessibility**
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

✅ **Performance**
- Optimized images
- Clean CSS
- Minimal JavaScript
- Fast loading times

## 🚀 Getting Started

### Installation

1. Clone or download the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Colors

Edit the design tokens in `/app/globals.css`:
```css
:root {
  --primary: #1a1a1a;
  --accent: #ffd700;
  --background: #ffffff;
  /* ... other tokens ... */
}
```

### Content

Update text and data in the component files:
- Hero headline in `components/hero.tsx`
- Car details in `components/featured-cars.tsx`
- Features in `components/why-us.tsx`
- Reviews in `components/reviews.tsx`
- Contact info in `components/footer.tsx`

### Images

Replace car images in the `/public` directory:
- `hero-car.jpg` - Hero section background
- `car-1.jpg`, `car-2.jpg`, `car-3.jpg` - Vehicle cards

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Best Practices

- All external links are ready for integration
- Form submission handlers can be connected to backend
- Mobile menu auto-closes on navigation
- Navbar provides visual feedback on scroll
- Images are optimized and lazy-loaded

## 📝 License

This is a custom design created for Shamiro Rent A Car. All rights reserved.

## 💡 Future Enhancements

- Connect booking form to backend API
- Add WhatsApp integration
- Implement car availability calendar
- Add payment gateway integration
- Set up email notifications
- Add admin dashboard for car management
- Implement user reviews system
- Add blog/blog section for travel tips

---

**Built with ❤️ for your perfect Goa journey**

Shamiro Rent A Car © 2024. All rights reserved.
