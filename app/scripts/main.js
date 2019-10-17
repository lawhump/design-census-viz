console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

var op = document.getElementById('opportunities');
var sa = document.getElementById('salary');

(function() {
  var asian = {
    career_advancement: [0,0,0,0,0],
    salary: [0,0,0,0,0,0,0,0],
  };
  var black = {
    career_advancement: [0,0,0,0,0],
    salary: [0,0,0,0,0,0,0,0],
  };
  var latin = {
    career_advancement: [0,0,0,0,0],
    salary: [0,0,0,0,0,0,0,0],
  };
  var white = {
    career_advancement: [0,0,0,0,0],
    salary: [0,0,0,0,0,0,0,0],
  };

  var careerAdvancement = function() {
    var getRawValues = function() {
      for (var i=0; i<AsianDesignCensus.length; i++) {
        var cand = AsianDesignCensus[i];
        if (cand["I have:"].includes('Promising')) {
          asian.career_advancement[4]++;
        }
        else if (cand["I have:"].includes('Some')) {
          asian.career_advancement[3]++;
        }
        else if (cand["I have:"].includes('Limited')) {
          asian.career_advancement[2]++;
        }
        else if (cand["I have:"].includes('Not')) {
          asian.career_advancement[0]++;
        }
        else {
          asian.career_advancement[1]++;
        }
      }
      for (var i=0; i<BlackDesignCensus.length; i++) {
        var cand = BlackDesignCensus[i];
        if (cand["I have:"].includes('Promising')) {
          black.career_advancement[4]++;
        }
        else if (cand["I have:"].includes('Some')) {
          black.career_advancement[3]++;
        }
        else if (cand["I have:"].includes('Limited')) {
          black.career_advancement[2]++;
        }
        else if (cand["I have:"].includes('Not')) {
          black.career_advancement[0]++;
        }
        else {
          black.career_advancement[1]++;
        }
      }
      for (var i=0; i<LatinDesignCensus.length; i++) {
        var cand = LatinDesignCensus[i];
        if (cand["I have:"].includes('Promising')) {
          latin.career_advancement[4]++;
        }
        else if (cand["I have:"].includes('Some')) {
          latin.career_advancement[3]++;
        }
        else if (cand["I have:"].includes('Limited')) {
          latin.career_advancement[2]++;
        }
        else if (cand["I have:"].includes('Not')) {
          latin.career_advancement[0]++;
        }
        else {
          latin.career_advancement[1]++;
        }
      }
      for (var i=0; i<WhiteDesignCensus.length; i++) {
        var cand = WhiteDesignCensus[i];
        if (cand["I have:"].includes('Promising')) {
          white.career_advancement[4]++;
        }
        else if (cand["I have:"].includes('Some')) {
          white.career_advancement[3]++;
        }
        else if (cand["I have:"].includes('Limited')) {
          white.career_advancement[2]++;
        }
        else if (cand["I have:"].includes('Not')) {
          white.career_advancement[0]++;
        }
        else {
          white.career_advancement[1]++;
        }
      }
    };
    var adjustValues = function() {
      var total_asian = AsianDesignCensus.length;
      var total_black = BlackDesignCensus.length;
      var total_latin = LatinDesignCensus.length;
      var total_white = WhiteDesignCensus.length;

      for (var i=0; i<5; i++) {
        asian.career_advancement[i] = (asian.career_advancement[i] / total_asian) * 100;
        black.career_advancement[i] = (black.career_advancement[i] / total_black) * 100;
        latin.career_advancement[i] = (latin.career_advancement[i] / total_latin) * 100;
        white.career_advancement[i] = (white.career_advancement[i] / total_white) * 100;
      }
    };

    getRawValues();
    adjustValues();
  };

  var salary = function() {
    var getRawValues = function() {
      for (var i=0; i<AsianDesignCensus.length; i++) {
        var cand = AsianDesignCensus[i];
        if (cand["I make:"].includes('$200,')) {
          asian.salary[7]++;
        }
        else if (cand["I make:"].includes('$150,')) {
          asian.salary[6]++;
        }
        else if (cand["I make:"].includes('$100,')) {
          asian.salary[5]++;
        }
        else if (cand["I make:"].includes('$75,')) {
          asian.salary[4]++;
        }
        else if (cand["I make:"].includes('$50,')) {
          asian.salary[3]++;
        }
        else if (cand["I make:"].includes('$35,')) {
          asian.salary[2]++;
        }
        else if (cand["I make:"].includes('Less')) {
          asian.salary[0]++;
        }
        else {
          asian.salary[1]++;
        }
      }
      for (var i=0; i<BlackDesignCensus.length; i++) {
        var cand = BlackDesignCensus[i];
        if (cand["I make:"].includes('$200,')) {
          black.salary[7]++;
        }
        else if (cand["I make:"].includes('$150,')) {
          black.salary[6]++;
        }
        else if (cand["I make:"].includes('$100,')) {
          black.salary[5]++;
        }
        else if (cand["I make:"].includes('$75,')) {
          black.salary[4]++;
        }
        else if (cand["I make:"].includes('$50,')) {
          black.salary[3]++;
        }
        else if (cand["I make:"].includes('$35,')) {
          black.salary[2]++;
        }
        else if (cand["I make:"].includes('Less')) {
          black.salary[0]++;
        }
        else {
          black.salary[1]++;
        }
      }
      for (var i=0; i<LatinDesignCensus.length; i++) {
        var cand = LatinDesignCensus[i];
        if (cand["I make:"].includes('$200,')) {
          latin.salary[7]++;
        }
        else if (cand["I make:"].includes('$150,')) {
          latin.salary[6]++;
        }
        else if (cand["I make:"].includes('$100,')) {
          latin.salary[5]++;
        }
        else if (cand["I make:"].includes('$75,')) {
          latin.salary[4]++;
        }
        else if (cand["I make:"].includes('$50,')) {
          latin.salary[3]++;
        }
        else if (cand["I make:"].includes('$35,')) {
          latin.salary[2]++;
        }
        else if (cand["I make:"].includes('Less')) {
          latin.salary[0]++;
        }
        else {
          latin.salary[1]++;
        }
      }
      for (var i=0; i<WhiteDesignCensus.length; i++) {
        var cand = WhiteDesignCensus[i];
        if (cand["I make:"].includes('$200,')) {
          white.salary[7]++;
        }
        else if (cand["I make:"].includes('$150,')) {
          white.salary[6]++;
        }
        else if (cand["I make:"].includes('$100,')) {
          white.salary[5]++;
        }
        else if (cand["I make:"].includes('$75,')) {
          white.salary[4]++;
        }
        else if (cand["I make:"].includes('$50,')) {
          white.salary[3]++;
        }
        else if (cand["I make:"].includes('$35,')) {
          white.salary[2]++;
        }
        else if (cand["I make:"].includes('Less')) {
          white.salary[0]++;
        }
        else {
          white.salary[1]++;
        }
      }
    };
    var adjustValues = function() {
      var total_asian = AsianDesignCensus.length;
      var total_black = BlackDesignCensus.length;
      var total_latin = LatinDesignCensus.length;
      var total_white = WhiteDesignCensus.length;

      for (var i=0; i<9; i++) {
        asian.salary[i] = (asian.salary[i] / total_asian) * 100;
        black.salary[i] = (black.salary[i] / total_black) * 100;
        latin.salary[i] = (latin.salary[i] / total_latin) * 100;
        white.salary[i] = (white.salary[i] / total_white) * 100;
      }
    };

    getRawValues();
    adjustValues();
  };

  careerAdvancement();
  salary();

  var opportunities_chart = new Chart(op, {
    type: 'bar',
    data: {
      labels: ['Not sure', 'No', 'Limited', 'Some', 'Promising'],
      datasets: [
        {
          label: 'Asian',
          data: asian.career_advancement,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Black',
          data: black.career_advancement,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Latin',
          data: latin.career_advancement,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
        {
          label: 'White',
          data: white.career_advancement,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var salary_chart = new Chart(sa, {
    type: 'bar',
    data: {
      labels: ['<25', '25-35', '35-50', '50-75', '75-100', '100-150', '150-200', '>200'],
      datasets: [
        {
          label: 'Asian',
          data: asian.salary,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Black',
          data: black.salary,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Latin',
          data: latin.salary,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
        {
          label: 'White',
          data: white.salary,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
})();
