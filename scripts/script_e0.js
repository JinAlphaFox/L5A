function plusprimerInutiles(role) {
    if(crabe === 0) {
        tableCrabe(false);
    }
    if(grue === 0) {
        tableGrue(false);
    }
    if(lion === 0) {
        tableLion(false);
    }
    if(phenix === 0) {
        tablePhenix(false);
    }
    if(dragon === 0) {
        tableDragon(false);
    }
    if(licorne === 0) {
        tableLicorne(false);
    }
    if(scorpion === 0) {
        tableScorpion(false);
    }
    if(imperiaux === 0) {
        tableImperiaux(false);
    }
    if(autre === 0) {
        tableAutre(false);
    }
    if(mineur === 0) {
        tableMineur(false);
    }
    switch(role) {
        case 0:
            roleTous();
            break;
        case 1:
            roleBushi();
            break;
        case 2:
            roleCourt();
            break;
        case 3:
            roleShino();
            break;
        case 4:
            roleArtis();
            break;
        case 5:
            roleMoine();
            break;
        case 6:
            roleSage();
            break;
        case 7:
            roleShug();
            break;
        default:
            console.log("La vérité est ailleurs")
    }
    if(ldb === 0) {
        tableLdb(false);
    }
    if(outreM === 0) {
        tableOutreM(false);
    }
    if(ede === 0) {
        tableEde(false);
    }
    if(cdp === 0) {
        tableCdp(false);
    }
    if(vdv === 0) {
        tableVdv(false);
    }
    if(cdlv === 0) {
        tableCdlv(false);
    }
    if(lrc === 0) {
        tableLrc(false);
    }
    if(plus === 0) {
        tablePlus(false);
    }
}

function tableCrabe(check) {
    let labelCrabe = document.getElementById("label_crabe")
    let tableCrabe = document.querySelector(".crabeTable")

    if(check) {
        labelCrabe.style.backgroundColor = "var(--color-crabeClair)";
        tableCrabe.style.display = "block";
        crabe = 1;
    }else{
        labelCrabe.style.backgroundColor = "aliceblue";
        tableCrabe.style.display = "none";
        crabe = 0;
    }
}

function tableGrue(check) {
    let labelGrue = document.getElementById("label_grue")
    let tableGrue = document.querySelector(".grueTable")

    if(check) {
        labelGrue.style.backgroundColor = "var(--color-grueClair)";
        tableGrue.style.display = "block";
    }else{
        labelGrue.style.backgroundColor = "aliceblue";
        tableGrue.style.display = "none";
    }
}

function tableLion(check) {
    let labelLion = document.getElementById("label_lion")
    let tableLion = document.querySelector(".lionTable")

    if(check) {
        labelLion.style.backgroundColor = "var(--color-lionClair)";
        tableLion.style.display = "block";
    }else{
        labelLion.style.backgroundColor = "aliceblue";
        tableLion.style.display = "none";
    }
}

function tablePhenix(check) {
    let labelPhenix = document.getElementById("label_phenix")
    let tablePhenix = document.querySelector(".phenixTable")

    if(check) {
        labelPhenix.style.backgroundColor = "var(--color-phenixClair)";
        tablePhenix.style.display = "block";
    }else{
        labelPhenix.style.backgroundColor = "aliceblue";
        tablePhenix.style.display = "none";
    }
}

function tableDragon(check) {
    let labelDragon = document.getElementById("label_dragon")
    let tableDragon = document.querySelector(".dragonTable")

    if(check) {
        labelDragon.style.backgroundColor = "var(--color-dragonClair)";
        tableDragon.style.display = "block";
    }else{
        labelDragon.style.backgroundColor = "aliceblue";
        tableDragon.style.display = "none";
    }
}

function tableLicorne(check) {
    let labelLicorne = document.getElementById("label_licorne")
    let tableLicorne = document.querySelector(".licorneTable")

    if(check) {
        labelLicorne.style.backgroundColor = "var(--color-licorneClair)";
        tableLicorne.style.display = "block";
    }else{
        labelLicorne.style.backgroundColor = "aliceblue";
        tableLicorne.style.display = "none";
    }
}

