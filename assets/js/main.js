// Solexa Shared Controller (Header, Footer, Cart, and Toast system)

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Header & Footer if containers exist
  injectHeader();
  injectFooter();
  
  // 2. Initialize Shopping Cart
  initCart();
  
  // 3. Setup header scroll effect
  setupHeaderScroll();

  // 4. Initialize Mobile Navigation Menu
  setupMobileNav();
  
  // 5. Highlight active navigation items based on current URL path
  highlightActiveLink();
});

// Helper to check current file name
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  return page || "index.html";
}

// Injects the common Header
function injectHeader() {
  const headerElem = document.querySelector('header');
  if (!headerElem) return;
  
  const currentPage = getCurrentPage();
  
  headerElem.innerHTML = `
    <div class="container nav-container">
      <a href="index.html" class="logo-link">
        <img src="assets/images/logo.png" alt="Solexa Logo" class="logo-img">
        <span class="brand-name">SOLEXA</span>
      </a>
      
      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item ${currentPage === 'index.html' ? 'active' : ''}"><a href="index.html">首頁</a></li>
        <li class="nav-item ${currentPage === 'about.html' ? 'active' : ''}"><a href="about.html">品牌故事</a></li>
        <li class="nav-item ${currentPage === 'men.html' ? 'active' : ''}"><a href="men.html">男鞋系列</a></li>
        <li class="nav-item ${currentPage === 'women.html' ? 'active' : ''}"><a href="women.html">女鞋系列</a></li>
        <li class="nav-item ${currentPage === 'kids.html' ? 'active' : ''}"><a href="kids.html">童鞋系列</a></li>
        <li class="nav-item ${currentPage === 'sports.html' ? 'active' : ''}"><a href="sports.html">運動機能</a></li>
        <li class="nav-item ${currentPage === 'casual.html' ? 'active' : ''}"><a href="casual.html">街頭休閒</a></li>
        <li class="nav-item ${currentPage === 'contact.html' ? 'active' : ''}"><a href="contact.html">聯絡我們</a></li>
      </ul>
      
      <div class="nav-actions">
        <div class="cart-icon-wrapper" id="cart-btn" aria-label="購物車">
          <i class="fas fa-shopping-bag"></i>
          <span class="cart-count" id="cart-counter">0</span>
        </div>
        <div class="mobile-toggle" id="mobile-menu-toggle">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  `;
}

// Injects the common Footer
function injectFooter() {
  const footerElem = document.querySelector('footer');
  if (!footerElem) return;
  
  footerElem.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo-box">
          <a href="index.html" class="logo-link">
            <img src="assets/images/logo.png" alt="Solexa Logo" class="logo-img" style="filter: brightness(1.2)">
            <span class="brand-name" style="font-size: 1.5rem;">SOLEXA</span>
          </a>
          <p>Solexa 致力於融合極致科技與現代美學，打造漫步雲端的舒適腳感。我們相信每一雙好鞋，都能帶您走向更美好的風景。</p>
          <div class="footer-socials">
            <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="Line"><i class="fab fa-line"></i></a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>熱門分類</h3>
          <ul class="footer-links">
            <li><a href="sports.html">專業跑鞋 / 運動機能</a></li>
            <li><a href="men.html">型格紳士 / 男鞋系列</a></li>
            <li><a href="women.html">優雅百搭 / 女鞋系列</a></li>
            <li><a href="kids.html">童趣機能 / 兒童系列</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>品牌服務</h3>
          <ul class="footer-links">
            <li><a href="about.html">關於我們</a></li>
            <li><a href="contact.html">實體店面 / 聯絡我們</a></li>
            <li><a href="#">退換貨政策</a></li>
            <li><a href="#">常見問題 FAQ</a></li>
          </ul>
        </div>
        
        <div class="footer-column footer-newsletter">
          <h3>訂閱我們</h3>
          <p>訂閱 Solexa 電子報，即時獲取新品發售資訊與專屬折扣優惠！</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('訂閱成功！感謝您的訂閱。', 'success'); this.reset();">
            <input type="email" placeholder="輸入您的電子信箱" class="newsletter-input" required>
            <button type="submit" class="newsletter-btn" aria-label="送出訂閱">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 SOLEXA 鞋業專賣店. 版權所有. Design with Excellence.</p>
        <p>本網站僅供專案展示使用，無商業交易功能。</p>
      </div>
    </div>
  `;
}

// Injects Cart Sidebar overlay structure and binds events
function initCart() {
  // Inject sidebar container if not exists
  let cartContainer = document.getElementById('cart-sidebar-container');
  if (!cartContainer) {
    cartContainer = document.createElement('div');
    cartContainer.id = 'cart-sidebar-container';
    document.body.appendChild(cartContainer);
  }
  
  cartContainer.innerHTML = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <div class="cart-sidebar" id="cart-sidebar">
      <div class="cart-header">
        <h2>您的購物籃</h2>
        <div class="cart-close" id="cart-close-btn">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="cart-items-list" id="cart-items-list">
        <!-- Dynamic content -->
      </div>
      <div class="cart-footer">
        <div class="cart-total-row">
          <span>總計金額</span>
          <span class="cart-total-price" id="cart-total-price">0</span>
        </div>
        <button class="btn btn-primary" id="checkout-btn" style="width: 100%;">立即結帳</button>
      </div>
    </div>
    <div class="toast-container" id="toast-container"></div>
  `;
  
  // Register click events
  const cartBtn = document.getElementById('cart-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartSidebar.classList.add('open');
      cartOverlay.classList.add('open');
      renderCartItems();
    });
  }
  
  const closeCart = () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
  };
  
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const items = getCartItems();
      if (items.length === 0) {
        showToast('購物車目前是空的喔！', 'info');
        return;
      }
      localStorage.setItem('solexa_cart', JSON.stringify([]));
      updateCartCounter();
      closeCart();
      showToast('🎉 結帳成功！感謝您的購買，訂單正在處理中。', 'success');
    });
  }
  
  updateCartCounter();
}

