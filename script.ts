interface Fattura{
   data:string;
   intestatario:string;
   descrizione:string;
   importo:string;
   contestata:boolean;
}

interface Lavoro {
    descrizione: string;
    stato: string;
    dataDelibera: string;
    fornitore: string;
    preventivo: string;
    inizioLavori: string;
}

interface CosaDaFare {
    descrizione: string;
    stato: string;
    note: string;
}

interface Manutenzione {
    descrizione: string;
    societa: string;
    periodo: string;
    visite:string;
}

interface Certificazione {
    descrizione: string;
    societa: string;
    periodo: string;
    visite:string;
}

const fattureAmministrazione: Fattura[] = [
    { 
        data:"12/11/2024",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Acconto compenso gestione ordinaria 2024/25",
        importo:"488,00" ,
        contestata:false,
    },
    { 
        data:"31/01/2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Adempimenti fiscali gestione 2024/25",
        importo:"427,00" ,
        contestata:false,
    },
    { 
        data:"31/01/2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Acconto compenso gestione ordinaria 2024/25",
        importo:"610,00" ,
        contestata:false,
    },
   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },
];

const fatturePulizie: Fattura[] = [
    { 
        data:"31/10/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Ottobre",
        importo:"610,00" ,
        contestata:false,
    },
    { 
        data:"30/11/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Novembre",
        importo:"610,00" ,
        contestata:false,
    },
    { 
        data:"31/12/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Dicembre",
        importo:"610,00" ,
        contestata:false,
    }, 
    { 
        data:"31/01/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Gennaio",
        importo:"610,00" ,
        contestata:false,
    },  
   
   { 
        data:"28/02/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Febbraio",
        importo:"610,00" ,
        contestata:false,
    },  

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },
];

const fattureRiscaldamento: Fattura[] = [
    { 
        data:"18/06/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/05/2024 al 31/05/2024",
        importo:"189,90" ,
        contestata:false,
    },
    { 
        data:"17/10/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/06/2024 al 30/09/2024",
        importo:"134,75" ,
       contestata:false,
    },
    { 
        data:"15/11/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/10/2024 al 31/10/2024",
        importo:"788,00",
        contestata:false,
    }, 
    { 
        data:"16/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/11/2024 al 30/11/2024",
        importo:"2800,95" ,
        contestata:false,
    },  
   
 
    { 
        data:"31/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/12/2024 al 31/12/2024",
        importo:"3995,97",
        contestata:false,
    },  
 
   { 
        data:"31/01/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/01/2025 al 31/01/2025",
        importo:"4278,53" ,
        contestata:false,
    },  

    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"",
        contestata:false,
    },
];

const fattureEnergiaElettrica: Fattura[] = [
    { 
        data:"31/10/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Ottobre 2024",
        importo:"277,00" ,
        contestata:false,
    },

    { 
        data:"30/11/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Novembre 2024",
        importo:"318,00" ,
        contestata:false,
    },

    { 
        data:"31/12/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Dicembre 2024",
        importo:"332,00" ,
        contestata:false,
    },

    { 
        data:"31/01/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Gennaio 2025",
        importo:"347,00" ,
        contestata:false,
    },
    { 
        data:"28/02/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Febbraio 2025",
        importo:"0,00" ,
        contestata:false,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },
   
];

const fattureAcqua: Fattura[] = [
    { 
        data:"03/12/2024",
        intestatario:"BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 4° periodo 2024",
        importo:"1220,00" ,
        contestata:false,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },
   
];

const fattureSpeseLegali: Fattura[] = [
   { 
        data:"23/10/2024",
        intestatario:"DOTT. Lorenzo Mauri",
        descrizione: "Verifica ipotecaria catastale/storica C/O Agenzia entrate box sub 103",
        importo:"210,00" ,
        contestata:false,
    },
   
  { 
        data:"23/10/2024",
        intestatario:"DOTT. Lorenzo Mauri",
        descrizione: "Verifica ipotecaria catastale/storica C/O Agenzia entrate box sub 103",
        importo:"522,00" ,
        contestata:false,
    },

    { 
        data:"12/03/2025",
        intestatario:"Avvocato Laura Dameno",
        descrizione: "Assistenza stragiudiziale ricerca e parere box sub 103",
        importo:"779,56" ,
        contestata:false,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" 
,       contestata:false,
    },
   
];

