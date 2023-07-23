const changeFocus1 = () => {
  let phone1 = document.getElementById("num1").value;
  if (phone1.length === 3) {
    document.getElementById("num2").focus();
  }
};

const changeFocus2 = () => {
  let phone2 = document.getElementById("num2").value;
  if (phone2.length === 4) {
    document.getElementById("num3").focus();
  }
};

const changeFocus3 = () => {
  let phone3 = document.getElementById("num3").value;
  if (phone3.length === 4) {
    document.getElementById("sendTo").disabled = false;
    document.getElementById("sendTo").className = "send";
  }
};

let isStarted = false;
let isTrue = false;

const sendTo = () => {
  if (isStarted === false) {
    isStarted = true;
    const randomNum = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      "0"
    );

    document.getElementById("randomNum").innerText = randomNum;
    document.getElementById("finish").disabled = false;
    document.getElementById("finish").className = "finish";
    document.getElementById("sendTo").disabled = true;
    document.getElementById("sendTo").className = "noSend";

    let time = 180;
    let timer;

    timer = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = min + ":" + sec;
        time -= 1;
        if (document.getElementById("finish").disabled === true) {
          clearInterval(timer);
          isTrue = true;
        }
      } else {
        clearInterval(timer);
        isStarted = false;
        document.getElementById("sendTo").disabled = false;
        document.getElementById("sendTo").className = "send";
        document.getElementById("finish").disabled = true;
        document.getElementById("finish").className = "noFinish";
      }
    }, 1000);
  }
};

const finish = () => {
  window.alert("인증이 완료되었습니다");
  document.getElementById("finish").disabled = true;
  document.getElementById("finish").className = "noFinish";
};

const create = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let local = document.getElementById("local").value;
  let gender1 = document.getElementById("gender1").checked;
  let gender2 = document.getElementById("gender2").checked;

  let isClear = true;

  // 이메일과 이름 에러 메시지
  if (email === "") {
    document.getElementById("emailError").innerText = "이메일을 입력해 주세요.";
    document.getElementById("emailError").className = "error";
    isClear = false;
  } else {
    if (email.includes("@") && email.includes(".com")) {
      document.getElementById("emailError").innerText = "";
      document.getElementById("emailError").className = "noError";
    } else {
      document.getElementById("emailError").innerText =
        "이메일의 형식에 맞지 않습니다.";
      document.getElementById("emailError").className = "error";
      isClear = false;
    }
  }
  if (name === "") {
    document.getElementById("nameError").innerText = "이름을 입력해 주세요.";
    document.getElementById("nameError").className = "error";
    isClear = false;
  } else {
    document.getElementById("nameError").innerText = "";
    document.getElementById("nameError").className = "noError";
  }

  //   패스워트 에러 메시지
  if (password1 === "") {
    document.getElementById("passwordError1").innerText =
      "비밀번호를 입력해 주세요.";
    document.getElementById("passwordError1").className = "error";
    isClear = false;
  } else {
    document.getElementById("passwordError1").innerText = "";
    document.getElementById("passwordError1").className = "noError";
  }
  if (password2 === "") {
    document.getElementById("passwordError2").innerText =
      "비밀번호를 다시 입력해 주세요.";
    document.getElementById("passwordError2").className = "error";
    isClear = false;
  } else {
    if (password1 !== password2) {
      document.getElementById("passwordError2").innerText =
        "비밀번호가 맞지 않습니다.";
      document.getElementById("passwordError2").className = "error";
      isClear = false;
    } else {
      document.getElementById("passwordError2").innerText = "";
      document.getElementById("passwordError2").className = "noError";
    }
  }

  //   지역 선택 에러 메시지
  if (local === "0") {
    document.getElementById("localError").innerText = "지역을 선택해 주세요.";
    document.getElementById("localError").className = "error";
    isClear = false;
  } else {
    document.getElementById("localError").innerText = "";
    document.getElementById("localError").className = "noError";
  }

  //   성별 선택 에러 메시지
  if (gender1 === false && gender2 === false) {
    document.getElementById("genderError").innerText = "성별을 선택해 주세요.";
    document.getElementById("genderError").className = "error";
    isClear = false;
  } else {
    document.getElementById("genderError").innerText = "";
    document.getElementById("genderError").className = "noError";
  }

  //   가입하기
  if (isClear && isTrue) {
    document.getElementsByClassName("error").value = "";
    document.getElementsByClassName("error").className = "noError";
    window.alert("코드캠프 가입을 축하합니다!!");
  } else if (isClear && isTrue === false) {
    window.alert("휴대폰 인증을 완료해 주세요.");
  }
};
