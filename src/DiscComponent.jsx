import {useState} from 'react';

export const DiscComponent =({width, height, backgroundColor, count})=> {
const [szamlalo, setSzamlalo] = useState(count);
const [szin, setSzin] = useState(0);

const handleClick = () => {
    setSzamlalo((prev) => (prev >= 10 ? 0 : prev + 1));
    setSzin((prev) => (prev + 32.8) % 360);
  };

return <div
      style={{ width: width,
        height: height,
        backgroundColor: backgroundColor,
        filter: `hue-rotate(${szin}deg)`
      }}
    className="p-2 m-4 round"
        onClick={handleClick}
      ><h1>{szamlalo}</h1></div>;
}