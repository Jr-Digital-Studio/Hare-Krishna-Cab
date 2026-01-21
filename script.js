// Password check karne ke liye
function checkAdmin() {
    const pass = document.getElementById('passInput').value;
    if(pass === "1234") { // Aap apna password yahan badal sakte hain
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert("Wrong Password!");
    }
}

// Firebase se connect karne ke liye (Abhi ke liye local test)
function updateData() {
    const rate1 = document.getElementById('rate1').value;
    alert("New Rate Saved: " + rate1);
    // Yahan Firebase ka update code aayega
}