# CredentialFlow Dashboard

CredentialFlow Dashboard is a React and TypeScript healthcare operations dashboard inspired by Medical Staff Office credentialing workflows. The app uses fictional provider data to track credentialing status, missing documentation, license and DEA expiration risks, malpractice insurance status, CAQH readiness, peer references, and committee review readiness.

This project connects healthcare administration domain knowledge with frontend dashboard design, workflow tracking, risk prioritization, and user-focused data presentation.

## Live Demo

https://credentialflow-dashboard.vercel.app

## Project Purpose

Credentialing workflows involve collecting, reviewing, and verifying provider documentation before a physician or advanced practice professional can move forward in the hospital review process. This dashboard was built as a portfolio project to demonstrate how a complex administrative workflow can be translated into a clean, interactive frontend application.

The project uses mock provider records only. No real provider, facility, or credentialing data is included.

## Features

- Dashboard summary cards for credentialing workload visibility
- Mock provider data for physicians and advanced practice professionals
- Provider cards with credentialing status, specialty, risk level, and completion percentage
- Search by provider name, specialty, status, risk level, credentials, or missing documents
- Filters for status, specialty, risk level, and provider type
- Sort options for completion, risk, committee date, and license expiration
- Priority Queue for high-risk, incomplete, or expiring files
- Smart Review Notes with workflow-based insights
- Credentialing checklist grouped by document category
- Risk and completion legend
- Expandable provider detail cards
- Expiration urgency badges
- Back to Top button
- Responsive dashboard layout

## Credentialing Areas Represented

The dashboard groups credentialing requirements into common workflow categories:

- Education & Training
- Licensure & Registrations
- Clinical Competence
- Risk & Background
- Administrative Requirements

## Provider Types Included

The mock dataset includes a mix of hospital credentialing scenarios for:

- Physicians
- Advanced Practice Professionals
- Anesthesiology
- OB/GYN
- Certified Nurse Midwife
- CRNA
- Emergency Medicine
- Family Medicine
- Internal Medicine / Hospitalist
- Cardiology
- Pediatrics
- Orthopedics
- General Surgery
- Neurology

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Mock Data
- Vercel

## What I Focused On

- Translating a real administrative workflow into a frontend dashboard
- Structuring reusable React components
- Using TypeScript interfaces for provider data
- Creating search, filter, and sort functionality
- Highlighting high-priority records with workflow logic
- Designing a clean, responsive user interface
- Keeping the project portfolio-safe with fictional data

## Project Structure

```txt
src/
  components/
    BackToTopButton.tsx
    CredentialingChecklist.tsx
    DashboardCards.tsx
    FilterBar.tsx
    PriorityQueue.tsx
    ProviderCard.tsx
    RiskLegend.tsx
    SmartInsights.tsx
  data/
    providers.ts
  types/
    provider.ts
  utils/
    dashboardUtils.ts
  App.css
  App.tsx
  main.tsx
