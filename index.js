(function() {
  // "use strict";

  const timerElement = document.getElementById("timer");
  const timerHandler = document.getElementById("timerHandler");

  const timerElement2 = document.getElementById("timer2");
  const timerHandler2 = document.getElementById("timerHandler2");

  const timerFormat = time => {
    const date = new Date(time);
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    return `${seconds > 9 ? seconds : `0${seconds}`}:${
      milliseconds > 99
        ? milliseconds
        : milliseconds > 9
        ? `0${milliseconds}`
        : `00${milliseconds}`
    }`;
  };

  function timer(element, callback, timer) {
    const expires = +new Date() + timer;
    const tick = () => {
      const now = +new Date();
      const countdown = expires - now;
      if (countdown > 0) {
        element.innerHTML = timerFormat(countdown);
        requestAnimationFrame(tick);
      } else {
        element.innerHTML = timerFormat(0);
        callback(new Date());
      }
    };
    tick();
  }

  timerHandler.onclick = () => {
    timer(
      timerElement,
      result => {
        timerElement.innerHTML = result.toString();
      },
      5000
    );
  };

  timerHandler2.onclick = () => {
    timer(
      timerElement2,
      result => {
        timerElement2.innerHTML = result.toString();
      },
      8000
    );
  };
})();
