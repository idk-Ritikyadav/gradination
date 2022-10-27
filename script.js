function calculate() {
    document.getElementById("grades").style.display = 'inline-block';
    document.getElementById("sec").style.display = 'block';
    document.getElementById("mshead").innerText = 'Marksheet';
    var pmaths = Number(document.getElementById("pmaths").value);
    var pchem = Number(document.getElementById("pchem").value);
    var pphy = Number(document.getElementById("pphy").value);
    var pcs = Number(document.getElementById("pcs").value);
    var peng = Number(document.getElementById("peng").value);
    var pnep = Number(document.getElementById("pnep").value);

    var tmaths = Number(document.getElementById("tmaths").value);
    var tchem = Number(document.getElementById("tchem").value);
    var tphy = Number(document.getElementById("tphy").value);
    var tcs = Number(document.getElementById("tcs").value);
    var teng = Number(document.getElementById("teng").value);
    var tnep = Number(document.getElementById("tnep").value);

    maths = tmaths + pmaths;
    phy = tphy + pphy;
    chem = tchem + pchem;
    cs = tcs + pcs;
    eng = teng + peng;
    nep = tnep + pnep;




    var total = maths + phy + chem + eng + cs + nep;
    var percent = (total / 600) * 100;
    document.getElementById("percent").innerText = percent;
    fgrade = gradeout(percent);
    document.getElementById("grade").innerText = fgrade;

    //subject grade

    document.getElementById("gmaths").innerText = gradeout(maths);
    document.getElementById("gchem").innerText = gradeout(chem);
    document.getElementById("gphy").innerText = gradeout(phy);
    document.getElementById("gcs").innerText = gradeout(cs);
    document.getElementById("geng").innerText = gradeout(eng);
    document.getElementById("gnep").innerText = gradeout(nep);


}





function gradeout(a) {

    if (a >= 90 && a <= 100) {
        return "A+";
    }

    else if (a >= 80 && a <= 90) {
        return "A";

    }

    else if (a >= 70 && a <= 80) {
        return "B+";

    }

    else if (a >= 60 && a <= 70) {
        return "B";

    }

    else if (a >= 50 && a <= 60) {
        return "C+";

    }

    else if (a >= 40 && a <= 50) {
        return "C";

    }
    else if (a >= 30 && a <= 40) {
        return "D+";

    }
    else if (a <= 30) {
        return "NG";

    }
    else {
        return "Enter valid input";
    }
}


setTimeout(function(){
    window.location.reload();
 }, 100000);