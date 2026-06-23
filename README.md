# ABMscents

A simple static shop website for perfumes.

## Open It

Open `index.html` in a browser.

## What It Does

- Shows perfume products with real product photos.
- Marks items as available or not available based on stock.
- Lets customers search, add available items to cart, choose Mobile Money or Visa/Mastercard, and place a paid order.
- Shows a payment receipt and delivery progress from payment confirmation to delivery.
- Saves products, cart, and orders in the browser with `localStorage`.
- Includes an owner dashboard for stock changes and order status tracking.
- Exports an inventory CSV that can be edited in Excel and uploaded back into the dashboard.

## Edit Products

Open `app.js` and update the `seedProducts` list near the top of the file. Use the dashboard's reset button after changing seed data if the browser already has old demo data saved.

## Update Inventory With Excel

Open the Orders dashboard, download the inventory CSV, edit it in Excel, then save/upload it as CSV. Keep the header row: `id,name,category,price,stock,description,image`.
