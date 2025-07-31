'use strict';

// Brand
const brandDataKey = 'brandDataP2P';
const brandData = window.sessionStorage.getItem(brandDataKey);

// Html pages
const landingTitle = document.getElementById('landingTitle');
const newCallTitle = document.getElementById('newCallTitle');
const newCallRoomTitle = document.getElementById('newCallRoomTitle');
const newCallRoomDescription = document.getElementById('newCallRoomDescription');
const loginTitle = document.getElementById('loginTitle');
const privacyPolicyTitle = document.getElementById('privacyPolicyTitle');
const stunTurnTitle = document.getElementById('stunTurnTitle');
const clientTitle = document.getElementById('clientTitle');
const notFoundTitle = document.getElementById('stunTurnTitle');

const shortcutIcon = document.getElementById('shortcutIcon');
const appleTouchIcon = document.getElementById('appleTouchIcon');

const appTitle = document.getElementById('appTitle');
const appDescription = document.getElementById('appDescription');
const appJoinDescription = document.getElementById('appJoinDescription');
const joinRoomBtn = document.getElementById('joinRoomButton');
const appJoinLastRoom = document.getElementById('appJoinLastRoom');

const features = document.getElementById('features');
const browsers = document.getElementById('browsers');
const teams = document.getElementById('teams');
const tryEasier = document.getElementById('tryEasier');
const poweredBy = document.getElementById('poweredBy');
const sponsors = document.getElementById('sponsors');
const advertisers = document.getElementById('advertisers');
const footer = document.getElementById('footer');
//...

// Brand customizations...

let brand = {
    app: {
        language: 'tr',
        name: 'Akizmir Toplantı Sistemi',
        title: 'Akizmir Toplantı Sistemi<br />',
        description:
            'Bir sonraki video görüşmenizi tek tıkla başlatın. İndirme, eklenti veya giriş gerekmez. Doğrudan konuşma, mesajlaşma ve ekran paylaşımına geçin.',
        joinDescription: 'Bir oda adı seçin.<br />Bu nasıl?',
        joinButtonLabel: 'ODAYA KATIL',
        joinLastLabel: 'Son odanız:',
    },
    site: {
        shortcutIcon: '../images/logo.svg',
        appleTouchIcon: '../images/logo.svg',
        landingTitle: 'Akizmir Toplantı Sistemi - Ücretsiz Güvenli Video Görüşmeleri, Sohbet ve Ekran Paylaşımı.',
        newCallTitle: 'Akizmir Toplantı Sistemi - Ücretsiz Güvenli Video Görüşmeleri, Sohbet ve Ekran Paylaşımı.',
        newCallRoomTitle: 'İsim seç. <br />URL paylaş. <br />Konferansı başlat.',
        newCallRoomDescription:
            "Her odanın kendine özel URL'si vardır. Sadece bir oda adı seçin ve özel URL'nizi paylaşın. Bu kadar basit.",
        loginTitle: 'Akizmir Toplantı Sistemi - Sunucu Korumalı giriş gerekli.',
        clientTitle: 'Akizmir Toplantı Sistemi WebRTC Video görüşme, Sohbet Odası ve Ekran Paylaşımı.',
        privacyPolicyTitle: 'Akizmir Toplantı Sistemi - gizlilik ve politika.',
        stunTurnTitle: 'Stun/Turn Sunucularını Test Et.',
        notFoundTitle: 'Akizmir Toplantı Sistemi - 404 Sayfa bulunamadı.',
    },
    html: {
        features: true,
        browsers: true,
        teams: true, // please keep me always true ;)
        tryEasier: true,
        poweredBy: true,
        sponsors: true,
        advertisers: true,
        footer: true,
    },
    about: {
        imageUrl: '../images/mirotalk-logo.gif',
        title: 'WebRTC P2P v1.5.46',
        html: `
            <button 
                id="support-button" 
                data-umami-event="Support button" 
                onclick="window.open('https://codecanyon.net/user/miroslavpejic85')">
                <i class="fas fa-heart" ></i>&nbsp;Destek
            </button>
            <br /><br /><br />
            Geliştirici:<a 
                id="linkedin-button" 
                data-umami-event="Linkedin button" 
                href="https://www.linkedin.com/in/miroslav-pejic-976a07101/" target="_blank"> 
                Akizmir Geliştirme Ekibi
            </a>
            <br /><br />
            E-posta:<a 
                id="email-button" 
                data-umami-event="Email button" 
                href="mailto:info@akizmir.com?subject=Akizmir Toplantı Sistemi bilgi"> 
                info@akizmir.com
            </a>
            <br /><br />
            <hr />
            <span>&copy; 2025 Akizmir Toplantı Sistemi, tüm hakları saklıdır</span>
            <hr />
        `,
    },
    //...
};

