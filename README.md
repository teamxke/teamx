# Team X Website

Welcome to the official website of **Team X**, an organization dedicated to developing cutting-edge software solutions. This README provides an overview of the project structure, features, and how to run the website locally.

---

## Table of Contents

- [Team X Website](#team-x-website)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack)
  - [Components](#components)
  - [Features](#features)
  - [Running the Project Locally](#running-the-project-locally)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)

---

## Project Overview

The Team X website is a Next.js-based platform that introduces the organization, highlights its current projects, and provides contact details for collaboration opportunities. The website is styled using **Tailwind CSS** and developed with **TypeScript** for a modern and robust design.

---

## Tech Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS with ShadCN components
- **Language**: TypeScript

---

## Components

The website is composed of modular components stored in the `components` folder:

1.  ui - contains components installed from shadcn
2.  plugins - contains reusable plugins code like theme, table, etc
3.  widgets - contains custom made app componets

---

## Features

1. **Responsive Design**: The website is mobile-friendly and adapts seamlessly to various screen sizes.
2. **TypeScript Integration**: Ensures type safety and better development experience.
3. **ShadCN Components**: Provides pre-built Tailwind components for enhanced UI consistency.
4. **Project Details**: Detailed descriptions of ongoing projects.

---

## Running the Project Locally

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or above)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/teamxke/teamx.git
   ```

2. Navigate to the project directory:

   ```bash
   cd teamx
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```
