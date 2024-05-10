import React, { ReactNode, useState } from 'react'
import Ads from '../Ads';

export interface PositionType {
    x: number;
    y: number;
}

export default function MouseTracker({ render }: { render: (value: PositionType) => JSX.Element }) {
    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        })
    }
    console.log("Reanding")
    return (
        <div
            onMouseMove={handleMouseMove}
        >
            <p style={{ color: 'red' }}>Mouse Tracker</p>
            {render(position)}
        </div>
    )
}


export function withMouseTracker<T>(Component: React.ComponentType<T & PositionType>) {
    return function (props: Omit<T, keyof PositionType>) {
        const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
        const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        return (
            <div
                onMouseMove={handleMouseMove}
            >
                <Component {...props as T} {...position} />
            </div>
        )
    }
}