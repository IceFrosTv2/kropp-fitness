/* global ymaps3 */

initMap().then();

async function initMap() {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
    const map = new YMap(
        document.getElementById('location-map'),
        {
            location: {
                center: [17.5, 51.8],
                zoom: 5
            },
            behaviors: ['drag', 'dblClick', 'multiTouch'],
            cooperativeGestures: true
        }
    );
    map.addChild(new YMapDefaultSchemeLayer({ theme: 'dark' }));
    map.addChild(new YMapDefaultFeaturesLayer());

    const cities = [
        { coords: [21.0122, 52.2297], title: 'Warsaw' },
        { coords: [14.4212, 50.0880], title: 'Prague' },
        { coords: [13.4050, 52.5200], title: 'Berlin' },
    ];

    for (const city of cities) {
        const markerEl = document.createElement('div');
        markerEl.className = 'location-map-pin';
        markerEl.title = city.title;

        const dot = document.createElement('div');
        dot.className = 'location-map-pin__dot';
        markerEl.appendChild(dot);

        map.addChild(new YMapMarker(
            { coordinates: city.coords },
            markerEl
        ));
    }
}
