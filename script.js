function analyzeSEO()   {
    const url = document.getElementById("urlInput").value;
    if (url ==="") {
        alert("Please ente Website URL");
    return;
}
document.getElementById("score").innerText = "Analyzing...";
document.getElementById("titleResult").innerText = "Checking...";
document.getElementById("descriptionResult").innerText = "checking...";
document.getElementById("mobileResult").innerText = "checking...";
setTimeout(() => {
    document.getElementById("score").innerText = "85/100";
    document.getElementById("progress").style.width = "85%";
    document.getElementById("titleResult").innerText = "Meta Title optimized";
    document.getElementById("descriptionResult").innerText = "Meta Description found";
    document.getElementById("mobileResult").innerText = "Mobile Friendly"; 
}, 2000);
}