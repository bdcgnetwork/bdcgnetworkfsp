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
