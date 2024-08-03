export function getAlertColor(event) {
    switch (event) {
        // Convective
        case 'Tornado Warning':
            return 'rgb(255, 0, 0)';
        case 'Severe Thunderstorm Warning':
            return 'rgb(255, 165, 0)';
        case 'Severe Weather Statement':
            return 'rgb(0, 255, 255)';
        case 'Tornado Watch':
            return 'rgb(255, 255, 0)';
        case 'Severe Thunderstorm Watch':
            return 'rgb(219, 112, 147)';
        case 'Special Weather Statement':
            return 'rgb(255, 228, 181)';
        // Hydrologic
        case 'Flash Flood Warning':
            return 'rgb(139, 0, 0)';
        case 'Flash Flood Watch':
            return 'rgb(50, 205, 50)';
        case 'Flash Flood Statement':
            return 'rgb(154, 205, 50)';
        case 'Flood Warning':
            return 'rgb(0, 255, 0)';
        case 'Flood Watch':
            return 'rgb(46, 139, 87)';
        case 'Flood Statement':
            return 'rgb(0, 255, 0)';
        case 'Flood Advisory':
            return 'rgb(0, 255, 127)';
        case 'Hydrologic Statement':
            return 'rgb(0, 255, 127)';
        case 'Hydrologic Outlook':
            return 'rgb(238, 232, 170)';
        // Non Convective
        case 'High Wind Warning':
            return 'rgb(218, 165, 32)';
        case 'High Wind Watch':
            return 'rgb(184, 134, 11)';
        case 'Wind Advisory':
            return 'rgb(210, 180, 140)';
        case 'Excessive Heat Warning':
            return 'rgb(199, 21, 133)';
        case 'Excessive Heat Watch':
            return 'rgb(128, 0, 0)';
        case 'Heat Advisory':
            return 'rgb(255, 127, 80)';
        case 'Hard Freeze Warning':
            return 'rgb(0, 0, 255)';
        case 'Hard Freeze Watch':
            return 'rgb(65, 105, 225)';
        case 'Freeze Warning':
            return 'rgb(0, 255, 255)';
        case 'Freeze Watch':
            return 'rgb(65, 105, 225)';
        case 'Dense Fog Advisory':
            return 'rgb(112, 128, 144)';
        case 'Dense Smoke Advisory':
            return 'rgb(240, 230, 140)';
        case 'Dust Storm Warning':
            return 'rgb(255, 228, 196)';
        case 'Blowing Dust Advisory':
            return 'rgb(189, 183, 107)';
        case 'Air Stagnation Advisory':
            return 'rgb(128, 128, 128)';
        // Marine
        case 'Special Marine Warning':
            return 'rgb(219, 112, 147)';
        case 'Marine Weather Statement':
            return 'rgb(255, 218, 185)';
        case 'Hurricane Force Wind Warning':
            return 'rgb(205, 92, 92)';
        case 'Hurricane Force Wind Watch':
            return 'rgb(153, 50, 204)';
        case 'Storm Warning':
            return 'rgb(148, 0, 211)';
        case 'Storm Watch':
            return 'rgb(238, 130, 238)';
        case 'Gale Warning':
            return 'rgb(221, 160, 221)';
        case 'Gale Watch':
            return 'rgb(255, 192, 203)';
        case 'Small Craft Advisory':
            return 'rgb(216, 191, 216)';
        case 'Marine Dense Fog Advisory':
            return 'rgb(112, 128, 144)';
        // Tropical
        case 'Hurricane Warning':
            return 'rgb(220, 20, 60)';
        case 'Hurricane Watch':
            return 'rgb(255, 0, 255)';
        case 'Tropical Storm Warning':
            return 'rgb(178, 34, 34)';
        case 'Tropical Storm Watch':
            return 'rgb(240, 128, 128)';
        case 'Extreme Wind Warning':
            return 'rgb(255, 20, 147)';
        case 'Hurricane Statement':
            return 'rgb(255, 255, 0)';
        // Coastal Hazards
        case 'Coastal Flood Warning':
            return 'rgb(34, 139, 34)';
        case 'Coastal Flood Watch':
            return 'rgb(102, 205, 170)';
        case 'Coastal Flood Advisory':
            return 'rgb(124, 252, 0)';
        case 'Coastal Flood Statement':
            return 'rgb(107, 142, 35)';
        case 'High Surf Warning':
            return 'rgb(34, 139, 34)';
        case 'High Surf Advisory':
            return 'rgb(186, 85, 211)';
        case 'Rip Current Statement':
            return 'rgb(64, 224, 208)';
        // Fire Weather
        case 'Red Flag Warning':
            return 'rgb(255, 20, 147)';
        case 'Fire Weather Watch':
            return 'rgb(255, 222, 173)';
        case 'Fire Danger Statement':
            return 'rgb(233, 150, 122)';
        // Winter Weather
        case 'Wind Chill Warning':
            return 'rgb(176, 196, 222)';
        case 'Wind Chill Watch':
            return 'rgb(95, 158, 160)';
        case 'Wind Chill Advisory':
            return 'rgb(175, 238, 238)';
        case 'Winter Storm Warning':
            return 'rgb(255, 105, 180)';
        case 'Ice Storm Warning':
            return 'rgb(139, 0, 139)';
        case 'Winter Storm Watch':
            return 'rgb(70, 130, 180)';
        case 'Winter Weather Advisory':
            return 'rgb(123, 104, 238)';
        case 'Blizzard Warning':
            return 'rgb(255, 69, 0)';
        // Non Weather Emergencies
        case 'Civil Emergency':
            return 'rgb(255, 182, 193)';
        case 'Child Abduction Emergency':
            return 'rgb(255, 215, 0)';
        case 'Civil Danger Warning':
            return 'rgb(255, 182, 193)';
        case 'Earthquake Warning':
            return 'rgb(139, 69, 19)';
        case 'Local Area Emergency':
            return 'rgb(192, 192, 192)';
        case 'Law Enforcement Warning':
            return 'rgb(192, 192, 192)';
        case '911 Telephone Outage':
            return 'rgb(192, 192, 192)';
        case 'Hazardous Materials Warning':
            return 'rgb(75, 0, 130)';
        case 'Nuclear Hazard Warning':
            return 'rgb(75, 0, 130)';
        case 'Radiological Hazard Warning':
            return 'rgb(75, 0, 130)';
        case 'Evacuation Immediate':
            return 'rgb(127, 255, 0)';
        case 'Fire Warning':
            return 'rgb(160, 82, 45)';
        case 'Shelter in Place Warning':
            return 'rgb(250, 128, 114)';
        case 'Volcano Warning':
            return 'rgb(105, 105, 105)';
        case 'Tsunami Warning':
            return 'rgb(253, 99, 71)';
        case 'Tsunami Watch':
            return 'rgb(255, 0, 255)';
        case 'Tsunami Advisory':
            return 'rgb(210, 105, 30)';
        case 'Tsunami Information Statement':
            return 'rgb(255, 204, 255)';
        // Other
        case 'Short Term Forecast':
            return 'rgb(152, 251, 152)';
        case 'Hazardous Weather Outlook':
            return 'rgb(238, 232, 170)';
        default:
            return 'gray';
    }
}