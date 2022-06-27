import { WeekView } from '@devexpress/dx-react-scheduler-material-ui';

const WeekTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <WeekView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

export default WeekTimeTableCell;
