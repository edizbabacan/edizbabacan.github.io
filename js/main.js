// Elite Auto Care - Main JavaScript

// Global state
let currentStep = 1;
let selectedPackages = {
    detailing: null,
    maintenance: null
};

// Utility function to scroll to pricing section
function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Select package option
function selectOption(category, level, price, isAdHoc) {
    selectedPackages[category] = {
        level: level,
        price: price,
        isAdHoc: isAdHoc
    };

    // Remove selected class from all cards in this category
    const stepId = category === 'detailing' ? 'step-1' : 'step-2';
    document.querySelectorAll(`#${stepId} .pricing-card`).forEach(card => {
        card.classList.remove('selected');
    });

    // Add selected class to clicked card
    event.currentTarget.classList.add('selected');

    // Enable next button
    const nextBtn = document.getElementById(`next-${currentStep}`);
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// Skip a step
function skipStep(category) {
    selectedPackages[category] = null;
    
    // Remove selected class from all cards
    const stepId = category === 'detailing' ? 'step-1' : 'step-2';
    document.querySelectorAll(`#${stepId} .pricing-card`).forEach(card => {
        card.classList.remove('selected');
    });

    nextStep(currentStep);
}

// Move to next step
function nextStep(step) {
    // Check if at least one package is selected before going to review
    if (step === 2 && !selectedPackages.detailing && !selectedPackages.maintenance) {
        alert('Please select at least one package before proceeding.');
        return;
    }

    // Hide current step
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step}-header`).classList.remove('active');
    document.getElementById(`step-${step}-header`).classList.add('completed');

    // Show next step
    currentStep = step + 1;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.getElementById(`step-${currentStep}-header`).classList.add('active');

    // If moving to review step, generate summary
    if (currentStep === 3) {
        generateReview();
    }

    // Scroll to pricing section
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Move to previous step
function prevStep(step) {
    // Hide current step
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step}-header`).classList.remove('active');

    // Show previous step
    currentStep = step - 1;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.getElementById(`step-${currentStep}-header`).classList.add('active');
    document.getElementById(`step-${currentStep}-header`).classList.remove('completed');

    // Scroll to pricing section
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Generate review summary
function generateReview() {
    const reviewDiv = document.getElementById('review-summary');
    let monthlyTotal = 0;
    let oneTimeTotal = 0;
    let html = '';

    // Add detailing package if selected
    if (selectedPackages.detailing) {
        const pkg = selectedPackages.detailing;
        html += `
            <div class="review-section">
                <h3 style="margin-bottom: 1.5rem;">🚗 Detailing Package</h3>
                <div class="review-item">
                    <div class="review-details">
                        <h4>${pkg.level} Detailing</h4>
                        <p>${pkg.isAdHoc ? 'One-time service' : 'Monthly subscription'}</p>
                    </div>
                    <div class="review-price">
                        $${pkg.price}${pkg.isAdHoc ? '' : '/mo'}
                    </div>
                </div>
            </div>
        `;
        if (pkg.isAdHoc) {
            oneTimeTotal += pkg.price;
        } else {
            monthlyTotal += pkg.price;
        }
    }

    // Add maintenance package if selected
    if (selectedPackages.maintenance) {
        const pkg = selectedPackages.maintenance;
        html += `
            <div class="review-section">
                <h3 style="margin-bottom: 1.5rem;">⚙ Maintenance Plan</h3>
                <div class="review-item">
                    <div class="review-details">
                        <h4>${pkg.level} Maintenance</h4>
                        <p>${pkg.isAdHoc ? 'One-time service' : 'Monthly subscription'}</p>
                    </div>
                    <div class="review-price">
                        $${pkg.price}${pkg.isAdHoc ? '' : '/mo'}
                    </div>
                </div>
            </div>
        `;
        if (pkg.isAdHoc) {
            oneTimeTotal += pkg.price;
        } else {
            monthlyTotal += pkg.price;
        }
    }

    // Add total section
    let totalText = '';
    if (monthlyTotal > 0 && oneTimeTotal > 0) {
        totalText = `$${monthlyTotal}/month + $${oneTimeTotal} one-time`;
    } else if (monthlyTotal > 0) {
        totalText = `$${monthlyTotal}/month`;
    } else if (oneTimeTotal > 0) {
        totalText = `$${oneTimeTotal} one-time`;
    }

    html += `
        <div class="total-section">
            <h3>Total Package Cost</h3>
            <div class="total-amount">${totalText}</div>
            <p style="color: #b8b8d1; margin-top: 1rem;">
                ${monthlyTotal > 0 ? 'Recurring monthly subscription' : 'One-time payment'}
            </p>
        </div>
    `;

    reviewDiv.innerHTML = html;
}

// Handle custom package inquiry
function contactForCustom(category) {
    alert(`Thank you for your interest in a custom ${category} package! Please scroll down to the contact form to discuss your specific requirements.`);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Proceed to booking
function proceedToBooking() {
    // Build package description
    let packageDesc = '';
    if (selectedPackages.detailing) {
        packageDesc += `Detailing: ${selectedPackages.detailing.level}`;
    }
    if (selectedPackages.maintenance) {
        if (packageDesc) packageDesc += ' + ';
        packageDesc += `Maintenance: ${selectedPackages.maintenance.level}`;
    }

    // Set the input field
    document.getElementById('selected-package-input').value = packageDesc;

    // Scroll to contact
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Show success message
    alert('Thank you for your booking! We will contact you shortly to confirm your appointment.');
    
    // Here you would typically send the form data to your server
    // Example:
    // fetch('/api/booking', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    
    // Reset form
    event.target.reset();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Elite Auto Care - Website Loaded');
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
