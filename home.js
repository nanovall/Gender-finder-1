function validarnombre(event) {

    event.preventDefault();

    
    const nombreInput = document.querySelector('input[name="nombre"]');
    const nombre = nombreInput.value.trim();

    if (!nombre) {
        alert("Escriba algún nombre");
        return;
    }

    limpiarMensajes();

    const api1 = `https://api.genderize.io/?name=${nombre}`;
    const api2 = `https://api.nationalize.io/?name=${nombre}`;


    fetch(api1)
        .then((response) => response.json())
        .then((data) => {
            if (data.gender) {
                const genero = data.gender === "male" ? "masculino" : "femenino";
                agregarMensaje(`El nombre ${nombre} es de género ${genero}.`);
            } else {
                agregarMensaje(`No se puede determinar el genero de ${nombre}.`);
            }
        })


    fetch(api2)
        .then((response) => response.json())
        .then((data) => {
            if (data.country && data.country.length > 0) {
                const countryId = data.country[0].country_id;
                const countryName = countryCodes[countryId];
                agregarMensaje(`${nombre} es probable que sea de ${countryName}.`);
            } else {
                agregarMensaje(`No se puede determinar la nacionalidad de ${nombre}.`);
            }
        })
}


function agregarMensaje(mensaje) {
    const mensajeElement = document.createElement("p");
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.add("mensaje");
    document.body.appendChild(mensajeElement);
}
function limpiarMensajes() {

    const mensajes = document.querySelectorAll("body > p");
    mensajes.forEach((mensaje) => mensaje.remove());
}


const countryCodes = {
    AF: "Afganistán",
    AL: "Albania",
    DZ: "Argelia",
    AS: "Samoa Americana",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguila",
    AQ: "Antártida",
    AG: "Antigua y Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaiyán",
    BS: "Bahamas",
    BH: "Baréin",
    BD: "Bangladés",
    BB: "Barbados",
    BY: "Bielorrusia",
    BE: "Bélgica",
    BZ: "Belice",
    BJ: "Benín",
    BM: "Bermudas",
    BT: "Bután",
    BO: "Bolivia",
    BA: "Bosnia y Herzegovina",
    BW: "Botsuana",
    BR: "Brasil",
    IO: "Territorio Británico del Océano Índico",
    BN: "Brunéi",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Camboya",
    CM: "Camerún",
    CA: "Canadá",
    CV: "Cabo Verde",
    KY: "Islas Caimán",
    CF: "República Centroafricana",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CO: "Colombia",
    KM: "Comoras",
    CG: "Congo",
    CD: "Congo (República Democrática del)",
    CK: "Islas Cook",
    CR: "Costa Rica",
    CI: "Costa de Marfil",
    HR: "Croacia",
    CU: "Cuba",
    CY: "Chipre",
    CZ: "República Checa",
    DK: "Dinamarca",
    DJ: "Yibuti",
    DM: "Dominica",
    DO: "República Dominicana",
    EC: "Ecuador",
    EG: "Egipto",
    SV: "El Salvador",
    GQ: "Guinea Ecuatorial",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Etiopía",
    FJ: "Fiyi",
    FI: "Finlandia",
    FR: "Francia",
    GA: "Gabón",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Alemania",
    GH: "Ghana",
    GR: "Grecia",
    GD: "Granada",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bisáu",
    GY: "Guyana",
    HT: "Haití",
    HN: "Honduras",
    HU: "Hungría",
    IS: "Islandia",
    IN: "India",
    ID: "Indonesia",
    IR: "Irán",
    IQ: "Irak",
    IE: "Irlanda",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaica",
    JP: "Japón",
    JO: "Jordania",
    KZ: "Kazajistán",
    KE: "Kenia",
    KI: "Kiribati",
    KP: "Corea del Norte",
    KR: "Corea del Sur",
    KW: "Kuwait",
    KG: "Kirguistán",
    LA: "Laos",
    LV: "Letonia",
    LB: "Líbano",
    LS: "Lesoto",
    LR: "Liberia",
    LY: "Libia",
    LI: "Liechtenstein",
    LT: "Lituania",
    LU: "Luxemburgo",
    MG: "Madagascar",
    MW: "Malaui",
    MY: "Malasia",
    MV: "Maldivas",
    ML: "Malí",
    MT: "Malta",
    MH: "Islas Marshall",
    MR: "Mauritania",
    MU: "Mauricio",
    MX: "México",
    FM: "Micronesia",
    MD: "Moldavia",
    MC: "Mónaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MA: "Marruecos",
    MZ: "Mozambique",
    MM: "Birmania",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Países Bajos",
    NZ: "Nueva Zelanda",
    NI: "Nicaragua",
    NE: "Níger",
    NG: "Nigeria",
    NO: "Noruega",
    OM: "Omán",
    PK: "Pakistán",
    PW: "Palaos",
    PS: "Palestina",
    PA: "Panamá",
    PG: "Papúa Nueva Guinea",
    PY: "Paraguay",
    PE: "Perú",
    PH: "Filipinas",
    PL: "Polonia",
    PT: "Portugal",
    QA: "Catar",
    RO: "Rumania",
    RU: "Rusia",
    RW: "Ruanda",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Santo Tomé y Príncipe",
    SA: "Arabia Saudita",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leona",
    SG: "Singapur",
    SK: "Eslovaquia",
    SI: "Eslovenia",
    SB: "Islas Salomón",
    SO: "Somalia",
    ZA: "Sudáfrica",
    ES: "España",
    LK: "Sri Lanka",
    SD: "Sudán",
    SR: "Surinam",
    SZ: "Esuatini",
    SE: "Suecia",
    CH: "Suiza",
    SY: "Siria",
    TW: "Taiwán",
    TJ: "Tayikistán",
    TZ: "Tanzania",
    TH: "Tailandia",
    TG: "Togo",
    TO: "Tonga",
    TT: "Trinidad y Tobago",
    TN: "Túnez",
    TR: "Turquía",
    TM: "Turkmenistán",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ucrania",
    AE: "Emiratos Árabes Unidos",
    GB: "Reino Unido",
    US: "Estados Unidos",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabue",
};