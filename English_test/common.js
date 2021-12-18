const clears = document.getElementsByClassName("clear");
for (let i = 0; i < clears.length; i++) {
  clears[i].innerHTML = '<input style="width:600px; margin-left: 50px;"/>';
}

const dvExamInfo = document.getElementById("dvExamInfo");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "showWrongAnswer";
checkbox.style.position = "fixed";
checkbox.style.top = "0";
dvExamInfo.appendChild(checkbox);

document.getElementById("showWrongAnswer").addEventListener("change", (e) => {
  const checked = e.target.checked;
  const sectionDivs = document.getElementsByClassName("sectionDiv");
  if (checked) {
    for (let i = 0; i < sectionDivs.length; i++) {
      const secitonDiv = sectionDivs[i];
      const answerString =
        secitonDiv.getElementsByClassName("EvenStyle")[0].children[2]
          .children[0].innerHTML;
      const input =
        secitonDiv.getElementsByClassName("clear")[0].children[0].value;
      const [, answer] = /参考答案\:(.*)/.exec(answerString);
      if (answer === input) {
        secitonDiv.style.display = "none";
      } else {
        
      }
    }
  } else {
    for (let i = 0; i < sectionDivs.length; i++) {
      sectionDivs[i].style.display = "unset";
    }
  }
});
