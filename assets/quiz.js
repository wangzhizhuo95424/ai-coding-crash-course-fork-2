/* Reusable quiz component.
   Markup: <section data-quiz="unique-id"> with .quiz-question[data-answer="A"],
   .quiz-option[data-value], .quiz-feedback[data-explain], .quiz-progress,
   .quiz-score, [data-quiz-reset]. Progress is saved per quiz in localStorage. */
(function () {
  "use strict";
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    document.querySelectorAll("[data-quiz]").forEach(function (quiz) {
      var key = "teach:quiz:" + (quiz.getAttribute("data-quiz") || "default");
      var saved = {};
      try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { saved = {}; }
      var questions = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-question"));
      var bar = quiz.querySelector(".quiz-progress");
      var score = quiz.querySelector(".quiz-score");

      function refresh() {
        var answered = questions.filter(function (q) { return q.dataset.state; }).length;
        var right = questions.filter(function (q) { return q.dataset.state === "correct"; }).length;
        if (bar) bar.textContent = "已答 " + answered + " / " + questions.length + " · 答对 " + right;
        if (score) {
          score.textContent = answered === questions.length
            ? (right === questions.length
              ? "全对。这一课的技能你已经拿到了。"
              : "回到上面的表格再看一遍，然后重做错题。")
            : "";
        }
      }

      function save() {
        var out = {};
        questions.forEach(function (q, i) {
          if (q.dataset.state) out[i] = { s: q.dataset.state, v: q.dataset.chosen };
        });
        try { localStorage.setItem(key, JSON.stringify(out)); } catch (e) {}
      }

      function paint(q, value, state) {
        var answer = q.getAttribute("data-answer");
        var feedback = q.querySelector(".quiz-feedback");
        q.dataset.state = state;
        q.dataset.chosen = value;
        q.querySelectorAll(".quiz-option").forEach(function (btn) {
          btn.disabled = true;
          btn.classList.remove("correct", "wrong");
          if (btn.getAttribute("data-value") === answer) btn.classList.add("correct");
          else if (btn.getAttribute("data-value") === value) btn.classList.add("wrong");
        });
        if (feedback) {
          feedback.innerHTML = "<strong>" + (state === "correct" ? "对了。" : "不对。") +
            "</strong> " + (feedback.getAttribute("data-explain") || "");
          feedback.classList.add("visible");
        }
      }

      questions.forEach(function (q, i) {
        q.querySelectorAll(".quiz-option").forEach(function (btn) {
          btn.addEventListener("click", function () {
            if (q.dataset.state) return;
            var value = btn.getAttribute("data-value");
            paint(q, value, value === q.getAttribute("data-answer") ? "correct" : "wrong");
            save();
            refresh();
          });
        });
        if (saved[i]) paint(q, saved[i].v, saved[i].s);
      });

      var reset = quiz.querySelector("[data-quiz-reset]");
      if (reset) {
        reset.addEventListener("click", function () {
          questions.forEach(function (q) {
            delete q.dataset.state;
            delete q.dataset.chosen;
            q.querySelectorAll(".quiz-option").forEach(function (btn) {
              btn.disabled = false;
              btn.classList.remove("correct", "wrong");
            });
            var f = q.querySelector(".quiz-feedback");
            if (f) { f.textContent = ""; f.classList.remove("visible"); }
          });
          try { localStorage.removeItem(key); } catch (e) {}
          refresh();
        });
      }
      refresh();
    });
  });
})();
