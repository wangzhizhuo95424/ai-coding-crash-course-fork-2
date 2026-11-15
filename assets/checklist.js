/* Reusable hands-on checklist component.
   Markup: <ul data-checklist="unique-id"> with .check-item > input[type=checkbox],
   plus .check-progress. Checked state is saved per checklist in localStorage. */
(function () {
  "use strict";
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    document.querySelectorAll("[data-checklist]").forEach(function (list) {
      var key = "teach:check:" + (list.getAttribute("data-checklist") || "default");
      var boxes = Array.prototype.slice.call(list.querySelectorAll('input[type="checkbox"]'));
      var bar = list.querySelector(".check-progress");
      var saved = {};
      try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { saved = {}; }

      function refresh() {
        var done = boxes.filter(function (b) { return b.checked; }).length;
        if (bar) {
          bar.textContent = done === boxes.length
            ? "全部完成 ✓ 这一课的动手部分过关了。"
            : "已完成 " + done + " / " + boxes.length + " 步";
        }
      }

      boxes.forEach(function (box, i) {
        var item = box.closest(".check-item");
        if (saved[i]) {
          box.checked = true;
          if (item) item.classList.add("done");
        }
        box.addEventListener("change", function () {
          saved[i] = box.checked;
          if (item) item.classList.toggle("done", box.checked);
          try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
          refresh();
        });
      });
      refresh();
    });
  });
})();
