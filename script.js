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
}); 
