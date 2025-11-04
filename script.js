// Smooth Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    animateOnScroll();
    
    // Add hover effects to sections
    addHoverEffects();
    
    // Initialize skill bar animations
    animateSkillBars();
});

// Animate elements when they come into view
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Add hover effects to project and job items
function addHoverEffects() {
    const projects = document.querySelectorAll('.project, .job, .education-item');
    
    projects.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f4ff';
            this.style.padding = '10px';
            this.style.borderRadius = '5px';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
        });
    });
}

// Animate skill items with staggered effect
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skills li');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
}

// Download Resume as PDF
function downloadResume() {
    // Hide the download button before printing
    const downloadSection = document.querySelector('.download-section');
    downloadSection.style.display = 'none';
    
    // Trigger print dialog
    window.print();
    
    // Show the button again after printing
    setTimeout(() => {
        downloadSection.style.display = 'block';
    }, 1000);
}

// Add typing effect to name (optional enhancement)
function typeWriterEffect() {
    const nameElement = document.querySelector('.header h1');
    const text = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// Track page views (analytics placeholder)
console.log('Resume viewed at:', new Date().toLocaleString());

// Add interactive tooltip for email
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('.contact-info span:nth-child(2)');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.addEventListener('click', function() {
            navigator.clipboard.writeText('manavpimparkar123@gmail.com');
            
            // Show copied notification
            const notification = document.createElement('div');
            notification.textContent = 'Email copied to clipboard!';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    }
});
