// Login modal functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.querySelector('.close-login');

loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeLogin.addEventListener('click', function() {
  loginModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

//FORM VALIDATION GOES HERE
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (username === '' || password === '') {
    loginError.textContent = 'Please enter both username and password.';
    return;
  }

  // Simulate successful login
  loginError.textContent = '';
  alert('Login successful!');
  loginModal.style.display = 'none';
  document.body.style.overflow = 'auto';
  loginForm.reset();
});
        
 // Tab Functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Mobile Menu Toggle 
        const mobileMenuToggle = document.createElement('div');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('header').prepend(mobileMenuToggle);
        
        mobileMenuToggle.addEventListener('click', function() {
            document.querySelector('.nav-container').classList.toggle('active');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

// Things to Do Tab Functionality
const activityTabs = document.querySelectorAll('.activity-tab');
const activityContents = document.querySelectorAll('.activities-content');

activityTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        activityTabs.forEach(t => t.classList.remove('active'));
        activityContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});
// Booking Functionality
const bookButtons = document.querySelectorAll('.package-book-btn');
const bookingModal = document.getElementById('bookingModal');
const closeBooking = document.querySelector('.close-booking');
const bookingForm = document.getElementById('bookingForm');
const packageNameInput = document.getElementById('packageName');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmation = document.querySelector('.close-confirmation');
const confirmationCloseBtn = document.querySelector('.confirmation-close-btn');
const bookingRef = document.getElementById('bookingRef');

// Open booking modal
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        const package = this.getAttribute('data-package');
        let packageTitle = '';
        
        // Get package title based on data attribute
        switch(package) {
            case 'backwater-bliss':
                packageTitle = 'Backwater Bliss Package';
                break;
            case 'hillstation-retreat':
                packageTitle = 'Hill Station Retreat Package';
                break;
            case 'beach-paradise':
                packageTitle = 'Beach Paradise Package';
                break;
            case 'complete-kerala':
                packageTitle = 'Complete Kerala Package';
                break;
        }
        
        packageNameInput.value = packageTitle;
        bookingModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Close booking modal
closeBooking.addEventListener('click', function() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
bookingModal.addEventListener('click', function(e) {
    if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would normally send the data to your server
    // For this example, we'll just show a confirmation
    
    // Generate random booking reference
    const ref = 'KT-' + Math.floor(100000 + Math.random() * 900000);
    bookingRef.textContent = ref;
    
    // Show confirmation
    bookingModal.style.display = 'none';
    confirmationModal.style.display = 'flex';
    
    // Reset form
    bookingForm.reset();
});

// Close confirmation modal
closeConfirmation.addEventListener('click', function() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

confirmationCloseBtn.addEventListener('click', function() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

confirmationModal.addEventListener('click', function(e) {
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
// Image Gallery Modal
        const galleryItems = document.querySelectorAll('.gallery-item');
        const mediaModal = document.getElementById('mediaModal');
        const modalMediaContainer = document.getElementById('modalMediaContainer');
        const closeModal = document.querySelector('.close-modal');
                        
