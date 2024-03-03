import { NTCalendarType, type NTDateUtil } from '../types';
import NTGregorianUtil from './NTGregorianUtil';
import NTHijriUtil from './NTHijriUtil';

class NTDataUtilBridge {
  #calendarType: NTCalendarType = NTCalendarType.Gregorian;
  #dateUtil: NTDateUtil;
  constructor(calendarType?: NTCalendarType) {
    if (calendarType) {
      this.#calendarType = calendarType;
    }
    this.#dateUtil = this.#isGregorian()
      ? new NTGregorianUtil()
      : new NTHijriUtil();
  }

  #isGregorian = () => this.#calendarType === NTCalendarType.Gregorian;

  getDateComponents = (date: Date) => this.#dateUtil.getDateComponents(date);

  getMonthWeeks = (
    date: Date = new Date(),
    calendarStartLimit?: Date,
    calendarEndLimit?: Date
  ) => this.#dateUtil.getMonthWeeks(date, calendarStartLimit, calendarEndLimit);

  addMonths = (date: Date = new Date(), amount: number = 1): Date =>
    this.#dateUtil.addMonths(date, amount);

  getMonthNumberOfDays = (year: number, month: number) =>
    this.#dateUtil.getMonthNumberOfDays(year, month);

  getDateFromDay = (day: number, dateWithinSameMonth: Date) =>
    this.#dateUtil.getDateFromDay(day, dateWithinSameMonth);
}

export default NTDataUtilBridge;
