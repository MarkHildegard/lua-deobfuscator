document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('obfuscate-btn').addEventListener('click', () => {
    let inputCode = document.getElementById('input-code').value;
    let outputCode = document.getElementById('output-code');

    if (inputCode.trim() === "") {
      outputCode.value = "⚠ Please enter Lua code!";
      return;
    }

    // Dummy obfuscation: Base64 encoding + reverse string
    let obfuscatedCode = btoa(inputCode).split('').reverse().join('');
    outputCode.value = obfuscatedCode;
  });

  document.getElementById('deobfuscate-btn').addEventListener('click', () => {
    let inputCode = document.getElementById('input-code').value;
    let outputCode = document.getElementById('output-code');

    if (inputCode.trim() === "") {
      outputCode.value = "⚠ Please enter obfuscated Lua code!";
      return;
    }

    try {
      let deobfuscatedCode = atob(inputCode.split('').reverse().join(''));
      outputCode.value = deobfuscatedCode;
    } catch (e) {
      outputCode.value = "⚠ Invalid obfuscated code!";
    }
  });

  // GSAP Animation for elements
  gsap.from(".glitch", { opacity: 0, y: -20, duration: 1, ease: "power2.out" });
  gsap.from(".intro", { opacity: 0, y: 10, delay: 0.5, duration: 1 });
  gsap.from("textarea", { opacity: 0, scale: 0.9, delay: 1, duration: 0.8 });
  
  // Use fromTo for buttons to ensure they end with visible styles, then clear inline styles
  gsap.fromTo(".btn",
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, delay: 1.5, clearProps: "all" }
  );
});
