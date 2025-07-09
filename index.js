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

   const quotes = [
  "समय की कदर करो, वह दोबारा नहीं आता।",
  "जो लोग समय को बर्बाद करते हैं, समय उन्हें बर्बाद कर देता है।",
  "हर सेकंड कुछ बड़ा करने का अवसर है।",
  "जब तुम थक जाओ तो याद करो तुम क्यों शुरू किए थे।",
  "कड़ी मेहनत का कोई विकल्प नहीं होता।",
  "सपने वो नहीं जो नींद में आए, सपने वो हैं जो नींद नहीं आने दें।"
];

const quoteDiv = document.getElementById('quote');

function showRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  quoteDiv.textContent = quotes[idx];
}


showRandomQuote();


setInterval(showRandomQuote, 4000);
