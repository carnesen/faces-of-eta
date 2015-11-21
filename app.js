/**
 * Global state variables
 */
var students = []; // vector of objects, one for each student
var index = 0; // index number of student currently on display
var timer; // slide show timer for pro mode

/**
 * Changes the index value by the specified amount. Uses modulo (%) to
 * make sure index stays between 0 and students.length - 1.
 */
function changeIndex(direction) {
  index = (index + students.length + direction ) % students.length;
  render();
}

/**
 * When invoked, this function cancels out the previous timer and
 * creates a new one set for 10 seconds. When the timer goes off (i.e.
 * when callback gets invoked), it sets a new timer (i.e. invokes resetTimer).
 */
(function resetTimer() {

  clearTimeout(timer);

  var callback = function() {
    changeIndex(+1);
    resetTimer();
  };

  timer = setTimeout(callback, 10000);

})();

/**
 * Fetches the Handlebars template from the DOM, compiles it,
 * and then re-renders it to the DOM on the .person element
 */
function render() {
  var template = $('#template').html();
  var html = Handlebars.compile(template)(students[index]);
  $('.person').html(html);
}

/**
 * Function invoked when the DOM is ready
 */
function onReady() {

  render();

  $('.right').on('click', function(event) {
    event.preventDefault();
    changeIndex(+1);
    resetTimer();
  });

  $('.left').on('click', function(event) {
    event.preventDefault();
    changeIndex(-1);
    resetTimer();
  });

}

/**
 * Fetch the data using AJAX. When the data is received, store it in the
 * "students" global variable and render the student viewer to the DOM.
 */
$.ajax('eta.json').done(function(data) {

  students = data.eta;

  $(document).ready(onReady);

});
