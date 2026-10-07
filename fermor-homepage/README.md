# Fermor -- Homepage Redesign

A frontend implementation of a redesigned homepage for **Fermor**, a
personal finance platform focused on helping users understand, manage,
and grow their finances.

## Overview

This project was created as part of the Fermor Frontend Developer
Internship Assignment.

The objective was to design and implement a new Fermor homepage that:

-   Clearly communicates what Fermor does and who it is for
-   Provides a polished and professional financial-product experience
-   Makes navigation and information hierarchy a priority
-   Works responsively across desktop and mobile screen sizes
-   Demonstrates frontend implementation and product/design thinking

The design is an original interpretation of Fermor rather than a direct
recreation of the existing website.

## Design Approach

While exploring the existing Fermor website, I found the visual
direction attractive and engaging. However, I felt that the amount of
continuous visual motion could sometimes compete with the information
and navigation.

For a financial platform, I wanted the experience to feel:

-   **Clear** -- users should understand Fermor quickly
-   **Calm** -- visual elements should support the content rather than
    distract from it
-   **Structured** -- financial information should have a clear
    hierarchy
-   **Modern** -- the interface should still feel polished and engaging
-   **Product-focused** -- the homepage should give users a sense of the
    actual Fermor experience

This led me towards a cleaner homepage structure with controlled visual
elements and clear sections.

## Homepage Structure

The homepage was structured as a user journey rather than a collection
of unrelated sections:

1.  **Navigation**
    -   Provides access to the main areas of the site
    -   Includes a clear call-to-action
2.  **Hero Section**
    -   Introduces Fermor's purpose immediately
    -   Establishes the main value proposition
    -   Uses financial-product visuals to make the concept
        understandable at a glance
3.  **What Fermor Does**
    -   Highlights the main areas of the product
    -   Focuses on spending, financial planning, and goal setting
4.**Ask Anything**
    -   Answers any questions from the users
    -   assisst them when they feel lost 
4.  **Financial Forecasting**
    -   Communicates Fermor's ability to help users think about their
        financial future
    -   Uses financial visualisation to make the concept easier to
        understand
5.  **Investments / Growing with Fermor**
    -   Highlights the investment and wealth-growth aspect of the
        product
6.  **Call to Action**
    -   Gives users a clear next step after learning about the product
7.  **Insights / News**
    -   Adds an educational/content dimension to the homepage
8.  **Frequently Asked Questions**
    -   Provides quick answers to common questions
    -   Helps reduce uncertainty before getting started
9.  **Footer**
    -   Provides supporting navigation and closing information

## Key Design Decisions

### 1. Pre-login experience

I designed the page as a **pre-login homepage** rather than a logged-in
financial dashboard.

The purpose of the homepage is to explain Fermor's value and encourage
users to explore or get started. However, dashboard-style financial
visuals are used throughout the page to give users an idea of what the
product experience could look like after signing in.

This creates a connection between the marketing experience and the
actual product.

### 2. Clear information hierarchy

Financial products can contain a large amount of information, so the
page was structured from broad to specific:

**What Fermor is → What it can do → How it can help → Why it matters →
Get started**

This allows users to understand the product progressively instead of
being presented with too much information at once.

### 3. Controlled visual motion

Rather than relying heavily on continuous animation, visual elements are
intended to support the user's understanding of the product.

This decision was made because animation can be useful for communicating
financial trends and interactions, but excessive motion can make a
finance-focused interface feel distracting.

### 4. Product visualisation

Instead of relying only on marketing copy, financial UI elements such as
charts, cards, investment information, and forecasting visuals are used
to demonstrate Fermor's functionality.

The goal is to make the product understandable visually, even before a
user creates an account.

### 5. Responsive design

The layout was designed to adapt to different screen sizes.

Desktop layouts use larger content areas and horizontal arrangements
where appropriate, while smaller screens reorganise content vertically
to maintain readability and usability.

## Technology Stack

### Next.js

Next.js was used as the primary frontend framework.

Reasons for choosing Next.js:

-   React-based component architecture
-   Good support for modern frontend development
-   Straightforward deployment to platforms such as Vercel

### CSS

CSS was used for styling and responsive layout.

This was useful for implementing the custom visual direction of the
homepage rather than adapting the entire design to a predefined
component system.

## Development Process

The project was developed through the following process:

### 1. Product understanding

I first explored Fermor's existing website to understand its product,
visual language, and user experience.

### 2. UX evaluation

I considered which parts of the existing experience worked well and
identified areas where I felt the homepage could place greater emphasis
on clarity, navigation, and ease of use.

### 3. Wireframing

Before implementation, I created a rough layout to determine:

-   Section order
-   Content hierarchy
-   User flow
-   Placement of financial visuals
-   Calls to action

This helped establish the structure before moving into detailed UI
implementation.

### 4. Visual design

The rough structure was then translated into a more polished visual
direction, with emphasis on typography, spacing, hierarchy, financial UI
elements, and responsive behaviour.

### 5. Frontend implementation

The design was implemented using Next.js and CSS, with the homepage
broken into reusable UI sections/components where appropriate.

### 6. Responsive implementation

The layout and styling were adjusted for smaller screens so that the
experience remains usable across desktop and mobile devices.

### 7. Deployment

The completed project was deployed so that the homepage could be tested
as a live web experience rather than only as a local development
project.

## Project Structure

The exact structure may vary depending on the Next.js configuration, but
the project follows a component-based organisation similar to:

``` text
fermor/
├── app/ or pages/
│   └── ...
├── components/
│   └── ...
├── public/
│   └── ...
├── styles/
│   └── ...
├── package.json
└── README.md
```

## Running Locally

### Prerequisites

Make sure you have:

-   Node.js installed
-   npm installed

### Installation

Clone the repository:

``` bash
git clone <https://github.com/Anbitha/fermor-homepage>
```

Move into the project directory:

``` bash
cd <fermor-homepage>
```

Install dependencies:

``` bash
npm install
```

### Development Server

Start the development server:

``` bash
npm run dev
```

Then open:

``` text
http://localhost:3000
```

## Production Build

To create a production build:

``` bash
npm run build
```

To run the production build locally:

``` bash
npm start
```

## Deployment

The project is deployed as a live web application.

**Live Demo:** `<https://fermor-homepage-ashen.vercel.app/>`

**GitHub Repository:** `<https://github.com/Anbitha/fermor-homepage>`

## Notes

This project focuses specifically on the homepage experience requested
in the assignment. The financial data and visualisations presented in
the interface are UI representations intended to communicate the product
experience; this implementation does not represent a connected financial
account or real financial advice.

## Conclusion

The main design goal was to create a Fermor homepage that balances
**visual appeal with clarity**.

Rather than trying to maximise animation or visual complexity, the
design focuses on helping users understand the product quickly and
giving them a clear path from discovering Fermor to taking action.

The implementation demonstrates this approach through a responsive
Next.js frontend, custom CSS styling, structured content hierarchy, and
financial-product visualisations.
