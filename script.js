document.addEventListener('DOMContentLoaded', () => {
    const btnPrint = document.getElementById('btn-print');
    const captureArea = document.getElementById('capture-area');

    btnPrint.addEventListener('click', () => {
        btnPrint.style.display = 'none'; // Esconde o botão no print

        html2canvas(captureArea, {
            backgroundColor: "#0a192f",
            scale: 2
        }).then(canvas => {
            const link = document.createElement('a');
            const nome = document.getElementById('aluno').value || 'canvas';
            link.download = `LeanCanvas-${nome}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
            
            btnPrint.style.display = 'inline-block'; // Mostra o botão de volta
        });
    });
});