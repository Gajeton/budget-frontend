import React, { useEffect, useState } from 'react';

interface CircularProgressBarProps {
    percentage: number;
    strokeWidth?: number;
    size?: number;
}

export const ProgressBarCircular = ({
    percentage,
    strokeWidth = 10,
    size = 50,
}: CircularProgressBarProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const [offsetValue, setOffsetValue] = useState(circumference);

    useEffect(() => {
        setOffsetValue(circumference - (percentage / 100) * circumference);
    }, [percentage, circumference]);

    return (
        <div className='relative'>
            <svg width={size} height={size} >
                <circle
                    className="z-10"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    stroke="#E5E7EB"
                    fill="none"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offsetValue}
                    stroke="#f542a7"
                    fill="none"
                />

            </svg>
            <span className="text-black absolute text-xs bottom-[1.1rem] left-3.5 ">
                {`${percentage}%`}
            </span>
        </div>
    );
};

export default ProgressBarCircular;