interface Fattura{
   data:string;
   intestatario:string;
   descrizione:string;
   importo:string;
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
        importo:"488,01" ,
    },
    { 
        data:"31/01/2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Adempimenti fiscali gestione 2024/25",
        importo:"427,22" ,
    },
    { 
        data:"31/01/2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Acconto compenso gestione ordinaria 2024/25",
        importo:"610,00" ,
    },
   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];

const fatturePulizie: Fattura[] = [
    { 
        data:"31/10/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Ottobre",
        importo:"610,00" ,
    },
    { 
        data:"30/11/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Novembre",
        importo:"610,00" ,
    },
    { 
        data:"31/12/2024",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Dicembre",
        importo:"610,00" ,
    }, 
    { 
        data:"31/01/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Gennaio",
        importo:"610,00" ,
    },  
   
   { 
        data:"28/02/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Febbraio",
        importo:"610,00" ,
    },  

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];

const fattureRiscaldamento: Fattura[] = [
    { 
        data:"18/06/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/05/2024 al 31/05/2024",
        importo:"189,90" ,
    },
    { 
        data:"17/10/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/06/2024 al 30/09/2024",
        importo:"134,75" ,
    },
    { 
        data:"15/11/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/10/2024 al 31/10/2024",
        importo:"788,00" ,
    }, 
    { 
        data:"16/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/11/2024 al 30/11/2024",
        importo:"2800,95" ,
    },  
   
   { 
        data:"27/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Novembre 2024",
        importo:"169,80" ,
    },  
    { 
        data:"31/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Dicembre 2024",
        importo:"169,80" ,
    },  
    { 
        data:"31/12/2024",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/12/2024 al 31/12/2024",
        importo:"3995,97",
    },  
    { 
        data:"31/01/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Gennaio 2025",
        importo:"172,80" ,
    },  


   { 
        data:"31/01/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/01/2025 al 31/01/2025",
        importo:"4278,53" ,
    },  

 { 
        data:"28/02/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Febbraio 2025",
        importo:"169,80",
    },  


   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"",
    },
];

const fattureEnergiaElettrica: Fattura[] = [
    { 
        data:"31/10/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Ottobre 2024",
        importo:"277,00" ,
    },

    { 
        data:"30/11/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Novembre 2024",
        importo:"318,00" ,
    },

    { 
        data:"31/12/2024",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Dicembre 2024",
        importo:"332,00" ,
    },

    { 
        data:"31/01/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Gennaio 2025",
        importo:"347,00" ,
    },
    { 
        data:"28/02/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Febbraio 2025",
        importo:"0,00" ,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
   
];

const fattureAcqua: Fattura[] = [
    { 
        data:"03/12/2024",
        intestatario:"BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 4° periodo 2024",
        importo:"1220,00" ,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
   
];


const lavori: Lavoro[] = [
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

];

function popolaTabella(Tabella:string,fatture:Fattura[]){
let tbody = document.querySelector("#"+Tabella+" tbody")!;
    let totale:number=0
    let iIndex:number=0
    fatture.forEach(fattura=>{
         iIndex++
         const riga = document.createElement("tr");

         const cellaData = document.createElement("td");
         cellaData.textContent = fattura.data;
     
         const cellaIntestatario = document.createElement("td");
         cellaIntestatario.textContent = fattura.intestatario;

         const cellaDescrizione = document.createElement("td");
         cellaDescrizione.textContent = fattura.descrizione;
    
         const cellaImporto = document.createElement("td");
         cellaImporto.textContent = fattura.importo;
         if(iIndex<fatture.length){
            let Importo:string=cellaImporto.textContent.replace(/\./g,"")
            Importo=Importo.replace(/\,/g,".")
            const Value:number=Number(Importo)
            totale=totale+Value
         }else {
            cellaImporto.textContent=(totale).toString()
            cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
            
         }

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


  
    let tbody = document.querySelector("#tabellaLavori tbody")!;
    
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
    });


}






document.addEventListener("DOMContentLoaded", popolaTabelle);