function tableScorpion(check) {
    let labelScorpion = document.getElementById("label_scorpion")
    let tableScorpion = document.querySelector(".scorpionTable")

    if(check) {
        labelScorpion.style.backgroundColor = "var(--color-scorpionClair)";
        tableScorpion.style.display = "block";
    }else{
        labelScorpion.style.backgroundColor = "aliceblue";
        tableScorpion.style.display = "none";
    }
}

function tableImperiaux(check) {
    let labelImperiaux = document.getElementById("label_imperiaux")
    let tableImperiaux = document.querySelector(".imperiauxTable")

    if(check) {
        labelImperiaux.style.backgroundColor = "var(--color-imperiauxClair)";
        tableImperiaux.style.display = "block";
    }else{
        labelImperiaux.style.backgroundColor = "aliceblue";
        tableImperiaux.style.display = "none";
    }
}

function tableAutre(check) {
    let labelAutre = document.getElementById("label_autre")
    let tableAutre = document.querySelector(".autreTable")

    if(check) {
        labelAutre.style.backgroundColor = "var(--color-autre)";
        tableAutre.style.display = "block";
    }else{
        labelAutre.style.backgroundColor = "aliceblue";
        tableAutre.style.display = "none";
    }
}

function tableMineur(check) {
    let labelMineur = document.getElementById("label_mineur")
    let tableMineur = document.querySelector(".mineurTable")

    if(check) {
        labelMineur.style.backgroundColor = "var(--color-mineur)";
        tableMineur.style.display = "block";
    }else{
        labelMineur.style.backgroundColor = "aliceblue";
        tableMineur.style.display = "none";
    }
}

function roleTous() {
    labelTous.style.backgroundColor = "silver";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "flex";
    }
}

function roleBushi() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "silver";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "flex";
    }
}

function roleCourt() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "silver";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "flex";
    }
}

function roleShino() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "silver";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "flex";
    }
}

function roleArtis() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "silver";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "flex";
    }
}

function roleMoine() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "silver";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "flex";
    }
}

function roleSage() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "silver";
    labelShug.style.backgroundColor = "aliceblue";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "flex";
    }
}

function roleShug() {
    labelTous.style.backgroundColor = "aliceblue";
    labelBushi.style.backgroundColor = "aliceblue";
    labelCourt.style.backgroundColor = "aliceblue";
    labelShino.style.backgroundColor = "aliceblue";
    labelArtis.style.backgroundColor = "aliceblue";
    labelMoine.style.backgroundColor = "aliceblue";
    labelSage.style.backgroundColor = "aliceblue";
    labelShug.style.backgroundColor = "silver";
    for(let i = 0; i < tableTous.length; i++) {
        tableTous[i].style.display = "none";
    }
    for(let i = 0; i < tableBushi.length; i++) {
        tableBushi[i].style.display = "none";
    }
    for(let i = 0; i < tableCourt.length; i++) {
        tableCourt[i].style.display = "none";
    }
    for(let i = 0; i < tableShino.length; i++) {
        tableShino[i].style.display = "none";
    }
    for(let i = 0; i < tableArtis.length; i++) {
        tableArtis[i].style.display = "none";
    }
    for(let i = 0; i < tableMoine.length; i++) {
        tableMoine[i].style.display = "none";
    }
    for(let i = 0; i < tableSage.length; i++) {
        tableSage[i].style.display = "none";
    }
    for(let i = 0; i < tableShug.length; i++) {
        tableShug[i].style.display = "flex";
    }
}

function tableLdb(check) {
    let labelLdb = document.getElementById("label_ldb")
    let tableLdb = document.querySelectorAll(".ldb")

    if(check) {
        labelLdb.style.backgroundColor = "silver";
        for(let i = 0; i < tableLdb.length; i++) {
            tableLdb[i].style.display = "flex";
        }
        ldb = 1;
    }else{
        labelLdb.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableLdb.length; i++) {
            tableLdb[i].style.display = "none";
        }
        ldb = 0;
    }
}

