# RIRA Company Task: Notes Management App

This project is a simple Notes Management App built using React and Material-UI (MUI). The app allows users to add, delete, and edit notes, with all data stored locally in the browser's local storage. The project is bootstrapped with Vite, a fast build tool for modern web projects.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Custom Hooks](#custom-hooks)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Add Notes:** Create new notes with a text, submitted date and deadline.
- **Edit Notes:** Update existing notes.
- **Delete Notes:** Remove notes you no longer need.
- **Draggable Notes:** Rearrange your notes by dragging and dropping them.
- **Local Storage:** All notes are stored locally, so they persist even after the browser is closed. 

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material-UI (MUI):** React components for faster and easier web development.
- **uuid:** A library to generate unique IDs for each note.
- **Local Storage:** Web storage for persisting notes data in the browser.

## Custom Hooks
- **useToday:** A custom hook that calculates the current date using the `Date` object and returns it.
- **useFormValues:** A custom hook that creates a `value` and `onChange` event handler for form inputs, simplifying the management of form state.
- **useBoolean:** A custom hook that returns a boolean value and an `onClick` event handler to toggle the boolean value.

## Getting Started

To get a local copy of the project up and running, follow the steps below.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

## Installation
1. **Clone the repository:**
```bash
git clone https://github.com/amir4774/Rira-Task.git
```
2. **Install the dependencies:**
```bash
# using npm
npm install
# or using yarn
yarn install
```
## Usage

1. **Run the application:**

```bash
# using npm
npm run dev
# or using yarn
yarn dev
```
2. **Open your browser:**

Navigate to the URL provided in the terminal output (usually http://localhost:5173) to view the app.