/**
 * Get started
 */
async function initBrand() {
    await getBrand();

    handleBrand();
}

/**
 * Get brand from server
 */
async function getBrand() {
    if (brandData) {
        setBrand(JSON.parse(brandData));
    } else {
        try {
            const response = await fetch('/brand', { timeout: 5000 });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const serverBrand = data.message;
            if (serverBrand) {
                setBrand(serverBrand);
                console.log('FETCH BRAND SETTINGS', {
                    serverBrand: serverBrand,
                    clientBrand: brand,
                });
                window.sessionStorage.setItem(brandDataKey, JSON.stringify(serverBrand));
            } else {
                console.warn('FETCH BRAND SETTINGS - DISABLED');
            }
        } catch (error) {
            console.error('FETCH GET BRAND ERROR', error.message);
        }
    }
}

/**
 * Set brand
 * @param {object} data
 */
function setBrand(data) {
    brand = data;
    console.log('Set Brand done');
}

/**
 * Handle Brand
 */
function handleBrand() {
    if (landingTitle && brand.site?.landingTitle) landingTitle.textContent = brand.site.landingTitle;

    if (newCallTitle && brand.site?.newCallTitle) newCallTitle.textContent = brand.site.newCallTitle;
    if (newCallRoomTitle && brand.site?.newCallRoomTitle) newCallRoomTitle.innerHTML = brand.site.newCallRoomTitle;
    if (newCallRoomDescription && brand.site?.newCallRoomDescription)
        newCallRoomDescription.textContent = brand.site.newCallRoomDescription;

    if (loginTitle && brand.site?.loginTitle) loginTitle.textContent = brand.site.loginTitle;
    if (privacyPolicyTitle && brand.site?.privacyPolicyTitle)
        privacyPolicyTitle.textContent = brand.site.privacyPolicyTitle;
    if (stunTurnTitle && brand.site?.stunTurnTitle) stunTurnTitle.textContent = brand.site.stunTurnTitle;
    if (clientTitle && brand.site?.clientTitle) clientTitle.textContent = brand.site.clientTitle;
    if (notFoundTitle && brand.site?.notFoundTitle) notFoundTitle.textContent = brand.site.notFoundTitle;

    if (shortcutIcon && brand.site?.shortcutIcon) shortcutIcon.href = brand.site.shortcutIcon;
    if (appleTouchIcon && brand.site?.appleTouchIcon) appleTouchIcon.href = brand.site.appleTouchIcon;

    if (appTitle && brand.app?.title) appTitle.innerHTML = brand.app.title;
    if (appDescription && brand.app?.description) appDescription.textContent = brand.app.description;
    if (appJoinDescription && brand.app?.joinDescription) appJoinDescription.innerHTML = brand.app.joinDescription;
    if (joinRoomBtn && brand.app?.joinButtonLabel) joinRoomBtn.innerText = brand.app.joinButtonLabel;
    if (appJoinLastRoom && brand.app?.joinLastLabel) appJoinLastRoom.innerText = brand.app.joinLastLabel;

    !brand.html.features && elementDisplay(features, false);
    !brand.html.browsers && elementDisplay(browsers, false);
    !brand.html.teams && elementDisplay(teams, false);
    !brand.html.tryEasier && elementDisplay(tryEasier, false);
    !brand.html.poweredBy && elementDisplay(poweredBy, false);
    !brand.html.sponsors && elementDisplay(sponsors, false);
    !brand.html.advertisers && elementDisplay(advertisers, false);
    !brand.html.footer && elementDisplay(footer, false);
}

/**
 * Handle Element display
 * @param {object} element
 * @param {boolean} display
 * @param {string} mode
 */
function elementDisplay(element, display, mode = 'block') {
    if (!element) return;
    element.style.display = display ? mode : 'none';
}

initBrand();
