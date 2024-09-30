import { cn } from '@/lib/utils';
import { FC } from 'react';

interface CalendarIconProps {
  className?: string;
}

const CalendarIcon: FC<CalendarIconProps> = ({ className }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5', className)}
    >
      <path
        d="M17.25 3.56V2C17.25 1.59 16.91 1.25 16.5 1.25C16.09 1.25 15.75 1.59 15.75 2V3.5H9.25V2C9.25 1.59 8.91 1.25 8.5 1.25C8.09 1.25 7.75 1.59 7.75 2V3.56C5.05 3.81 3.74 5.42 3.54 7.81C3.52 8.1 3.76 8.34 4.04 8.34H20.96C21.25 8.34 21.49 8.09 21.46 7.81C21.26 5.42 19.95 3.81 17.25 3.56Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M20.5 9.84H4.5C3.95 9.84 3.5 10.29 3.5 10.84V17C3.5 20 5 22 8.5 22H16.5C20 22 21.5 20 21.5 17V10.84C21.5 10.29 21.05 9.84 20.5 9.84ZM9.71 18.21C9.66 18.25 9.61 18.3 9.56 18.33C9.5 18.37 9.44 18.4 9.38 18.42C9.32 18.45 9.26 18.47 9.2 18.48C9.13 18.49 9.07 18.5 9 18.5C8.87 18.5 8.74 18.47 8.62 18.42C8.49 18.37 8.39 18.3 8.29 18.21C8.11 18.02 8 17.76 8 17.5C8 17.24 8.11 16.98 8.29 16.79C8.39 16.7 8.49 16.63 8.62 16.58C8.8 16.5 9 16.48 9.2 16.52C9.26 16.53 9.32 16.55 9.38 16.58C9.44 16.6 9.5 16.63 9.56 16.67C9.61 16.71 9.66 16.75 9.71 16.79C9.89 16.98 10 17.24 10 17.5C10 17.76 9.89 18.02 9.71 18.21ZM9.71 14.71C9.52 14.89 9.26 15 9 15C8.74 15 8.48 14.89 8.29 14.71C8.11 14.52 8 14.26 8 14C8 13.74 8.11 13.48 8.29 13.29C8.57 13.01 9.01 12.92 9.38 13.08C9.51 13.13 9.62 13.2 9.71 13.29C9.89 13.48 10 13.74 10 14C10 14.26 9.89 14.52 9.71 14.71ZM13.21 18.21C13.02 18.39 12.76 18.5 12.5 18.5C12.24 18.5 11.98 18.39 11.79 18.21C11.61 18.02 11.5 17.76 11.5 17.5C11.5 17.24 11.61 16.98 11.79 16.79C12.16 16.42 12.84 16.42 13.21 16.79C13.39 16.98 13.5 17.24 13.5 17.5C13.5 17.76 13.39 18.02 13.21 18.21ZM13.21 14.71C13.16 14.75 13.11 14.79 13.06 14.83C13 14.87 12.94 14.9 12.88 14.92C12.82 14.95 12.76 14.97 12.7 14.98C12.63 14.99 12.57 15 12.5 15C12.24 15 11.98 14.89 11.79 14.71C11.61 14.52 11.5 14.26 11.5 14C11.5 13.74 11.61 13.48 11.79 13.29C11.88 13.2 11.99 13.13 12.12 13.08C12.49 12.92 12.93 13.01 13.21 13.29C13.39 13.48 13.5 13.74 13.5 14C13.5 14.26 13.39 14.52 13.21 14.71ZM16.71 18.21C16.52 18.39 16.26 18.5 16 18.5C15.74 18.5 15.48 18.39 15.29 18.21C15.11 18.02 15 17.76 15 17.5C15 17.24 15.11 16.98 15.29 16.79C15.66 16.42 16.34 16.42 16.71 16.79C16.89 16.98 17 17.24 17 17.5C17 17.76 16.89 18.02 16.71 18.21ZM16.71 14.71C16.66 14.75 16.61 14.79 16.56 14.83C16.5 14.87 16.44 14.9 16.38 14.92C16.32 14.95 16.26 14.97 16.2 14.98C16.13 14.99 16.06 15 16 15C15.74 15 15.48 14.89 15.29 14.71C15.11 14.52 15 14.26 15 14C15 13.74 15.11 13.48 15.29 13.29C15.39 13.2 15.49 13.13 15.62 13.08C15.8 13 16 12.98 16.2 13.02C16.26 13.03 16.32 13.05 16.38 13.08C16.44 13.1 16.5 13.13 16.56 13.17C16.61 13.21 16.66 13.25 16.71 13.29C16.89 13.48 17 13.74 17 14C17 14.26 16.89 14.52 16.71 14.71Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default CalendarIcon;
