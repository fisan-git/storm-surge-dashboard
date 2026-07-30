// Vulnerability Calculator and Inundation Estimator

// Vulnerability Calculator
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vulnerability-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateVulnerability();
    });
    
    // Inundation estimator real-time updates
    setupInundationEstimator();
});

function calculateVulnerability() {
    // Get form values
    const elevation = parseFloat(document.getElementById('elevation').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const population = parseInt(document.getElementById('population').value);
    const protection = document.getElementById('protection').value;
    const stormCategory = parseInt(document.getElementById('storm-category').value);
    
    // Calculate vulnerability components based on research methodologies
    
    // 1. Physical Vulnerability (based on elevation and distance)
    const elevationScore = calculateElevationScore(elevation);
    const proximityScore = calculateProximityScore(distance);
    const physicalVulnerability = (elevationScore * 0.6 + proximityScore * 0.4);
    
    // 2. Exposure (based on population density)
    const exposureScore = calculateExposureScore(population);
    
    // 3. Adaptive Capacity (based on protection level)
    const protectionScore = calculateProtectionScore(protection);
    
    // 4. Storm Intensity Factor
    const stormFactor = calculateStormFactor(stormCategory);
    
    // Calculate overall Vulnerability Index using weighted combination
    // VI = (Physical * 0.35 + Exposure * 0.25 + (1-Protection) * 0.20) * Storm Factor + 0.20
    const vulnerabilityIndex = (
        (physicalVulnerability * 0.35) +
        (exposureScore * 0.25) +
        ((1 - protectionScore) * 0.20) +
        0.20
    ) * stormFactor;
    
    // Normalize to 0-1 range
    const normalizedVI = Math.min(1.0, Math.max(0.0, vulnerabilityIndex));
    
    // Display results
    displayVulnerabilityResults(normalizedVI, {
        elevation,
        distance,
        population,
        protection,
        stormCategory,
        physicalVulnerability,
        exposureScore,
        protectionScore
    });
}

function calculateElevationScore(elevation) {
    // Lower elevation = higher vulnerability
    // Score ranges from 0 (high elevation) to 1 (at sea level)
    if (elevation <= 0.5) return 1.0;
    if (elevation <= 1.0) return 0.9;
    if (elevation <= 2.0) return 0.75;
    if (elevation <= 3.0) return 0.6;
    if (elevation <= 5.0) return 0.4;
    if (elevation <= 10.0) return 0.2;
    return 0.1;
}

function calculateProximityScore(distance) {
    // Closer to coast = higher vulnerability
    if (distance <= 0.5) return 1.0;
    if (distance <= 1.0) return 0.85;
    if (distance <= 2.0) return 0.7;
    if (distance <= 5.0) return 0.5;
    if (distance <= 10.0) return 0.3;
    return 0.15;
}

function calculateExposureScore(population) {
    // Higher population density = higher exposure
    if (population >= 10000) return 1.0;
    if (population >= 5000) return 0.8;
    if (population >= 2000) return 0.6;
    if (population >= 1000) return 0.4;
    if (population >= 500) return 0.25;
    return 0.1;
}

function calculateProtectionScore(protection) {
    // Higher protection = lower vulnerability (inverse relationship)
    const scores = {
        'none': 0.0,
        'low': 0.3,
        'medium': 0.6,
        'high': 0.85
    };
    return scores[protection] || 0.0;
}

function calculateStormFactor(category) {
    // Storm category multiplier
    const factors = {
        1: 0.7,
        2: 0.85,
        3: 1.0,
        4: 1.2,
        5: 1.4
    };
    return factors[category] || 1.0;
}

function displayVulnerabilityResults(vi, params) {
    const resultDiv = document.getElementById('vulnerability-result');
    const scoreSpan = document.getElementById('vi-score');
    const barDiv = document.getElementById('vi-bar');
    const interpretationDiv = document.getElementById('vi-interpretation');
    const riskFactorsUl = document.getElementById('risk-factors');
    
    // Show result div
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('fade-in');
    
    // Display score
    scoreSpan.textContent = vi.toFixed(3);
    
    // Determine risk level and color
    let riskLevel, color, bgColor, textColor;
    if (vi >= 0.75) {
        riskLevel = 'Extreme Risk';
        color = '#dc2626';
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
    } else if (vi >= 0.50) {
        riskLevel = 'High Risk';
        color = '#f97316';
        bgColor = 'bg-orange-100';
        textColor = 'text-orange-800';
    } else if (vi >= 0.25) {
        riskLevel = 'Moderate Risk';
        color = '#eab308';
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
    } else {
        riskLevel = 'Low Risk';
        color = '#22c55e';
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
    }
    
    // Update score color
    scoreSpan.className = `font-bold text-lg ${textColor}`;
    
    // Update progress bar
    barDiv.style.width = `${vi * 100}%`;
    barDiv.style.backgroundColor = color;
    
    // Display interpretation
    interpretationDiv.innerHTML = `
        <div class="p-3 rounded ${bgColor}">
            <p class="font-semibold ${textColor}">${riskLevel}</p>
            <p class="text-sm text-gray-700 mt-1">${getInterpretation(vi)}</p>
        </div>
    `;
    
    // Display risk factors
    const factors = generateRiskFactors(params);
    riskFactorsUl.innerHTML = factors.map(factor => 
        `<li class="flex items-start">
            <svg class="w-4 h-4 mr-2 mt-0.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            ${factor}
        </li>`
    ).join('');
}

function getInterpretation(vi) {
    if (vi >= 0.85) {
        return 'Critical vulnerability level. Immediate evacuation planning and comprehensive flood protection infrastructure required. Area is highly susceptible to catastrophic storm surge flooding.';
    } else if (vi >= 0.75) {
        return 'Extreme vulnerability. Significant risk of severe flooding during major storm events. Urgent adaptation measures and enhanced early warning systems needed.';
    } else if (vi >= 0.60) {
        return 'High vulnerability. Substantial flood risk requiring comprehensive coastal protection measures, improved drainage systems, and community preparedness programs.';
    } else if (vi >= 0.50) {
        return 'Moderately high vulnerability. Notable flood risk during severe storms. Implementation of flood barriers, elevation of critical infrastructure, and emergency response planning recommended.';
    } else if (vi >= 0.35) {
        return 'Moderate vulnerability. Some flood risk exists, particularly during intense storm events. Enhanced monitoring, community awareness, and basic protection measures advised.';
    } else if (vi >= 0.25) {
        return 'Low-moderate vulnerability. Limited flood risk, but continued monitoring and maintenance of existing protection infrastructure recommended.';
    } else {
        return 'Low vulnerability. Minimal storm surge flood risk under current conditions. Standard coastal zone management practices sufficient.';
    }
}

function generateRiskFactors(params) {
    const factors = [];
    
    if (params.elevation <= 2.0) {
        factors.push(`Low elevation (${params.elevation}m) significantly increases flood risk`);
    }
    
    if (params.distance <= 1.0) {
        factors.push(`Close proximity to coast (${params.distance}km) enhances surge impact`);
    }
    
    if (params.population >= 5000) {
        factors.push(`High population density (${params.population}/km²) increases exposure`);
    }
    
    if (params.protection === 'none' || params.protection === 'low') {
        factors.push(`Limited coastal protection infrastructure reduces adaptive capacity`);
    }
    
    if (params.stormCategory >= 4) {
        factors.push(`Category ${params.stormCategory} storm generates extreme surge heights`);
    }
    
    // Add positive factors
    if (params.elevation > 5.0) {
        factors.push(`Elevated terrain provides natural protection`);
    }
    
    if (params.protection === 'high') {
        factors.push(`Robust coastal protection infrastructure reduces risk`);
    }
    
    if (factors.length === 0) {
        factors.push('Multiple moderate risk factors present');
    }
    
    return factors;
}

// Inundation Estimator
function setupInundationEstimator() {
    const surgeSlider = document.getElementById('surge-height');
    const slrSlider = document.getElementById('slr-scenario');
    const terrainSelect = document.getElementById('terrain-slope');
    
    surgeSlider.addEventListener('input', updateInundation);
    slrSlider.addEventListener('input', updateInundation);
    terrainSelect.addEventListener('change', updateInundation);
    
    // Initial calculation
    updateInundation();
}

function updateInundation() {
    const surgeHeight = parseFloat(document.getElementById('surge-height').value);
    const slr = parseFloat(document.getElementById('slr-scenario').value);
    const terrain = document.getElementById('terrain-slope').value;
    
    // Update display values
    document.getElementById('surge-value').textContent = `${surgeHeight.toFixed(1)}m`;
    document.getElementById('slr-value').textContent = `${slr.toFixed(1)}m`;
    
    // Update slider background gradient
    updateSliderBackground('surge-height', surgeHeight, 10);
    updateSliderBackground('slr-scenario', slr, 2);
    
    // Calculate total water level
    const totalWaterLevel = surgeHeight + slr;
    
    // Calculate inundation distance based on terrain slope
    const slopeFactors = {
        'flat': 2.5,      // Flat terrain: water travels far inland
        'gentle': 1.8,    // Gentle slope: moderate inland reach
        'moderate': 1.2,  // Moderate slope: limited inland reach
        'steep': 0.6      // Steep terrain: minimal inland reach
    };
    
    const slopeFactor = slopeFactors[terrain];
    const inundationDistance = (totalWaterLevel * slopeFactor).toFixed(1);
    const affectedArea = (Math.PI * Math.pow(inundationDistance, 2)).toFixed(1);
    
    // Update displays
    document.getElementById('inundation-distance').textContent = `${inundationDistance} km`;
    document.getElementById('affected-area').textContent = `${affectedArea} km²`;
    
    // Calculate impact percentages
    const residentialImpact = calculateImpactPercentage(totalWaterLevel, 'residential');
    const infrastructureImpact = calculateImpactPercentage(totalWaterLevel, 'infrastructure');
    const agriculturalImpact = calculateImpactPercentage(totalWaterLevel, 'agricultural');
    
    // Update impact bars and labels
    updateImpactBar('residential', residentialImpact);
    updateImpactBar('infrastructure', infrastructureImpact);
    updateImpactBar('agricultural', agriculturalImpact);
    
    // Update note
    const estimatedPopulation = Math.round(parseFloat(affectedArea) * 2850); // Assuming avg coastal density
    document.getElementById('inundation-note').innerHTML = `
        Based on current parameters, storm surge could reach <span class="font-semibold">${inundationDistance} km inland</span> 
        with a total water level of <span class="font-semibold">${totalWaterLevel.toFixed(1)}m</span>, 
        affecting approximately <span class="font-semibold">${estimatedPopulation.toLocaleString()} residents</span>.
    `;
}

function updateSliderBackground(sliderId, value, max) {
    const slider = document.getElementById(sliderId);
    const percentage = (value / max) * 100;
    slider.style.background = `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
}

function calculateImpactPercentage(waterLevel, category) {
    // Simplified impact calculation based on water level
    let baseImpact;
    
    switch(category) {
        case 'residential':
            baseImpact = Math.min(100, (waterLevel / 8) * 100);
            break;
        case 'infrastructure':
            baseImpact = Math.min(100, (waterLevel / 10) * 100);
            break;
        case 'agricultural':
            baseImpact = Math.min(100, (waterLevel / 12) * 100);
            break;
        default:
            baseImpact = 50;
    }
    
    return Math.round(baseImpact);
}

function updateImpactBar(category, percentage) {
    const bar = document.getElementById(`${category}-bar`);
    const label = document.getElementById(`${category}-impact`);
    
    bar.style.width = `${percentage}%`;
    
    // Update color and label based on percentage
    let riskLevel, color;
    if (percentage >= 75) {
        riskLevel = 'Extreme Risk';
        color = 'bg-red-600';
        label.className = 'font-semibold text-red-600';
    } else if (percentage >= 50) {
        riskLevel = 'High Risk';
        color = 'bg-orange-600';
        label.className = 'font-semibold text-orange-600';
    } else if (percentage >= 25) {
        riskLevel = 'Moderate Risk';
        color = 'bg-yellow-600';
        label.className = 'font-semibold text-yellow-600';
    } else {
        riskLevel = 'Low Risk';
        color = 'bg-green-600';
        label.className = 'font-semibold text-green-600';
    }
    
    bar.className = `${color} h-2 rounded-full transition-all duration-500`;
    label.textContent = riskLevel;
}