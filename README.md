# Storm Surge Risk GIS Dashboard

An interactive web-based GIS dashboard for analyzing storm surge vulnerability in low-lying coastal areas. Built on peer-reviewed research and advanced spatial analysis methodologies.

## 🌊 Overview

This dashboard provides comprehensive tools for assessing storm surge flood risk in vulnerable coastal communities. It integrates GIS-based methodologies, vulnerability assessment tools, and data visualization to support coastal resilience planning and decision-making.

## ✨ Features

### 1. Interactive Risk Map
- **Global Coverage**: 23+ coastal locations across Gulf Coast, Atlantic Coast, Pacific Coast, Caribbean, and international sites
- **Risk Visualization**: Color-coded markers indicating vulnerability levels (Low, Moderate, High, Extreme)
- **Detailed Popups**: Click markers to view:
  - Vulnerability Index (0-1 scale)
  - Population exposure
  - Elevation data
  - Maximum surge height projections
  - Risk interpretations
- **Scenario Modeling**: Toggle between:
  - Current conditions
  - Sea level rise 2050
  - Sea level rise 2100
  - Category 3-5 hurricane scenarios
- **Layer Controls**: Switch between vulnerability, inundation, population, and infrastructure risk layers

### 2. Vulnerability Calculator
Interactive tool for calculating coastal vulnerability index based on:
- **Physical Factors**:
  - Elevation above sea level
  - Distance from coast
  - Terrain characteristics
- **Social Factors**:
  - Population density
  - Community exposure
- **Adaptive Capacity**:
  - Coastal protection infrastructure level
  - Storm category intensity

**Output**:
- Vulnerability Index (0-1 scale)
- Risk level classification
- Detailed interpretation
- Specific risk factors analysis

### 3. Storm Surge Inundation Estimator
Real-time estimation tool with adjustable parameters:
- **Inputs**:
  - Expected surge height (0-10m)
  - Sea level rise scenario (0-2m by 2100)
  - Terrain slope (flat, gentle, moderate, steep)
- **Outputs**:
  - Inland reach distance
  - Affected area (km²)
  - Impact on residential areas
  - Impact on critical infrastructure
  - Impact on agricultural land
  - Estimated population affected

### 4. Analytics Dashboard
Four comprehensive charts displaying:
- **Vulnerability Index by Region**: Bar chart comparing coastal regions
- **Population Exposure Trends**: Line chart showing projections to 2040
- **Historical Storm Events**: Stacked bar chart of Category 1-2 and 3+ events (2010-2025)
- **Economic Impact Projections**: Multi-scenario line chart showing costs through 2100

### 5. GIS Methodologies & Resources
Educational content covering:
- **Spatial Analysis**: Overlay analysis, buffer zones, DEM analysis
- **Remote Sensing Integration**: Sentinel-2, Landsat, LiDAR data
- **Hydrodynamic Modeling**: ADCIRC, SLOSH integration
- **Multi-Criteria Analysis**: AHP, weighted overlay
- **Social Vulnerability Index**: Census data, SoVI methodology
- **Machine Learning**: Random Forest, neural networks

### 6. Data Sources & Software
Comprehensive lists of:
- **Data Sources**: NOAA, USGS, NASA, OpenStreetMap, WorldPop
- **Software Platforms**: ArcGIS, QGIS, Google Earth Engine, Python, R

### 7. Featured Case Studies
Three regional case studies:
- Gulf of Mexico Coast
- Small Island States
- Southeast Asian Coasts

## 🛠️ Technology Stack

- **Frontend**: HTML5, TailwindCSS, Vanilla JavaScript
- **Mapping**: Leaflet.js 1.9.4
- **Data Visualization**: Chart.js 4.4.1
- **Responsive Design**: Mobile-first approach with fluid breakpoints
- **Performance**: Optimized for Lighthouse score ≥90

## 📊 Data & Methodology

### Research Foundation
Based on 136 peer-reviewed studies (2018-2026) covering:
- GIS-based vulnerability assessment methodologies
- Storm surge modeling and inundation mapping
- Remote sensing integration
- Multi-criteria decision analysis
- Social vulnerability assessment

