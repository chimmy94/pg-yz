// Global variables
let isSubmitting = false

// Utility functions
function openTelegram() {
  window.open("https://t.me/champan", "_blank")
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  })
}

// Form handling
function handleFormSubmit(event) {
  event.preventDefault()

  if (isSubmitting) return

  const form = event.target
  const formData = new FormData(form)
  const submitBtn = document.getElementById("submit-btn")

  // Validate form
  if (!validateForm(form)) {
    return
  }

  // Set loading state
  isSubmitting = true
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true
  form.classList.add("loading")

  // Prepare data for Formspree
  const data = {
    name: formData.get("name"),
    telegram: formData.get("telegram"),
    website: formData.get("website"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  // Submit to Formspree
  fetch("https://formspree.io/f/mqalbozd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        showSuccessMessage()
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    })
    .catch((error) => {
      console.error("Form submission error:", error)
      alert("Sorry, there was an error sending your message. Please try again or contact us via Telegram.")
    })
    .finally(() => {
      // Reset loading state
      isSubmitting = false
      submitBtn.textContent = "Send Message ✉️"
      submitBtn.disabled = false
      form.classList.remove("loading")
    })
}

function showSuccessMessage() {
  const form = document.getElementById("contact-form")
  const successMessage = document.getElementById("success-message")

  form.style.display = "none"
  successMessage.style.display = "block"

  // Hide success message after 5 seconds and show form again
  setTimeout(() => {
    successMessage.style.display = "none"
    form.style.display = "flex"
  }, 5000)
}

// Smooth scroll for anchor links
function smoothScrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add scroll effect to header
function handleScroll() {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.9)"
    header.style.boxShadow = "none"
  }
}

// Intersection Observer for animations
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".feature-card, .country-card, .stat-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add form submit handler
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit)
  }

  // Add scroll handler
  window.addEventListener("scroll", handleScroll)

  // Setup animations
  setupAnimations()

  // Add click handlers for buttons
  const telegramButtons = document.querySelectorAll('[onclick="openTelegram()"]')
  telegramButtons.forEach((btn) => {
    btn.addEventListener("click", openTelegram)
  })

  const contactButtons = document.querySelectorAll('[onclick="scrollToContact()"]')
  contactButtons.forEach((btn) => {
    btn.addEventListener("click", scrollToContact)
  })
})

// Handle form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "#ef4444"
      isValid = false
    } else {
      field.style.borderColor = "#d1d5db"
    }
  })

  // Validate Telegram username format
  const telegramField = form.querySelector('input[name="telegram"]')
  if (telegramField && telegramField.value.trim()) {
    const telegramValue = telegramField.value.trim()
    if (!telegramValue.startsWith("@")) {
      telegramField.value = "@" + telegramValue
    }
  }

  return isValid
}

// Add real-time validation
document.addEventListener("DOMContentLoaded", () => {
  const formInputs = document.querySelectorAll(".form-input, .form-textarea")

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.style.borderColor = "#ef4444"
      } else {
        this.style.borderColor = "#d1d5db"
      }
    })

    input.addEventListener("input", function () {
      if (this.style.borderColor === "rgb(239, 68, 68)") {
        this.style.borderColor = "#d1d5db"
      }
    })
  })

  // Auto-format Telegram username
  const telegramInput = document.querySelector('input[name="telegram"]')
  if (telegramInput) {
    telegramInput.addEventListener("input", function () {
      const value = this.value.trim()
      if (value && !value.startsWith("@")) {
        this.value = "@" + value
      }
    })
  }
})

// Add loading animation for buttons
function addButtonLoadingState(button, originalText) {
  button.innerHTML = `
        <span style="display: inline-flex; align-items: center;">
            <span style="animation: spin 1s linear infinite; margin-right: 8px;">⏳</span>
            Loading...
        </span>
    `
  button.disabled = true
}

// Add CSS for loading animation
const style = document.createElement("style")
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`
document.head.appendChild(style)
