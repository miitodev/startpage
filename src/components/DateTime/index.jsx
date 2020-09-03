import React, { useState } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import useInterval from '../../hooks/useInterval';

dayjs.extend(localizedFormat);

function DateTime() {
  const [date, setDate] = useState(dayjs());
  useInterval(() => setDate(dayjs()), 1000);

  return (
    <>
      <time dateTime={date.toISOString()}>
        {`${date.format('LL')} | ${date.format('HH:mm:ss')} (${date.format('LT')})`}
      </time>
    </>
  );
}

export default DateTime;
