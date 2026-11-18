
const faqSelect = document.getElementById("faq-select");
const faqAnswers = document.querySelectorAll("[data-answer]");

faqSelect.addEventListener("change", function () {
    const selectedQuestion = faqSelect.value;

    faqAnswers.forEach(function (answer) {
        answer.hidden = answer.dataset.answer !== selectedQuestion;
    });
});

// main runtime
// visitor_version will be later determined to let them
// see an "Unlock" effect with PHP session variable- oh wait, let's use PHP instead
// of localStorage in next version!


if (localStorage.getItem("visitor_version") === null) {
    localStorage.setItem("visitor_version", "1.1")
    console.log("Set visitor version for the first time :D")
} else {
    console.log("Already a visitor, currently set to", localStorage.getItem("visitor_version") + ".")
}