//#region valtozok
var kek = 0;
var piros = 0;
var sarga = 0;
var zold = 0;
var narancs = 0;
var nyert = 0;
//#endregion

//#region kek
function pluszkek(){
    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezosargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezosarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezozoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezonarancs.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }

    kek++;

    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekzoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezokeknarancs.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }

    if (kek == 36) {
        document.getElementById("pluszkek").disabled = true;
        document.getElementById("minuszkek").disabled = true;
        setTimeout(function(){
            if (nyert == 0) {
                alert("A kék játékos nyert!");
                nyert++;
            } else if (nyert == 1){
                alert("A kék játékos lett a 2. helyezett!");
                nyert++;
            } else if (nyert == 2){
                alert("A kék játékos lett a 3. helyezett!");
                nyert++;
            } else if (nyert == 3){
                alert("A kék játékos lett a 4. helyezett!");
                nyert++;
            } else {
                alert("A kék játékos lett az 5. helyezett!");
            }
        }, 200);
    }
}

function minuszkek(){
    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezosargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezosarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezozoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezonarancs.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }

    kek--;

    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekzoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezokeknarancs.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }
}
//#endregion

//#region piros
function pluszpiros(){
    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekzoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezosargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeknarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezosarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezozoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezonarancs.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }

    piros++;

    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezopirosnarancs.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }

    if (piros == 36) {
        document.getElementById("pluszpiros").disabled = true;
        document.getElementById("minuszpiros").disabled = true;
        setTimeout(function(){
            if (nyert == 0) {
                alert("A piros játékos nyert!");
                nyert++;
            } else if (nyert == 1){
                alert("A piros játékos lett a 2. helyezett!");
                nyert++;
            } else if (nyert == 2){
                alert("A piros játékos lett a 3. helyezett!");
                nyert++;
            } else if (nyert == 3){
                alert("A piros játékos lett a 4. helyezett!");
                nyert++;
            } else{
                alert("A piros játékos lett az 5. helyezett!");
            }
        }, 200);
    }
}

function minuszpiros(){
    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekzoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezosargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeknarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezosarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezozoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezonarancs.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }

    piros--;

    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezopirosnarancs.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }
}
//#endregion

//#region sarga
function pluszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirosnarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekzoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeknarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirosnarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezozoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezonarancs.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }

    sarga++;

    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksarganarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossarganarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezosargazoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezosarganarancs.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }

    if (sarga == 36) {
        document.getElementById("pluszsarga").disabled = true;
        document.getElementById("minuszsarga").disabled = true;
        setTimeout(function(){
            if (nyert == 0) {
                alert("A sárga játékos nyert!");
                nyert++;
            } else if (nyert == 1){
                alert("A sárga játékos lett a 2. helyezett!");
                nyert++;
            } else if (nyert == 2){
                alert("A sárga játékos lett a 3. helyezett!");
                nyert++;
            } else if (nyert == 3){
                alert("A sárga játékos lett a 4. helyezett!");
                nyert++;
            } else{
                alert("A sárga játékos lett az 5. helyezett!");
            }
        }, 200);
    }
}

function minuszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirosnarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekzoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeknarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirosnarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezozoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezonarancs.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }

    sarga--;

    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksarganarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossarganarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezosargazoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezosarganarancs.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }
}
//#endregion

//#region zold
function pluszzold(){
    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossarga.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirosnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksarganarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossarganarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiros.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksarga.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeknarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossarga.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirosnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosarganarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokek.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiros.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosarga.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezonarancs.png");
    } else {
        $("#" + zold).attr("src","mezo.png");
    }

    zold++;

    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossargazold.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiroszold.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksargazold.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekzoldnarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossargazold.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosargazoldnarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokekzold.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiroszold.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosargazold.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + zold).attr("src","mezozold.png");
    }

    if (zold == 36) {
        document.getElementById("pluszzold").disabled = true;
        document.getElementById("minuszzold").disabled = true;
        setTimeout(function(){
            if (nyert == 0) {
                alert("A zöld játékos nyert!");
                nyert++;
            } else if (nyert == 1){
                alert("A zöld játékos lett a 2. helyezett!");
                nyert++;
            } else if (nyert == 2){
                alert("A zöld játékos lett a 3. helyezett!");
                nyert++;
            } else if (nyert == 3){
                alert("A zöld játékos lett a 4. helyezett!");
                nyert++;
            } else{
                alert("A zöld játékos lett az 5. helyezett!");
            }
        }, 200);
    }
}

function minuszzold(){
    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossarga.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirosnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksarganarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossarganarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiros.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksarga.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeknarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossarga.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirosnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosarganarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokek.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiros.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosarga.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezonarancs.png");
    } else {
        $("#" + zold).attr("src","mezo.png");
    }

    zold--;

    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossargazold.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiroszold.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksargazold.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekzoldnarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossargazold.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosargazoldnarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokekzold.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiroszold.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosargazold.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + zold).attr("src","mezozold.png");
    }
}
//#endregion

//#region narancs
function plusznarancs(){
    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazold.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarga.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszold.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazold.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazold.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpiros.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarga.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzold.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarga.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopiroszold.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosargazold.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokek.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopiros.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarga.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozold.png");
    } else {
        $("#" + narancs).attr("src","mezo.png");
    }

    narancs++;

    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpirosnarancs.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarganarancs.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzoldnarancs.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarganarancs.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosargazoldnarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokeknarancs.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + narancs).attr("src","mezonarancs.png");
    }

    if (zold == 36) {
        document.getElementById("plusznarancs").disabled = true;
        document.getElementById("minusznarancs").disabled = true;
        setTimeout(function(){
            if (nyert == 0) {
                alert("A Narancs játékos nyert!");
                nyert++;
            } else if (nyert == 1){
                alert("A Narancs játékos lett a 2. helyezett!");
                nyert++;
            } else if (nyert == 2){
                alert("A Narancs játékos lett a 3. helyezett!");
                nyert++;
            } else if (nyert == 3){
                alert("A Narancs játékos lett a 4. helyezett!");
                nyert++;
            } else{
                alert("A Narancs játékos lett az 5. helyezett!");
            }
        }, 200);
    }
}

function minusznarancs(){
    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazold.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarga.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszold.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazold.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazold.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpiros.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarga.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzold.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarga.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokek.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopiros.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarga.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozold.png");
    } else {
        $("#" + narancs).attr("src","mezo.png");
    }

    narancs--;

    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpirosnarancs.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarganarancs.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzoldnarancs.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarganarancs.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirosnarancsnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosarganarancsnarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokeknarancs.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + narancs).attr("src","mezonarancs.png");
    }
}
//#endregion