function tableOutreM(check) {
    let labelOutreM = document.getElementById("label_outreM")
    let tableOutreM = document.querySelectorAll(".outreM")

    if(check) {
        labelOutreM.style.backgroundColor = "silver";
        for(let i = 0; i < tableOutreM.length; i++) {
            tableOutreM[i].style.display = "flex";
        }
        outreM = 1;
    }else{
        labelOutreM.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableOutreM.length; i++) {
            tableOutreM[i].style.display = "none";
        }
        outreM = 0;
    }
}

function tableEde(check) {
    let labelEde = document.getElementById("label_ede")
    let tableEde = document.querySelectorAll(".ede")

    if(check) {
        labelEde.style.backgroundColor = "silver";
        for(let i = 0; i < tableEde.length; i++) {
            tableEde[i].style.display = "flex";
        }
        ede = 1;
    }else{
        labelEde.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableEde.length; i++) {
            tableEde[i].style.display = "none";
        }
        ede = 0;
    }
}

function tableCdp(check) {
    let labelCdp = document.getElementById("label_cdp")
    let tableCdp = document.querySelectorAll(".cdp")

    if(check) {
        labelCdp.style.backgroundColor = "silver";
        for(let i = 0; i < tableCdp.length; i++) {
            tableCdp[i].style.display = "flex";
        }
        cdp = 1;
    }else{
        labelCdp.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableCdp.length; i++) {
            tableCdp[i].style.display = "none";
        }
        cdp = 0;
    }
}

function tableVdv(check) {
    let labelVdv = document.getElementById("label_vdv")
    let tableVdv = document.querySelectorAll(".vdv")

    if(check) {
        labelVdv.style.backgroundColor = "silver";
        for(let i = 0; i < tableVdv.length; i++) {
            tableVdv[i].style.display = "flex";
        }
        vdv = 1;
    }else{
        labelVdv.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableVdv.length; i++) {
            tableVdv[i].style.display = "none";
        }
        vdv = 0;
    }
}

function tableCdlv(check) {
    let labelCdlv = document.getElementById("label_cdlv")
    let tableCdlv = document.querySelectorAll(".cdlv")

    if(check) {
        labelCdlv.style.backgroundColor = "silver";
        for(let i = 0; i < tableCdlv.length; i++) {
            tableCdlv[i].style.display = "flex";
        }
        cdlv = 1;
    }else{
        labelCdlv.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableCdlv.length; i++) {
            tableCdlv[i].style.display = "none";
        }
        cdlv = 0;
    }
}

function tableLrc(check) {
    let labelLrc = document.getElementById("label_lrc")
    let tableLrc = document.querySelectorAll(".lrc")

    if(check) {
        labelLrc.style.backgroundColor = "silver";
        for(let i = 0; i < tableLrc.length; i++) {
            tableLrc[i].style.display = "flex";
        }
        lrc = 1;
    }else{
        labelLrc.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tableLrc.length; i++) {
            tableLrc[i].style.display = "none";
        }
        lrc = 0;
    }
}

function tablePlus(check) {
    let labelPlus = document.getElementById("label_plus")
    let tablePlus = document.querySelectorAll(".plus")

    if(check) {
        labelPlus.style.backgroundColor = "silver";
        for(let i = 0; i < tablePlus.length; i++) {
            tablePlus[i].style.display = "flex";
        }
        plus = 1;
    }else{
        labelPlus.style.backgroundColor = "aliceblue";
        for(let i = 0; i < tablePlus.length; i++) {
            tablePlus[i].style.display = "none";
        }
        plus = 0;
    }
}

function rescale() {
    let caseC = document.querySelectorAll(".c")
    let caseD = document.querySelectorAll(".d")

    for(let x = 0; x < caseC.length; x++) {
        caseC[x].style.width = "110px"
    }
    for(let y = 0; y < caseD.length; y++) {
        caseD[y].style.width = "490px"
    }
}

