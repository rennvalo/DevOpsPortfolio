// Main JavaScript for portfolio homepage

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load and display projects
async function loadProjects() {
    try {
        const response = await fetch('/data/projects.json?v=' + Date.now());
        const data = await response.json();
        const projectsGrid = document.getElementById('projects-grid');
        
        projectsGrid.innerHTML = data.projects.map(project => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div class="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-full object-cover opacity-80"
                         onerror="this.style.display='none'">
                    <div class="absolute top-4 right-4">
                        <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
                            ${project.year}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="text-sm text-purple-600 font-semibold mb-2">${project.category}</div>
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3">${project.shortDescription}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.slice(0, 3).map(tech => `
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                ${tech}
                            </span>
                        `).join('')}
                        ${project.technologies.length > 3 ? `
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                +${project.technologies.length - 3} more
                            </span>
                        ` : ''}
                    </div>
                    <div class="flex gap-3">
                        <a href="/project/${project.slug}" 
                           class="flex-1 text-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                            View Details
                        </a>
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" 
                               class="flex-1 text-center border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition text-sm inline-flex items-center justify-center">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                                Live Site
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-grid').innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-600">Unable to load projects. Please try again later.</p>
            </div>
        `;
    }
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // Add fade-in animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.6s ease-in;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
