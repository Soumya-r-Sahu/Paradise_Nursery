# 🌱 Paradise Nursery Shopping Application

A complete React e-commerce application for a plant nursery, built as the final project for the Coursera/IBM course "Developing Front-End Apps with React".

## ✨ Features

- **Product Listing**: Browse a beautiful collection of plants with images, descriptions, and prices
- **Shopping Cart**: Add items to cart, adjust quantities, and remove items
- **Dynamic Cart Badge**: Real-time cart count updates in the navbar
- **Sale Badges**: Visual indicators for discounted items
- **Checkout Flow**: Complete checkout process with success message
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
  components/
    Navbar.js          # Navigation bar with cart badge
    ProductCard.js     # Individual plant card component
    ProductList.js     # Grid of all plants
    Cart.js            # Shopping cart page
    CartItem.js        # Individual cart item component
  context/
    CartContext.js     # Global cart state management
  data/
    plants.js          # Plant inventory data
  App.js               # Main app component with routing
  index.js             # Entry point
  styles.css           # Global styles
```

## 🎯 Key Functionality

### Product List Page
- Displays all available plants in a responsive grid
- Each plant shows image, name, description, and price
- "SALE" badge for discounted items
- "Add to Cart" button that changes to "Added to Cart" temporarily

### Shopping Cart
- View all items in cart
- Increase/decrease quantities with +/- buttons
- Remove items with ❌ button
- Real-time total price calculation
- Continue Shopping button to return to product list
- Checkout button that clears cart and shows success message

### Cart Badge
- Located in top-right corner of navbar
- Shows total number of items in cart
- Updates automatically when items are added/removed

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **React Context API** - Global state management
- **CSS3** - Styling with modern features

## 📸 Screenshots Required for Submission

1. **Product listing page** - Shows all plants in grid layout
2. **Cart badge** - Navbar with cart icon and item count
3. **Cart page** - Shopping cart with items and controls
4. **Updated total price** - Cart showing calculated total
5. **Checkout success message** - Thank you message after checkout

## ✅ Project Requirements Met

- ✅ Functional components only (no class components)
- ✅ React hooks (useState, useContext)
- ✅ Reusable components (ProductCard, CartItem)
- ✅ Clean folder structure
- ✅ Add to cart functionality
- ✅ Cart badge with dynamic count
- ✅ Quantity controls (increase/decrease)
- ✅ Remove items from cart
- ✅ Total price calculation
- ✅ Checkout functionality
- ✅ Sale badges for discounted items
- ✅ Responsive design

## 🎓 Course Information

This project was created for:
- **Course**: Developing Front-End Apps with React (Coursera/IBM)
- **Project Type**: Final Project - Peer Graded Assignment
- **Focus**: React fundamentals, component architecture, state management

## 📝 Notes

- All components use functional components and React hooks
- Cart state is managed globally using React Context
- Images are loaded from Unsplash (placeholder URLs)
- No backend required - all data is stored in client-side state

## 🤝 Contributing

This is a course project. Feel free to use it as a reference or starting point for your own projects.

## 📄 License

This project is created for educational purposes as part of the Coursera/IBM React course.

---

**Happy Shopping! 🌿**

