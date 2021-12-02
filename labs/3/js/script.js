function updateReport(period) {
    var periods = {"daily":"Day","weekly":"Week","monthly":"Month"};
    var xmlhttp = new XMLHttpRequest();
    var url = "data.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var loadedReport = JSON.parse(this.responseText);
            loadedReport.forEach(function callback(card){
                let currentCard = document.getElementById("timeline-"+card["title"].toLowerCase().replace(' ','-'))
                currentCard.querySelector("#current-hours").innerHTML = card["timeframes"][period]["current"]+"hrs";
                currentCard.querySelector("#previous-hours").innerHTML = "Last "+periods[period]+" - "+ card["timeframes"][period]["previous"]+"hrs";
            })
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

updateReport('daily');