function boutonsEcoles () {
    let boutonsClan = document.querySelectorAll(".check");
    let choixRole = 0;

    for(let i = 0; i < boutonsClan.length; i++) {
        boutonsClan[i].addEventListener("change", (event) =>{
            //console.log(event);
            switch(event.target.id) {
                case "check_crabe":
                    tableCrabe(event.target.checked);
                    break;
                case "check_grue":
                    tableGrue(event.target.checked);
                    break;
                case "check_lion":
                    tableLion(event.target.checked);
                    break;
                case "check_phenix":
                    tablePhenix(event.target.checked);
                    break;
                case "check_dragon":
                    tableDragon(event.target.checked);
                    break;
                case "check_licorne":
                    tableLicorne(event.target.checked);
                    break;
                case "check_scorpion":
                    tableScorpion(event.target.checked);
                    break;
                case "check_imperiaux":
                    tableImperiaux(event.target.checked);
                    break;
                case "check_autre":
                    tableAutre(event.target.checked);
                    break;
                case "check_mineur":
                    tableMineur(event.target.checked);
                    break;
                case "check_tous":
                    roleTous();
                    choixRole = 0;
                    break;
                case "check_bushi":
                    roleBushi();
                    choixRole = 1;
                    break;
                case "check_court":
                    roleCourt();
                    choixRole = 2;
                    break;
                case "check_shino":
                    roleShino();
                    choixRole = 3;
                    break;
                case "check_artis":
                    roleArtis();
                    choixRole = 4;
                    break;
                case "check_moine":
                    roleMoine();
                    choixRole = 5;
                    break;
                case "check_sage":
                    roleSage();
                    choixRole = 6;
                    break;
                case "check_shug":
                    roleShug();
                    choixRole = 7;
                    break;
                case "check_ldb":
                    tableLdb(event.target.checked);
                    break;
                case "check_outreM":
                    tableOutreM(event.target.checked);
                    break;
                case "check_ede":
                    tableEde(event.target.checked);
                    break;
                case "check_cdp":
                    tableCdp(event.target.checked);
                    break;
                case "check_vdv":
                    tableVdv(event.target.checked);
                    break;
                case "check_cdlv":
                    tableCdlv(event.target.checked);
                    break;
                case "check_lrc":
                    tableLrc(event.target.checked);
                    break;
                case "check_plus":
                    tablePlus(event.target.checked);
                    break;
                default:
                    console.log(event.target.id)
            }
            console.log(event.target.id)
            plusprimerInutiles(choixRole);
        });
    }
}

let crabe = 1;
let grue = 1;
let lion = 1;
let phenix = 1;
let dragon = 1;
let licorne = 1;
let scorpion = 1;
let imperiaux = 1;
let autre = 1;
let mineur = 1;

let labelTous = document.getElementById("label_tous");
let labelBushi = document.getElementById("label_bushi");
let labelCourt = document.getElementById("label_court");
let labelShino = document.getElementById("label_shino");
let labelArtis = document.getElementById("label_artis");
let labelMoine = document.getElementById("label_moine");
let labelShug = document.getElementById("label_shug");
let labelSage = document.getElementById("label_sage");
let tableTous = document.querySelectorAll(".tous");
let tableBushi = document.querySelectorAll(".bushi");
let tableCourt = document.querySelectorAll(".court");
let tableShino = document.querySelectorAll(".shino");
let tableArtis = document.querySelectorAll(".artis");
let tableMoine = document.querySelectorAll(".moine");
let tableShug = document.querySelectorAll(".shug");
let tableSage = document.querySelectorAll(".sage");

let ldb = 1; // Le Livre de Base
let outreM = 1; // L'Outremonde
let ede = 1; // L'Empire d'Emeraude
let cdp = 1 ; // Les Cours de Pierre
let vdv = 1 ; // La Voie des Vagues
let cdlv = 1; // Les Champs de la Victoire
let lrc = 1; // Les Royaumes Celestes
let plus = 1; // Plusplément WEB et Kit du meneur

boutonsEcoles();