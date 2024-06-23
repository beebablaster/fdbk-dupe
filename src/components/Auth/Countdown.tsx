import React from "react";

type Countdown = ICountdownDays | ICountdownHours | ICountdownMinutes;

interface ICountdownDays {
    type: 'days';
    isExpired: boolean;
    days: number;
    hours: number;
}

interface ICountdownHours {
    type: 'hours';
    isExpired: boolean;
    hours: number;
    minutes: number;
}

interface ICountdownMinutes {
    type: 'minutes';
    isExpired: boolean;
    minutes: number;
    seconds: number;
}


export const Countdown: React.FC<Countdown> = (props) => {
    const type = props.type;
    return (
        <span>
            {!props.isExpired && (
                <>
                    {type === "days" && `${String(props.days).padStart(2, '0')} : ${String(props.hours).padStart(2, '0')}`}
                    {type === "hours" && `${String(props.hours).padStart(2, '0')} : ${String(props.minutes).padStart(2, '0')}`}
                    {type === "minutes" && `${String(props.minutes).padStart(2, '0')} : ${String(props.seconds).padStart(2, '0')}`}
                </>
            )}
        </span>
    );
}