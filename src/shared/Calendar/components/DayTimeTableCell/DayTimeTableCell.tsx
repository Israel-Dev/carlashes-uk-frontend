import { DayView } from '@devexpress/dx-react-scheduler-material-ui';

const DayTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

export default DayTimeTableCell;
