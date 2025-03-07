import Link from "next/link";
import { ICalendarEvent, IEventType } from "../../common/types";
import DateDisplay from "./DateDisplay";
import TypeTagDisplay from "./TypeTagDisplay";

export interface EventDisplayProps {
    event: ICalendarEvent;
    eventType: IEventType;
}

const EventDisplay = ({ event, eventType }: EventDisplayProps) => {
    const startDate: Date = new Date(event.startDate);
    const endDate: Date | null = event.endDate ? new Date(event.endDate) : null;

    return (
        <div className="grid grid-cols-12 my-2">
            <div className="col-span-2 text-xs pt-1">
                <DateDisplay startDate={startDate} endDate={endDate} />
            </div>
            <div className="col-span-8">
                {event.link != undefined ? (
                    <Link href={event.link} target="_blank">
                        <div className="font-bold">{event.club}</div>
                        <div className="text-xs">{event.name}</div>
                    </Link>
                ) : (
                    <>
                        <div className="font-bold">{event.club}</div>
                        <div className="text-xs">{event.name}</div>
                    </>
                )}
            </div>
            <div className="col-span-2 text-center">
                <TypeTagDisplay eventType={eventType} />
            </div>
        </div>
    );
};

export default EventDisplay;
