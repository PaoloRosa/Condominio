interface Fattura{
   data:string;
   intestatario:string;
   descrizione:string;
   importo:string;
   contestata:boolean;
}
interface Previsione{
   data:string;
   intestatario:string;
   descrizione:string;
   importo:string;
}

interface Movimento{
   data:string;
   descrizione:string;
   cifra:string;
   esercizioPrecedente:boolean;
   evidenzia:number;
}

let TotaleGlobale:number=0
let numeroFatture:number=0;
let TotaleGlobalePrevisione:number=0;
let PreventivoApprovato:number=53761.00;

let TotaleFlussoDiCassa:number=13160.41;
const oggi=new Date()


var movimentiOttobre:Movimento[]=[
{
  data:"Inizio esercizio",
  descrizione:"Saldo",
  cifra:"0",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"01/10/2024",
  descrizione:"Imposta di bollo 01/07/2024 - 01/10/2024",
  cifra:"-25,14",
  esercizioPrecedente:true,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Versamento rate condominiali",
  cifra:"2061.06",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Fattura A Cinque Tecnologie (?????)",
  cifra:"-767,00",
  esercizioPrecedente:true,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"02/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"2215.78",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"03/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"656.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"04/10/2024",
  descrizione:"3 Fatture Nuova Sfinge",
  cifra:"-1770.00",
  esercizioPrecedente:true,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"07/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"593.35",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"09/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"429.88",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"16/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"2024.25",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"F24 imposte (????)",
  cifra:"-106.60",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"18/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"15.43",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"24/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"300.61",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"29/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"364.02",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"31/10/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"2068.54",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura SI.AN 513FE 30/05/2024",
  cifra:"-219.95",
  esercizioPrecedente:true,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.60",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Fattura Brianzacque del 19/07/2024",
  cifra:"-532.00",
  esercizioPrecedente:true,
  evidenzia:0,
},

{
  data:"VEDERE 07/11",
  descrizione:"Fattura esa energie PAGAMENTO ERRATO",
  cifra:"-718.00",
  esercizioPrecedente:true,
  evidenzia:1,
},

{
  data:"",
  descrizione:"Fattura Nuova Sfinge",
  cifra:"-590.00",
  esercizioPrecedente:true,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

]

var movimentiNovembre:Movimento[]=[
{
  data:"04/11/2024",
  descrizione:"Pagamento Fattura portoncino FDR",
  cifra:"-6083.00",
  esercizioPrecedente:true,
  evidenzia:0,
},
{
  data:"05/11/2024",
  descrizione:"Fattura Lorenzo Mauri",
  cifra:"-522,00",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"05/11/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"966,02",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura BiElettrica di Besana Simone del 30/09/2024",
  cifra:"-121,90",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"06/11/2024",
  descrizione:"Versament0 rate condominiali",
  cifra:"1602,24",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"07/11/2024",
  descrizione:"Versament0 rate condominiali",
  cifra:"429,88",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"VEDERE 31/10",
  descrizione:"STORNO ESA ENERGIA PAGAMENTO ERRATO",
  cifra:"718,00",
  esercizioPrecedente:false,
  evidenzia:1,
},
{
  data:"08/11/2024",
  descrizione:"Versament0 rate condominiali",
  cifra:"554,16",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Pagamento utenze varie  ???",
  cifra:"-250.00",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissioni",
  cifra:"-2.85",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura ESA Energie (???)",
  cifra:"-468.00",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"14/11/2024",
  descrizione:"Fattura Studio Berti (???)",
  cifra:"-671.00",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.60",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"18/11/2024",
  descrizione:"Versament0 rate condominiali",
  cifra:"350,90",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"19/11/2024",
  descrizione:"Pagamento telematico imposte (TOSAP)",
  cifra:"-88.30",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"20/11/2024",
  descrizione:"Pagamento fattura Brianzacque (28/10/2024)",
  cifra:"-887.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"21/11/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"656,00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Gestirsi srl (07/07/2024)",
  cifra:"-66.67",
  esercizioPrecedente:true,
  evidenzia:0,
},


{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},


{
  data:"26/11/2024",
  descrizione:"Fattura ESA Energie (31/10/2024)",
  cifra:"-277.00",
  esercizioPrecedente:false,
  evidenzia:0,
},


{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"28/11/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"500,00",
  esercizioPrecedente:false,
  evidenzia:0,
},

]

var movimentiDicembre:Movimento[]=[
{
  data:"02/12/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"1738.66",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"04/12/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"474.04",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"19/12/2024",
  descrizione:"Pagamento telematico imposte",
  cifra:"-6.86",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"24/12/2024",
  descrizione:"Versamento rate condominiali",
  cifra:"534.79",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"31/12/2024",
  descrizione:"int e comp",
  cifra:"-21.95",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Versamento rate condominiali",
  cifra:"500.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

]

var movimentiGennaio:Movimento[]=[
{
  data:"03/01/2025",
  descrizione:"Imposta di bollo 01/10/2024 - 31/12/2024",
  cifra:"-25.14",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"08/01/2025",
  descrizione:"Fattura Zeccca Grignani assicurazione (non presente su Mio Condominio)",
  cifra:"-1550.05",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"10/01/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"429.88",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"13/01/2025",
  descrizione:"Fattura Lorenzo Mauri (23/10/2024)",
  cifra:"-210.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"14/01/2025",
  descrizione:"Fattura LCS Solutions (18/11/2024)",
  cifra:"-513.68",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"15/01/2025",
  descrizione:"Fatture ACinque Tecnologia (17/10/2024 e 15/11/2024)",
  cifra:"-922.75",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Pagamento telematico imposte",
  cifra:"-260.00",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Pagamento telematico imposte",
  cifra:"-252.00",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"17/01/2025",
  descrizione:"Fattura Ict Genesia (???)",
  cifra:"-370.52",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"22/01/2025",
  descrizione:"Fattura mb1 Service (Non presente su Mio Condominio)",
  cifra:"-28.37",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.60",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"27/01/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"491.98",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"30/01/2025",
  descrizione:"Fattura DelBo (Non presente su Mio Condominio)",
  cifra:"-1331.32",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"31/01/2025",
  descrizione:"Fatture Studio Berti (2 Fatture 31/01/2025 427,00 e 610,00)",
  cifra:"-1037.00",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.60",
  esercizioPrecedente:false,
  evidenzia:0,
},
]
var movimentiFebbraio:Movimento[]=[
{
  data:"03/01/2025",
  descrizione:"Fattura Ferro Crea snc N.17-2025-FE del (16/01/2025)" ,
  cifra:"-95.40",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Rea Elettrica snc N.60 del (27/01/2025)" ,
  cifra:"-648.16",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"04/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"474.04",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Parrocchia San Biagio Affitto sala riunione 27/01/2025",
  cifra:"-120.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"05/02/2025",
  descrizione:"Invictus ",
  cifra:"-20.05",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"10/02/2025",
  descrizione:"Fattura SI.AN. Lombardia (non presente su Mio Condominio)",
  cifra:"-145.75",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"12/02/2025",
  descrizione:"Fattura Cappelletti N.1268 (30/11/2024)",
  cifra:"-614.80",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"13/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"1462.01",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"17/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"477.77",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"18/02/2025",
  descrizione:"Pagamento telematico imposte",
  cifra:"-84.56",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"19/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"51.35",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"21/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"300.74",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"24/02/2025",
  descrizione:"Addebito diretto",
  cifra:"-59.20",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"25/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"500.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Acinque Tecnologie (16/12/2024)",
  cifra:"-2800.95",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"26/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"431.64",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"27/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"530.05",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"28/02/2025",
  descrizione:"Versamento rate condominiali",
  cifra:"1400.06",
  esercizioPrecedente:false,
  evidenzia:0,
},
]

var movimentiMarzo:Movimento[]=[
{
  data:"03/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"1879,58",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"04/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"545,45",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"06/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"423,28",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Addebito diretto Invictus",
  cifra:"-25.90",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"10/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"1050.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"13/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"745.06",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Studio Berti (???)",
  cifra:"-488.00",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.60",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Avvocato Laura Dameno(12/03/2025)",
  cifra:"-664.56",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"15/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"390.63",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"18/03/2025",
  descrizione:"Pagamento telematico imposte" ,
  cifra:"-55.98",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"25/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"455.20",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"26/03/2025",
  descrizione:"Fattura Rea Elettrica N.146 (14/03/2025)",
  cifra:"-637.00",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"28/03/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"441.33",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"BiElettrica di Besana Simone (Non Risulta in Mio Condominio)",
  cifra:"-74.20",
  esercizioPrecedente:false,
  evidenzia:2,
},

{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
]
var movimentiAprile:Movimento[]=[
{
  data:"01/04/2025",
  descrizione:"int e comp" ,
  cifra:"-22.90",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"imposta di bollo (01/01/2025 - 31/03/2025)" ,
  cifra:"-24.96",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Ferro Crea n. 99-2025-FE (27/03/2025)" ,
  cifra:"-100.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"04/04/2025",
  descrizione:"Addebito diretto",
  cifra:"-6.30",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Versamento rate condominiali" ,
  cifra:"378.78",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"09/09/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"946.22",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"10/04/2025",
  descrizione:"Fattura LCS Solutions srl n.208/A del 2/04/2023" ,
  cifra:"-398.30",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"15/04/2025",
  descrizione:"Fattura FDR " ,
  cifra:"-63.60",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"17/04/2025",
  descrizione:"Pagamento telematico",
  cifra:"-143.60",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"18/04/2025",
  descrizione:"Fattura GD Ambiente e sicurezza n.195/2025 del 31/01/2025" ,
  cifra:"-448.40",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"23/04/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"667.84",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"28/04/2025",
  descrizione:"Fattura ESA Energie" ,
  cifra:"-1586.00",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},

{
  data:"",
  descrizione:"Fattura Brianzacque" ,
  cifra:"-1220.00",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"4 Fatture Nuova Sfinge" ,
  cifra:"-2360.00",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Fattura ACinque Tecnologie" ,
  cifra:"-3995.07",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Fattura ACinque Tecnologie" ,
  cifra:"-4278.53",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"",
  descrizione:"Fattura ACinque Innovazione" ,
  cifra:"-870.70",
  esercizioPrecedente:false,
  evidenzia:2,
},
{
  data:"",
  descrizione:"Commissione su bonifici",
  cifra:"-0.70",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"29/04/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"84.59",
  esercizioPrecedente:false,
  evidenzia:0,
},
{
  data:"30/04/2025",
  descrizione:"Versamento rate condominiali" ,
  cifra:"1529.41",
  esercizioPrecedente:false,
  evidenzia:0,
},













]


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

const previsioniAmministrazione: Previsione[] = [
    { 
        data:"? 2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Saldo compenso gestione ordinaria 2024/25",
        importo:"1708,00" ,
    },
    { 
        data:"? 2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Cancelleria",
        importo:"122,00" ,
    },
    { 
        data:"? 2025",
        intestatario:"Studio Berti S.A.S. di Berti Luca & C",
        descrizione: "Applicazione decreto legge 81/08",
        importo:"366,00" ,
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
        data:"31/03/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Marzo",
        importo:"610,00" ,
        contestata:false,
    },

   { 
        data:"30/04/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Aprile",
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

const previsioniPulizie: Previsione[] = [

    { 
        data:"31/05/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Maggio",
        importo:"610,00" ,
    }, 
    { 
        data:"30/06/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Giugno",
        importo:"610,00" ,
    },  
   
   { 
        data:"31/07/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Luglio",
        importo:"610,00" ,
    },  

  { 
        data:"31/08/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Agosto",
        importo:"610,00" ,
    },  

  {  
        data:"30/09/2025",
        intestatario:"NUOVA SFINGE DI ABDELKADER MOHAMAD",
        descrizione: "Servizio di pulizia mese di Settembre",
        importo:"610,00" ,
    },  

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];

const fattureDisinfestazioni: Fattura[] = [
    { 
        data:"??/??/2025",
        intestatario:"AG Disinfestazione S.a.s.",
        descrizione: "Disinfestazione 2025",
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

const previsioniDisinfestazioni: Previsione[] = [
    { 
        data:"??/??/2025",
        intestatario:"AG Disinfestazione S.a.s.",
        descrizione: "Disinfestazione 2025",
        importo:"244,00" ,
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
        data:"28/02/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/02/2025 al 28/02/2025",
        importo:"3508,24" ,
        contestata:false,
    },  

    { 
        data:"31/03/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/03/2025 al 31/03/2025",
        importo:"2372,59" ,
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

const previsioniRiscaldamento: Previsione[] = [

    { 
        data:"30/04/2025",
        intestatario:"A CINQUE TECNOLOGIA S.P.A.",
        descrizione: "teleriscaldamento dal 1/04/2025 al 30/04/2025",
        importo:"750,00" ,
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
        importo:"300,00" ,
        contestata:false,
    },

   { 
        data:"31/03/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Marzo 2025",
        importo:"289,00" ,
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

const previsioniEnergiaElettrica: Previsione[] = [
 
    { 
        data:"30/04/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Aprile 2025",
        importo:"262,00" ,
    },

   { 
        data:"31/05/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Maggio 2025",
        importo:"273,00" ,
    },
  { 
        data:"30/06/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Giugno 2025",
        importo:"245,00" ,
    },

   { 
        data:"31/07/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Luglio 2025",
        importo:"271,00" ,
    },
   { 
        data:"31/08/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Agosto 2025",
        importo:"267,00" ,
    },

   { 
        data:"30/09/2025",
        intestatario:"ESA Energie S.P.A.",
        descrizione: "Fornitura energia elettrica Periodo Settembre 2025",
        importo:"307,00" ,
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
        contestata:false,
    },
{ 
        data:"26/03/2025",
        intestatario:"BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 1° periodo 2025",
        importo:"1265,00" ,
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

const previsioniAcqua: Previsione[] = [
 

{ 
        data:"??/06/2025",
        intestatario:"BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 2° periodo 2025",
        importo:"1200,00" ,
    },
{ 
        data:"??/09/2025",
        intestatario:"BRIANZACQUE S.r.l.",
        descrizione: "Fornitura acqua potabile 3° periodo 2025",
        importo:"1200,00" ,
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,

    },
   
];

const previsioniSpeseLegali: Previsione[] = [
    { 
        data:"??/??/2025",
        intestatario:"-----------",
        descrizione: "------------",
        importo:"0,00" 
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,

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
        data:"27/03/2025",
        intestatario:"FERRO CREA  S.N.C. di Limongi Giovanni & c..",
        descrizione:"Sistemazione cilindro con pulizia + lubrificazione",
        importo:"100,70" ,
        contestata:false,
    },

    { 
        data:"02/04/2025",
        intestatario:"LCS Solutions",
        descrizione: "Intervento con opere di messa in sicurezza crepe scivolo box",
        importo:"413,33" ,
        contestata:false,
    },

    { 
        data:"09/05/2025",
        intestatario:"LCS Solutions",
        descrizione: "Prev 424 Gancio cancelletto",
        importo:"132,00" ,
        contestata:false,
    },

    { 
        data:"09/05/2025",
        intestatario:"LCS Solutions",
        descrizione: "Prev 243 Infiltrazioni terrazzo",
        importo:"4089,69" ,
        contestata:true,
    },
   { 
        data:"09/05/2025",
        intestatario:"LCS Solutions",
        descrizione: "Prev 426 Porta box",
        importo:"698,50" ,
        contestata:false,
    },

  { 
        data:"09/05/2025",
        intestatario:"LCS Solutions",
        descrizione: "Pulizia canale",
        importo:"495,00" ,
        contestata:true,
    },

 { 
        data:"09/05/2025",
        intestatario:"LCS Solutions",
        descrizione: "Rifacimento tombino corridoio box",
        importo:"318,65" ,
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

const previsioniSpeseStraordinarie: Previsione[] = [
   
   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"",
    },   
];


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
        intestatario:"A CINQUE INNOVAZIONE S.R.L.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Novembre 2024",
        importo:"169,80" ,
        contestata:false,
    },  
    { 
        data:"31/12/2024",
        intestatario:"A CINQUE INNOVAZIONE S.R.L.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Dicembre 2024",
        importo:"169,80" ,
        contestata:false,
    },  

   { 
        data:"31/01/2025",
        intestatario:"A CINQUE INNOVAZIONE S.R.L.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Gennaio 2025",
        importo:"172,80" ,
        contestata:false,
    },  

    { 
        data:"28/02/2025",
        intestatario:"A CINQUE INNOVAZIONE S.R.L.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Febbraio 2025",
        importo:"169,80",
        contestata:false,
    },  

 { 
        data:"31/03/2025",
        intestatario:"A CINQUE INNOVAZIONE S.R.I.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Marzo 2025",
        importo:"172,80",
        contestata:false,
    },  

{ 
        data:"05/04/2025",
        intestatario:"FDR",
        descrizione: "Intervento ",
        importo:"63,80",
        contestata:true,
    },  



{ 
        data:"17/04/2025",
        intestatario:"A CINQUE INNOVAZIONE S.R.I.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Aprile 2025",
        importo:"169,75",
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

const previsioniCertificazione:Previsione[]=[
   { 
        data:"??/??/2025",
        intestatario:"????????????",
        descrizione: "Assistenza all'ingegnere dell'ente verificatore per la verifica periodica dell'impianto.",
        importo:"99,00" ,
    },  
    { 
        data:"??/??/2025",
        intestatario:"Gestirsi R.R.L.",
        descrizione: "Aggiornamento contratto di riferimento",
        importo:"68,93" ,
    },  

   { 
        data:"??/??/2025",
        intestatario:"ICT GENESIA S.R.L.",
        descrizione:"verifiche adeguamento alle disposizioni obbligatorie in materia di privacy",
        importo:"79,30" ,
    },  

    { 
        data:"??/??/2025",
        intestatario:"DELLA GIOVANNA GROUP S.R.L.",
        descrizione: "Gestione pratica Curit",
        importo:"98,82",
    },  

    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },

];




const previsioniManutenzione:Previsione[]=[
   { 
        data:"??/??/2024",
        intestatario:"SI.AN. LOMBARDIA S.R.L.",
        descrizione: "Manutenzione semestrale novembre Maggio ",
        importo:"500,00" ,
    },  
  
   
   { 
        data:"??/??/2025",
        intestatario:"A CINQUE INNOVAZIONE S.R.L.",
        descrizione: "Conduzione e manutenzione impianto termico 2024/25 periodo Maggio 2025",
        importo:"549,80" ,
    },  

    { 
        data:"??/??/2025",
        intestatario:"Del Bo",
        descrizione: "Canone semestrale Servoscala",
        importo:"141,47",
    },  

   { 
        data:"??/??/2025",
        intestatario:"Del Bo",
        descrizione: "Canone semestrale Servoscala",
        importo:"141,47",
    },  


   { 
        data:"??/??/2025",
        intestatario:"Lombarda Ascensori",
        descrizione: "Canone semestrale Ascensore",
        importo:"318,30",
    },  

    { 
        data:"??/??/2025",
        intestatario:"Lombarda Ascensori",
        descrizione: "Canone semestrale Ascensore",
        importo:"318,30",
    },  

    { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },

];


const fattureCertificazioni:Fattura[]=[
   { 
        data:"27/12/2024",
        intestatario:"ICT GENESIA S.R.L.",
        descrizione: "Verifica periodica impianto messa a terra + fornitura di targa regolamentare",
        importo:"292,80" ,
        contestata:false,
    },  
   { 
        data:"22/01/2025",
        intestatario:"ICT GENESIA S.R.L.",
        descrizione: "Analisi acque in base al decreto legislativo 23 febbraio 2023, n. 18 allegato 1 analisi effettute da laboratorio accreditato da accredia com laboratorio di prova secondo la norma UNI CEI En ISO/IEC 17025",
        importo:"303,78" ,
        contestata:false,
    },  

   { 
        data:"30/01/2025",
        intestatario:"G.D. AMBIENTE E SICUREZZA S.R.L.",
        descrizione: "D.P.L. così come previsto ai sensi dell'accordo del 7/05/2015 stato-regioni-provincie autonome sul documento delle linee guida pre la prevenzione e controllo della legionellosi",
        importo:"463,60",
        contestata:false,
    },  
    { 
        data:"14/03/2025",
        intestatario:"DALLA GIOVANNA GROUP S.R.L.",
        descrizione: "Incarico per verifica della necessità di realizzazione impianto di protezione contro fulmini ai sensi della norma CEI EN 62305 1-2-3-4. Sopralluogo analisi impianti valutazione del rischio e misure di protezione + rilascio relazione totale della struttura",
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
        data:"10/04/2025",
        intestatario:"DALLA GIOVANNA GROUP S.R.L.",
        descrizione: " FATTURA 2600 Verifica sicurezza impianto. Prove di intervento congegni fine corsa. Verifica di sicurezza cabina e controllo regolarità messa a terra sul quadro di manovra e su ogni porta dei piani dei contatti di sicurezza",
        importo:"66,00" ,
        contestata:false,
    },  
    { 
        data:"10/04/2025",
        intestatario:"DALLA GIOVANNA GROUP S.R.L.",
        descrizione: " FATTURA 2601 Verifica sicurezza impianto. Prove di intervento congegni fine corsa. Verifica di sicurezza cabina e controllo regolarità messa a terra sul quadro di manovra e su ogni porta dei piani dei contatti di sicurezza",
        importo:"66,00" ,
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
const previsioniAssicurazione: Previsione[] = [

    { 
        data:"??/??/2025",
        intestatario:"ZECCA GRIGNANI S.R.L. - Ag. REALE MUTUA", 
        descrizione: "Polizza globale fabbricati dal 01/07/2025 al 31/12/2025",
        importo:"1550,05",
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];
const fattureAssicurazione: Fattura[] =[

    { 
        data:"08/01/2025",
        intestatario:"ZECCA GRIGNANI S.R.L. - Ag. REALE MUTUA", 
        descrizione: "Polizza globale fabbricati dal 01/07/2025 al 31/12/2025",
        importo:"1550,05" ,
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

const previsioniVarie: Previsione[] = [
    { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "TOSAP Tassa occupazione aree pubbliche",
        importo:"88,00",
    },
 { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "IMU saldo 2024",
        importo:"247,00" ,
    },
   { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "IMU acconto 2025",
        importo:"260,00" ,
    },

    { 
        data:"??/??/2025",
        intestatario:"Banca popolare di Milano", 
        descrizione: "Gestione conto corrente bancario",
        importo:"120,00",
    },

   { 
        data:"??/??/2025",
        intestatario:"Parrocchia San Biagio", 
        descrizione: "Affitto sala n°1 assemblea ordinaria n°1 assemblea straordinaria",
        importo:"240,00",
    },
 { 
        data:"??/??/2025",
        intestatario:"varie", 
        descrizione: "Spese postali",
        importo:"80,00",
       
    },



   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];
const fattureVarie: Fattura[] = [
    { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "TOSAP Tassa occupazione aree pubbliche",
        importo:"0,00" ,
        contestata:false,
    },

    { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "IMU saldo 2024",
        importo:"0,00" ,
        contestata:false,
    },
   { 
        data:"??/??/2025",
        intestatario:"Comune di Monza", 
        descrizione: "IMU acconto 2025",
        importo:"0,00",
        contestata:false,
    },

    { 
        data:"??/??/2025",
        intestatario:"Banca popolare di Milano", 
        descrizione: "Gestione conto corrente bancario",
        importo:"0,00" ,
        contestata:false,
    },
   { 
        data:"??/??/2025",
        intestatario:"Parrocchia San Biagio", 
        descrizione: "Affitto sala n°1 assemblea ordinaria n°1 assemblea straordinaria",
        importo:"0,00",
        contestata:false,
    },

  { 
        data:"??/??/2025",
        intestatario:"varie", 
        descrizione: "Spese postali",
        importo:"0,00",
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


const previsioniGiardino: Previsione[] = [
   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
    },
];
const fattureGiardino: Fattura[] = [
    { 
        data:"17/04/2025",
        intestatario:"Colombo Mirko", 
        descrizione: "Saldo manutenzione ordinaria 2025",
        importo:"642,00",
        contestata:false
    },

   { 
        data:"",
        intestatario:"",
        descrizione: "Totale",
        importo:"" ,
        contestata:false
    },
   
];

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

function popolaPrevisione(Tabella:string,previsioni:Previsione[]){
let tbody = document.querySelector("#"+Tabella+" tbody")!;
    let totalePrevisione:number=0
    let iIndex:number=0
    let Colore="blue"
    previsioni.forEach(previsione=>{
         iIndex++

         const riga = document.createElement("tr");

         const cellaData = document.createElement("td");
         cellaData.textContent = previsione.data;
         cellaData.style.color=Colore;
     
         const cellaIntestatario = document.createElement("td");
         cellaIntestatario.textContent = previsione.intestatario;
         cellaIntestatario.style.color=Colore;

         const cellaDescrizione = document.createElement("td");
         cellaDescrizione.textContent = previsione.descrizione;
         cellaDescrizione.style.color=Colore;
    
         const cellaImporto = document.createElement("td");
         cellaImporto.style.textAlign="right"; 
         cellaImporto.textContent = previsione.importo;
         cellaImporto.style.color=Colore;
         if(iIndex<previsioni.length){
            let Importo:string=cellaImporto.textContent.replace(/\./g,"")
            Importo=Importo.replace(/\,/g,".")
            const Value:number=Number(Importo)
            totalePrevisione=totalePrevisione+Value
         }else {
            cellaDescrizione.style.textAlign="right"; 
            TotaleGlobalePrevisione=TotaleGlobalePrevisione+totalePrevisione
            cellaImporto.textContent=(totalePrevisione).toFixed(2)
            cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
            if(cellaImporto.textContent.indexOf(",")===-1){
               cellaImporto.textContent=cellaImporto.textContent+",00"
            }
         }
        cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
        cellaImporto.style.width="8%"; 
        riga.appendChild(cellaData);
        riga.appendChild(cellaIntestatario);
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaImporto);

        tbody.appendChild(riga);

    });
}


function popolaConsuntivo(Tabella:string,fatture:Fattura[]){
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
            if(Value>0){
               numeroFatture++;
            }
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
        cellaImporto.style.width="8%"; 
        riga.appendChild(cellaData);
        riga.appendChild(cellaIntestatario);
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaImporto);

        tbody.appendChild(riga);

    });
}

function Preventivo():void{
// Tabella previsioni

    popolaPrevisione("tabellaPrevisioneAmministrazione",previsioniAmministrazione)
    popolaPrevisione("tabellaPrevisionePulizie",previsioniPulizie)
    popolaPrevisione("tabellaPrevisioneAssicurazione",previsioniAssicurazione)  
    popolaPrevisione("tabellaPrevisioneRiscaldamento",previsioniRiscaldamento)
    popolaPrevisione("tabellaPrevisioneEnergiaElettrica",previsioniEnergiaElettrica)
    popolaPrevisione("tabellaPrevisioneAcqua",previsioniAcqua)
    popolaPrevisione("tabellaPrevisioneSpeseLegali",previsioniSpeseLegali)
    popolaPrevisione("tabellaPrevisioneSpeseStrordinarie",previsioniSpeseStraordinarie)
    popolaPrevisione("tabellaPrevisioneManutenzioni",previsioniManutenzione)
    popolaPrevisione("tabellaPrevisioneCertificazioni",previsioniCertificazione)
    popolaPrevisione("tabellaPrevisioniDisinfestazioni",previsioniDisinfestazioni)

    popolaPrevisione("tabellaPrevisioniGiardino",previsioniGiardino)
    popolaPrevisione("tabellaPrevisioniVarie",previsioniVarie)

// Totale Previsione
    let tbody = document.querySelector("#tabellaTotalePrevisione tbody")!;
    let riga = document.createElement("tr");
    let cellaData = document.createElement("td");
    cellaData.style.fontWeight="bold";
    cellaData.style.fontSize="20px";
    cellaData.style.color="blue";
    cellaData.textContent = oggi.toLocaleDateString();
    let cellaIntestatario = document.createElement("td");
    cellaIntestatario.style.fontWeight="bold";
    cellaIntestatario.style.fontSize="20px";
    cellaIntestatario.textContent = " ";
    let cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Totale fatture preventivate";
    cellaDescrizione.style.textAlign="right"; 
    cellaDescrizione.style.fontWeight="bold";
    cellaDescrizione.style.fontSize="20px";
    cellaDescrizione.style.color="blue";
    let cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 
    cellaImporto.style.width="8%"; 
    cellaImporto.style.fontWeight="bold";
    cellaImporto.style.fontSize="20px";
    cellaImporto.style.color="blue";
    cellaImporto.textContent=TotaleGlobalePrevisione.toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);

 tbody.appendChild(riga)
   riga = document.createElement("tr");
    cellaData = document.createElement("td");
    cellaData.style.fontWeight="bold";
    cellaData.style.fontSize="20px";
    cellaData.style.color="green";
    cellaData.textContent = oggi.toLocaleDateString();
    cellaIntestatario = document.createElement("td");
    cellaIntestatario.style.fontWeight="bold";
    cellaIntestatario.style.fontSize="20px";
    cellaIntestatario.textContent = "";
    cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Totale fatture a consuntivo + fatture preventivate";
    cellaDescrizione.style.textAlign="right"; 
    cellaDescrizione.style.fontWeight="bold";
    cellaDescrizione.style.fontSize="20px";
    cellaDescrizione.style.color="green";
    cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 
    cellaImporto.style.width="8%"; 
    cellaImporto.style.fontWeight="bold";
    cellaImporto.style.fontSize="20px";
    cellaImporto.style.color="green";
    cellaImporto.textContent=(TotaleGlobale+TotaleGlobalePrevisione).toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);
 tbody.appendChild(riga)

 tbody.appendChild(riga)
   riga = document.createElement("tr");
    cellaData = document.createElement("td");
    cellaData.style.fontWeight="bold";
    cellaData.style.fontSize="20px";
    cellaData.style.color="black";
    cellaData.textContent = "";
    cellaIntestatario = document.createElement("td");
    cellaIntestatario.style.fontWeight="bold";
    cellaIntestatario.style.fontSize="20px";
    cellaIntestatario.textContent = "";
    cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Preventivo approvato";
    cellaDescrizione.style.textAlign="right"; 
    cellaDescrizione.style.fontWeight="bold";
    cellaDescrizione.style.fontSize="20px";
    cellaDescrizione.style.color="black";
    cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 
    cellaImporto.style.width="8%"; 
    cellaImporto.style.fontWeight="bold";
    cellaImporto.style.fontSize="20px";
    cellaImporto.style.color="black";
    cellaImporto.textContent=(PreventivoApprovato).toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);
 tbody.appendChild(riga)

  riga = document.createElement("tr");
    cellaData = document.createElement("td");
    cellaData.style.fontWeight="bold";
    cellaData.style.fontSize="20px";
    cellaData.style.color="black";
    cellaData.textContent = "";
    cellaIntestatario = document.createElement("td");
    cellaIntestatario.style.fontWeight="bold";
    cellaIntestatario.style.fontSize="20px";
    cellaIntestatario.textContent = "";
    cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Delta";
    cellaDescrizione.style.textAlign="right"; 
    cellaDescrizione.style.fontWeight="bold";
    cellaDescrizione.style.fontSize="20px";
    cellaDescrizione.style.color="black";
    cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 
    cellaImporto.style.width="8%"; 
    cellaImporto.style.fontWeight="bold";
    cellaImporto.style.fontSize="20px";
   
    let Delta=PreventivoApprovato-TotaleGlobale-TotaleGlobalePrevisione;
    cellaImporto.style.color="green";
    if(Delta<0){
        cellaImporto.style.color="red";
    }
    cellaImporto.textContent=(Delta).toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);
 tbody.appendChild(riga)

}
  
function Consuntivo():void {
    popolaConsuntivo("tabellaAmministrazione",fattureAmministrazione)   
    popolaConsuntivo("tabellaPulizie",fatturePulizie)   
    popolaConsuntivo("tabellaFattureAssicurazione",fattureAssicurazione)   
    popolaConsuntivo("tabellaRiscaldamento",fattureRiscaldamento)   
    popolaConsuntivo("tabellaEnergiaElettrica",fattureEnergiaElettrica)   
    popolaConsuntivo("tabellaAcqua",fattureAcqua)   
    popolaConsuntivo("tabellaSpeseLegali",fattureSpeseLegali)  
    popolaConsuntivo("tabellaManutenzioni",fattureManutenzione)  
    popolaConsuntivo("tabellaCertificazioni",fattureCertificazioni)  
    popolaConsuntivo("tabellaSpeseStraordinarie",fattureSpeseStraordinarie)  
    popolaConsuntivo("tabellaFattureDisinfestazioni",fattureDisinfestazioni)
    popolaConsuntivo("tabellaFattureVarie",fattureVarie)
    popolaConsuntivo("tabellaFattureGiardino",fattureGiardino)
    
   
// Totale fatture
    let tbody = document.querySelector("#tabellaTotale tbody")!;
    const riga = document.createElement("tr");
    const cellaData = document.createElement("td");
    cellaData.style.fontWeight="bold";
    cellaData.style.fontSize="20px";
    cellaData.textContent = oggi.toLocaleDateString();
    const cellaIntestatario = document.createElement("td");
    cellaIntestatario.style.fontWeight="bold";
    cellaIntestatario.style.fontSize="20px";
    cellaIntestatario.textContent = "Numero Fatture registrate: "+numeroFatture.toString();
    const cellaDescrizione = document.createElement("td");
    cellaDescrizione.textContent = "Totale consuntivo";
    cellaDescrizione.style.textAlign="right"; 
    cellaDescrizione.style.fontWeight="bold";
    cellaDescrizione.style.fontSize="20px";
    const cellaImporto = document.createElement("td");
    cellaImporto.style.textAlign="right"; 
    cellaImporto.style.width="8%"; 
    cellaImporto.style.fontWeight="bold";
    cellaImporto.style.fontSize="20px";
    cellaImporto.textContent=TotaleGlobale.toFixed(2);
    cellaImporto.textContent=cellaImporto.textContent.replace(/\./g,",")
    cellaImporto.textContent= AddPuntoMigliaia(cellaImporto.textContent)
    riga.appendChild(cellaData);
    riga.appendChild(cellaIntestatario);
    riga.appendChild(cellaDescrizione);
    riga.appendChild(cellaImporto);

    tbody.appendChild(riga);


}

function popolaFlussoDiCassa(Tabella, movimenti:Movimento[]) {
    var tbody = document.querySelector("#" + Tabella + " tbody");
    var totale = 0;
    var iIndex = 0;
    var Colore = "black";
    var ColoreBack ="white"
    movimenti.forEach(function (movimento) {
        iIndex++;
        if (movimento.esercizioPrecedente) {
            Colore = "gray";
        }else{
            Colore = "black";
        }
  
 
        if (movimento.evidenzia===0){
            ColoreBack="white";
        }
        if (movimento.evidenzia===1) {
            ColoreBack="yellow";
        }  
        if (movimento.evidenzia===2) {
            ColoreBack="pink";
        }



        var riga = document.createElement("tr");
        var cellaData = document.createElement("td");
        cellaData.textContent = movimento.data;
        cellaData.style.color = Colore;
        cellaData.style.backgroundColor=ColoreBack;
        var cellaDescrizione = document.createElement("td");
        cellaDescrizione.textContent = movimento.descrizione;
        cellaDescrizione.style.color = Colore;
        cellaDescrizione.style.backgroundColor=ColoreBack;
        var cellaCifra = document.createElement("td");
        cellaCifra.textContent = movimento.cifra;
        cellaCifra.textContent = cellaCifra.textContent.replace(/\./g,",")
        cellaCifra.style.backgroundColor=ColoreBack;
        if(movimento.cifra[0]==="-"){
          cellaCifra.style.color = "red";
        } else {
          cellaCifra.style.color = Colore;
        }
        cellaCifra.textContent= AddPuntoMigliaia(cellaCifra.textContent)
        cellaCifra.style.textAlign = "right";
        var cellaTotale = document.createElement("td");
        cellaTotale.style.textAlign = "right";

        let Importo:string=cellaCifra.textContent.replace(/\./g,"")
        Importo=Importo.replace(/\,/g,".")
        const NuovoMovimento:number=Number(Importo)




        TotaleFlussoDiCassa=TotaleFlussoDiCassa+NuovoMovimento;
        cellaTotale.textContent = TotaleFlussoDiCassa.toFixed(2);
        cellaTotale.textContent=cellaTotale.textContent.replace(/\./g,",")
        cellaTotale.style.fontWeight="bold";
        cellaTotale.style.fontSize="20px";
        cellaTotale.style.backgroundColor=ColoreBack;
        if(TotaleFlussoDiCassa>=0){
           cellaTotale.style.color="green";
        } else{
           cellaTotale.style.color="red";
        }
        cellaTotale.textContent= AddPuntoMigliaia(cellaTotale.textContent)
        riga.appendChild(cellaData);
        riga.appendChild(cellaDescrizione);
        riga.appendChild(cellaCifra);
        riga.appendChild(cellaTotale);
        tbody.appendChild(riga);
    });
}
function FlussoCassa():void{

popolaFlussoDiCassa("tabellaFlussoOttobre",movimentiOttobre)
popolaFlussoDiCassa("tabellaFlussoNovembre",movimentiNovembre)
popolaFlussoDiCassa("tabellaFlussoDicembre",movimentiDicembre)
popolaFlussoDiCassa("tabellaFlussoGennaio",movimentiGennaio)
popolaFlussoDiCassa("tabellaFlussoFebbraio",movimentiFebbraio)
popolaFlussoDiCassa("tabellaFlussoMarzo",movimentiMarzo)
popolaFlussoDiCassa("tabellaFlussoAprile",movimentiAprile)
}




function start():void{
   Consuntivo()
   Preventivo()
   FlussoCassa()
   window.scrollTo(0,0)
}

start()
