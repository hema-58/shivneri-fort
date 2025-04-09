// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add more interactivity as needed


function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);

    // Display info based on scanned content
    const infoDiv = document.getElementById("scanned-info");
    const locationInfo = {
        "buruj": "बुरुज: हे गडावरील उंच मनोरे होते जे गडाच्या सुरक्षेसाठी वापरले जात होते.",
        "mahadarvaja": "महादरवाजा: गडाचा मुख्य प्रवेशद्वार.",
        "shivaimandir": "शिवाई मंदिर: छत्रपती शिवाजी महाराजांचे नाव या देवीवरून ठेवले गेले.",
        "kadelot": "कडेलोट: शत्रूंना शिक्षा देण्यासाठी वापरले जाणारे ठिकाण."
        // Add more mappings as needed
    };

    if (locationInfo[decodedText]) {
        infoDiv.innerHTML = `<p>${locationInfo[decodedText]}</p>`;
    } else {
        infoDiv.innerHTML = `<p>अधिक माहिती उपलब्ध नाही.</p>`;
    }
}

// Scanner setup
const html5QrCode = new Html5Qrcode("reader");

html5QrCode.start(
    { facingMode: "environment" },
    {
        fps: 10,
        qrbox: 250
    },
    onScanSuccess
).catch(err => {
    console.error("Scan failed", err);
});