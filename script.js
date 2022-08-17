// ض ث ق ف غ خ ج چ ش ب ت ن ظ ز ذ ژ پ ی
const wordInput = document.querySelector("#wordinput");
const sent = document.querySelector("#send");
const count = document.querySelector(".count");
const userTextOut = document.querySelector(".usertext");
// const userTextSplit = userText.split("");
let dot = 0;
let regaxnum = /[0-9]/g;
// sent.addEventListener("click", dotCount);
wordInput.addEventListener("keyup", dotCount);
function dotCount(e) {
    const userText = wordInput.value;
    // console.log(userText.length);

    if (userText.length > 0) {
        const userTextSplit = userText.split("");
        userTextSplit.forEach((word, index) => {
            switch (word) {
                case "ش":
                    dot += 3;
                    break;
                case "ث":
                    dot += 3;
                    break;
                case "پ":
                    dot += 3;
                    break;
                case "ق":
                    dot += 2;
                    break;
                case "ف":
                    dot += 1;
                    break;
                case "غ":
                    dot += 1;
                    break;
                case "خ":
                    dot += 1;
                    break;
                case "ج":
                    dot += 1;
                    break;
                case "چ":
                    dot += 3;
                    break;
                case "ب":
                    dot += 1;
                    break;
                case "ت":
                    dot += 2;
                    break;
                case "ن":
                    dot += 1;
                    break;
                case "ظ":
                    dot += 1;
                    break;
                case "ض":
                    dot += 1;
                    break;
                case "ز":
                    dot += 1;
                    break;
                case "ذ":
                    dot += 1;
                    break;
                case "ژ":
                    dot += 3;
                    break;
                case "ی":
                    if ((userTextSplit[index + 1] !== undefined) && (userTextSplit[index + 1] !== " ")) {
                        if (!regaxnum.test((userTextSplit[index + 1])))
                            dot += 2;

                    }
                    break;


            }

        });
        count.innerText = dot;
        userTextOut.innerText = `این متن "${wordInput.value}" `;
        userTextOut.setAttribute("title", wordInput.value);
        // wordInput.value = "";
        // userText = "";
        dot = 0;
        // wordInput.value="";

    }
    if (wordInput.value.length === 0 && e.keyCode === 8) {
        userTextOut.innerText = "";
        count.innerText = dot;
        // console.log(e.keyCode)


    }
    else {

    }

}
