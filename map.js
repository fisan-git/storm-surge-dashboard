// Interactive Map for Storm Surge Risk Visualization

// Initialize the map
let map;
let markersLayer;
let heatmapLayer;
let currentScenario = 'current';
let currentLayer = 'vulnerability';
let heatmapVisible = false;

// Coastal locations with vulnerability data (sample data based on research)
const coastalLocations = [
    // Gulf of Mexico
    { name: 'New Orleans, LA', lat: 29.9511, lng: -90.0715, risk: 'extreme', vi: 0.89, population: 383000, elevation: 0.5, surge: 5.8 },
    { name: 'Galveston, TX', lat: 29.3013, lng: -94.7977, risk: 'high', vi: 0.76, population: 50000, elevation: 1.2, surge: 4.2 },
    { name: 'Mobile, AL', lat: 30.6954, lng: -88.0399, risk: 'high', vi: 0.72, population: 195000, elevation: 1.8, surge: 3.9 },
    { name: 'Biloxi, MS', lat: 30.3960, lng: -88.8853, risk: 'high', vi: 0.74, population: 46000, elevation: 1.5, surge: 4.1 },
    { name: 'Corpus Christi, TX', lat: 27.8006, lng: -97.3964, risk: 'moderate', vi: 0.65, population: 326000, elevation: 2.1, surge: 3.5 },
    
    // Atlantic Coast
    { name: 'Miami, FL', lat: 25.7617, lng: -80.1918, risk: 'extreme', vi: 0.85, population: 467000, elevation: 0.9, surge: 5.2 },
    { name: 'Charleston, SC', lat: 32.7765, lng: -79.9311, risk: 'high', vi: 0.78, population: 137000, elevation: 1.3, surge: 4.5 },
    { name: 'Norfolk, VA', lat: 36.8508, lng: -76.2859, risk: 'high', vi: 0.73, population: 245000, elevation: 1.4, surge: 3.8 },
    { name: 'Atlantic City, NJ', lat: 39.3643, lng: -74.4229, risk: 'moderate', vi: 0.68, population: 38000, elevation: 2.0, surge: 3.2 },
    { name: 'Boston, MA', lat: 42.3601, lng: -71.0589, risk: 'moderate', vi: 0.62, population: 692000, elevation: 2.3, surge: 2.9 },
    
    // Pacific Coast
    { name: 'San Diego, CA', lat: 32.7157, lng: -117.1611, risk: 'low', vi: 0.45, population: 1420000, elevation: 3.2, surge: 2.1 },
    { name: 'Los Angeles, CA', lat: 33.7701, lng: -118.1937, risk: 'low', vi: 0.48, population: 3980000, elevation: 2.8, surge: 2.3 },
    { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194, risk: 'moderate', vi: 0.58, population: 874000, elevation: 2.5, surge: 2.8 },
    { name: 'Seattle, WA', lat: 47.6062, lng: -122.3321, risk: 'low', vi: 0.42, population: 753000, elevation: 3.5, surge: 1.8 },
    
    // Caribbean & Islands
    { name: 'San Juan, PR', lat: 18.4655, lng: -66.1057, risk: 'extreme', vi: 0.87, population: 342000, elevation: 0.8, surge: 5.5 },
    { name: 'Honolulu, HI', lat: 21.3099, lng: -157.8581, risk: 'moderate', vi: 0.61, population: 350000, elevation: 2.2, surge: 3.0 },
    
    // International (examples)
    { name: 'Tarawa, Kiribati', lat: 1.3382, lng: 172.9789, risk: 'extreme', vi: 0.92, population: 56000, elevation: 0.3, surge: 6.2 },
    { name: 'Male, Maldives', lat: 4.1755, lng: 73.5093, risk: 'extreme', vi: 0.94, population: 133000, elevation: 0.4, surge: 6.5 },
    { name: 'Jakarta, Indonesia', lat: -6.2088, lng: 106.8456, risk: 'extreme', vi: 0.88, population: 10560000, elevation: 0.7, surge: 5.4 },
    { name: 'Shanghai, China', lat: 31.2304, lng: 121.4737, risk: 'high', vi: 0.79, population: 24280000, elevation: 1.6, surge: 4.3 },
    { name: 'Mumbai, India', lat: 19.0760, lng: 72.8777, risk: 'high', vi: 0.81, population: 20410000, elevation: 1.1, surge: 4.8 },
    { name: 'Dhaka, Bangladesh', lat: 23.8103, lng: 90.4125, risk: 'extreme', vi: 0.91, population: 21000000, elevation: 0.6, surge: 5.9 },
    { name: 'Manila, Philippines', lat: 14.5995, lng: 120.9842, risk: 'extreme', vi: 0.86, population: 13480000, elevation: 0.9, surge: 5.3 },
];

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    setupEventListeners();
    setTimeout(() => {
        document.getElementById('map-loading').style.display = 'none';
    }, 1500);
});

function initializeMap() {
    // Create map centered on Atlantic
    map = L.map('map-container').setView([25.0, -70.0], 3);
    
    // Add base tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);
    
    // Create marker layer group
    markersLayer = L.layerGroup().addTo(map);
    
    // Add markers for all locations
    updateMarkers();
}

