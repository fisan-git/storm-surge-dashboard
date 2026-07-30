# Contributing to Storm Surge GIS Dashboard

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Enhancements
1. Check existing issues for similar suggestions
2. Create a new issue describing:
   - The enhancement or feature
   - Use cases and benefits
   - Possible implementation approach

### Code Contributions

#### Getting Started
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR-USERNAME/storm-surge-gis-dashboard.git
cd storm-surge-gis-dashboard

# Create a branch for your feature
git checkout -b feature/your-feature-name
```

#### Development Guidelines

**Code Style**:
- Use consistent indentation (2 spaces for HTML/CSS/JS)
- Follow existing naming conventions
- Add comments for complex logic
- Keep functions small and focused

**JavaScript**:
- Use ES6+ features where appropriate
- Avoid global variables
- Handle errors gracefully
- Add JSDoc comments for functions

**CSS**:
- Use Tailwind utility classes where possible
- Keep custom CSS minimal
- Follow mobile-first approach
- Maintain existing color scheme

**HTML**:
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Maintain responsive design
- Test on multiple screen sizes

#### Testing Your Changes
```bash
# Start local server
npx serve -l 3000

# Test in browser at http://localhost:3000
# Verify:
# - All interactive features work
# - No console errors
# - Responsive design on mobile/tablet/desktop
# - Accessibility with keyboard navigation
```

#### Submitting Changes
```bash
# Commit your changes
git add .
git commit -m "Add: Brief description of changes"

# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Pull Request Guidelines
- Provide clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure no breaking changes
- Test thoroughly before submitting

## Areas for Contribution

### High Priority
- [ ] Add more coastal location data
- [ ] Integrate real-time weather APIs
- [ ] Improve vulnerability calculation algorithm
- [ ] Add historical storm surge data
- [ ] Mobile app version

### Medium Priority
- [ ] Dark mode support
- [ ] Export functionality (PDF reports)
- [ ] Multi-language support
- [ ] Advanced filtering options
- [ ] User preferences storage

### Low Priority
- [ ] Animation improvements
- [ ] Additional chart types
- [ ] Social sharing features
- [ ] Print-optimized layouts

## Data Contributions

### Adding Coastal Locations
Edit `js/map.js` and add to `coastalLocations` array:
```javascript
{
    name: "Location Name",
    lat: latitude,
    lng: longitude,
    riskLevel: "Low|Moderate|High|Extreme",
    vulnerabilityIndex: 0.0-1.0,
    population: number,
    elevation: meters,
    maxSurge: meters
}
```

### Adding Case Studies
Edit `index.html` in the Case Studies section:
```html
<div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Study Title</h3>
    <p class="text-gray-600 mb-4">Location | Year</p>
    <p class="text-gray-700">Description...</p>
</div>
```

## Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome diverse perspectives
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy toward others

### Unacceptable Behavior
- Harassment or discriminatory language
- Trolling or inflammatory comments
- Personal or political attacks
- Publishing others' private information
- Unprofessional conduct

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion in Discussions tab
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to making coastal communities more resilient! 🌊
