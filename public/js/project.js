// JavaScript for individual project pages

// Get project slug from URL
function getProjectSlug() {
    const path = window.location.pathname;
    const parts = path.split('/');
    return parts[parts.length - 1];
}

// Load project details
async function loadProjectDetails() {
    try {
        const slug = getProjectSlug();
        const response = await fetch('/data/projects.json?v=' + Date.now());
        const data = await response.json();
        const project = data.projects.find(p => p.slug === slug);
        
        if (!project) {
            window.location.href = '/';
            return;
        }
        
        // Update page title
        document.getElementById('project-title').textContent = `${project.title} - Renn Valo`;
        
        // Render project hero
        const heroSection = document.getElementById('project-hero');
        heroSection.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-4">
                    <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                        ${project.category} • ${project.year}
                    </span>
                </div>
                <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">${project.title}</h1>
                <p class="text-xl md:text-2xl text-purple-100 mb-6">${project.subtitle}</p>
                <div class="flex flex-wrap gap-3">
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" 
                           class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition inline-flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Visit Live Site
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        // Render project details
        const detailsSection = document.getElementById('project-details');
        detailsSection.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Project Image -->
                <div class="mb-12 rounded-2xl overflow-hidden shadow-xl">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-96 object-cover">
                </div>
                
                <!-- Overview -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold mb-4">Project Overview</h2>
                    <p class="text-lg text-gray-700 leading-relaxed">${project.shortDescription}</p>
                </div>
                
                <!-- Technologies -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold mb-4">Technologies Used</h2>
                    <div class="flex flex-wrap gap-3">
                        ${project.technologies.map(tech => `
                            <span class="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Key Highlights -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold mb-4">Key Highlights</h2>
                    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                        <ul class="space-y-3">
                            ${project.highlights.map(highlight => `
                                <li class="flex items-start">
                                    <svg class="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span class="text-gray-700">${highlight}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                ${project.keyFeatures ? `
                    <!-- Key Features -->
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4">Key Features</h2>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${project.keyFeatures.map(feature => `
                                <div class="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition">
                                    <div class="flex items-start">
                                        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">${feature}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${project.challenges ? `
                    <!-- Challenges & Solutions -->
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4">Challenges & Solutions</h2>
                        <div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
                            <p class="text-gray-700 leading-relaxed">${project.challenges}</p>
                        </div>
                    </div>
                ` : ''}
                
                ${project.outcome ? `
                    <!-- Outcome -->
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold mb-4">Outcome & Impact</h2>
                        <div class="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-6">
                            <p class="text-gray-700 leading-relaxed">${project.outcome}</p>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
    } catch (error) {
        console.error('Error loading project details:', error);
        document.getElementById('project-details').innerHTML = `
            <div class="max-w-4xl mx-auto px-4 text-center py-12">
                <p class="text-gray-600 mb-4">Unable to load project details.</p>
                <a href="/" class="text-purple-600 hover:underline">Return to homepage</a>
            </div>
        `;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();
});
