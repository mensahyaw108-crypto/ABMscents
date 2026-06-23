const { useEffect, useMemo, useState } = React;
const h = React.createElement;

const seedProducts = [
  {
    id: "p1",
    name: "Al Haramain Gold",
    brand: "Al Haramain",
    category: "Fragrance",
    price: 180,
    stock: 8,
    rating: 4.8,
    reviews: 24,
    oldPrice: 220,
    unit: "100 ml",
    offer: "Special offer",
    description: "A warm amber-gold signature with a polished gift-room glow.",
    image: "images/web-alharamain-amber-oud-gold.jpg"
  },
  {
    id: "p2",
    name: "Club de Nuit Intense",
    brand: "Armaf",
    category: "Fragrance",
    price: 95,
    stock: 6,
    rating: 4.6,
    reviews: 38,
    oldPrice: 125,
    unit: "105 ml",
    offer: "20% off",
    description: "A bold evening scent with a sharp suit and a richer finish.",
    image: "images/web-club-de-nuit-intense.webp"
  },
  {
    id: "p3",
    name: "Hawas Fire",
    brand: "Rasasi",
    category: "Fragrance",
    price: 210,
    stock: 12,
    rating: 4.7,
    reviews: 31,
    unit: "100 ml",
    offer: "Freebie",
    description: "Spice, heat, and freshness bottled for a memorable entrance.",
    image: "images/web-hawas-fire.jpg"
  },
  {
    id: "p4",
    name: "Hawas Ice",
    brand: "Rasasi",
    category: "Fragrance",
    price: 145,
    stock: 5,
    rating: 4.4,
    reviews: 31,
    oldPrice: 180,
    unit: "100 ml",
    offer: "Special offer",
    description: "A cool aquatic profile for crisp, clean everyday wear.",
    image: "images/web-hawas-ice.jpg"
  },
  {
    id: "p5",
    name: "Issey Miyake",
    brand: "Issey Miyake",
    category: "Fragrance",
    price: 2450,
    stock: 3,
    rating: 4.9,
    reviews: 12,
    unit: "125 ml",
    offer: "Limited stock",
    description: "Refined freshness with an effortless signature trail.",
    image: "images/web-issey-miyake.png"
  },
  {
    id: "p6",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Skincare",
    price: 95,
    stock: 18,
    rating: 4.8,
    reviews: 55,
    unit: "30 ml",
    offer: "Trending",
    description: "Brightening serum for everyday routine-building and skin shelf variety.",
    image: "images/web-the-ordinary-niacinamide.png"
  },
  {
    id: "p7",
    name: "Moisturising Cream",
    brand: "CeraVe",
    category: "Skincare",
    price: 165,
    stock: 14,
    rating: 4.9,
    reviews: 44,
    unit: "454 g",
    offer: "Dermocosmetic",
    description: "Simple barrier-care cream to represent pharmacy skincare essentials.",
    image: "images/web-cerave-moisturising-cream.webp"
  },
  {
    id: "p8",
    name: "Lash Sensational Mascara",
    brand: "Maybelline New York",
    category: "Makeup",
    price: 120,
    stock: 11,
    rating: 4.6,
    reviews: 19,
    oldPrice: 145,
    unit: "9.5 ml",
    offer: "Try it on",
    description: "A mascara-style makeup hero for the colour and cosmetics department.",
    image: "images/web-maybelline-lash-sensational.png"
  },
  {
    id: "p9",
    name: "Cheirosa Body Mist",
    brand: "Sol de Janeiro",
    category: "Body care",
    price: 240,
    stock: 9,
    rating: 4.8,
    reviews: 22,
    unit: "90 ml",
    offer: "Freebie",
    description: "A body mist example that bridges fragrance, body care, and gifting.",
    image: "images/web-sol-de-janeiro-cheirosa.webp"
  },
  {
    id: "p10",
    name: "Anthelios SPF Fluid",
    brand: "La Roche-Posay",
    category: "Sun care",
    price: 210,
    stock: 10,
    rating: 4.8,
    reviews: 33,
    unit: "50 ml",
    offer: "Sun care",
    description: "Sun-care representation for a practical daily skincare shelf.",
    image: "images/web-la-roche-posay-anthelios.jpg"
  },
  {
    id: "p11",
    name: "Micellar Cleansing Water",
    brand: "Garnier",
    category: "Skincare",
    price: 85,
    stock: 16,
    rating: 4.7,
    reviews: 28,
    unit: "400 ml",
    offer: "Routine essential",
    description: "Cleanser and remover example for routine-led browsing.",
    image: "images/web-garnier-micellar-water.jpg"
  },
  {
    id: "p12",
    name: "Urea Cica Repair Body Cream",
    brand: "Mixa",
    category: "Body care",
    price: 135,
    stock: 12,
    rating: 4.8,
    reviews: 13,
    oldPrice: 160,
    unit: "250 ml",
    offer: "Body deal",
    description: "Body-care staple for dry-skin and repair-focused shopping.",
    image: "images/web-mixa-urea-cica-repair.jpg"
  },
  {
    id: "p13",
    name: "Acidic Bonding Shampoo",
    brand: "Redken",
    category: "Haircare",
    price: 260,
    stock: 7,
    rating: 4.5,
    reviews: 18,
    unit: "300 ml",
    offer: "Professional",
    description: "Professional haircare example for strengthening and salon-style routines.",
    image: "images/web-redken-acidic-bonding-shampoo.jpg"
  },
  {
    id: "p14",
    name: "No.3 Hair Perfector",
    brand: "Olaplex",
    category: "Haircare",
    price: 285,
    stock: 6,
    rating: 4.9,
    reviews: 27,
    unit: "100 ml",
    offer: "Premium hair",
    description: "Bond-care treatment example for premium hair repair shelves.",
    image: "images/web-olaplex-no3-hair-perfector.png"
  },
  {
    id: "p15",
    name: "Build Your Discovery Box",
    brand: "ABM Beauty",
    category: "Gift sets",
    price: 70,
    stock: 24,
    rating: 4.7,
    reviews: 16,
    unit: "5 samples",
    offer: "Discovery box",
    description: "Sample-style box for trying fragrance, skincare, haircare, and body minis.",
    image: "images/web-beauty-discovery-box.jpg"
  },
  {
    id: "p16",
    name: "Tropical Bronze Sunscreen",
    brand: "NIVEA SUN",
    category: "Sun care",
    price: 110,
    stock: 13,
    rating: 4.9,
    reviews: 23,
    oldPrice: 140,
    unit: "200 ml",
    offer: "Special offer",
    description: "Sun category example for holiday, SPF, and outdoor beauty shopping.",
    image: "images/web-nivea-tropical-bronze.png"
  },
  {
    id: "p17",
    name: "Lasting Finish Lipstick",
    brand: "Rimmel",
    category: "Makeup",
    price: 65,
    stock: 20,
    rating: 4.7,
    reviews: 19,
    unit: "4 g",
    offer: "Freebies",
    description: "Lip colour example for promo-led makeup merchandising.",
    image: "images/web-rimmel-lasting-finish-lipstick.jpg"
  },
  {
    id: "p18",
    name: "Arabian Amber Home Diffuser",
    brand: "ABM Home",
    category: "Home fragrance",
    price: 180,
    stock: 8,
    rating: 4.6,
    reviews: 9,
    unit: "150 ml",
    offer: "Home fragrance",
    description: "Home fragrance gives the catalogue another Notino-style department.",
    image: "images/web-arabian-amber-diffuser.webp"
  },
  {
    id: "p19",
    name: "Sensitive Brush Heads",
    brand: "Oral-B",
    category: "Oral care",
    price: 130,
    stock: 15,
    rating: 4.8,
    reviews: 21,
    unit: "4 pcs",
    offer: "Oral care",
    description: "Oral-care example to make the store feel like a full beauty marketplace.",
    image: "images/web-oralb-sensitive-brush-heads.jpg"
  },
  {
    id: "p20",
    name: "Gentle Baby Wash",
    brand: "Mustela",
    category: "Mother and child",
    price: 115,
    stock: 10,
    rating: 4.9,
    reviews: 18,
    unit: "500 ml",
    offer: "Family care",
    description: "Gentle family-care category example for future expansion.",
    image: "images/web-mustela-gentle-baby-wash.png"
  },
  {
    id: "p21",
    name: "Cicaplast Repair Balm",
    brand: "La Roche-Posay",
    category: "Dermocosmetics",
    price: 150,
    stock: 17,
    rating: 4.9,
    reviews: 41,
    unit: "100 ml",
    offer: "Dermocosmetic",
    description: "Repair balm example for pharmacy-style skincare browsing.",
    image: "images/web-la-roche-posay-cicaplast-balm.jpg"
  },
  {
    id: "p22",
    name: "Snail Mucin Essence",
    brand: "COSRX",
    category: "K-Beauty",
    price: 170,
    stock: 12,
    rating: 4.8,
    reviews: 35,
    unit: "100 ml",
    offer: "K-Beauty",
    description: "K-beauty routine example for trend-led category browsing.",
    image: "images/web-cosrx-snail-mucin-essence.jpg"
  }
];

