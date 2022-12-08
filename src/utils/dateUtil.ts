/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(
  date: moment.MomentInput = undefined,
  format = DATE_TIME_FORMAT,
  getNow = false,
): string {
  if (getNow) {
    return moment(date).format(format);
  }
  return date ? moment(date).format(format) : '-';
}

export function formatToDate(
  date: moment.MomentInput = undefined,
  format = DATE_FORMAT,
  getNow = false,
): string {
  if (getNow) {
    return moment(date).format(format);
  }
  return date ? moment(date).format(format) : '-';
}

export const dateUtil = moment;
