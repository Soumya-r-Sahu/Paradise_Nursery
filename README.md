# 🌱 Paradise Nursery Shopping Application

A complete React e-commerce application for a plant nursery, built as the final project for the Coursera/IBM course "Developing Front-End Apps with React".

## 🚀 Live Demo

🌐 **Live Website**: https://Soumya-r-Sahu.github.io/Paradise_Nursery

The application is deployed and live on GitHub Pages!

## ✨ Features

- **Landing Page**: Beautiful landing page with company information and "Get Started" button
- **Product Listing**: Browse plants organized by categories (Air Purifying, Tropical, Medicinal)
- **Shopping Cart**: Full cart functionality with add, remove, increase/decrease quantity
- **Redux State Management**: Complete Redux implementation for cart state
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **React 18** - UI library
- **Redux** - State management
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icons
- **CSS3** - Styling with modern features

## 📁 Project Structure

```
src/
  components/
    Landing.jsx          # Landing page component
    Navbar.jsx           # Navigation bar with cart badge
    ProductCard.jsx      # Individual plant card component
    ProductList.jsx      # Grid of all plants by category
    Cart.jsx             # Shopping cart page
    CartItem.jsx         # Individual cart item component
  redux/
    store.js             # Redux store configuration
    actions/
      cartActions.js     # Redux action creators
    reducers/
      cartReducer.js     # Cart reducer
    selectors/
      cartSelectors.js   # Redux selectors
  data/
    plants.js            # Plant inventory data
  App.jsx                # Main app component with routing
  index.js               # Entry point
  styles.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Soumya-r-Sahu/Paradise_Nursery.git
cd Paradise_Nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Key Functionality

### Landing Page
- Background image with gradient overlay
- Company name and description
- "Get Started" button linking to product listing

### Product List Page
- Displays all available plants in a responsive grid
- Plants organized by categories (Air Purifying, Tropical, Medicinal)
- Each plant shows image, name, description, and price
- "SALE" badge for discounted items
- "Add to Cart" button that disables after adding

### Shopping Cart
- View all items in cart
- Increase/decrease quantities with +/- buttons
- Remove items with delete button
- Real-time total price and item count calculation
- Continue Shopping button to return to product list
- Checkout button (shows "Coming Soon" message)

### Cart Badge
- Located in top-right corner of navbar
- Shows total number of items in cart
- Updates automatically when items are added/removed

## 📸 Screenshots

[Add screenshots of your application here]

## ✅ Project Requirements Met

- ✅ Landing page with all required elements
- ✅ Product listing with 9+ plants in 3+ categories
- ✅ Add to cart functionality with button state management
- ✅ Header on both product and cart pages
- ✅ Shopping cart icon with dynamic count
- ✅ Complete shopping cart page with all features
- ✅ Redux implementation for state management
- ✅ Responsive design

## 🎓 Course Information

This project was created for:
- **Course**: Developing Front-End Apps with React (Coursera/IBM)
- **Project Type**: Final Project - Peer Graded Assignment
- **Focus**: React fundamentals, Redux state management, component architecture

## 📝 Notes

- All components use functional components and React hooks
- Cart state is managed globally using Redux
- Images are loaded from external sources (Unsplash, Pexels, etc.)
- No backend required - all data is stored in client-side state

## 🤝 Contributing

This is a course project. Feel free to use it as a reference or starting point for your own projects.

## 📄 License

This project is created for educational purposes as part of the Coursera/IBM React course.

---

**Happy Shopping! 🌿**

