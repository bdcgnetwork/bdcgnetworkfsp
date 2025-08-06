// Organization data
const organizations = {
    'samuel-cheburet': {
        name: 'Samuel K. Cheburet',
        address: '',
        phone: '+254 722 574 558',
        email: '',
        website: '',
        organztn: 'Rongai Acacia Dairy Coop Society'
    },
    'ruth-namale': {
        name: 'Ruth Namale',
        address: '',
        phone: '+254 718 882 429',
        email: '',
        website: '',
        organztn: 'Ruana Agribusiness Consultants'
    },
    'brenda-kiboi': {
        name: 'Brenda Kiboi',
        address: '',
        phone: '+254 721 818 998',
        email: '',
        website: '',
        organztn: 'Elgon Fish Farm'
    },
    'mary-mathuli': {
        name: 'Mary Mathuli',
        address: '',
        phone: '+254 702 572 778',
        email: '',
        website: '',
        organztn: 'Ketrima Investments'
    },
    'morgan-mwamuye': {
        name: 'Morgan Mwamuye',
        address: '',
        phone: '+254 704 161 831',
        email: '',
        website: '',
        organztn: 'Operations Manager Cocovita Limited'
    },
    'ravindra-patel': {
        name: 'Ravindra Patel',
        address: '',
        phone: '+254 701 895 337',
        email: '',
        website: '',
        organztn: 'Milly Fruits LTD'
    },
    'jeremiah-kimeli': {
        name: 'Jeremiah Kimeli',
        address: '',
        phone: '+254 714 266 736',
        email: '',
        website: '',
        organztn: 'Natures Touch Limited'
    },
    'holystar-kibet': {
        name: 'Holystar Kibet',
        address: '',
        phone: '+254 710 591 829',
        email: '',
        website: '',
        organztn: 'KTL Farming LTD'
    },
    'laban-mwanzo': {
        name: 'Laban Mwanzo',
        address: '',
        phone: '+254 722 565 686',
        email: '',
        website: '',
        organztn: 'Labedcash Marine'
    },
    'mark-mbithi': {
        name: 'Mark Mbithi',
        address: '',
        phone: '+254 726 656 783',
        email: '',
        website: '',
        organztn: 'Labedcash Marine'
    },
    'joanne-muchai': {
        name: 'Joanne Muchai',
        address: '',
        phone: '+254 704 983 787',
        email: '',
        website: '',
        organztn: 'Kentaste'
    },
    'phyllis-katuka-nduva': {
        name: 'Phyllis Katuka Nduva',
        address: '',
        phone: '+254 724 224 454',
        email: '',
        website: '',
        organztn: 'MCFP Co-op'
    },
    'alfred-ringine': {
        name: 'Alfred Ringine',
        address: '',
        phone: '+254 722 393 249',
        email: '',
        website: '',
        organztn: 'East African Growers ltd'
    },
    'khilna-dave': {
        name: 'Khilna Dave',
        address: '',
        phone: '+254 784 049 665',
        email: '',
        website: '',
        organztn: 'P.J Dave Flowers'
    },
    'somoye-otieno': {
        name: 'Somoye Otieno',
        address: '',
        phone: '+254 700 320 250',
        email: '',
        website: '',
        organztn: 'Fruityard LTD'
    },
    'joram-gitonga': {
        name: 'Joram Gitonga N',
        address: '',
        phone: '+254 712 096 437',
        email: '',
        website: '',
        organztn: 'Tulaga FCS'
    },
    'leornado-kioko': {
        name: 'Leornado M. Kioko',
        address: '',
        phone: '+254 723 173 951',
        email: '',
        website: '',
        organztn: 'Akamba Poultry Traders'
    },
    'emmanuel-muniu': {
        name: 'Emmanuel Muniu',
        address: '',
        phone: '+254 721 261 980',
        email: '',
        website: '',
        organztn: 'Renman Africa Ltd.'
    },
    'atul-patel': {
        name: 'Atul B. Patel',
        address: '',
        phone: '+254 722 509 818',
        email: '',
        website: '',
        organztn: 'Vegpro (K) Ltd'
    },
    'david-mulwa': {
        name: 'David Mulwa',
        address: '',
        phone: '+254 722 857 142',
        email: '',
        website: '',
        organztn: 'Kandia FPS LTD'
    },
    'sarah-onchangu': {
        name: 'Sarah Onchangu',
        address: '',
        phone: '+254 757 707 063',
        email: '',
        website: '',
        organztn: 'Boka eats Ltd'
    },
    'elias-mabiria': {
        name: 'Elias Mabiria',
        address: '',
        phone: '+254 727 377 489',
        email: '',
        website: '',
        organztn: 'Boka eats Ltd'
    },
    'lilian-serenge': {
        name: 'Lilian Serenge',
        address: '',
        phone: '+254 728 251 728',
        email: '',
        website: '',
        organztn: 'Lian Farm'
    },
    'sally-kweyu': {
        name: 'Sally Kweyu',
        address: '',
        phone: '+254 718 672 026',
        email: '',
        website: '',
        organztn: 'Lian Farm'
    },
    'lucy-namu': {
        name: 'Lucy Namu',
        address: '',
        phone: '+254 726 649 826',
        email: '',
        website: '',
        organztn: 'KENAS'
    },
    'robert-kirui': {
        name: 'Robert Kirui',
        address: '',
        phone: '+254 728 277 057',
        email: '',
        website: '',
        organztn: 'Habex Agro LTD'
    },
    'karen-ndulu': {
        name: 'Karen Ndulu',
        address: '',
        phone: '+254 726 869 056',
        email: '',
        website: '',
        organztn: 'AthiFarm Expoters LTD'
    },
    'michael-makokha': {
        name: 'Dr. Michael Makokha',
        address: '',
        phone: '+254 722 328 563',
        email: '',
        website: '',
        organztn: 'Western Deluxe Maize Co Ltd'
    },
    'dipesh-derray': {
        name: 'Dipesh Derray',
        address: '',
        phone: '+254 722 204 391',
        email: '',
        website: '',
        organztn: 'KEITT'
    },
    'janet-chumo': {
        name: 'Janet Chumo',
        address: '',
        phone: '+254 725 561 051',
        email: '',
        website: '',
        organztn: 'Keringet Foods'
    },
    'john-muriithi': {
        name: 'John Muriithi',
        address: '',
        phone: '+254 713 355 261',
        email: '',
        website: '',
        organztn: 'Papa Farmers Ltd'
    },
    'alex-muli': {
        name: 'Alex Muli',
        address: '',
        phone: '+254 722 927 819',
        email: '',
        website: '',
        organztn: 'Goshen Farm Exporters'
    },
    'ofelia-burton': {
        name: 'Ofelia Burton',
        address: '',
        phone: '+254 701 052 351',
        email: '',
        website: '',
        organztn: 'Burton & Bumber'
    },
    'martha-musyoka': {
        name: 'Martha Musyoka',
        address: '',
        phone: '+254 724 322 207',
        email: '',
        website: '',
        organztn: 'Biofarms LTD'
    },
    'jane-maina': {
        name: 'Jane Maina',
        address: '',
        phone: '+254 722 749 890',
        email: '',
        website: '',
        organztn: 'Vert Ltd'
    }
};

// Function to render organization content
function renderOrganization(org) {
    return `
        <div class="contact-section">
            <h2 class="org-name">${org.name}</h2>
            <div class="contact-info">
                <!--<p><strong>Address:</strong> ${org.address}</p>-->
                <p><strong>Phone:</strong> ${org.phone}</p>
                <!--<p><strong>Email:</strong> ${org.email}</p>-->
                <!--<p><strong>Website:</strong><a href="https://${org.website}"> ${org.website}</a></p>-->
                <p><strong>Organization:</strong> ${org.organztn}</p>
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
