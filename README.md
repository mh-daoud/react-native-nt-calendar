# react-native-nt-calendar

## What is this ?
React native calendar supporting Hijri and Gregorian calendar systems, highly customizable and with zero dependency on date libraries like moment or day js

## Why create this and not use an already existing package ?

for two main reasons 
- First the other alternative packages does not support Hijri calendar.
- Second this will be designed to support the ability to modify the Calendar component designs and also the whole layout of the calendar.
- Thrid (extra):  is that the most used and recommend component till the create of this repo was created by a team that I don't want to use their products or services for personal reasons. 

and mostly becuase I want to 

## Installation

```sh
npm install react-native-nt-calendar
```

## Usage

```tsx
import NTCalendar from 'react-native-nt-calendar';
import {NTCalendarTypes} from 'react-native-nt-calendar'

// ...

<NTCalendar calendarType={NTCalendarTypes.NTCalendarType.Hijri} />
```

## Props

coming soon!!

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