function updateMarkers() {
    // Clear existing markers
    markersLayer.clearLayers();
    
    // Add markers for each location
    coastalLocations.forEach(location => {
        const marker = createMarker(location);
        marker.addTo(markersLayer);
    });
}

function createMarker(location) {
    // Determine color based on risk level
    const colors = {
        'low': '#22c55e',
        'moderate': '#eab308',
        'high': '#f97316',
        'extreme': '#dc2626'
    };
    
    const color = colors[location.risk];
    
    // Create custom icon
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    // Create marker
    const marker = L.marker([location.lat, location.lng], { icon: icon });
    
    // Create popup content
    const popupContent = createPopupContent(location);
    marker.bindPopup(popupContent, { maxWidth: 300 });
    
    return marker;
}

function createPopupContent(location) {
    const riskColors = {
        'low': 'text-green-600',
        'moderate': 'text-yellow-600',
        'high': 'text-orange-600',
        'extreme': 'text-red-600'
    };
    
    const riskBg = {
        'low': 'bg-green-100',
        'moderate': 'bg-yellow-100',
        'high': 'bg-orange-100',
        'extreme': 'bg-red-100'
    };
    
    return `
        <div class="p-2">
            <h3 class="font-bold text-lg text-gray-900 mb-2">${location.name}</h3>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">Risk Level:</span>
                    <span class="px-2 py-1 rounded text-xs font-semibold ${riskBg[location.risk]} ${riskColors[location.risk]} uppercase">
                        ${location.risk}
                    </span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-600">Vulnerability Index:</span>
                    <span class="text-sm font-semibold text-gray-900">${location.vi.toFixed(2)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-600">Population:</span>
                    <span class="text-sm font-semibold text-gray-900">${location.population.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-600">Elevation:</span>
                    <span class="text-sm font-semibold text-gray-900">${location.elevation}m</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-600">Max Surge:</span>
                    <span class="text-sm font-semibold text-gray-900">${location.surge}m</span>
                </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-200">
                <p class="text-xs text-gray-500">
                    ${getVulnerabilityDescription(location.vi)}
                </p>
            </div>
        </div>
    `;
}

function getVulnerabilityDescription(vi) {
    if (vi >= 0.85) {
        return 'Extremely vulnerable to storm surge flooding. Immediate adaptation measures recommended.';
    } else if (vi >= 0.70) {
        return 'High vulnerability requiring comprehensive flood protection infrastructure.';
    } else if (vi >= 0.55) {
        return 'Moderate vulnerability. Enhanced monitoring and early warning systems advised.';
    } else {
        return 'Relatively low vulnerability, but continued monitoring recommended.';
    }
}

function setupEventListeners() {
    // Scenario selector
    document.getElementById('scenario-select').addEventListener('change', function(e) {
        currentScenario = e.target.value;
        updateMapScenario();
    });
    
    // Layer selector
    document.getElementById('layer-select').addEventListener('change', function(e) {
        currentLayer = e.target.value;
        updateMapLayer();
    });
    
    // Heatmap toggle
    document.getElementById('toggle-heatmap').addEventListener('click', function() {
        toggleHeatmap();
    });
}

function updateMapScenario() {
    // Update markers based on scenario
    // In a real application, this would fetch different data
    console.log('Updating map for scenario:', currentScenario);
    
    // Simulate scenario changes by adjusting vulnerability indices
    coastalLocations.forEach(location => {
        switch(currentScenario) {
            case 'slr-2050':
                location.vi = Math.min(1.0, location.vi * 1.15);
                break;
            case 'slr-2100':
                location.vi = Math.min(1.0, location.vi * 1.35);
                break;
            case 'cat3':
                location.surge = location.surge * 1.2;
                break;
            case 'cat5':
                location.surge = location.surge * 1.6;
                location.vi = Math.min(1.0, location.vi * 1.25);
                break;
            default:
                // Reset to original values
                break;
        }
    });
    
    updateMarkers();
}

function updateMapLayer() {
    console.log('Updating map layer:', currentLayer);
    // In a real application, this would show different overlay layers
    // For now, we'll just update the marker colors based on the selected metric
    updateMarkers();
}

function toggleHeatmap() {
    heatmapVisible = !heatmapVisible;
    
    if (heatmapVisible) {
        // In a real application, you would use a heatmap plugin like Leaflet.heat
        // For this demo, we'll just show a message
        console.log('Heatmap layer would be displayed here');
        document.getElementById('toggle-heatmap').textContent = 'Hide Heatmap';
        document.getElementById('toggle-heatmap').classList.add('bg-ocean-800');
    } else {
        console.log('Heatmap layer hidden');
        document.getElementById('toggle-heatmap').textContent = 'Toggle Heatmap';
        document.getElementById('toggle-heatmap').classList.remove('bg-ocean-800');
    }
}

// Export map data function
function exportMapData() {
    const dataStr = JSON.stringify(coastalLocations, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'storm_surge_data.json';
    link.click();
}

// Add zoom to location function
function zoomToLocation(locationName) {
    const location = coastalLocations.find(loc => loc.name === locationName);
    if (location) {
        map.setView([location.lat, location.lng], 10);
        // Find and open the popup for this location
        markersLayer.eachLayer(function(layer) {
            if (layer.getLatLng().lat === location.lat && layer.getLatLng().lng === location.lng) {
                layer.openPopup();
            }
        });
    }
}
