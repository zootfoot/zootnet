export function getAlertDetails(event) {
    switch (event) {
        // Convective
        case 'Tornado Warning':
            return { color: 'rgb(255, 0, 0)', priority: 2 };
        case 'Severe Thunderstorm Warning':
            return { color: 'rgb(255, 165, 0)', priority: 4 };
        case 'Severe Weather Statement':
            return { color: 'rgb(0, 255, 255)', priority: 7 };
        case 'Tornado Watch':
            return { color: 'rgb(255, 255, 0)', priority: 45 };
        case 'Severe Thunderstorm Watch':
            return { color: 'rgb(219, 112, 147)', priority: 46 };
        case 'Special Weather Statement':
            return { color: 'rgb(255, 228, 181)', priority: 101 };
        // Hydrologic
        case 'Flash Flood Warning':
            return { color: 'rgb(139, 0, 0)', priority: 5 };
        case 'Flash Flood Watch':
            return { color: 'rgb(50, 205, 50)', priority: 47 };
        case 'Flash Flood Statement':
            return { color: 'rgb(154, 205, 50)', priority: 6 };
        case 'Flood Warning':
            return { color: 'rgb(0, 255, 0)', priority: 37 };
        case 'Flood Watch':
            return { color: 'rgb(46, 139, 87)', priority: 89 };
        case 'Flood Statement':
            return { color: 'rgb(0, 255, 0)', priority: 49 };
        case 'Flood Advisory':
            return { color: 'rgb(0, 255, 127)', priority: 64 };
        case 'Hydrologic Statement':
            return { color: 'rgb(0, 255, 127)', priority: 990};
        case 'Hydrologic Outlook':
            return { color: 'rgb(238, 232, 170)', priority: 106 };
        // Non Convective
        case 'High Wind Warning':
            return { color: 'rgb(218, 165, 32)', priority: 28 };
        case 'High Wind Watch':
            return { color: 'rgb(184, 134, 11)', priority: 92 };
        case 'Wind Advisory':
            return { color: 'rgb(210, 180, 140)', priority: 76 };
        case 'Lake Wind Advisory':
            return { color: 'rgb(210, 180, 140)', priority: 75 };
        case 'Excessive Heat Warning':
            return { color: 'rgb(199, 21, 133)', priority: 44 };
        case 'Excessive Heat Watch':
            return { color: 'rgb(128, 0, 0)', priority: 93 };
        case 'Heat Advisory':
            return { color: 'rgb(255, 127, 80)', priority: 63 };
        case 'Hard Freeze Warning':
            return { color: 'rgb(0, 0, 255)', priority: 991};
        case 'Hard Freeze Watch':
            return { color: 'rgb(65, 105, 225)', priority: 992};
        case 'Freeze Warning':
            return { color: 'rgb(72, 61, 139)', priority: 51 };
        case 'Freeze Watch':
            return { color: 'rgb(65, 105, 225)', priority: 95 };
        case 'Dense Fog Advisory':
            return { color: 'rgb(112, 128, 144)', priority: 68 };
        case 'Dense Smoke Advisory':
            return { color: 'rgb(240, 230, 140)', priority: 69 };
        case 'Dust Storm Warning':
            return { color: 'rgb(255, 228, 196)', priority: 42 };
        case 'Blowing Dust Advisory':
            return { color: 'rgb(189, 183, 107)', priority: 43 };
        case 'Dust Advisory':
            return { color: 'rgb(189, 183, 107)', priority: 73 };
        case 'Air Stagnation Advisory':
            return { color: 'rgb(128, 128, 128)', priority: 104 };
        case 'Air Quality Alert':
            return { color: 'rgb(128, 128, 128)', priority: 103 };
        // Marine
        case 'Special Marine Warning':
            return { color: 'rgb(255, 165, 0)', priority: 21 };
        case 'Marine Weather Statement':
            return { color: 'rgb(255, 218, 185)', priority: 102 };
        case 'Hurricane Force Wind Warning':
            return { color: 'rgb(205, 92, 92)', priority: 18 };
        case 'Hurricane Force Wind Watch':
            return { color: 'rgb(153, 50, 204)', priority: 55 };
        case 'Storm Warning':
            return { color: 'rgb(148, 0, 211)', priority: 30 };
        case 'Storm Watch':
            return { color: 'rgb(238, 130, 238)', priority: 58 };
        case 'Gale Warning':
            return { color: 'rgb(221, 160, 221)', priority: 48 };
        case 'Gale Watch':
            return { color: 'rgb(255, 192, 203)', priority: 85 };
        case 'Small Craft Advisory':
            return { color: 'rgb(216, 191, 216)', priority: 70 };
        case 'Marine Dense Fog Advisory':
            return { color: 'rgb(112, 128, 144)', priority: 991};
        case 'Brisk Wind Advisory':
            return { color: 'rgb(216, 191, 216)', priority: 71 };
        case 'Hazardous Seas Warning':
            return { color: 'rgb(216, 191, 216)', priority: 72 };
        case 'Hazardous Seas Watch':
            return { color: 'rgb(72, 61, 139)', priority: 87 };
        case 'Low Water Advisory':
            return { color: 'rgb(165, 42, 42)', priority: 80 };
        // Tropical
        case 'Hurricane Warning':
            return { color: 'rgb(220, 20, 60)', priority: 19 };
        case 'Hurricane Watch':
            return { color: 'rgb(255, 0, 255)', priority: 54 };
        case 'Tropical Storm Warning':
            return { color: 'rgb(178, 34, 34)', priority: 29 };
        case 'Tropical Storm Watch':
            return { color: 'rgb(240, 128, 128)', priority: 57 };
        case 'Tropical Cyclone Local Statement':
            return { color: 'rgb(255, 228, 181)', priority: 59 };
        case 'Typhoon Warning':
            return { color: 'rgb(220, 20, 60)', priority: 20 };
        case 'Typhoon Watch':
            return { color: 'rgb(255, 0, 255)', priority: 56 };
        case 'Extreme Wind Warning':
            return { color: 'rgb(255, 20, 147)', priority: 3 };
        case 'Hurricane Statement':
            return { color: 'rgb(255, 255, 0)', priority: 992};
        case 'Storm Surge Warning':
            return { color: 'rgb(181, 36, 247)', priority: 17 };
        case 'Storm Surge Watch':
            return { color: 'rgb(219, 127, 247)', priority: 53 };
        // Coastal Hazards
        case 'Coastal Flood Warning':
            return { color: 'rgb(34, 139, 34)', priority: 38 };
        case 'Coastal Flood Watch':
            return { color: 'rgb(102, 205, 170)', priority: 90 };
        case 'Coastal Flood Advisory':
            return { color: 'rgb(124, 252, 0)', priority: 65 };
        case 'Coastal Flood Statement':
            return { color: 'rgb(107, 142, 35)', priority: 99 };
        case 'Lakeshore Flood Warning':
            return { color: 'rgb(34, 139, 34)', priority: 39 };
        case 'Lakeshore Flood Watch':
            return { color: 'rgb(102, 205, 170)', priority: 91 };
        case 'Lakeshore Flood Advisory':
            return { color: 'rgb(124, 252, 0)', priority: 66 };
        case 'Lakeshore Flood Statement':
            return { color: 'rgb(107, 142, 35)', priority: 100 };
        case 'High Surf Warning':
            return { color: 'rgb(34, 139, 34)', priority: 41 };
        case 'High Surf Advisory':
            return { color: 'rgb(186, 85, 211)', priority: 67 };
        case 'Rip Current Statement':
            return { color: 'rgb(64, 224, 208)', priority: 83 };
        case 'Beach Hazards Statement':
            return { color: 'rgb(64, 224, 208)', priority: 84 };
        // Fire Weather
        case 'Red Flag Warning':
            return { color: 'rgb(255, 20, 147)', priority: 52 };
        case 'Fire Weather Watch':
            return { color: 'rgb(255, 222, 173)', priority: 96 };
        case 'Fire Danger Statement':
            return { color: 'rgb(233, 150, 122)', priority: 993};
        case 'Extreme Fire Danger':
            return { color: 'rgb(233, 150, 122)', priority: 97 };
        // Winter Weather
        case 'Wind Chill Warning':
            return { color: 'rgb(176, 196, 222)', priority: 994};
        case 'Wind Chill Watch':
            return { color: 'rgb(95, 158, 160)', priority: 995};
        case 'Wind Chill Advisory':
            return { color: 'rgb(175, 238, 238)', priority: 996};
        case 'Winter Storm Warning':
            return { color: 'rgb(255, 105, 180)', priority: 26 };
        case 'Ice Storm Warning':
            return { color: 'rgb(139, 0, 139)', priority: 24 };
        case 'Winter Storm Watch':
            return { color: 'rgb(70, 130, 180)', priority: 82 };
        case 'Winter Weather Advisory':
            return { color: 'rgb(123, 104, 238)', priority: 60 };
        case 'Blizzard Warning':
            return { color: 'rgb(255, 69, 0)', priority: 22 };
        case 'Heavy Freezing Spray Warning':    
            return { color: 'rgb(0, 191, 255)', priority: 25 };
        case 'Heavy Freezing Spray Watch':
            return { color: 'rgb(188, 143, 143)', priority: 88 };
        case 'Lake Effect Snow Warning':
            return { color: 'rgb(0, 139, 139)', priority: 27 };
        case 'Snow Squall Warning':
            return { color: 'rgb(199, 21, 133)', priority: 23 };
        case 'Extreme Cold Warning':
            return { color: 'rgb(0, 0, 255)', priority: 50 };
        case 'Extreme Cold Watch':
            return { color: 'rgb(95, 158, 160)', priority: 94 };
        case 'Cold Weather Advisory':
            return { color: 'rgb(175, 238, 238)', priority: 62 };
        case 'Frost Advisory':
            return { color: 'rgb(100, 149, 237)', priority: 77 };
        case 'Freezing Fog Advisory':
            return { color: 'rgb(0, 128, 128)', priority: 78 };
        case 'Freezing Spray Advisory':
            return { color: 'rgb(0, 191, 255)', priority: 79 };
        // Non Weather Emergencies
        case 'Civil Emergency Message':
            return { color: 'rgb(255, 182, 193)', priority: 15 };
        case 'Child Abduction Emergency':
            return { color: 'rgb(255, 215, 0)', priority: 110 };
        case 'Civil Danger Warning':
            return { color: 'rgb(255, 182, 193)', priority: 10 };
        case 'Earthquake Warning':
            return { color: 'rgb(139, 69, 19)', priority: 34 };
        case 'Local Area Emergency':
            return { color: 'rgb(192, 192, 192)', priority: 81 };
        case 'Law Enforcement Warning':
            return { color: 'rgb(192, 192, 192)', priority: 16 };
        case '911 Telephone Outage':
            return { color: 'rgb(192, 192, 192)', priority: 98 };
        case 'Hazardous Materials Warning':
            return { color: 'rgb(75, 0, 130)', priority: 13 };
        case 'Nuclear Hazard Warning':
            return { color: 'rgb(75, 0, 130)', priority: 997};
        case 'Nuclear Power Plant Warning':
            return { color: 'rgb(75, 0, 130)', priority: 11 };
        case 'Radiological Hazard Warning':
            return { color: 'rgb(75, 0, 130)', priority: 12 };
        case 'Evacuation Immediate':
            return { color: 'rgb(127, 255, 0)', priority: 9 };
        case 'Fire Warning':
            return { color: 'rgb(160, 82, 45)', priority: 14 };
        case 'Shelter in Place Warning':
            return { color: 'rgb(250, 128, 114)', priority: 8 };
        case 'Volcano Warning':
            return { color: 'rgb(105, 105, 105)', priority: 35 };
        case 'Ashfall Warning':
            return { color: 'rgb(169, 169, 169)', priority: 36 };
        case 'Ashfall Advisory':
            return { color: 'rgb(105, 105, 105)', priority: 40 };
        case 'Tsunami Warning':
            return { color: 'rgb(253, 99, 71)', priority: 1};
        case 'Tsunami Watch':
            return { color: 'rgb(255, 0, 255)', priority: 32 };
        case 'Tsunami Advisory':
            return { color: 'rgb(210, 105, 30)', priority: 31 };
        case 'Tsunami Information Statement':
            return { color: 'rgb(255, 204, 255)', priority: 998};
        case 'Avalanche Warning':
            return { color: 'rgb(30, 144, 255)', priority: 33 };
        case 'Avalance Advisory':
            return { color: 'rgb(205, 133, 63)', priority: 61 };
        case 'Avalanche Watch':
            return { color: 'rgb(244, 164, 96)', priority: 86 };
        // Other
        case 'Short Term Forecast':
            return { color: 'rgb(152, 251, 152)', priority: 107 };
        case 'Hazardous Weather Outlook':
            return { color: 'rgb(238, 232, 170)', priority: 105 };
        case 'Administrative Message':
            return { color: 'rgb(192, 192, 192)', priority: 108 };
        case 'Test':
            return { color: 'rgb(240, 255, 255)', priority: 109 };
        case 'Blue Alert':
            return { color: 'rgb(255, 255, 255)', priority: 111 };
        default:
            return { color: 'rgb(255, 255, 255)', priority: 999};
    }
}