const deliveryStages = ["Payment confirmed", "Processing", "Packed", "Out for delivery", "Delivered"];
const paymentMethods = { momo: "Mobile Money", card: "Visa / Mastercard" };
const money = new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS" });
const clone = (value) => JSON.parse(JSON.stringify(value));
const filterButtons = ["All", "Fragrance", "Makeup", "Skincare", "Haircare", "Body care", "Men", "Gift sets", "K-Beauty", "Sun care", "Home fragrance", "Oral care", "Dermocosmetics", "Available"];
const brandButtons = ["All", "The Ordinary", "CeraVe", "Maybelline New York", "Sol de Janeiro", "La Roche-Posay", "Garnier", "Mixa", "Redken", "Olaplex", "NIVEA SUN", "Rimmel", "COSRX", "Oral-B"];
const navMenus = [
  {
    id: "sale",
    label: "Sale",
    filter: "All",
    items: [
      ["This week on offer", "filter", "All"],
      ["Special offers", "filter", "All"],
      ["Freebies", "filter", "Gift sets"],
      ["Available now", "filter", "Available"]
    ]
  },
  {
    id: "fragrance",
    label: "Fragrance",
    filter: "Fragrance",
    items: [
      ["All fragrance", "filter", "Fragrance"],
      ["Perfumes", "filter", "Fragrance"],
      ["Body mists", "filter", "Body care"],
      ["Home fragrance", "filter", "Home fragrance"],
      ["Gift sets", "filter", "Gift sets"]
    ]
  },
  {
    id: "makeup",
    label: "Makeup",
    filter: "Makeup",
    items: [
      ["All makeup", "filter", "Makeup"],
      ["Mascara", "filter", "Makeup"],
      ["Lip colour", "filter", "Makeup"],
      ["Try it on", "filter", "Makeup"]
    ]
  },
  {
    id: "hair",
    label: "Hair",
    filter: "Haircare",
    items: [
      ["All haircare", "filter", "Haircare"],
      ["Shampoo", "filter", "Haircare"],
      ["Treatments", "filter", "Haircare"],
      ["Professional hair", "brand", "Redken"],
      ["Premium repair", "brand", "Olaplex"]
    ]
  },
  {
    id: "skin",
    label: "Skin",
    filter: "Skincare",
    items: [
      ["All skincare", "filter", "Skincare"],
      ["Dermocosmetics", "filter", "Dermocosmetics"],
      ["K-Beauty", "filter", "K-Beauty"],
      ["Sun care", "filter", "Sun care"],
      ["CeraVe", "brand", "CeraVe"],
      ["The Ordinary", "brand", "The Ordinary"]
    ]
  },
  {
    id: "body",
    label: "Body",
    filter: "Body care",
    items: [
      ["All body care", "filter", "Body care"],
      ["Body mists", "brand", "Sol de Janeiro"],
      ["Body cream", "filter", "Body care"],
      ["Mother & child", "filter", "Mother and child"],
      ["Oral care", "filter", "Oral care"]
    ]
  },
  {
    id: "brands",
    label: "Brands",
    brand: "All",
    items: [
      ["All brands", "brand", "All"],
      ["The Ordinary", "brand", "The Ordinary"],
      ["CeraVe", "brand", "CeraVe"],
      ["Maybelline", "brand", "Maybelline New York"],
      ["La Roche-Posay", "brand", "La Roche-Posay"],
      ["Olaplex", "brand", "Olaplex"]
    ]
  }
];

function normalizeCategory(category) {
  return category === "Perfumes" ? "Fragrance" : category;
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : clone(fallback);
  } catch {
    return clone(fallback);
  }
}

