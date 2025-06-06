const codeInput = document.getElementById('codeInput');
const runButton = document.getElementById('runBtn');
const outputContent = document.getElementById('outputContent');
const clearBtn = document.getElementById('clearBtn');

runButton.addEventListener('click', () => {
    const content = codeInput.value;

    try {
        outputContent.srcdoc = content;
    } catch (e) {
        outputContent.srcdoc = `<p style="color:red;">Error: ${e.message}</p>`;
    }
});

clearBtn.addEventListener('click', () => {
    codeInput.value = '';
    outputContent.srcdoc = '';
});
