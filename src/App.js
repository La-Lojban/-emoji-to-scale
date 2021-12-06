import { useEffect, useState } from 'react';
import { getData } from './getData.js';

const emojiSpace = 300;

function emojiUnicode(emoji) {
  let comp;
  if (emoji.length === 1) {
    comp = emoji.charCodeAt(0);
  }
  comp = (emoji.charCodeAt(0) - 0xd800) * 0x400 + (emoji.charCodeAt(1) - 0xdc00) + 0x10000;
  if (comp < 0) {
    comp = emoji.charCodeAt(0);
  }
  return comp.toString('16');
}

function lojbanLength(number) {
  return number.toString().replace(/\./g, ' pi ');
}

function parseSize(size) {
  if (size < 2) {
    return `miltre li ${lojbanLength(size * 10)}<br/> (${size * 10} mm)`;
  }
  if (size < 100) {
    return `centre li ${lojbanLength(size)}<br/> (${size}cm)`;
  }
  if (size < 100 * 1000) {
    return `mitre li ${lojbanLength(Math.round(size * 100) / 100 / 100)}<br/> (${
      Math.round(size * 100) / 100 / 100
    }m)`;
  }
  return `ki'otre li ${lojbanLength(Math.round(size / 100 / 10) / 100)}<br/> (${
    Math.round(size / 100 / 10) / 100
  }km)`;
}

function App() {
  const [data, dataSet] = useState([]);
  const [scroll, scrollSet] = useState(0);

  useEffect(() => {
    getData().then((res) => {
      document.body.style.height = `${emojiSpace * res.length + window.innerHeight - emojiSpace}px`;
      dataSet(res);
    });

    function loop() {
      const newScroll = window.pageYOffset;
      scrollSet(newScroll);
      window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
  }, []);

  return (
    <div className="emoji-display">
      {data.map(([emoji, size, label], idx) => {
        const windowWidth = window.innerWidth;
        const compoundDistance = windowWidth / 2 + idx * emojiSpace;

        let relativeDistance = compoundDistance - scroll - emojiSpace / 2;

        // Slow the scrolling at the beginning of the screen
        if (relativeDistance < windowWidth / 2) {
          relativeDistance =
            relativeDistance * 0.1 + (0.9 * (relativeDistance + windowWidth * 0.5)) / 2;
        }

        // Don't render the emoji if out of window
        if (
          relativeDistance < -emojiSpace * 0.75 ||
          relativeDistance > windowWidth - emojiSpace * 0.1
        ) {
          return null;
        }

        let emojisToScale = [Math.floor(scroll / emojiSpace), Math.ceil(scroll / emojiSpace)];

        emojisToScale = emojisToScale
          .map((idx) => {
            if (idx < 0) return 0;
            if (idx > data.length - 1) return data.length - 1;
            return idx;
          })
          .map((idx) => data[idx]);

        const floorCeilProgress = (scroll / emojiSpace) % 1;
        const floatScale =
          floorCeilProgress * emojisToScale[1][1] + (1 - floorCeilProgress) * emojisToScale[0][1];

        const calculatedScale = Math.min(size / floatScale, 64);

        let opacity = 1;
        if (calculatedScale > 3) {
          const diff = (calculatedScale - 3) / 8;
          opacity = Math.max(1 - diff, 0);
        }

        return (
          <div
            className="emoji-container"
            style={{
              transform: `translatex(${relativeDistance}px)`
              // left: `${relativeDistance}px`
            }}
            key={emoji}
          >
            <div
              className="emoji"
              style={{
                opacity,
                transform: `scale(${calculatedScale}) translateY(10%)`
              }}
            >
              <img alt={emoji}
                src={`https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u${emojiUnicode(
                  emoji
                )}.svg`}
              />
            </div>
            <div className="title-wrapper">
              <b>{label}</b>
              <div
                dangerouslySetInnerHTML={{ __html: parseSize(size) }}
                style={{ marginTop: '.5rem' }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