function syncProducts(savedProducts) {
  const savedById = new Map(savedProducts.map((product) => [product.id, product]));
  const seededProducts = seedProducts.map((seedProduct) => {
    const savedProduct = savedById.get(seedProduct.id);
    return savedProduct ? { ...seedProduct, stock: savedProduct.stock } : clone(seedProduct);
  });
  const seedIds = new Set(seedProducts.map((product) => product.id));
  const customProducts = savedProducts
    .filter((product) => !seedIds.has(product.id))
    .map((product) => ({
      ...product,
      brand: product.brand || "",
      category: normalizeCategory(product.category || "Fragrance"),
      stock: Math.max(0, Number.parseInt(product.stock, 10) || 0),
      price: Number(product.price) || 0,
      oldPrice: Number(product.oldPrice) || 0,
      rating: Number(product.rating) || 0,
      reviews: Number.parseInt(product.reviews, 10) || 0,
      unit: product.unit || "",
      offer: product.offer || "",
      image: product.image || ""
    }));
  return [...seededProducts, ...customProducts];
}

function syncOrders(savedOrders) {
  return savedOrders.map((order) => {
    const statusMap = { New: "Payment confirmed", "Sent out": "Out for delivery" };
    const status = statusMap[order.status] || order.status || "Payment confirmed";
    return {
      ...order,
      status: deliveryStages.includes(status) ? status : "Payment confirmed",
      payment: order.payment || {
        method: "momo",
        provider: "Paystack",
        reference: `PSTK-LEGACY-${order.id || Date.now()}`,
        paidAt: order.createdAt || new Date().toISOString()
      }
    };
  });
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }
  row.push(value);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function brandInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

function helpReply(text) {
  const message = text.toLowerCase();
  if (message.includes("pay") || message.includes("momo") || message.includes("card") || message.includes("visa") || message.includes("master")) {
    return "You can pay with Mobile Money through Paystack, or use a Visa/Mastercard option at checkout.";
  }
  if (message.includes("deliver") || message.includes("track") || message.includes("ship")) {
    return "After payment, your order will show a tracking timeline: payment confirmed, processing, packed, out for delivery, then delivered.";
  }
  if (message.includes("stock") || message.includes("available")) {
    return "Products marked Available can be added to cart. The stock count on each card shows how many are ready now.";
  }
  if (message.includes("discovery") || message.includes("sample") || message.includes("box")) {
    return "Discovery boxes are set up as sample-style gift sets. Add them as products when you want customers to try minis before buying full sizes.";
  }
  if (message.includes("freebie") || message.includes("offer") || message.includes("deal") || message.includes("discount")) {
    return "Offer tags on product cards can show special offers, freebies, limited stock, and category deals.";
  }
  if (message.includes("brand") || message.includes("ordinary") || message.includes("cerave") || message.includes("redken") || message.includes("olaplex")) {
    return "Use the brand rail to browse by brand. The catalogue supports brand names in product cards and CSV inventory.";
  }
  if (message.includes("makeup") || message.includes("skin") || message.includes("hair") || message.includes("gift")) {
    return "Those categories are ready in the shop layout. Once stock is added by CSV, customers can search, filter, pay, and track those items too.";
  }
  if (message.includes("recommend") || message.includes("choose") || message.includes("best")) {
    return "For fragrance, start with Hawas Ice for clean freshness or Club de Nuit Intense for bolder evenings. For skincare, try CeraVe or The Ordinary.";
  }
  return "I can help with payments, delivery tracking, product availability, fragrance choices, brand browsing, or future beauty categories.";
}

