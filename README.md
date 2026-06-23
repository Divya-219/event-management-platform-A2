#  Event Management Platform

An Event Management Platform built with React, React Router Data API, TanStack Query, Redux Toolkit, and JSON Server.

Users can discover events, view event details, book tickets through a multi-step booking process, manage bookings, and create new events.

---

#  Features

## 1. Event Discovery

### Events Listing (/)

- Display events in responsive grid layout
- Search events using useDeferredValue
- Filter by:
  - Category
  - Date Range
  - Price Range
- Sort by:
  - Date
  - Price
- Favorite events with optimistic updates
- Data fetching using TanStack Query

---

## 2. Event Details (/events/:id)

- React Router Loader
- Event information
- Organizer details
- Venue information
- Ticket types
- Availability status
- Book Now button
- Deferred loading using React Router defer()

---

## 3. Booking Flow (/book/:eventId)

Multi-Step Booking Wizard

### Step 1: Select Tickets

- Ticket type selection
- Quantity selection
- Dynamic total calculation

### Step 2: Attendee Information

- Name
- Email
- Phone
- Validation

### Step 3: Confirmation

- Booking summary
- Booking reference number
- Optimistic UI updates

Technologies Used:

- useReducer
- useOptimistic
- TanStack Query Mutation

---

## 4. My Bookings (/my-bookings)

- View user bookings
- Upcoming bookings
- Past bookings
- Cancelled bookings
- Booking cancellation
- Optimistic updates

Features:

- Query caching
- staleTime configuration
- Loading states
- Error handling

---

## 5. Create Event (/create-event)

Multi-Step Event Creation Wizard

### Step 1

Basic Information

- Title
- Description
- Category
- Image URL

### Step 2

Event Details

- Date
- Time
- Location
- Dynamic Ticket Types

### Step 3

Preview & Publish

Features:

- Redux Toolkit
- createSlice
- Async publish action
- Draft persistence using localStorage

---

## 6. Theme & User Context

### Theme Context

- Light Mode
- Dark Mode
- Persisted using localStorage

### Auth Context

- Simulated user authentication
- User preferences

---

#  Tech Stack

## Frontend

- React
- Vite
- React Router DOM



## State Management

- TanStack Query
- Redux Toolkit
- Context API
- useReducer

## Backend

- JSON Server

---

# Folder Structure

src/

├── components/
├── pages/
├── context/
├── reducers/
├── routes/
├── store/

├── App.jsx
├── App.css
├── index.css
├── main.jsx


---

#  Routes

| Route | Description |
|---------|-------------|
| / | Events Listing |
| /events/:id | Event Details |
| /book/:eventId | Booking Flow |
| /my-bookings | User Bookings |
| /create-event | Create Event |
| /profile | User Profile |

---

#  API Endpoints

GET /events

GET /events/:id

POST /events

GET /bookings?userId=user1

POST /bookings

PATCH /bookings/:id

GET /users/:id

PATCH /users/:id

---

#  Packages Used

```bash
npm install react-router-dom
npm install @tanstack/react-query
npm install @reduxjs/toolkit react-redux
npm install axios
npm install json-server



---
# Installation

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Run backend:

```bash
npm run server
```

---
# Learning Objectives

React Router Data APIs
Loaders & Actions
Deferred Data Loading
TanStack Query Caching
Redux Toolkit
Context API
Optimistic UI Updates
Advanced React Hooks
Multi-Step Forms
State Management Patterns

# Author
Divya Patel