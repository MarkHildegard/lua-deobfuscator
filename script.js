document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('obfuscate-btn').addEventListener('click', () => {
    let inputCode = document.getElementById('input-code').value;
    let outputCode = document.getElementById('output-code');

    if (inputCode.trim() === "") {
      outputCode.value = "⚠ Please enter Lua code!";
      return;
    }

    let obfuscatedCode = obfuscateLua(inputCode);
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
      let deobfuscatedCode = deobfuscateLua(inputCode);
      outputCode.value = deobfuscatedCode;
    } catch (e) {
      outputCode.value = "⚠ Invalid obfuscated code!";
    }
  });

  // GSAP Animation
  gsap.from(".glitch", { opacity: 0, y: -20, duration: 1, ease: "power2.out" });
  gsap.from(".intro", { opacity: 0, y: 10, delay: 0.5, duration: 1 });
  gsap.from("textarea", { opacity: 0, scale: 0.9, delay: 1, duration: 0.8 });
  gsap.fromTo(".btn", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, delay: 1.5, clearProps: "all" });

  function obfuscateLua(code) {
    let hexEncoded = code.split("").map(char => `\\x${char.charCodeAt(0).toString(16)}`).join("");
    let junkCode = `local a = 0; for i=1,10 do a = a + i end; `;
    return `${junkCode}loadstring("${hexEncoded}")()`;
  }

  function deobfuscateLua(code) {
    let match = code.match(/loadstring"(.+?)"/);
    if (!match) throw new Error("Invalid obfuscated code");
    
    let hexString = match[1];
    return hexString.replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
  }
}); 