function App() {
  const [products, setProducts] = useState(() => syncProducts(load("marketshelf-products", seedProducts)));
  const [orders, setOrders] = useState(() => syncOrders(load("marketshelf-orders", [])));
  const [cart, setCart] = useState(() => load("marketshelf-cart", {}));
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [receiptOrder, setReceiptOrder] = useState(null);
  const [view, setView] = useState("shop");
  const [cartOpen, setCartOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [toast, setToast] = useState("");
  const [helpMessages, setHelpMessages] = useState([
    { sender: "assistant", text: "Hi, welcome to ABMscents. Ask me about payment, delivery, stock, or choosing something from the beauty shelf." }
  ]);

  useEffect(() => {
    localStorage.setItem("marketshelf-products", JSON.stringify(products));
    localStorage.setItem("marketshelf-orders", JSON.stringify(orders));
    localStorage.setItem("marketshelf-cart", JSON.stringify(cart));
  }, [products, orders, cart]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    const onKeydown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setCartOpen(false);
      }
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!event.target.closest(".site-header")) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const visibleProducts = useMemo(() => {
    const needle = searchTerm.toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeFilter === "All" ||
        product.category === activeFilter ||
        (activeFilter === "Available" && product.stock > 0);
      const matchesBrand = activeBrand === "All" || product.brand === activeBrand;
      const haystack = `${product.name} ${product.brand || ""} ${product.category} ${product.description}`.toLowerCase();
      return matchesCategory && matchesBrand && haystack.includes(needle);
    });
  }, [products, activeFilter, activeBrand, searchTerm]);

  const cartItems = useMemo(() => Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean), [cart, products]);

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const availableCount = products.filter((product) => product.stock > 0).length;
  const pendingCount = orders.filter((order) => order.status !== "Delivered").length;

  function chooseFilter(filter) {
    setActiveFilter(filter);
    setView("shop");
    setOpenMenu(null);
  }

  function chooseBrand(brand) {
    setActiveBrand(brand);
    setView("shop");
    setOpenMenu(null);
  }

  function showToast(message) {
    setToast(message);
  }

  function addToCart(id) {
    const product = products.find((item) => item.id === id);
    const currentQuantity = cart[id] || 0;
    if (!product || product.stock <= currentQuantity) {
      showToast("That item has no more stock available.");
      return;
    }
    setReceiptOrder(null);
    setCart((current) => ({ ...current, [id]: currentQuantity + 1 }));
    showToast(`${product.name} added to your bag.`);
  }

  function changeCartQuantity(id, amount) {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    const nextQuantity = (cart[id] || 0) + amount;
    if (nextQuantity <= 0) {
      setCart((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });
    } else if (nextQuantity <= product.stock) {
      setCart((current) => ({ ...current, [id]: nextQuantity }));
    } else {
      showToast("You have reached the available stock.");
    }
  }

  function changeStock(id, amount) {
    setProducts((current) => current.map((product) => product.id === id ? { ...product, stock: Math.max(0, product.stock + amount) } : product));
  }

  function toggleStock(id) {
    setProducts((current) => current.map((product) => product.id === id ? { ...product, stock: product.stock > 0 ? 0 : 1 } : product));
  }

  function placeOrder(event) {
    event.preventDefault();
    if (!cartItems.length) {
      showToast("Add at least one item before placing an order.");
      return;
    }
    const hasStock = cartItems.every((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product && product.stock >= item.quantity;
    });
    if (!hasStock) {
      showToast("One item is no longer available in that quantity.");
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    const paymentMethod = data.get("paymentMethod");
    const order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      customer: data.get("customer").trim(),
      phone: data.get("phone").trim(),
      address: data.get("address").trim(),
      status: "Payment confirmed",
      payment: {
        method: paymentMethod,
        provider: "Paystack",
        reference: `PSTK-${String(paymentMethod).toUpperCase()}-${Date.now().toString().slice(-8)}`,
        paidAt: new Date().toISOString()
      },
      createdAt: new Date().toISOString(),
      items: cartItems.map(({ id, name, price, quantity }) => ({ id, name, price, quantity }))
    };
    setOrders((current) => [order, ...current]);
    setProducts((current) => current.map((product) => {
      const item = cartItems.find((cartItem) => cartItem.id === product.id);
      return item ? { ...product, stock: product.stock - item.quantity } : product;
    }));
    setCart({});
    setReceiptOrder(order);
    form.reset();
    showToast("Payment received. Order tracking is ready.");
  }

  function downloadInventoryCsv() {
    const headers = ["id", "name", "brand", "category", "price", "stock", "description", "image", "oldPrice", "rating", "reviews", "unit", "offer"];
    const rows = products.map((product) => headers.map((key) => csvEscape(product[key])).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const file = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "abmscents-inventory.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function importInventoryCsv(event) {
    const [file] = event.target.files;
    event.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const rows = parseCsv(String(reader.result || ""));
      const headers = rows.shift()?.map((header) => header.trim().toLowerCase()) || [];
      const required = ["id", "name", "category", "price", "stock", "description", "image"];
      if (!required.every((header) => headers.includes(header))) {
        showToast("CSV must include id, name, category, price, stock, description, and image.");
        return;
      }
      const nextProducts = rows.map((row) => {
        const record = Object.fromEntries(headers.map((header, index) => [header, row[index]?.trim() || ""]));
        const price = Number(record.price);
        const stock = Number.parseInt(record.stock, 10);
        if (!record.id || !record.name || Number.isNaN(price) || Number.isNaN(stock)) return null;
        return {
          id: record.id,
          name: record.name,
          brand: record.brand || "",
          category: normalizeCategory(record.category || "Fragrance"),
          price,
          stock: Math.max(0, stock),
          description: record.description,
          image: record.image || "",
          oldPrice: Number(record.oldprice) || 0,
          rating: Number(record.rating) || 0,
          reviews: Number.parseInt(record.reviews, 10) || 0,
          unit: record.unit || "",
          offer: record.offer || ""
        };
      }).filter(Boolean);
      if (!nextProducts.length) {
        showToast("No valid products found in that CSV.");
        return;
      }
      setProducts(nextProducts);
      setCart({});
      showToast("Inventory updated from CSV.");
    });
    reader.readAsText(file);
  }

  function askHelp(text) {
    const question = text.trim();
    if (!question) return;
    setHelpMessages((current) => [...current, { sender: "customer", text: question }]);
    window.setTimeout(() => {
      setHelpMessages((current) => [...current, { sender: "assistant", text: helpReply(question) }]);
    }, 240);
  }

  function resetDemo() {
    setProducts(clone(seedProducts));
    setOrders([]);
    setCart({});
    setReceiptOrder(null);
    setView("shop");
    setActiveFilter("All");
    setActiveBrand("All");
    showToast("Demo data has been reset.");
  }

  return h(React.Fragment, null,
    h(Header, { view, setView, openMenu, setOpenMenu, cartQuantity, setCartOpen, chooseFilter, chooseBrand, activeFilter, activeBrand }),
    h("main", null,
      h(Hero, { availableCount, pendingCount, searchTerm, setSearchTerm }),
      h(BeautyStrip),
      h(OfferBoard),
      h(BrandRail, { activeBrand, chooseBrand }),
      h(FinderGrid),
      h(EditorialPair),
      view === "shop"
        ? h(ShopView, { activeFilter, activeBrand, visibleProducts, chooseFilter, addToCart })
        : h(OrdersView, { products, orders, changeStock, toggleStock, setOrders, downloadInventoryCsv, importInventoryCsv, resetDemo }),
      h(CustomerHelp, { helpMessages, askHelp }),
      h(ServiceSection),
      h(Newsletter, { showToast })
    ),
    h(Footer),
    h(CartPanel, { open: cartOpen, setOpen: setCartOpen, cartItems, cartTotal, changeCartQuantity, placeOrder, receiptOrder, setReceiptOrder, setView }),
    h("div", { className: `toast ${toast ? "show" : ""}`, role: "status", "aria-live": "polite" }, toast)
  );
}

function Header({ view, setView, openMenu, setOpenMenu, cartQuantity, setCartOpen, chooseFilter, chooseBrand, activeFilter, activeBrand }) {
  return h("header", { className: "site-header" },
    h("div", { className: "promo-strip" },
      h("span", null, "Private edits, polished gifts, and fast Ghana delivery"),
      h("span", null, "Click a department to open the shelf")
    ),
    h("div", { className: "topbar" },
      h("nav", { className: "house-nav", "aria-label": "Beauty departments" },
        navMenus.map((menu) =>
          h(NavDropdown, {
            key: menu.id,
            menu,
            open: openMenu === menu.id,
            setOpenMenu,
            chooseFilter,
            chooseBrand,
            active: menu.brand ? activeBrand === menu.brand : activeFilter === menu.filter
          })
        )
      ),
      h("a", { className: "brand", href: "#shopView", "aria-label": "ABMscents home", onClick: () => setView("shop") },
        h("span", { className: "brand-name" }, "ABM", h("span", null, "scents")),
        h("small", null, "Curated beauty - Ghana delivered")
      ),
      h("nav", { className: "top-actions", "aria-label": "Main navigation" },
        h("button", { className: `nav-button ${view === "shop" ? "active" : ""}`, type: "button", onClick: () => setView("shop") }, "Shop"),
        h("button", { className: `nav-button ${view === "orders" ? "active" : ""}`, type: "button", onClick: () => setView("orders") }, "Dashboard"),
        h("button", { className: "cart-button", type: "button", "aria-label": "Open cart", onClick: () => setCartOpen(true) },
          h("span", { "aria-hidden": "true" }, "Bag"),
          h("strong", null, cartQuantity)
        )
      )
    )
  );
}

