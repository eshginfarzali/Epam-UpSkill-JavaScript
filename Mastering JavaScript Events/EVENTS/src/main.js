document.addEventListener("DOMContentLoaded", function () {

  const joinSection = document.getElementById("join-our-program");

  joinSection.innerHTML = `
      <h2>Join Our Program</h2>
      <h3>Sed do eiusmod tempor incididunt <br />
      ut labore et dolore magna aliqua.</h3>
      <form id="join-form">
          <input id="inp" type="email" name="email" value="" placeholder="Enter your email" required />
          <button id="subscribe" class="join-team-btn" type="submit">Subscribe</button>
      </form>
  `;

  const form = document.getElementById("join-form");
  const input = document.getElementById("inp");

  function getFormInputValue(e) {
    e.preventDefault();
    const email = input.value;
    console.log({ email });
    input.value = "";
  }

  form.addEventListener("submit", getFormInputValue);
});

// const menu = document.querySelector(".app-header__nav-menu-button-icon")

// menu.addEventListener("click", ()=>{
//   console.log("cliced");
// })