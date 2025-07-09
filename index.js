   var minInput = document.getElementById('minutes-input');
    var secInput = document.getElementById('seconds-input');
    var display = document.getElementById('time-display');

    var totalSeconds = 0;
    var remaining = 0;
    var intervalId = null;

    function updateDisplay(sec) {
      var m = String(Math.floor(sec / 60)).padStart(2, '0');
      var s = String(sec % 60).padStart(2, '0');
      display.textContent = m + ":" + s;
    }

    function startTimer() {
      if (intervalId === null) {
        var mins = Number(minInput.value) || 0;
        var secs = Number(secInput.value) || 0;
        totalSeconds = mins * 60 + secs;

        if (totalSeconds <= 0) {
          alert("Enter a valid time.");
          return;
        }

        remaining = totalSeconds;
        updateDisplay(remaining);

        intervalId = setInterval(function () {
          remaining--;
          updateDisplay(remaining);

          if (remaining <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            alert("⏰ Time's up!");
          }
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(intervalId);
      intervalId = null;
    }

    function resetTimer() {
      clearInterval(intervalId);
      intervalId = null;
      remaining = totalSeconds;
      updateDisplay(totalSeconds);
    }

    // Quotes
    const quotes = [
      "The best time to start was yesterday. The next best time is now.",
      "Push yourself, because no one else is going to do it for you.",
      "Success doesn't come to you. You go to it.",
      "Dream big. Work hard. Stay focused.",
      "Your only limit is your mind.",
      "Every second counts. Use it wisely."
    ];
    const quoteDiv = document.getElementById('quote');
    document.getElementById('new-quote').addEventListener('click', () => {
      const idx = Math.floor(Math.random() * quotes.length);
      quoteDiv.textContent = quotes[idx];
    });