### Vulnerability Index Calculation
The dashboard uses a weighted combination approach:
```
VI = (Physical Vulnerability × 0.35) + 
     (Exposure Score × 0.25) + 
     ((1 - Protection Score) × 0.20) + 
     0.20) × Storm Factor
```

Components:
- **Physical Vulnerability**: Based on elevation and proximity to coast
- **Exposure Score**: Based on population density
- **Protection Score**: Based on coastal infrastructure level
- **Storm Factor**: Multiplier based on hurricane category (0.7-1.4)

### Risk Classification
- **Low Risk**: VI < 0.25
- **Moderate Risk**: VI 0.25-0.50
- **High Risk**: VI 0.50-0.75
- **Extreme Risk**: VI ≥ 0.75

## 🚀 Usage

### Online Access
Visit the deployed dashboard: **https://jl8ynu1c.scispace.co**

### Local Development
1. Clone or download the repository
2. Navigate to the project directory
3. Start a local server:
   ```bash
   npx serve
   ```
4. Open browser to `http://localhost:3000`

## 📁 Project Structure

```
storm-surge-gis-dashboard/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── map.js            # Interactive map functionality
│   ├── calculator.js     # Vulnerability calculator logic
│   └── charts.js         # Analytics charts
├── data/                 # Data files (if needed)
├── images/              # Image assets
└── README.md           # This file
```

## 🎯 Key Features Implementation

### Interactive Map
- **Technology**: Leaflet.js with OpenStreetMap tiles
- **Data**: 23 coastal locations with vulnerability metrics
- **Interactivity**: Click markers for detailed popups, scenario switching, layer toggling

### Vulnerability Calculator
- **Algorithm**: Multi-factor weighted scoring system
- **Real-time**: Instant calculation on form submission
- **Visual Feedback**: Color-coded progress bars, risk level badges

### Inundation Estimator
- **Approach**: Terrain-based distance calculation
- **Dynamic Updates**: Real-time slider adjustments
- **Visual Indicators**: Progress bars for impact categories

### Analytics Charts
- **Library**: Chart.js with responsive configuration
- **Data Sources**: Research-based projections and historical data
- **Interactivity**: Tooltips, legends, hover effects

## 🌐 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized map controls for mobile

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for non-decorative images
- Color contrast compliance

## 🔒 Data Privacy

- No user data collection
- No cookies or tracking
- Client-side processing only
- Static file hosting

## 📚 References

This dashboard is built on research from 136 peer-reviewed papers including:

1. Multi-criteria GIS assessment methodologies
2. Remote sensing and LiDAR integration studies
3. Hydrodynamic storm surge modeling
4. Social vulnerability assessment frameworks
5. Climate change impact projections
6. Coastal adaptation strategies

Key data sources:
- NOAA Sea Level Rise Viewer
- USGS 3DEP Elevation Data
- NASA Earth Observations
- OpenStreetMap
- WorldPop/LandScan Population Data

## 🤝 Contributing

This is an educational and research tool. Contributions, suggestions, and feedback are welcome.

## ⚠️ Disclaimer

This tool provides educational estimates based on research literature and simplified models. For official risk assessments and emergency planning, consult:
- Local emergency management authorities
- NOAA National Hurricane Center
- FEMA flood maps
- Regional coastal management offices

## 📄 License

Educational and research use. Data sources retain their respective licenses.

## 📧 Contact

For questions about the methodology or data sources, refer to the research papers cited in the dashboard.

## 🎓 Educational Use

This dashboard is designed for:
- Coastal resilience planning education
- GIS methodology demonstration
- Climate change impact visualization
- Community risk awareness
- Academic research and teaching

## 🔄 Updates

Version 1.0 (January 2026)
- Initial release with 23 coastal locations
- Interactive map with 5 scenario types
- Vulnerability calculator and inundation estimator
- 4 analytics charts
- 6 GIS methodology descriptions
- Comprehensive data sources and tools reference

---

**Built with research, designed for resilience.**

For the latest updates and additional resources, visit the live dashboard at: https://jl8ynu1c.scispace.co
