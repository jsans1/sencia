# Overview

Sencia is a health tracking application designed for patients with chronic illnesses, particularly hypertension. The project consists of two main components: a React-based main application built with Vite and Supabase for data management, and a separate health tracking onboarding flow built with TypeScript and extensive UI components. The application enables users to track their health metrics, manage medications, and receive personalized care plans through an intuitive mobile-first interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Main Application**: React 19.1.0 with Vite 6.3.5 as the build tool
- **UI Framework**: Tailwind CSS for styling with custom CSS variables for theming
- **Component Library**: Radix UI primitives for accessibility and consistent behavior
- **State Management**: React hooks (useState) for local component state
- **Routing**: React Router DOM 7.6.2 for navigation
- **Icons**: Heroicons and Lucide React for consistent iconography

## Mobile-First Design
- Optimized for mobile devices with max-width constraints (430px)
- iOS-style status bar and home indicator components
- Touch-friendly interface elements
- Progressive web app capabilities

## Data Management
- **User Profiles**: Comprehensive health profiles including personal information, medical conditions, and treatment history
- **Health Metrics**: Daily tracking of symptoms like fatigue, swelling, palpitations, sleep quality, and medication adherence
- **Fake Data Layer**: Currently uses mock data (fakeProfile.js) with structured health information for development and testing

## Onboarding Flow
- Multi-step wizard for collecting chronic illness information
- Medical condition categorization and medication management
- Notification scheduling and frequency preferences
- Care plan generation and completion summary

## Chart and Visualization
- Chart.js 4.4.9 for health data visualization
- PDF generation capabilities with jsPDF and jsPDF-autotable for reports
- Interactive charts for tracking health trends over time

## Design System
- Consistent color palette with CSS custom properties
- Typography using SF Pro Display font family
- Standardized spacing and border radius values
- Dark mode support through CSS variable switching
- Component variants for different use cases (primary, secondary, destructive, etc.)

# External Dependencies

## Backend Services
- **Supabase**: Primary backend-as-a-service for user authentication, data storage, and real-time subscriptions
  - Database URL: qnhkgzgqjaulddorqkpo.supabase.co
  - Provides user management and data persistence

## UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives including dialogs, dropdowns, forms, and navigation components
- **Lucide React**: Icon library for consistent iconography
- **Heroicons**: Additional icon set for specific UI elements

## Utility Libraries
- **clsx**: Conditional className utility for dynamic styling
- **tailwind-merge**: Tailwind CSS class merging utility
- **class-variance-authority**: Component variant system for consistent design patterns

## Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting with React-specific rules
- **TypeScript support**: Type definitions for React components

## Chart and Document Generation
- **Chart.js**: Canvas-based charting library for health data visualization
- **jsPDF**: Client-side PDF generation for health reports
- **jsPDF-autotable**: Table plugin for structured PDF layouts

## Form Handling
- **React Hook Form**: Performant form library with validation
- **React Day Picker**: Date selection component for appointment scheduling