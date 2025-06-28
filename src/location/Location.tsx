import './Location.scss';

export function Location(){
    return (
        <div className="location">
            {/* TODO: Add google maps embed */}
            <div className="map-section"></div>
            <div className="description-section">
                <ul>
                    Please read before ordering: <br/><br/><br/>
                    <li>Retail shop pickups Saturday & Sunday<br/><br/></li>
                    <li>Preorder cutoff is Wednesdayat 12pm for weekend orders<br/><br/></li>
                    <li>Contact us via phone call or Instagram for ordering aftercut off time or same-day pickup</li>
                </ul>
            </div>
        </div>
    )
}
