document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('obfuscate-btn').addEventListener('click', () => {
        let inputCode = document.getElementById('input-code').value;
        let outputCode = document.getElementById('output-code');

        if (inputCode.trim() === "") {
            outputCode.value = "⚠ Please enter Lua code!";
            return;
        }

        // Fake obfuscation (replace this with a real obfuscation algorithm)
        let obfuscatedCode = btoa(inputCode).split('').reverse().join(''); // Dummy obfuscation
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
            let deobfuscatedCode = atob(inputCode.split('').reverse().join('')); // Reverse obfuscation
            outputCode.value = deobfuscatedCode;
        } catch (e) {
            outputCode.value = "⚠ Invalid obfuscated code!";
        }
    });

    // GSAP Animation
    gsap.from(".glitch", { opacity: 0, y: -20, duration: 1, ease: "power2.out" });
    gsap.from(".intro", { opacity: 0, y: 10, delay: 0.5, duration: 1 });
    gsap.from("textarea", { opacity: 0, scale: 0.9, delay: 1, duration: 0.8 });
    gsap.from(".btn", { opacity: 0, y: 10, stagger: 0.2, delay: 1.5, duration: 0.6 });
});
