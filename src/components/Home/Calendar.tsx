import React from "react"
import { Calendar as CalendarTemplate } from "@/components/ui/calendar";
import { WeekNumberFormatter } from "react-day-picker";
import startOfWeek from "date-fns/startOfWeek";
import differenceInWeeks from "date-fns/differenceInWeeks";
import { getISOWeek } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type TSemester = {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  emoji: string;
}

export const semesters: TSemester[] = [
  {
    id: 0,
    name: "осенний",
    startDate: new Date(0, 8, 1),
    endDate: new Date(0, 11, 30),
    emoji: "🍂",
  },
  {
    id: 1,
    name: "весенний",
    startDate: new Date(0, 0, 20),
    endDate: new Date(0, 4, 28),
    emoji: "🌺",
  },
  {
    id: 2,
    name: "летний",
    startDate: new Date(0, 5, 1),
    endDate: new Date(0, 6, 31),
    emoji: "☀️",
  },
]

const getSemesterInfo = () => {
  const today = new Date();
  const thisYear = new Date().getFullYear();
  let currentWeek = 0;
  let currentSemester = semesters[1];
  semesters.forEach((semester) => {
    semester.startDate.setFullYear(thisYear);
    semester.endDate.setFullYear(thisYear);
    if(semester.startDate <= today && today <= semester.endDate) {
      currentSemester = semester;
    }
  });
  if(currentSemester) {
    currentWeek = differenceInWeeks(today.setDate(12), startOfWeek(currentSemester.startDate, { weekStartsOn: 1 })) + 1;
  }
  return { currentWeek, currentSemester };
}

const CalendarFooter = () => {
  const { currentWeek, currentSemester } = getSemesterInfo();
  return(
    <div className="text-sm ps-2 pt-2">
      {currentWeek} неделя, {currentSemester.name} семестр {currentSemester.emoji}
    </div>
  )
}

const formatWeekNumber: WeekNumberFormatter = (weeknumber) => {
  const { currentSemester, currentWeek } = getSemesterInfo();
  let week = getISOWeek(currentSemester.startDate) <= weeknumber && weeknumber <= getISOWeek(currentSemester.endDate) ? weeknumber - getISOWeek(currentSemester.startDate) : "-";
  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={`${currentWeek !== week ? "text-muted" : "font-bold"}`}>
              {week}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{week} учебная неделя</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export const Calendar: React.FC<{ className?: string }> = ({ className }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const { currentSemester } = getSemesterInfo();

  return (
    <CalendarTemplate
      mode="single"
      selected={date}
      onSelect={setDate}
      className={`rounded-md border w-full ${className}`}
      footer={<CalendarFooter />}
      showWeekNumber
      toDate={currentSemester.endDate}
      fromDate={currentSemester.startDate}
      formatters={{ formatWeekNumber }}
    />
  )
}
