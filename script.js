// DOM Elements
const navTabs = document.querySelectorAll('.nav-tab');
const contentSections = document.querySelectorAll('.content-section');
const searchInput = document.getElementById('searchInput');

// Navigation functionality
function initNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSection = tab.getAttribute('data-section');
            
            // Check if this is the forecasting tab and we're on index.html
            if (targetSection === 'forecasting' && window.location.pathname.includes('index.html')) {
                // Navigate to forecasting.html
                window.location.href = 'forecasting.html';
                return;
            }
            
            // Check if this is a main section tab and we're on forecasting.html
            if (['glossario', 'procedure', 'flussi', 'controlli'].includes(targetSection) && 
                window.location.pathname.includes('forecasting.html')) {
                // Navigate back to index.html with the specific section
                window.location.href = `index.html#${targetSection}`;
                return;
            }
            
            // Normal tab switching for same-page sections
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                // Remove active class from all tabs and sections
                navTabs.forEach(t => t.classList.remove('active'));
                contentSections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding section
                tab.classList.add('active');
                targetElement.classList.add('active');
                
                // Smooth scroll to top of content
                document.querySelector('.main-content').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle navigation from URL hash on page load
    handleHashNavigation();
}

// Handle navigation based on URL hash
function handleHashNavigation() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        // Remove active from all
        navTabs.forEach(t => t.classList.remove('active'));
        contentSections.forEach(s => s.classList.remove('active'));
        
        // Activate the target section
        const targetTab = document.querySelector(`[data-section="${hash}"]`);
        const targetSection = document.getElementById(hash);
        
        if (targetTab && targetSection) {
            targetTab.classList.add('active');
            targetSection.classList.add('active');
        }
    }
}

// Search functionality
function initSearch() {
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value.toLowerCase().trim());
        }, 300);
    });
}

function performSearch(query) {
    const allSearchableElements = document.querySelectorAll(
        '.acronym-item, .definition-item, .procedure-content li, .checkbox-item, .note-item, .footer-section li'
    );
    
    if (query === '') {
        // Reset all elements to visible
        allSearchableElements.forEach(element => {
            element.style.display = '';
            element.classList.remove('search-highlight');
        });
        return;
    }
    
    let hasResults = false;
    
    allSearchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        
        if (text.includes(query)) {
            element.style.display = '';
            element.classList.add('search-highlight');
            hasResults = true;
        } else {
            element.style.display = 'none';
            element.classList.remove('search-highlight');
        }
    });
    
    // Show search results indicator
    showSearchResults(hasResults, query);
}

function showSearchResults(hasResults, query) {
    // Remove existing search indicator
    const existingIndicator = document.querySelector('.search-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // Create new search indicator
    const indicator = document.createElement('div');
    indicator.className = 'search-indicator';
    indicator.innerHTML = hasResults 
        ? `<i class="fas fa-search"></i> Risultati per: "${query}"`
        : `<i class="fas fa-exclamation-circle"></i> Nessun risultato per: "${query}"`;
    
    // Insert after navigation
    const navigation = document.querySelector('.navigation');
    navigation.insertAdjacentElement('afterend', indicator);
    
    // Auto-remove after 3 seconds if no results
    if (!hasResults) {
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.remove();
            }
        }, 3000);
    }
}

// Checkbox functionality for controls
function initCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const item = e.target.closest('.checkbox-item');
            
            if (e.target.checked) {
                item.style.opacity = '0.7';
                item.style.textDecoration = 'line-through';
                
                // Add completion animation
                item.classList.add('completed');
                setTimeout(() => {
                    item.classList.remove('completed');
                }, 600);
            } else {
                item.style.opacity = '1';
                item.style.textDecoration = 'none';
            }
            
            // Save checkbox state to localStorage
            saveCheckboxState();
        });
    });
    
    // Load saved checkbox states
    loadCheckboxState();
}

function saveCheckboxState() {
    const checkboxStates = {};
    const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
        checkboxStates[index] = checkbox.checked;
    });
    
    localStorage.setItem('simeCheckboxStates', JSON.stringify(checkboxStates));
}

