
const faqSelect = document.getElementById("faq-select");
const faqAnswers = document.querySelectorAll("[data-answer]");

faqSelect.addEventListener("change", function () {
    const selectedQuestion = faqSelect.value;

    faqAnswers.forEach(function (answer) {
        answer.hidden = answer.dataset.answer !== selectedQuestion;
    });
});
