// Project Ants Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    init();
});

function init() {
    // Setup navigation
    setupNavigation();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup video player enhancements
    setupVideoPlayer();
    
    console.log('Project Ants website initialized');
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Only handle visible navigation links
            if (this.classList.contains('hidden')) {
                return;
            }
            
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            setActiveNavLink(this);
        });
    });
}

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Set active navigation link
function setActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    activeLink.classList.add('active');
}

// Smooth scrolling for better UX
function setupSmoothScrolling() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Video player enhancements
function setupVideoPlayer() {
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (videoWrapper) {
        // Add loading indicator
        videoWrapper.addEventListener('load', function() {
            console.log('Video loaded successfully');
        });
        
        // Handle video errors gracefully
        const iframe = videoWrapper.querySelector('iframe');
        if (iframe) {
            iframe.addEventListener('error', function() {
                console.log('Video failed to load');
                // Could add fallback content here
            });
        }
    }
}

// Utility function to show hidden sections (for future development)
function showHiddenSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navLink = document.querySelector(`[href="#${sectionId}"]`);
    
    if (section && navLink) {
        section.classList.remove('hidden');
        navLink.classList.remove('hidden');
        console.log(`Section ${sectionId} is now visible`);
    }
}

// Utility function to hide sections (for future development)
function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navLink = document.querySelector(`[href="#${sectionId}"]`);
    
    if (section && navLink) {
        section.classList.add('hidden');
        navLink.classList.add('hidden');
        
        // If hiding the active section, switch to home
        if (section.classList.contains('active')) {
            showSection('home');
            setActiveNavLink(document.querySelector('[href="#home"]'));
        }
        
        console.log(`Section ${sectionId} is now hidden`);
    }
}

// Export functions for future use
window.ProjectAnts = {
    showHiddenSection,
    hideSection,
    showSection,
    setActiveNavLink
};