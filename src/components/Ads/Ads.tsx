import websiteUI from '../../user.jpg'
import { withMouseTracker } from '../MouseTracker/MouseTracker'

function Ads({ x, y }: { x: number, y: number, visible: boolean }) {
    return (
        <div>
            <img src={websiteUI} alt="websiteUi"
                style={{ width: '30rem', height: 'auto' }} />
            <ul>
                <li>x : {x}</li>
                <li>y : {y}</li>
            </ul>
        </div>
    )
}

export default withMouseTracker(Ads)