const fattureSpeseStraordinarie: Fattura[] = [
   { 
        data:"01/10/2024",
        intestatario:"Electric Service di Crippa Alessandro",
        descrizione: "Fornitura materiale Fotocellula ad incasso",
        importo:"126,50" ,
        contestata:false,
    },
   
  { 
        data:"01/10/2024",
        intestatario:"FDR Automazioni di Riffaldi Fausto & C S.N.C.",
        descrizione: "Intervento per sistemazione porta trovata bloccata in apertura e rumorosa ",
        importo:"63,60" ,
        contestata:true,
    },

    { 
        data:"9/12/2024",
         intestatario:"Cappelletti servizi ambientali S.R.L.",
        descrizione: "intervento su chiamata per spurgo e lavaggio con pulizia tubazioni di scarico di n. 1 fosse biologiche + n. 1 vasca settica + n. 3 pozzetti + rete cucine + sifone principale con discarica e smaltimento",
        importo:"638,00" ,
        contestata:false,
    },

  { 
        data:"18/11/2024",
        intestatario:"LCS SOLUTIONS S.R.L..",
        descrizione: "Messa in sicurezza Locale pattumiera,e corridoi scita corsello box",
        importo:"533,06" ,
        contestata:false,
    },

{ 
        data:"09/01/2025",
        intestatario:"FERRO CREA  S.N.C. di Limongi Giovanni & c..",
        descrizione:"Intervento per regolazione + spessoramento portone ingresso + regoazione pompa ingresso pedonale",
        importo:"99,00" ,
        contestata:false,
    },

    { 
        data:"27/01/2025",
        intestatario:"REA ELETTRICA Di Crippa Riccardo & Simoni Andrea",
        descrizione:"Sostituzione di 1 pulsante per cancello pedonale, 14-01-25 sost. tubo led scala 1° piano + lampeggiante cancello carraio, 15-01-25 sost. di n. 1 crepuscolare e un rele', 23-01-25 sost. temporizzatore luci scale, 1 lampadina + zona cantinae",
        importo:"671,84" ,
        contestata:true,
    },

   { 
        data:"14/03/2025",
        intestatario:"REA ELETTRICA Di Crippa Riccardo & Simoni Andrea",
        descrizione:"Intervento per sostituzione modulo display pulsantiera videocitofonica",
        importo:"659,00" ,
        contestata:false,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"",
        contestata:false,
    },
   
];

let TotaleGlobale:number=0


const fattureManutenzione:Fattura[]=[
   { 
        data:"29/11/2024",
        intestatario:"SI.AN. LOMBARDIA S.R.L.",
        descrizione: "Manutenzione semestrale novembre 2024:11 estintori kg6 - 1 estintore kg2 - porta tagliafuoco - tenuta registri attrezzature",
        importo:"151,25" ,
        contestata:false,
    },  


   { 
        data:"27/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Novembre 2024",
        importo:"169,80" ,
        contestata:false,
    },  
    { 
        data:"31/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Dicembre 2024",
        importo:"169,80" ,
        contestata:false,
    },  

   { 
        data:"31/01/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Gennaio 2025",
        importo:"172,80" ,
        contestata:false,
    },  

    { 
        data:"28/02/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Febbraio 2025",
        importo:"169,80",
        contestata:false,
    },  

    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },

];

const fattureCertificazioni:Fattura[]=[
   { 
        data:"27/12/2024",
        intestatario:"ICT GENESIA S.R.L.",
        descrizione: "Verifica periodica impianto messa a terra + fornitura di targa regolamentare",
        importo:"303,78" ,
        contestata:false,
    },  


   { 
        data:"30/01/2025",
        intestatario:"G.D. AMBIENTE E SICUREZZA S.R.L.",
        descrizione: "D.P.L. rif Accordo Stato Regioni controllo prevenzione legionellosi",
        importo:"463,60",
        contestata:false,
    },  
    { 
        data:"14/03/2025",
        intestatario:"DALLA GIOVANNA GROUP S.R.L.",
        descrizione: "Incarico per verifica della necessità di realizzazione impianto di protezione contro fulminiai sensi della norma CEI EN 62305 1-2-3-4. Sopralluogo analisi impianti valutazione del rischio e misure di protezione + rilascio relazione totale della struttura",
        importo:"305,00" ,
        contestata:false,
    },  
    { 
        data:"14/03/2025",
        intestatario:"DALLA GIOVANNA GROUP S.R.L.",
        descrizione: "Registro anagrafe sicurezza + sopralluogo tecnico specializzato + analisi riordino dei documenti tecnici presso studio amministrativo",
        importo:"451,40" ,
        contestata:false,
    },      
    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },

];

