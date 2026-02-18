document.querySelectorAll(".toggle").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
  });
});