// Fetch items from localStorage
function getCartItems() {
  const data = localStorage.getItem('solexa_cart');
  return data ? JSON.parse(data) : [];
}

// Save items and trigger update
function saveCartItems(items) {
  localStorage.setItem('solexa_cart', JSON.stringify(items));
  updateCartCounter();
  renderCartItems();
}

// Add Item to Cart
function addToCart(productId, size) {
  if (!size) {
    showToast('請選擇尺寸！', 'info');
    return;
  }
  
  // Find product details from static database
  const targetProduct = window.SolexaProducts.find(p => p.id === productId);
  if (!targetProduct) return;
  
  const items = getCartItems();
  const existing = items.find(item => item.id === productId && item.size === size);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    items.push({
      id: productId,
      name: targetProduct.name,
      price: targetProduct.price,
      image: targetProduct.image,
      size: size,
      quantity: 1
    });
  }
  
  saveCartItems(items);
  showToast(`已將 ${targetProduct.name} (尺寸 ${size}) 加入購物車！`, 'success');
}

// Remove from cart
function removeFromCart(productId, size) {
  let items = getCartItems();
  items = items.filter(item => !(item.id === productId && item.size === size));
  saveCartItems(items);
  showToast('已自購物車中移除品項', 'info');
}

// Updates the header shopping bag counter
function updateCartCounter() {
  const items = getCartItems();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById('cart-counter');
  if (counter) {
    counter.textContent = count;
  }
}

// Renders the list items inside the sidebar
function renderCartItems() {
  const listElem = document.getElementById('cart-items-list');
  const totalElem = document.getElementById('cart-total-price');
  if (!listElem) return;
  
  const items = getCartItems();
  listElem.innerHTML = '';
  
  if (items.length === 0) {
    listElem.innerHTML = '<div class="empty-cart-msg"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i><p>購物籃是空的</p></div>';
    totalElem.textContent = '0';
    return;
  }
  
  let total = 0;
  items.forEach(item => {
    total += item.price * item.quantity;
    
    const itemElem = document.createElement('div');
    itemElem.className = 'cart-item';
    itemElem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-detail">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-meta">尺寸: ${item.size} | 數量: ${item.quantity}</div>
        <div class="cart-item-price">NT$ ${item.price.toLocaleString()}</div>
      </div>
      <div class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">
        <i class="far fa-trash-alt"></i>
      </div>
    `;
    listElem.appendChild(itemElem);
  });
  
  totalElem.textContent = total.toLocaleString();
  
  // Register click handlers for trash icon
  listElem.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const id = parseInt(target.getAttribute('data-id'));
      const size = parseInt(target.getAttribute('data-size'));
      removeFromCart(id, size);
    });
  });
}

// Toast notification trigger
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-check-circle';
  if (type === 'info') icon = 'fa-exclamation-circle';
  if (type === 'error') icon = 'fa-times-circle';
  
  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  // Remove after 3s
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// Window scroll event
function setupHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile sidebar toggle
function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!toggleBtn || !navMenu) return;
  
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });
}

// Link highlight fallback
function highlightActiveLink() {
  const menuItems = document.querySelectorAll('.nav-item');
  const current = getCurrentPage();
  menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('href') === current) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