const totaleFatture:Fattura[]=[
    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false,
    },
];


/*const lavori: Lavoro[] = [
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

const cosedafare: CosaDaFare[] = [
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

const manutenzioni: Manutenzione[] = [
    { 
        descrizione: "Ascensore",
        societa:"Lombarda ascensori" ,
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "Servoscala",
        societa:"Lombarda ascensori", 
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "Spurghi",
        societa:"", 
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "AntiIncendio",
        societa:"", 
        periodo: "??????", 
        visite: "----" 
    },

   { 
        descrizione: "Disinfestazione",
        societa:"",
        periodo: "??????", 
        visite: "----" 
    }, 

];


const certificazioni: Certificazione[] = [
    { 
        descrizione: "Cancello carraio",
        societa:"" ,
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "Messa a terra",
        societa:"", 
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "Qualità acqua",
        societa:"", 
        periodo: "??????", 
        visite: "----" 
    },
    { 
        descrizione: "Privacy",
        societa:"Genesia", 
        periodo: "??????", 
        visite: "----" 
    },

];*/

function AddPuntoMigliaia(numero: string): string {
    // Converto la stringa in numero per il controllo
    const valoreNumerico = parseFloat(numero.replace(',', '.'));

    // Se il valore è inferiore a 1000, restituisco la stringa originale
    if (valoreNumerico < 1000) {
        return numero;
    }

    // Separare la parte intera e decimale
    const parti = numero.split(',');
    let parteIntera = parti[0];
    const parteDecimale = parti.length > 1 ? parti[1] : '';

    // Aggiungere il punto come separatore delle migliaia
    parteIntera = parteIntera.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Ricostruire il numero formattato
    return parteDecimale.length > 0 ? parteIntera + ',' + parteDecimale : parteIntera;
}




function popolaTabella(Tabella:string,fatture:Fattura[]){
let tbody = document.querySelector("#"+Tabella+" tbody")!;
    let totale:number=0
    let iIndex:number=0
    let Colore="black"
    fatture.forEach(fattura=>{
         iIndex++

         if (fattura.contestata){
            Colore="red"
         }else{
            Colore="black"
         }

         const riga = document.createElement("tr");

         const cellaData = document.createElement("td");
         cellaData.textContent = fattura.data;
         cellaData.style.color=Colore;
     
         const cellaIntestatario = document.createElement("td");
         cellaIntestatario.textContent = fattura.intestatario;
         cellaIntestatario.style.color=Colore;
         cellaIntestatario.style.color=Colore;

         const cellaDescrizione = document.createElement("td");
         cellaDescrizione.textContent = fattura.descrizione;
         cellaDescrizione.style.color=Colore;
    
         const cellaImporto = document.createElement("td");
         cellaImporto.style.textAlign="right"; 
         cellaImporto.textContent = fattura.importo;
         cellaImporto.style.color=Colore;
         if(iIndex<fatture.length){
            let Importo:string=cellaImporto.textContent.replace(/\./g,"")
            Importo=Importo.replace(/\,/g,".")
            const Value:number=Number(Importo)
            totale=totale+Value
         }else {
            cellaDescrizione.style.textAlign="right"; 
            TotaleGlobale=TotaleGlobale+totale
            cellaImporto.textContent=(totale).toFixed(2)
            cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
            if(cellaImporto.textContent.indexOf(",")===-1){
               cellaImporto.textContent=cellaImporto.textContent+",00"
            }
         }
        cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
        riga.appendChild(cellaData);
        riga.appendChild(cellaIntestatario);
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaImporto);

        tbody.appendChild(riga);

    });
}

