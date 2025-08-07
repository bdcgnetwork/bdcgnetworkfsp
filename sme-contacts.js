// Organization data
const organizations = {
    'biofarms-limited': {
        name: 'Biofarms Limited',
        address: 'Export vegetables and Avocado',
        phone: 'Office: +254 020 440 2874 Mobile: +254 720 618140',
        email: 'danieln@biofarms.co.ke, info@biofarms.co.ke',
        website: 'www.biofarms.co.ke',
        organztn: 'Uasin Gishu and Trans Nzoia'
    },
    'keitt-exporters': {
        name: 'Keitt Exporters',
        address: 'Export vegetables,Avocado and Mango',
        phone: 'Mobile Asif: 0722 344889, Mobile Francis: 0721359547',
        email: 'production@keitt.co.ke, technical@keitt.co.ke, gichuru@keitt.co.ke',
        website: '',
        organztn: 'Uasin Gishu and Trans Nzoia,Makueni,Machakos,Nakuru,Nyandarua'
    },
    'vegpro-kenya-ltd': {
        name: 'VegPro Kenya Ltd',
        address: 'Export vegetables and Avocado',
        phone: 'Mobile Patel: 0722509818, Mobile John: 0729555499',
        email: 'apatel@vegpro-group.com, john.kirunja@vegpro-group.com',
        website: '',
        organztn: 'Uasin Gishu and Trans Nzoia'
    },
    'vert-limited': {
        name: 'Vert Limited',
        address: 'Export vegetables, passion/Mango',
        phone: '+254 702 572 778',
        email: 'info@vertfresh.co.ke, jane.maina@vertfresh.co.ke',
        website: '',
        organztn: 'Makueni/Machakos/Nyandarua'
    },
    'east-africa-grower': {
        name: 'East Africa Grower',
        address: 'Export vegetable',
        phone: 'Veronica- 0733604897',
        email: 'veronicahm@eaga.co.ke',
        website: '',
        organztn: 'Nyandarua'
    },
    'lianfarm-africa-limited': {
        name: 'LianFarm Africa Limited',
        address: 'Indigenous chicken',
        phone: '',
        email: '',
        website: '',
        organztn: 'Kakamega and Bungoma'
    },
    'ktl-farming-limited': {
        name: 'KTL Farming Limited',
        address: 'Avocado',
        phone: 'Mobile: 0728745121',
        email: 'ktlfarm2014@gmail.com',
        website: '',
        organztn: 'Bungoma and Trans Nzoia'
    },
    'elgon-farms-limited': {
        name: 'Elgon Farms Limited',
        address: 'Fingerlings, mature fish',
        phone: 'Mobile: 0722267597',
        email: 'sfarmproduce@gmail.com',
        website: '',
        organztn: 'Bungioma and Trans Nzoia'
    },
    'kentaste-products': {
        name: 'KENTASTE PRODUCTS LTD',
        address: 'Coconut',
        phone: '0721633424',
        email: 'info@kentaste.com, betty@ kentaste.com',
        website: '',
        organztn: 'Kwale'
    },
    'cocovita-processors': {
        name: 'Cocovita (processors)',
        address: 'Coconut',
        phone: '0728604471',
        email: 'joanatamba@cocovita.co.ke',
        website: '',
        organztn: 'Kilifi'
    },
    'akamba-poultry': {
        name: 'Akamba Poultry Traders(Processor)',
        address: 'Indigenous  chicken',
        phone: '0723173951',
        email: 'Leonardokioko123@gmail.com',
        website: '',
        organztn: 'Coast, Eastern, Siaya, Busia, Migori, Kakamega, Machakos'
    },
    'burton-bamber': {
        name: 'Burton Bamber',
        address: 'Mango/ Avocadoes/Vegetables',
        phone: '0701052351',
        email: 'ofelia@burtonandbamber.com',
        website: '',
        organztn: 'Eastern'
    },
    'goshen-farm': {
        name: 'Goshen Farm Exporters ltd',
        address: 'Indigenous  chickenMango, Export vegetables, passion',
        phone: '0722 555484',
        email: 'mary@goshen.co.ke  or info@goshen.co.ke',
        website: '',
        organztn: 'Makueni/Machakos'
    },
    'kandia-fresh': {
        name: 'Kandia Fresh Produce Suppliers Ltd',
        address: 'Export vegetables, passion',
        phone: '0203500866, 0722857142',
        email: 'david@kandia.co.ke',
        website: '',
        organztn: 'Makueni/Machakos'
    },
    'labedcash-marine': {
        name: 'Labedcash Marine Enterprises Limited',
        address: 'quality fish and fingerling production; fish accessories',
        phone: '0722 565 686',
        email: '',
        website: '',
        organztn: 'Kakamega'
    }
};

// Function to render organization content
function renderOrganization(org) {
    return `
        <div class="contact-section">
            <h2 class="org-name">${org.name}</h2>
            <div class="contact-info">
                <p><strong>Products:</strong> ${org.address}</p>
                <p><strong>Phone:</strong> ${org.phone}</p>
                <p><strong>Email:</strong> ${org.email}</p>
                <!--<p><strong>Website:</strong><a href="https://${org.website}"> ${org.website}</a></p>-->
                <p><strong>County:</strong> ${org.organztn}</p>
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