function loadCheckboxState() {
    const savedStates = localStorage.getItem('simeCheckboxStates');
    
    if (savedStates) {
        const checkboxStates = JSON.parse(savedStates);
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        
        checkboxes.forEach((checkbox, index) => {
            if (checkboxStates[index]) {
                checkbox.checked = true;
                const item = checkbox.closest('.checkbox-item');
                item.style.opacity = '0.7';
                item.style.textDecoration = 'line-through';
            }
        });
    }
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
        
        // Number keys 1-4 to switch tabs
        if (e.key >= '1' && e.key <= '4') {
            const tabIndex = parseInt(e.key) - 1;
            if (navTabs[tabIndex]) {
                navTabs[tabIndex].click();
            }
        }
    });
}

// Smooth animations for cards
function initCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card, .procedure-card, .control-card, .flow-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Progress tracking for checklists
function initProgressTracking() {
    const controlCards = document.querySelectorAll('.control-card');
    
    controlCards.forEach(card => {
        const checkboxes = card.querySelectorAll('input[type="checkbox"]');
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = `
            <div class="progress-fill"></div>
            <span class="progress-text">0%</span>
        `;
        
        // Insert progress bar after the title
        const title = card.querySelector('h3');
        title.insertAdjacentElement('afterend', progressBar);
        
        // Update progress when checkboxes change
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                updateProgress(card);
            });
        });
        
        // Initial progress update
        updateProgress(card);
    });
}

function updateProgress(card) {
    const checkboxes = card.querySelectorAll('input[type="checkbox"]');
    const checkedBoxes = card.querySelectorAll('input[type="checkbox"]:checked');
    const progressFill = card.querySelector('.progress-fill');
    const progressText = card.querySelector('.progress-text');
    
    const percentage = Math.round((checkedBoxes.length / checkboxes.length) * 100);
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
    
    // Change color based on progress
    if (percentage === 100) {
        progressFill.style.background = '#48bb78';
    } else if (percentage >= 50) {
        progressFill.style.background = '#ed8936';
    } else {
        progressFill.style.background = '#667eea';
    }
}

// Tooltip functionality
function initTooltips() {
    const acronymItems = document.querySelectorAll('.acronym-item');
    
    acronymItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'Clicca per copiare';
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            
            setTimeout(() => {
                tooltip.classList.add('show');
            }, 100);
        });
        
        item.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
        
        // Copy to clipboard functionality
        item.addEventListener('click', () => {
            const acronym = item.querySelector('.acronym').textContent;
            const definition = item.querySelector('.definition').textContent;
            const text = `${acronym}: ${definition}`;
            
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copiato negli appunti!', 'success');
            });
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Export functionality
function initExportFeatures() {
    // Add export button to header
    const headerContent = document.querySelector('.header-content');
    const exportBtn = document.createElement('button');
    exportBtn.className = 'export-btn';
    exportBtn.innerHTML = '<i class="fas fa-download"></i> Esporta PDF';
    exportBtn.addEventListener('click', exportToPDF);
    
    headerContent.appendChild(exportBtn);
}

function exportToPDF() {
    showNotification('Funzionalità di esportazione PDF in sviluppo', 'info');
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initCheckboxes();
    initKeyboardShortcuts();
    initCardAnimations();
    initProgressTracking();
    initTooltips();
    initExportFeatures();
    
    // Add search highlight styles
    const style = document.createElement('style');
    style.textContent = `
        .search-highlight {
            background: linear-gradient(120deg, #ffd700 0%, #ffed4e 100%);
            border-radius: 4px;
            animation: highlightPulse 1s ease-in-out;
        }
        
        @keyframes highlightPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        
        .search-indicator {
            background: #667eea;
            color: white;
            padding: 0.75rem 2rem;
            text-align: center;
            font-weight: 500;
            animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .completed {
            animation: completionBounce 0.6s ease;
        }
        
        @keyframes completionBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e2e8f0;
            border-radius: 4px;
            margin: 1rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: #667eea;
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        
        .progress-text {
            position: absolute;
            right: 0;
            top: -25px;
            font-size: 0.8rem;
            font-weight: 600;
            color: #4a5568;
        }
        
        .tooltip {
            position: absolute;
            background: #2d3748;
            color: white;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.8rem;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            pointer-events: none;
        }
        
        .tooltip.show {
            opacity: 1;
        }
        
        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: #2d3748;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            border-left: 4px solid #48bb78;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left-color: #48bb78;
        }
        
        .notification.info {
            border-left-color: #4299e1;
        }
        
        .export-btn {
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .export-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(72, 187, 120, 0.4);
        }
    `;
    document.head.appendChild(style);
    
    console.log('🚀 Glossario Tecnico SIME inizializzato con successo!');
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 