import { useState, useMemo } from "react";
import randomColor from "randomcolor";
import { zipWith } from "lodash";
import dayjs from "dayjs";
import { useInterval } from "react-use";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const characters = {
  0: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  2: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  3: [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
  4: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  5: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  6: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  8: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  ":": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
};
const dateTarget = dayjs(1619798400000).utc(); // 30 april 16:00 UTC
const dateFormat = "DD:HH:mm:ss";
const dateLabels = ["days", "hours", "minutes", "seconds"];

function Segment({ active, color }) {
  // eslint-disable-next-line
  const colors = useMemo(() => randomColor({ count: 4, hue: "#0000ff" }), [color]);

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: active ? color : "transparent" }}
          className="h-2px w-2px sm:h-4px sm:w-4px md:h-6px md:w-6px"
        />
      ))}
    </div>
  );
}

function Digit({ value }) {
  // eslint-disable-next-line
  const colors = useMemo(() => randomColor({ count: 15, hue: "#0000ff" }), [value]);
  const segments = zipWith(characters[value], colors, (active, color) => {
    return { active, color };
  });

  return (
    <div className="grid grid-cols-3 grid-rows-5 flex-shrink-0">
      {segments.map((segment, index) => (
        <Segment key={index} {...segment} />
      ))}
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useInterval(() => {
    setTime(dateTarget.subtract(dayjs().utc()).format(dateFormat));
  }, 1000);

  if (!time) return null;

  return (
    <div className="flex space-x-4">
      {time.split(":").map((value, index) => (
        <div
          key={index}
          className="flex flex-col bg-palette-100 border-palette-200 border rounded p-4 flex-shrink-0 items-center"
        >
          <div className="flex space-x-4">
            <Digit value={Math.floor(value / 10)} />
            <Digit value={value % 10} />
          </div>
          <div className="mt-4 text-center text-palette-300 uppercase tracking-widest text-xs sm:text-sm md:text-base">
            {dateLabels[index]}
          </div>
        </div>
      ))}
    </div>
  );
}