function NavDropdown({ menu, open, setOpenMenu, chooseFilter, chooseBrand, active }) {
  const buttonId = `navButton-${menu.id}`;
  const menuId = `navMenu-${menu.id}`;

  function focusMenuItem(index) {
    window.requestAnimationFrame(() => {
      const items = document.querySelectorAll(`#${menuId} [role="menuitem"]`);
      items[index]?.focus();
    });
  }

  function focusMenuButton() {
    window.requestAnimationFrame(() => document.querySelector(`#${buttonId}`)?.focus());
  }

  function scrollToShop() {
    window.requestAnimationFrame(() => {
      document.querySelector("#shopView")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function choose(item) {
    const [, type, value] = item;
    if (type === "brand") chooseBrand(value);
    else chooseFilter(value);
    setOpenMenu(null);
    focusMenuButton();
    scrollToShop();
  }

  function openAndFocusFirst() {
    setOpenMenu(menu.id);
    focusMenuItem(0);
  }

  function openAndFocusLast() {
    setOpenMenu(menu.id);
    focusMenuItem(menu.items.length - 1);
  }

  function handleButtonKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openAndFocusFirst();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openAndFocusLast();
    } else if (event.key === "Escape") {
      setOpenMenu(null);
    }
  }

  function handleMenuKeyDown(event, index) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusMenuItem((index + 1) % menu.items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusMenuItem((index - 1 + menu.items.length) % menu.items.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusMenuItem(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusMenuItem(menu.items.length - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpenMenu(null);
      focusMenuButton();
    } else if (event.key === "Tab") {
      setOpenMenu(null);
    }
  }

  return h("div", {
    className: "nav-menu-item",
    onBlur: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
    }
  },
    h("button", {
      id: buttonId,
      type: "button",
      className: active ? "active" : "",
      "aria-expanded": open,
      "aria-controls": menuId,
      "aria-haspopup": "menu",
      onClick: () => setOpenMenu(open ? null : menu.id),
      onKeyDown: handleButtonKeyDown
    }, menu.label),
    open && h("div", { className: "nav-dropdown", id: menuId, role: "menu", "aria-labelledby": buttonId },
      h("p", { className: "mega-title" }, menu.label),
      menu.items.map((item, index) =>
        h("button", {
          key: item[0],
          type: "button",
          role: "menuitem",
          onClick: () => choose(item),
          onKeyDown: (event) => handleMenuKeyDown(event, index)
        }, item[0])
      )
    )
  );
}

function Hero({ availableCount, pendingCount, searchTerm, setSearchTerm }) {
  const [stageTilt, setStageTilt] = useState({ x: 0, y: 0 });
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const movingProducts = seedProducts.slice(0, 12);
  const showcaseProducts = seedProducts.slice(0, 8);
  const featuredProduct = showcaseProducts[showcaseIndex % showcaseProducts.length];
  const nextFeaturedProduct = showcaseProducts[(showcaseIndex + 1) % showcaseProducts.length];
  const thirdFeaturedProduct = showcaseProducts[(showcaseIndex + 2) % showcaseProducts.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setShowcaseIndex((index) => (index + 1) % showcaseProducts.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [showcaseProducts.length]);

  function handleHeroMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setStageTilt({ x, y });
  }

  const stageStyle = {
    "--tilt-x": `${stageTilt.y * -7}deg`,
    "--tilt-y": `${stageTilt.x * 9}deg`,
    "--drift-x": `${stageTilt.x * 16}px`,
    "--drift-y": `${stageTilt.y * 12}px`,
    "--copy-x": `${stageTilt.x * -7}px`,
    "--copy-y": `${stageTilt.y * -5}px`,
    "--stats-x": `${stageTilt.x * 10}px`,
    "--stats-y": `${stageTilt.y * 8}px`,
    "--glow-x": `${50 + stageTilt.x * 18}%`,
    "--glow-y": `${48 + stageTilt.y * 18}%`
  };

  return h("section", {
    className: "intro",
    style: stageStyle,
    "aria-labelledby": "introTitle",
    onPointerMove: handleHeroMove,
    onPointerLeave: () => setStageTilt({ x: 0, y: 0 })
  },
    h("div", { className: "hero-atmosphere", "aria-hidden": "true" },
      h("span", { className: "atmosphere-dot dot-one" }),
      h("span", { className: "atmosphere-dot dot-two" }),
      h("span", { className: "atmosphere-dot dot-three" }),
      h("span", { className: "scent-trail trail-one" }),
      h("span", { className: "scent-trail trail-two" }),
      h("span", { className: "scent-trail trail-three" })
    ),
    h("div", { className: "hero-product-flow", "aria-label": "Featured products moving through the shelf" },
      [0, 1].map((track) =>
        h("div", { key: track, className: "product-flow-track", "aria-hidden": track === 1 ? "true" : undefined },
          movingProducts.map((product) =>
            h("article", { key: `${track}-${product.id}`, className: "flow-product" },
              h("img", { src: product.image, alt: track === 0 ? product.name : "" }),
              h("span", null, product.name)
            )
          )
        )
      )
    ),
    h("div", {
      className: "hero-motion"
    },
      h("div", { className: "orbit-ring ring-one", "aria-hidden": "true" }),
      h("div", { className: "orbit-ring ring-two", "aria-hidden": "true" }),
      h("div", { className: "orbit-ring ring-three", "aria-hidden": "true" }),
      h("button", { type: "button", className: "motion-chip chip-top", "aria-label": "Highlight fragrance finder" }, "Fresh"),
      h("button", { type: "button", className: "motion-chip chip-side", "aria-label": "Highlight gift edits" }, "Gift"),
      h("button", { type: "button", className: "motion-chip chip-low", "aria-label": "Highlight new arrivals" }, "New"),
      h("div", { className: "timed-showcase", "aria-live": "polite", "aria-label": "Timed featured product showcase" },
        h("div", { key: featuredProduct.id, className: "showcase-card" },
          h("div", { className: "showcase-image-wrap" },
            h("img", { className: "showcase-image", src: featuredProduct.image, alt: featuredProduct.name })
          ),
          h("div", { className: "showcase-copy" },
            h("span", null, featuredProduct.category),
            h("strong", null, featuredProduct.name),
            h("small", null, `${featuredProduct.brand ? `${featuredProduct.brand} - ` : ""}${featuredProduct.unit}`)
          )
        ),
        h("div", { className: "showcase-side-icons", "aria-hidden": "true" },
          h("img", { src: nextFeaturedProduct.image, alt: "" }),
          h("img", { src: thirdFeaturedProduct.image, alt: "" })
        ),
        h("div", { className: "showcase-progress", "aria-label": "Choose featured product" },
          showcaseProducts.map((product, index) =>
            h("button", {
              key: product.id,
              type: "button",
              className: index === showcaseIndex ? "active" : "",
              "aria-label": `Show ${product.name}`,
              onClick: () => setShowcaseIndex(index)
            })
          )
        )
      ),
      h("div", { className: "platform-pulse", "aria-hidden": "true" })
    ),
    h("div", { className: "intro-copy" },
      h("p", { className: "eyebrow" }, "The ABMscents edit"),
      h("h1", { id: "introTitle" }, "A polished shelf for fragrance, skin, and ritual."),
      h("p", null, "Browse current drops, giftable finds, and everyday essentials with a shopfront that feels curated from the first click to checkout."),
      h("form", { className: "search", role: "search", onSubmit: (event) => event.preventDefault() },
        h("label", { className: "sr-only", htmlFor: "searchInput" }, "Search products"),
        h("input", { id: "searchInput", type: "search", placeholder: "Search scent, routine, brand, or gift", value: searchTerm, onChange: (event) => setSearchTerm(event.target.value) }),
        h("button", { type: "submit", "aria-label": "Search" }, h("span", { "aria-hidden": "true" }, "Search"))
      )
    ),
    h("div", { className: "intro-stats", "aria-label": "Shop summary" },
      h("div", null, h("span", null, availableCount), h("small", null, "In stock")),
      h("div", null, h("span", null, pendingCount), h("small", null, "Orders moving"))
    )
  );
}

function BeautyStrip() {
  return h("section", { className: "beauty-strip", "aria-label": "Beauty highlights" },
    [["Fresh arrivals", "Drop new fragrance, skin, hair, and body stock into the shelf as soon as it lands."], ["Offer theatre", "Make markdowns, freebies, bundles, and seasonal edits feel intentional."], ["Gift polish", "Help shoppers choose by mood, routine, budget, or occasion without the hard sell."]].map(([title, text]) =>
      h("article", { key: title }, h("strong", null, title), h("span", null, text))
    )
  );
}

function OfferBoard() {
  return h("section", { className: "offer-board", "aria-label": "Current shopping highlights" },
    h("article", { className: "offer-main" }, h("p", { className: "eyebrow" }, "This week on the counter"), h("h2", null, "Deals, discovery picks, and small luxuries."), h("p", null, "Use offer tags to frame markdowns, gifts, trial sizes, and limited stock like a proper beauty edit.")),
    [["Fragrance finder", "Guide by fresh, woody, amber, sweet, clean, evening, or gift-ready moods."], ["Discovery boxes", "Create sample sets so shoppers can try before they commit to full sizes."], ["Gift with purchase", "Surface freebies and bundle incentives directly on the product cards."]].map(([title, text]) =>
      h("article", { key: title }, h("strong", null, title), h("span", null, text))
    )
  );
}

function BrandRail({ activeBrand, chooseBrand }) {
  return h("section", { className: "brand-rail", "aria-label": "Featured brands" },
    h("div", null, h("p", { className: "eyebrow" }, "The brand rail"), h("h2", null, "Names shoppers already know, arranged with taste.")),
    h("div", { className: "brand-list" }, brandButtons.map((brand) =>
      h("button", { key: brand, className: activeBrand === brand ? "active" : "", type: "button", onClick: () => chooseBrand(brand) }, brand === "Maybelline New York" ? "Maybelline" : brand)
    ))
  );
}

function FinderGrid() {
  return h("section", { className: "finder-grid", "aria-label": "Shopping helpers" },
    [["01", "Find a signature", "Fresh, woody, amber, sweet, office-safe, evening, or giftable."], ["02", "Build the ritual", "Cleanser, serum, SPF, body cream, hair repair, and finishing mist."], ["03", "Choose the moment", "Birthday, travel, self-care, new baby, men's grooming, or home scent."]].map(([number, title, text]) =>
      h("article", { key: number }, h("span", null, number), h("strong", null, title), h("p", null, text))
    )
  );
}

function EditorialPair() {
  return h("section", { className: "editorial-pair", "aria-label": "Featured beauty edits" },
    h("article", { className: "editorial-panel dark-panel" }, h("img", { src: "images/web-club-de-nuit-intense.webp", alt: "" }), h("div", null, h("p", { className: "eyebrow" }, "Evening shelf"), h("h2", null, "Scents with presence."), h("p", null, "Give popular bottles, limited drops, and markdowns the kind of stage customers want to browse."), h("a", { href: "#shopView" }, "Shop fragrance"))),
    h("article", { className: "editorial-panel light-panel" }, h("img", { src: "images/web-hawas-ice.jpg", alt: "" }), h("div", null, h("p", { className: "eyebrow" }, "Daily ritual"), h("h2", null, "The clean everyday edit."), h("p", null, "Crisp daily scents now; cleanser, moisturiser, haircare, and body heroes whenever stock grows."), h("a", { href: "#shopView" }, "Browse departments")))
  );
}

function ShopView({ activeFilter, activeBrand, visibleProducts, chooseFilter, addToCart }) {
  return h("section", { className: "view active view-shell", id: "shopView", "aria-labelledby": "shopTitle" },
    h("div", { className: "section-head" },
      h("div", null, h("p", { className: "eyebrow" }, "The live shelf"), h("h2", { id: "shopTitle" }, activeBrand === "All" ? "Ready to shop" : activeBrand)),
      h("div", { className: "filters", role: "group", "aria-label": "Product filters" },
        filterButtons.map((filter) => h("button", { key: filter, className: `filter ${activeFilter === filter ? "active" : ""}`, type: "button", onClick: () => chooseFilter(filter) }, filter === "All" ? "All beauty" : filter === "Home fragrance" ? "Home" : filter === "Oral care" ? "Oral" : filter === "Dermocosmetics" ? "Dermo" : filter))
      )
    ),
    h("div", { className: "product-grid" },
      visibleProducts.length
        ? visibleProducts.map((product) => h(ProductCard, { key: product.id, product, addToCart }))
        : h("p", { className: "empty" }, `No products here yet. Add ${activeFilter === "All" ? "more items" : activeFilter.toLowerCase()} through the CSV inventory when stock lands.`)
    )
  );
}

function ProductCard({ product, addToCart }) {
  const available = product.stock > 0;
  return h("article", { className: "product-card fade-in" },
    h("div", { className: "product-art" },
      h("span", { className: `badge ${available ? "" : "unavailable"}` }, available ? "In stock" : "Not available"),
      product.offer && h("span", { className: "offer-badge" }, product.offer),
      product.image
        ? h("img", { className: "product-image", src: product.image, alt: product.name })
        : h("div", { className: "brand-placeholder", "aria-label": product.brand || product.name }, h("strong", null, brandInitials(product.brand || product.name)), h("span", null, product.category))
    ),
    h("div", { className: "product-body" },
      h("div", { className: "product-title-row" },
        h("div", null, h("h3", null, product.name), h("p", null, `${product.brand ? `${product.brand} - ` : ""}${product.category}`)),
        h("div", { className: "price-stack" }, product.oldPrice ? h("small", null, money.format(product.oldPrice)) : null, h("span", { className: "price" }, money.format(product.price)))
      ),
      h("div", { className: "retail-meta" },
        product.rating ? h("span", null, `Rating ${Number(product.rating).toFixed(1)}${product.reviews ? ` (${product.reviews})` : ""}`) : null,
        product.unit ? h("small", null, product.unit) : null
      ),
      h("p", null, product.description),
      h("div", { className: "product-actions" },
        h("span", { className: "stock-line" }, `${product.stock} in stock`),
        h("button", { className: "primary-button", type: "button", disabled: !available, onClick: () => addToCart(product.id) }, "Add to bag")
      )
    )
  );
}

function OrdersView({ products, orders, changeStock, toggleStock, setOrders, downloadInventoryCsv, importInventoryCsv, resetDemo }) {
  return h("section", { className: "view active view-shell", id: "ordersView", "aria-labelledby": "ordersTitle" },
    h("div", { className: "section-head" },
      h("div", null, h("p", { className: "eyebrow" }, "Owner dashboard"), h("h2", { id: "ordersTitle" }, "Order tracking")),
      h("button", { className: "secondary-button", type: "button", onClick: resetDemo }, "Reset demo data")
    ),
    h("div", { className: "manager-grid" },
      h("section", { className: "inventory-panel", "aria-labelledby": "inventoryTitle" },
        h("h3", { id: "inventoryTitle" }, "Inventory control"),
        h("div", { className: "inventory-import" },
          h("div", null, h("strong", null, "Excel inventory update"), h("small", null, "Download, edit in Excel, then upload the saved CSV.")),
          h("div", { className: "inventory-import-actions" },
            h("button", { className: "secondary-button", type: "button", onClick: downloadInventoryCsv }, "Download CSV"),
            h("label", { className: "file-button" }, "Upload CSV", h("input", { type: "file", accept: ".csv,text/csv", onChange: importInventoryCsv }))
          )
        ),
        h("div", { className: "inventory-list" }, products.map((product) =>
          h("article", { key: product.id, className: "inventory-item" },
            h("div", null, h("strong", null, product.name), h("small", null, `${product.brand ? `${product.brand} - ` : ""}${product.category} - ${product.stock} in stock`)),
            h("div", { className: "stock-controls" },
              h("button", { className: "qty-button", type: "button", onClick: () => changeStock(product.id, -1), "aria-label": `Decrease ${product.name} stock` }, "-"),
              h("button", { className: "qty-button", type: "button", onClick: () => changeStock(product.id, 1), "aria-label": `Increase ${product.name} stock` }, "+"),
              h("button", { className: `stock-toggle ${product.stock > 0 ? "available" : "unavailable"}`, type: "button", onClick: () => toggleStock(product.id) }, product.stock > 0 ? "On" : "Off")
            )
          )
        ))
      ),
      h("section", { className: "orders-panel", "aria-labelledby": "dispatchTitle" },
        h("h3", { id: "dispatchTitle" }, "Dispatch board"),
        h("div", { className: "order-columns" }, deliveryStages.map((status) => {
          const matchingOrders = orders.filter((order) => order.status === status);
          return h("section", { key: status, className: "order-column" },
            h("h4", null, `${status} (${matchingOrders.length})`),
            h("div", { className: "order-list" }, matchingOrders.length ? matchingOrders.map((order) =>
              h(OrderCard, { key: order.id, order, setOrders })
            ) : h("p", { className: "empty" }, "No orders here."))
          );
        }))
      )
    )
  );
}

function OrderCard({ order, setOrders }) {
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return h("article", { className: "order-card" },
    h("header", null, h("strong", null, order.customer), h("small", null, order.id)),
    h("p", null, `${order.phone} - ${order.address}`),
    h("ul", null, order.items.map((item) => h("li", { key: `${order.id}-${item.id}` }, `${item.quantity} x ${item.name}`))),
    h("div", { className: "payment-summary" }, h("span", null, `Paid ${money.format(total)}`), h("small", null, `${paymentMethods[order.payment.method] || "Payment"} - ${order.payment.reference}`)),
    h(TrackingTimeline, { activeStatus: order.status }),
    h("select", { className: "status-select", value: order.status, "aria-label": "Update order status", onChange: (event) => setOrders((current) => current.map((item) => item.id === order.id ? { ...item, status: event.target.value } : item)) },
      deliveryStages.map((status) => h("option", { key: status, value: status }, status))
    )
  );
}

function TrackingTimeline({ activeStatus }) {
  const activeIndex = Math.max(0, deliveryStages.indexOf(activeStatus));
  return h("ol", { className: "tracking-steps", "aria-label": "Delivery progress" },
    deliveryStages.map((stage, index) => h("li", { key: stage, className: `${index <= activeIndex ? "complete" : ""} ${index === activeIndex ? "current" : ""}` }, h("span", { "aria-hidden": "true" }), h("small", null, stage)))
  );
}

function CustomerHelp({ helpMessages, askHelp }) {
  const [question, setQuestion] = useState("");
  function submit(event) {
    event.preventDefault();
    askHelp(question);
    setQuestion("");
  }
  return h("section", { className: "customer-help", "aria-labelledby": "helpTitle" },
    h("div", { className: "help-copy" }, h("p", { className: "eyebrow" }, "Beauty concierge"), h("h3", { id: "helpTitle" }, "Ask for the right shelf.")),
    h("div", { className: "help-chat", "aria-live": "polite" },
      h("div", { className: "help-messages" }, helpMessages.map((message, index) => h("p", { key: index, className: `chat-bubble ${message.sender}` }, message.text))),
      h("div", { className: "help-prompts", "aria-label": "Quick help prompts" },
        [["Payment", "How can I pay?"], ["Delivery", "How will delivery tracking work?"], ["Recommend", "Which item do you recommend?"]].map(([label, text]) => h("button", { key: label, type: "button", onClick: () => askHelp(text) }, label))
      ),
      h("form", { className: "help-form", onSubmit: submit },
        h("label", { className: "sr-only", htmlFor: "helpInput" }, "Ask customer help"),
        h("input", { id: "helpInput", type: "text", placeholder: "Type a question", value: question, onChange: (event) => setQuestion(event.target.value) }),
        h("button", { type: "submit" }, "Send")
      )
    )
  );
}

function ServiceSection() {
  return h("section", { className: "finishing-touch", "aria-label": "ABMscents services" },
    h("div", null, h("p", { className: "eyebrow" }, "The finishing touch"), h("h2", null, "A pretty shop that still handles the serious parts.")),
    h("div", { className: "service-grid" },
      [["Secure payment", "Paystack Mobile Money and card checkout."], ["Live stock", "Every product reflects current availability."], ["Order tracking", "Follow each order from payment to delivery."]].map(([title, text]) => h("article", { key: title }, h("strong", null, title), h("span", null, text)))
    )
  );
}

function Newsletter({ showToast }) {
  function submit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email").trim();
    showToast(email ? "You are on the ABMscents beauty list." : "Add an email address to subscribe.");
    if (email) event.currentTarget.reset();
  }
  return h("section", { className: "newsletter", "aria-labelledby": "newsletterTitle" },
    h("div", null, h("p", { className: "eyebrow" }, "Join the beauty list"), h("h2", { id: "newsletterTitle" }, "First look at what lands next."), h("p", null, "Receive restock notes, category launches, gift edits, and private recommendations from ABMscents.")),
    h("form", { className: "newsletter-form", onSubmit: submit },
      h("label", { className: "sr-only", htmlFor: "newsletterEmail" }, "Email address"),
      h("input", { id: "newsletterEmail", name: "email", type: "email", placeholder: "Email address" }),
      h("button", { type: "submit" }, "Subscribe")
    )
  );
}

function Footer() {
  return h("footer", { className: "site-footer" },
    h("div", null, h("strong", null, "ABMscents"), h("span", null, "Curated beauty. Ghana delivered.")),
    h("nav", { "aria-label": "Footer links" }, h("a", { href: "#shopView" }, "Fragrance"), h("a", { href: "#shopView" }, "Categories"), h("a", { href: "#helpTitle" }, "Concierge"), h("a", { href: "#ordersView" }, "Tracking"))
  );
}

function CartPanel({ open, setOpen, cartItems, cartTotal, changeCartQuantity, placeOrder, receiptOrder, setReceiptOrder, setView }) {
  return h("aside", { className: `cart-panel ${open ? "open" : ""}`, "aria-hidden": !open, "aria-labelledby": "cartTitle" },
    h("div", { className: "cart-backdrop", onClick: () => setOpen(false) }),
    h("div", { className: "cart-sheet", role: "dialog", "aria-modal": "true" },
      h("div", { className: "cart-head" }, h("h2", { id: "cartTitle" }, "Customer cart"), h("button", { className: "icon-button", type: "button", "aria-label": "Close cart", onClick: () => setOpen(false) }, "x")),
      h("div", { className: "cart-items" },
        receiptOrder && !cartItems.length ? h(ReceiptCard, { order: receiptOrder, setReceiptOrder, setView, setOpen }) :
        cartItems.length ? cartItems.map((item) => h("article", { key: item.id, className: "cart-line" },
          h("div", null, h("strong", null, item.name), h("small", null, `${money.format(item.price)} each`)),
          h("div", { className: "quantity" }, h("button", { className: "qty-button", type: "button", onClick: () => changeCartQuantity(item.id, -1), "aria-label": `Reduce ${item.name}` }, "-"), h("span", null, item.quantity), h("button", { className: "qty-button", type: "button", onClick: () => changeCartQuantity(item.id, 1), "aria-label": `Increase ${item.name}` }, "+"))
        )) : h("p", { className: "empty" }, "Your cart is empty.")
      ),
      !receiptOrder && cartItems.length ? h("form", { className: "checkout-form", onSubmit: placeOrder },
        h("label", null, "Customer name", h("input", { name: "customer", required: true, placeholder: "Full name" })),
        h("label", null, "Phone number", h("input", { name: "phone", required: true, placeholder: "Contact number" })),
        h("label", null, "Delivery address", h("textarea", { name: "address", required: true, placeholder: "Where should the order be sent?" })),
        h("fieldset", { className: "payment-options" },
          h("legend", null, "Payment method"),
          h("label", { className: "payment-option" }, h("input", { type: "radio", name: "paymentMethod", value: "momo", defaultChecked: true }), h("span", null, h("strong", null, "Mobile Money"), h("small", null, "Paystack MoMo"))),
          h("label", { className: "payment-option" }, h("input", { type: "radio", name: "paymentMethod", value: "card" }), h("span", null, h("strong", null, "Visa or Mastercard"), h("small", null, "Paystack card")))
        ),
        h("div", { className: "checkout-total" }, `Total: ${money.format(cartTotal)}`),
        h("button", { className: "primary-button", type: "submit" }, "Pay and place order")
      ) : null
    )
  );
}

function ReceiptCard({ order, setReceiptOrder, setView, setOpen }) {
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return h("section", { className: "receipt-card" },
    h("p", { className: "eyebrow" }, "Payment successful"),
    h("h3", null, order.id),
    h("p", null, `${paymentMethods[order.payment.method] || "Payment"} payment received.`),
    h("div", { className: "payment-summary" }, h("span", null, money.format(total)), h("small", null, order.payment.reference)),
    h(TrackingTimeline, { activeStatus: order.status }),
    h("div", { className: "receipt-actions" },
      h("button", { className: "secondary-button", type: "button", onClick: () => { setOpen(false); setView("orders"); } }, "Track order"),
      h("button", { className: "primary-button", type: "button", onClick: () => { setReceiptOrder(null); setOpen(false); } }, "Continue shopping")
    )
  );
}

ReactDOM.createRoot(document.querySelector("#appRoot")).render(h(App));