function popolaTabelle(): void {
    popolaTabella("tabellaAmministrazione",fattureAmministrazione)   
    popolaTabella("tabellaPulizie",fatturePulizie)   
    popolaTabella("tabellaRiscaldamento",fattureRiscaldamento)   
    popolaTabella("tabellaEnergiaElettrica",fattureEnergiaElettrica)   
    popolaTabella("tabellaAcqua",fattureAcqua)   
    popolaTabella("tabellaSpeseLegali",fattureSpeseLegali)  
    popolaTabella("tabellaManutenzioni",fattureManutenzione)  
    popolaTabella("tabellaCertificazioni",fattureCertificazioni)  
    popolaTabella("tabellaSpeseStraordinarie",fattureSpeseStraordinarie)  
    let tbody = document.querySelector("#tabellaTotale tbody")!;
    const riga = document.createElement("tr");
    const cellaData = document.createElement("td");
    cellaData.textContent = "23/03/2025";
    const cellaIntestatario = document.createElement("td");
    cellaIntestatario.textContent = "Fatture condominio";
    const cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Gestione 2024/2025";
    const cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 

    cellaImporto.textContent=TotaleGlobale.toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);

    tbody.appendChild(riga);

  
 /*   let tbody = document.querySelector("#tabellaLavori tbody")!;
    
    lavori.forEach(lavoro => {
        const riga = document.createElement("tr");

        const cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = lavoro.descrizione;

        const cellaStato = document.createElement("td");
        cellaStato.textContent = lavoro.stato;

        const cellaData = document.createElement("td");
        cellaData.textContent = lavoro.dataDelibera;

        const cellaFornitore = document.createElement("td");
        cellaFornitore.textContent = lavoro.fornitore;

        const cellaPreventivo = document.createElement("td");
        cellaPreventivo.textContent = lavoro.preventivo;

        const cellaInizio = document.createElement("td");
        cellaInizio.textContent = lavoro.inizioLavori;

        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaStato);
        riga.appendChild(cellaData);
        riga.appendChild(cellaFornitore);
        riga.appendChild(cellaPreventivo);
        riga.appendChild(cellaInizio);

        tbody.appendChild(riga);
    });

    tbody = document.querySelector("#tabellaCoseDaFare tbody")!;
    
    cosedafare.forEach(cosadafare => {
        const riga = document.createElement("tr");

        const cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = cosadafare.descrizione;

        const cellaStato = document.createElement("td");
        cellaStato.textContent = cosadafare.stato;

        const cellaNote = document.createElement("td");
        cellaNote.textContent = cosadafare.note;

     
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaStato);
        riga.appendChild(cellaNote);

        tbody.appendChild(riga);
    });
   tbody = document.querySelector("#tabellaManutenzioni tbody")!;
    
   manutenzioni.forEach(manutenzione => {
        const riga = document.createElement("tr");

        const cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = manutenzione.descrizione;

        const cellaSocieta = document.createElement("td");
        cellaSocieta.textContent = manutenzione.societa;

        const cellaPeriodo = document.createElement("td");
        cellaPeriodo.textContent = manutenzione.periodo;

        const cellaVisite = document.createElement("td");
        cellaVisite.textContent = manutenzione.visite;    

        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaSocieta);
        riga.appendChild(cellaPeriodo);
        riga.appendChild(cellaVisite);

        tbody.appendChild(riga);
    });

 tbody = document.querySelector("#tabellaCertificazioni tbody")!;
    
   certificazioni.forEach(certificazione => {
        const riga = document.createElement("tr");

        const cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = certificazione.descrizione;

        const cellaSocieta = document.createElement("td");
        cellaSocieta.textContent = certificazione.societa;

        const cellaPeriodo = document.createElement("td");
        cellaPeriodo.textContent = certificazione.periodo;

        const cellaVisite = document.createElement("td");
        cellaVisite.textContent = certificazione.visite;    

        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaSocieta);
        riga.appendChild(cellaPeriodo);
        riga.appendChild(cellaVisite);

        tbody.appendChild(riga);
    });*/


}






document.addEventListener("DOMContentLoaded", popolaTabelle);
