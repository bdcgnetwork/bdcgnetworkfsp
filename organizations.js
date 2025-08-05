// Organization data
const organizations = {
    'imarisha': {
        name: 'Imarisha Sacco Society Ltd',
        address: 'Imarisha Sacco building,P.O Box  682-20200, Kericho, Kenya',
        phone: '+254709 578 000',
        email: 'imarisha@imarishasacco.co.ke',
        website: 'www.imarishasacco.co.ke',
        region: 'Kericho,Bomet County,Nandi County,Nakuru County,Uasin Gishu County and Narok County.'
    },
    'vision-afrika': {
        name: 'Vision Afrika Sacco Ltd',
        address: 'Opp Generation House, Kenyatta Avenue,P.O. Box 18263-20100, Nakuru.',
        phone: '+254728 075 075',
        email: 'info@visionafrikasacco.co.ke',
        website: 'www.visionafrikasacco.co.ke',
        region: 'Nakuru'
    },
    'siaya-seed': {
        name: 'Siaya Seed Sacco',
        address: 'Siaya',
        phone: '+254766 923 098',
        email: 'seedsacco@gmail.com',
        website: 'n/a',
        region: 'Siaya'
    },
    'boresha-sacco': {
        name: 'Boresha Sacco Society Ltd',
        address: 'Uasin ngishu county,Baringo County,Nakuru County,Nandi County,Elgeyo-Marakwet,Laikipia County and Trans-Nzoia County',
        phone: '+254111 043 400',
        email: 'info@boreshasacco.co.ke',
        website: 'www.boreshasacco.co.ke',
        region: 'Uasin ngishu county,Baringo County,Nakuru County,Nandi County,Elgeyo-Marakwet,Laikipia County and Trans-Nzoia County'
    },
    'muki-sacco': {
        name: 'Muki Sacco Society Ltd',
        address: 'Head Office: Ndunyu Njeru Branch P.O Box 398 North Kinangop',
        phone: '+254711 794 957',
        email: 'info@mukisacco.co.ke',
        website: 'www.mukisacco.co.ke',
        region: 'Nyandarua'
    },
    'siraji-sacco': {
        name: 'Siraji Sacco Society Ltd',
        address: 'Head Office Timau',
        phone: '+254704 566 922',
        email: 'info@sirajisacco.com',
        website: 'www.sirajisacco.com',
        region: 'Laikipia,Meru County,Nakuru County and Kajiado County'
    },
    'tower-sacco': {
        name: 'Tower sacco Society Ltd ',
        address: 'OLKALOU TOWN, TOWER SACCO PLAZA Along Olkalou-Nakuru Road P.O BOX 259-20303 OLKALOU',
        phone: '+254792 333 111',
        email: 'info@towersacco.co.ke',
        website: 'www.towersacco.co.ke',
        region: 'Nyandarua,Nairobi County,Nyandarua ,Rift Valley Counties,Coast Region and Nyeri County'
    },
    'county-sacco': {
        name: 'County Sacco Society Ltd ',
        address: 'PO BOX 21 - 60103, RUNYENJES - EMBU',
        phone: '+254 700 290 241',
        email: 'info@countysacco.com',
        website: 'www.countysacco.com',
        region: 'Embu County and Tharaka Nithi County'
    },
    'universal-trader': {
        name: 'Universal Trader Sacco',
        address: 'Traders House, Syokimau Road - Machakos',
        phone: '+254 757 568 479',
        email: 'info@universaltraders.co.ke',
        website: 'universaltraders.co.ke',
        region: 'Machakos,Kitui,Makueni and Embu'
    },
    'bima-kenya': {
        name: 'Bima Kenya Ltd',
        address: 'BIMAS PLaza, Off Shell Petrol Station, Majengo Area Behind Chiefs Camp (Embu), P.O Box 2299-60100, Embu',
        phone: '+254 701 111 700',
        email: 'info@bimaskenya.com',
        website: 'www.bimaskenya.com',
        region: 'Embu'
    },
    'caritas-mfb': {
        name: 'Caritas MFB',
        address: '7th Floor Cardinal Otunga Plaza Kaunda Street, Nairobi, KENYA P.O Box 41353-00100',
        phone: '+254 720 361 855',
        email: 'communications@caritasnairobi.org',
        website: 'www.caritasnairobi.org',
        region: 'Nairobi,Kiambu,Nyeri County'
    },
    'nyambene-arimi': {
        name: 'Nyambene Arimi Sacco',
        address: 'P.O Box 493-60600 Maua',
        phone: '+254 111 031 699',
        email: 'info@nyarimisacco.com',
        website: 'www.nyarimisacco.com',
        region: 'Meru'
    },
    'juhudi-kilimo ': {
        name: 'Juhudi Kilimo',
        address: 'Headquarters: The Priory, 2nd floor, Argwings Kodhek Road,P.O Box 25441-00100, Nairobi.',
        phone: '+254 709 69 20 00',
        email: 'info@juhudikilimo.com',
        website: 'www.juhudikilimo.com',
        region: 'Nairobi,North Rift Region,South Rift Region,Mount Kenya Region,Eastern Region,Central Rift Region,Western Region,Mount Elgon Region and South Nyanza Region'
    },
    'sumac-mfb': {
        name: 'Sumac MFB ',
        address: 'Head Office: Ndunyu Njeru Branch P.O Box 398 North Kinangop',
        phone: '+254 725 223 499',
        email: 'info@sumacmicrofinancebank.co.ke',
        website: 'www.sumacmicrofinancebank.co.ke',
        region: 'Nairobi,Thika and Kiambu'
    },
    'time-u-sacco': {
        name: 'Time U Sacco',
        address: 'HQ Location:Kionyo Rd, Nkubu Postal Address: P.O. Box 310 – 60202, Nkubu',
        phone: '+254 703 770 457',
        email: 'info@timesusacco.co.ke',
        website: 'www.timesusacco.co.ke',
        region: 'Meru'
    },
    'tai-sacco': {
        name: 'Tai Sacco Society Ltd',
        address: 'Tai Plaza Behind Total Petrol Station, Githunguri Town, Kiambu County',
        phone: '+254727 091 111',
        email: 'info@taisacco.coop',
        website: 'www.taisacco.coop',
        region: 'Kiambu County,Nairobi County and Nakuru County'
    },
    'yehu-mfi': {
        name: 'Yehu Mfi',
        address: 'HQ Office Address The Avenue Building, 2nd Floor – Office No. 2',
        phone: '+254 709 118 400',
        email: 'customerservice@yehu.org',
        website: 'www.yehu.org',
        region: 'Mombasa,Kwale County,Kilifi County,Lamu County,Makueni County and Meru County'
    },
    'ndege-chai': {
        name: 'Ndege chai sacco',
        address: 'Head Office: Ndunyu Njeru Branch P.O Box 398 North Kinangop',
        phone: '020-8031759',
        email: 'info@ndegechaisacco.com',
        website: 'www.ndegechaisacco.co.ke',
        region: 'Kericho,Bomet and Nakuru'
    },
    'imarika-sacco': {
        name: 'Imarika Sacco Society Ltd ',
        address: 'IMARIKA PLAZA P.O. BOX 712-80108 Charo Wa Mae Road, Opposite Baobab Building.',
        phone: '+254 726 007 037',
        email: 'info@imarika.org',
        website: 'www.imarikasacco.co.ke',
        region: 'Kilifi,Mombasa County,Kwale County ,Lamu County and Tana River'
    },
    'u&i-mfb': {
        name: 'U&I MFB ',
        address: 'Thika Arcade Building – Ground Floor, P.O Box 15825-00100, G.P.O Nairobi',
        phone: '+254 713 112 791',
        email: 'info@uni-microfinance.co.ke',
        website: 'www.uni-microfinance.co.ke',
        region: 'Nairobi,Kiambu County and Machakos County'
    },
    'kwft': {
        name: 'KWFT',
        address: 'KWFT Centre, Kiambere - Masaba Road,Junction, Upperhill Nairobi',
        phone: '+254 703 067 700',
        email: 'info@kwftbank.com',
        website: 'www.kwftbank.com',
        region: 'Nairobi,Kiambu ,Gatundu ,Limuru,Thika,Nkubu,MeruKerugoya,Nanyuki,Naromoru,Karatina,Othaya,Kangema,Chuka,Nkubu,Mwea,Kangari,Nyeri,Embu,Mount KenyaMakueni,Machakos ,Likoni, Diani ,Watamu,Voi,Mtwapa,Mombasa,nyanza,Nyamira,Western region,Tranzoia,Uasin ngishu,Bomet,Kericho,kisii,Marsabit.'
    },
    'tenhos-sacco': {
        name: 'Tenhos Sacco Society Ltd',
        address: 'Company Headquarters:321 Car World, 2nd Breaking Str, Newyork ,USA 10002',
        phone: '0208031627',
        email: 'tenhossacco@yahoo.com',
        website: 'www.tenhossacco.co.ke',
        region: 'Bomet'
    },
    'asili-sacco ': {
        name: 'Asili Sacco',
        address: 'Asili Sacco Society Limited, Ngara Road, Nairobi Kenya',
        phone: '+254 730 785 500',
        email: 'info@asilisacco.coop',
        website: 'www.asilisacco.coop',
        region: 'Nairobi and Migori'
    },
    'eclof-kenya': {
        name: 'Eclof Kenya',
        address: 'Head Office: Ndunyu Njeru Branch P.O Box 398 North Kinangop',
        phone: '+254 721 344 699',
        email: 'info@eclof-kenya.org',
        website: 'www.eclof-kenya.org',
        region: 'Nairobi,Eastern,Western ,Machakos,Thika,Ruiru, Nakuru,Eldoret,Kisumu and Mombasa'
    },
    'elburgon-dairy-coop': {
        name: 'Elburgon Dairy Coop',
        address: 'Nakuru',
        phone: '',
        email: 'epdfcs@gmail.com',
        website: '',
        region: 'Nakuru'
    },
    'suluhu-sacco': {
        name: 'Suluhu Sacco',
        address: 'Suluhu sacco plaza, Mwingi Town, opposite IEBC offices, Kyuso Road',
        phone: '+254 794 056 489',
        email: 'info@suluhusaccoltd.com',
        website: 'www.suluhusaccoltd.com',
        region: 'Kitui'
    },
    'solution-sacco': {
        name: 'Solution Sacco',
        address: '1st Floor, Mwalimu Plaza, Gakoromone Road, Meru, Kenya P.O. Box 1694-60200 Meru, Kenya',
        phone: '+254 728 787 972',
        email: 'info@solutionsacco.com',
        website: 'www.solutionsacco.com',
        region: 'Meru,Isiolo,Laikipia,Tharaka Nithi,Marsabit,Nairobi and Taita taveta'
    },
    'qwetu-sacco': {
        name: 'Qwetu Sacco',
        address: 'P.O. Box 1186-804 Wundanyi',
        phone: '+254 728 957 585',
        email: 'info@qwetusacco.com',
        website: 'qwetusacco.com',
        region: 'Taita Taveta'
    },
    'grafco-sacco': {
        name: 'Grafco Sacco',
        address: 'Head office:Ushirika Center PO Box 223-00222, Uplands Limuru, Kenya',
        phone: '+254 728 568 510',
        email: 'info@grafcosacco.org',
        website: 'www.grafcosacco.org',
        region: 'Kiambu'
    },
    'smep': {
        name: 'SMEP',
        address: 'Nairobi Central Email: tumaini@smep.co.ke Building: Tumaini House ground floor',
        phone: '+254 711 606 900',
        email: 'customercare@smep.co.ke',
        website: 'www.smep.co.ke',
        region: 'Nairobi,Migori County,Lamu,Thika'
    },
    'faulu-dtm': {
        name: 'Faulu DTM',
        address: 'Ngong Lane, off Ngong Road P.O Box 60240-00200 Nairobi, Kenya',
        phone: '+254 711 074 000',
        email: 'info@faulukenya.com',
        website: 'www.faulukenya.com',
        region: 'Nairobi,Central Kenya,Rift Valley Region,Coast Region,Western Region,Nyanza Region,Eastern & Northern Kenya.'
    },
    'tulaga-sacco-co-op': {
        name: 'Tulaga Sacco/Co-op',
        address: 'PO BOX 26, NORTH KINANGOP ENGINEER',
        phone: '+254 111 302 560',
        email: 'tulagasacco2017@gmail.com',
        website: 'www.tulagasacco.co.ke',
        region: 'Nyandarua'
    },
    'kenya-achievas': {
        name: 'Kenya Achievas Sacco',
        address: 'Kenya Achievas Building P. O. Box 3080 – 40200 Kisii',
        phone: '+254 715 997 611',
        email: 'info@achievassacco.co.ke',
        website: 'www.achievassacco.co.ke',
        region: 'Kisii'
    },
    'molyn-credit': {
        name: 'Molyn Credit',
        address: 'Bruce House , 10144-00100,Nairobi,Nairobi Area',
        phone: '20310726',
        email: 'info@mukisacco.co.ke',
        website: 'www.molyn.co.ke',
        region: 'Nairobi'
    },
    'jawabu-biashara': {
        name: 'Jawabu Biashara Ltd',
        address: 'Head Office: Muthaiga Square 3rd Floor - Opposite Muthaiga Police Station',
        phone: '+254701 338 383',
        email: 'contact@jawabubiz.co.ke',
        website: 'www.jawabubiz.co.ke',
        region: 'Nairobi'
    }
};

// Function to render organization content
function renderOrganization(org) {
    return `
        <div class="contact-section">
            <h2 class="org-name">${org.name}</h2>
            <div class="contact-info">
                <p><strong>Address:</strong> ${org.address}</p>
                <p><strong>Phone:</strong> ${org.phone}</p>
                <p><strong>Email:</strong> ${org.email}</p>
                <p><strong>Website:</strong><a href="https://${org.website}"> ${org.website}</a></p>
                <p><strong>Region:</strong> ${org.region}</p>
            </div>
        </div>
    `;
}

// Main execution
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const orgCode = params.get("org")?.toLowerCase();
    const contentDiv = document.getElementById('content');

    if (!orgCode) {
        contentDiv.innerHTML = "<h2>Access Denied</h2><p>You must access this page via an authorized link or QR code with a valid organization code.</p>";
    } else if (organizations[orgCode]) {
        // Show specific organization
        contentDiv.innerHTML = renderOrganization(organizations[orgCode]);
        document.title = organizations[orgCode].name;
    } else {
        // Invalid organization code
        contentDiv.innerHTML = "<h2>Organization Not Found</h2><p>The requested organization could not be found. Please check the link or <a href='?'>try again</a>.</p>";
    }
});
