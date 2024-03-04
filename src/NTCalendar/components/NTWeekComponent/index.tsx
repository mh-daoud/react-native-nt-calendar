import { View } from 'react-native';
import getStyles from './styles';
import NTDayComponent from '../NTDayComponent';
import React from 'react';
import type { NTWeekComponentProps } from '../../types';

export const NTWeekComponent = ({
  week,
  onDayPress,
  currentDayOfTheMonth,
  selectedDaysInMonth,
  theme,
}: NTWeekComponentProps) => {
  const styles = getStyles();
  const { weekContainerStyles } = theme ?? {};
  const renderDaysOfWeek = (weekDays: number[]) => {
    return weekDays.map((day, key) => (
      <NTDayComponent
        key={key}
        isDayCurrentDate={day === currentDayOfTheMonth}
        isDaySelected={selectedDaysInMonth?.includes(day)}
        day={day}
        onDayPress={onDayPress}
      />
    ));
  };

  return (
    <View style={[styles.weekHolder, weekContainerStyles]}>
      {renderDaysOfWeek(week)}
    </View>
  );
};

export default NTWeekComponent;
