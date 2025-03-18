var fattureAmministrazione = [
    {
        data: "12/11/2024",
        intestatario: "Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Acconto compenso gestione ordinaria 2024/25",
        importo: "488,01",
    },
    {
        data: "31/01/2025",
        intestatario: "Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Adempimenti fiscali gestione 2024/25",
        importo: "427,22",
    },
    {
        data: "31/01/2025",
        intestatario: "Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Acconto compenso gestione ordinaria 2024/25",
        importo: "610,00",
    },
    {
        data: "",
        intestatario: "",
        descrizione: "Totale",
        importo: "",
    },
];
var fatturePulizie = [
    {
        data: "31/10/2024",
        intestatario: "NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Ottobre",
        importo: "610,00",
    },
    {
        data: "30/11/2024",
        intestatario: "NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Novembre",
        importo: "610,00",
    },
    {
        data: "31/12/2024",
        intestatario: "NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Dicembre",
        importo: "610,00",
    },
    {
        data: "31/01/2025",
        intestatario: "NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Gennaio",
        importo: "610,00",
    },
    {
        data: "28/02/2025",
        intestatario: "NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Febbraio",
        importo: "610,00",
    },
    {
        data: "",
        intestatario: "",
        descrizione: "Totale",
        importo: "",
    },
];
var fattureRiscaldamento = [
    {
        data: "18/06/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/05/2024 al 31/05/2024",
        importo: "189,90",
    },
    {
        data: "17/10/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/06/2024 al 30/09/2024",
        importo: "134,75",
    },
    {
        data: "15/11/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/10/2024 al 31/10/2024",
        importo: "788,00",
    },
    {
        data: "16/12/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/11/2024 al 30/11/2024",
        importo: "2800,95",
    },
    {
        data: "27/12/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Novembre 2024",
        importo: "169,80",
    },
    {
        data: "31/12/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Dicembre 2024",
        importo: "169,80",
    },
    {
        data: "31/12/2024",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/12/2024 al 31/12/2024",
        importo: "3995,97",
    },
    {
        data: "31/01/2025",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Gennaio 2025",
        importo: "172,80",
    },
    {
        data: "31/01/2025",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/01/2025 al 31/01/2025",
        importo: "4278,53",
    },
    {
        data: "28/02/2025",
        intestatario: "A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Febbraio 2025",
        importo: "169,80",
    },
    {
        data: "",
        intestatario: "",
        descrizione: "Totale",
        importo: "",
    },
];
var fattureEnergiaElettrica = [
    {
        data: "31/10/2024",
        intestatario: "ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Ottobre 2024",
        importo: "277,00",
    },
    {
        data: "30/11/2024",
        intestatario: "ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Novembre 2024",
        importo: "318,00",
    },
    {
        data: "31/12/2024",
        intestatario: "ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Dicembre 2024",
        importo: "332,00",
    },
    {
        data: "31/01/2025",
        intestatario: "ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Gennaio 2025",
        importo: "347,00",
    },
    {
        data: "28/02/2025",
        intestatario: "ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Febbraio 2025",
        importo: "0,00",
    },
    {
        data: "",
        intestatario: "",
        descrizione: "Totale",
        importo: "",
    },
];
var fattureAcqua = [
    {
        data: "03/12/2024",
        intestatario: "BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 4° periodo 2024",
        importo: "1220,00",
    },
    {
        data: "",
        intestatario: "",
        descrizione: "Totale",
        importo: "",
    },
];
var lavori = [
    {
        descrizione: "Infiltrazioni terrazzo",
        stato: "Approvato",
        dataDelibera: "11/07/2024",
        fornitore: "------",
        preventivo: "2700 €",
        inizioLavori: "------"
    },
    {
        descrizione: "Porta cortile",
        stato: "Approvato",
        dataDelibera: "27/01/2025",
        fornitore: "Lcs Solutions",
        preventivo: "698.50 €",
        inizioLavori: "-----"
    },
    {
        descrizione: "Gancio fermaporte cancelletto",
        stato: "Approvato",
        dataDelibera: "27/01/2025",
        fornitore: "Lcs Solutions",
        preventivo: "132 €",
        inizioLavori: "----"
    },
];
var cosedafare = [
    {
        descrizione: "Fazzoletti giardino",
        stato: "??????",
        note: "----"
    },
    {
        descrizione: "Cartello differenziata",
        stato: "??????",
        note: "----"
    },
    {
        descrizione: "Porta ingresso blocco apertura",
        stato: "??????",
        note: "----"
    },
    {
        descrizione: "Tombino corridoio immondizia",
        stato: "??????",
        note: "----"
    },
    {
        descrizione: "Chiave cavedio",
        stato: "??????",
        note: "----"
    },
];
var manutenzioni = [
    {
        descrizione: "Ascensore",
        societa: "Lombarda ascensori",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Servoscala",
        societa: "Lombarda ascensori",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Spurghi",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "AntiIncendio",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Disinfestazione",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
];
var certificazioni = [
    {
        descrizione: "Cancello carraio",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Messa a terra",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Qualità acqua",
        societa: "",
        periodo: "??????",
        visite: "----"
    },
    {
        descrizione: "Privacy",
        societa: "Genesia",
        periodo: "??????",
        visite: "----"
    },
];
function popolaTabella(Tabella, fatture) {
    var tbody = document.querySelector("#" + Tabella + " tbody");
    var totale = 0;
    var iIndex = 0;
    fatture.forEach(function (fattura) {
        iIndex++;
        var riga = document.createElement("tr");
        var cellaData = document.createElement("td");
        cellaData.textContent = fattura.data;
        var cellaIntestatario = document.createElement("td");
        cellaIntestatario.textContent = fattura.intestatario;
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = fattura.descrizione;
        var cellaImporto = document.createElement("td");
        cellaImporto.textContent = fattura.importo;
        if (iIndex < fatture.length) {
            var Importo = cellaImporto.textContent.replace(/\./g, "");
            Importo = Importo.replace(/\,/g, ".");
            var Value = Number(Importo);
            totale = totale + Value;
        }
        else {
            cellaImporto.textContent = (totale).toString();
            cellaImporto.textContent = cellaImporto.textContent.replace(/\./g, ",");
        }
        riga.appendChild(cellaData);
        riga.appendChild(cellaIntestatario);
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaImporto);
        tbody.appendChild(riga);
    });
}
function popolaTabelle() {
    popolaTabella("tabellaAmministrazione", fattureAmministrazione);
    popolaTabella("tabellaPulizie", fatturePulizie);
    popolaTabella("tabellaRiscaldamento", fattureRiscaldamento);
    popolaTabella("tabellaEnergiaElettrica", fattureEnergiaElettrica);
    popolaTabella("tabellaAcqua", fattureAcqua);
    var tbody = document.querySelector("#tabellaLavori tbody");
    lavori.forEach(function (lavoro) {
        var riga = document.createElement("tr");
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = lavoro.descrizione;
        var cellaStato = document.createElement("td");
        cellaStato.textContent = lavoro.stato;
        var cellaData = document.createElement("td");
        cellaData.textContent = lavoro.dataDelibera;
        var cellaFornitore = document.createElement("td");
        cellaFornitore.textContent = lavoro.fornitore;
        var cellaPreventivo = document.createElement("td");
        cellaPreventivo.textContent = lavoro.preventivo;
        var cellaInizio = document.createElement("td");
        cellaInizio.textContent = lavoro.inizioLavori;
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaStato);
        riga.appendChild(cellaData);
        riga.appendChild(cellaFornitore);
        riga.appendChild(cellaPreventivo);
        riga.appendChild(cellaInizio);
        tbody.appendChild(riga);
    });
    tbody = document.querySelector("#tabellaCoseDaFare tbody");
    cosedafare.forEach(function (cosadafare) {
        var riga = document.createElement("tr");
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = cosadafare.descrizione;
        var cellaStato = document.createElement("td");
        cellaStato.textContent = cosadafare.stato;
        var cellaNote = document.createElement("td");
        cellaNote.textContent = cosadafare.note;
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaStato);
        riga.appendChild(cellaNote);
        tbody.appendChild(riga);
    });
    tbody = document.querySelector("#tabellaManutenzioni tbody");
    manutenzioni.forEach(function (manutenzione) {
        var riga = document.createElement("tr");
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = manutenzione.descrizione;
        var cellaSocieta = document.createElement("td");
        cellaSocieta.textContent = manutenzione.societa;
        var cellaPeriodo = document.createElement("td");
        cellaPeriodo.textContent = manutenzione.periodo;
        var cellaVisite = document.createElement("td");
        cellaVisite.textContent = manutenzione.visite;
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaSocieta);
        riga.appendChild(cellaPeriodo);
        riga.appendChild(cellaVisite);
        tbody.appendChild(riga);
    });
    tbody = document.querySelector("#tabellaCertificazioni tbody");
    certificazioni.forEach(function (certificazione) {
        var riga = document.createElement("tr");
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = certificazione.descrizione;
        var cellaSocieta = document.createElement("td");
        cellaSocieta.textContent = certificazione.societa;
        var cellaPeriodo = document.createElement("td");
        cellaPeriodo.textContent = certificazione.periodo;
        var cellaVisite = document.createElement("td");
        cellaVisite.textContent = certificazione.visite;
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaSocieta);
        riga.appendChild(cellaPeriodo);
        riga.appendChild(cellaVisite);
        tbody.appendChild(riga);
    });
}
document.addEventListener("DOMContentLoaded", popolaTabelle);
