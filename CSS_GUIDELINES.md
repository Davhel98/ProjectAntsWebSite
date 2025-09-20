# CSS Organization Guidelines

This document outlines the CSS organization guidelines for the Project Ants Website.

## Rules

1. **All style information must be written in CSS classes**
2. **All CSS classes must be placed in proper .css files**
3. **No style or CSS should be written in files different than .css files**

## File Structure

```
ProjectAntsWebSite/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
└── README.md
```

## ✅ Correct Approach

### HTML Files
- Use semantic HTML elements
- Apply styling through CSS classes only
- Link to external CSS files using `<link rel="stylesheet" href="css/styles.css">`

Example:
```html
<div class="hero-section">
    <h1 class="hero-title">Welcome to Project Ants</h1>
    <button class="cta-button">Play Now</button>
</div>
```

### CSS Files
- Define all styling rules in `.css` files
- Use descriptive class names
- Organize styles logically (reset, layout, components, etc.)

Example:
```css
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 100px 0;
    text-align: center;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
}

.cta-button {
    background-color: #e74c3c;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
}
```

## ❌ Incorrect Approaches

### Inline Styles (NEVER DO THIS)
```html
<!-- WRONG: Inline styles -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 100px 0;">
    <h1 style="font-size: 3rem; color: white;">Welcome to Project Ants</h1>
    <button style="background-color: #e74c3c; padding: 15px 30px;">Play Now</button>
</div>
```

### Style Tags in HTML (NEVER DO THIS)
```html
<!-- WRONG: Style tags in HTML -->
<head>
    <style>
        .hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 100px 0;
        }
    </style>
</head>
```

### CSS in JavaScript Files (NEVER DO THIS)
```javascript
// WRONG: CSS in JavaScript
element.style.backgroundColor = '#e74c3c';
element.style.padding = '15px 30px';
```

## Best Practices

1. **Use meaningful class names** that describe the purpose or content, not the appearance
2. **Organize CSS logically** with sections for reset, base styles, components, and utilities
3. **Use external stylesheets** linked in the HTML head section
4. **Keep HTML semantic** and focused on structure and content
5. **Separate concerns** - HTML for structure, CSS for presentation, JavaScript for behavior

## CSS File Organization

The main `css/styles.css` file is organized as follows:

1. **Reset and base styles** - Normalize browser defaults
2. **Container and layout** - Grid systems and containers
3. **Components** - Specific UI components (header, nav, buttons, etc.)
4. **Utilities** - Helper classes
5. **Responsive design** - Media queries for different screen sizes

This organization ensures maintainability and follows modern web development best practices.