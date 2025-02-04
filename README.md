# Responsive React E-Commerce UI with Search, Modal & Cart

## Overview

This is a responsive e-commerce application built with **React**, **Tailwind CSS**, and **Redux**. The application simulates a front-end for an e-commerce website, fetching product data from the **FakeStore API**. It includes features like product search, category filtering, product detail modals, and a cart indicator.

  
## Tech Stack

- **React**: For building the UI components.
- **Redux**: For state management (cart state).
- **Tailwind CSS**: For styling the UI with responsive design utilities.
- **FakeStore API**: For fetching product data.

## API Endpoints

- **Categories**: `GET https://fakestoreapi.com/products/categories`
- **Products by Category**: `GET https://fakestoreapi.com/products/category/{categoryName}`
- **All Products**: `GET https://fakestoreapi.com/products`
- **Single Product**: `GET https://fakestoreapi.com/products/{productId}`

## Installation & Running the Project

1. Clone the repository:
   ```bash
   https://github.com/rishiraj2603/test-Harmoni.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Design Decisions

- **React Components**: Each feature (Search, Product card, Rating) is split into reusable components for better maintainability.
- **Responsive Layout**: Tailwind CSS was used to ensure the application works well on mobile, tablet, and desktop devices.
- **Redux**: Used to manage cart state and category search filter, ensuring the state is shared across components.

## Known Issues & Future Improvements

- **Error Handling**: API errors (e.g., network failure, empty categories) could be handled more gracefully.

