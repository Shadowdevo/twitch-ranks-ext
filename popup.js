// sign into steam, get login info
// use login info somehow...
// login to game.capcom.com/cfn/sfv/profile/<username>
// cookie name is scirid
// cookies last 7 days

var users = {};

var rankMap = {
    rookie: {
        title: "Rookie",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/0.png?h=ba00d7693037ffdcd4298d769b2869e9"
    },
    bronze: {
        title: "Bronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/1.png?h=1c9fbcff7c45e5a4a14666e5637d4172"
    },
    superBronze: {
        title: "Super Bronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/2.png?h=6df5ff0f938766b0bea2329f466aab30"
    },
    ultraBronze: {
        title: "Ultra Bronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/3.png?h=8c710231b4740156452aa12acfe0ddd7"
    },
    silver: {
        title: "Silver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/4.png?h=c02213b7ca6be5add4a4ace637a511e7"
    },
    superSilver: {
        title: "Super Silver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/5.png?h=741a88027605a2b638defc7f8bb0453e"
    },
    ultraSilver: {
        title: "Ultra Silver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/6.png?h=a5baad7649c30f49e30996da605b43d6"
    },
    gold: {
        title: "Gold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/7.png?h=d99910b43cbc62a065fd0bc3c77fc616"
    },
    superGold: {
        title: "Super Gold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/8.png?h=25435d2e9b421880fc678d47cef36aac"
    },
    ultraGold: {
        title: "Ultra Gold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/9.png?h=3922b815167a9c586275ca95a1bebee3"
    },
    platinum: {
        title: "Platinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/10.png?h=03bf7215314e144e7b83a4d192ea63b6"
    },
    superPlatinum: {
        title: "Super Platinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/11.png?h=23457e7b543a1e56fbef9f7ce344a9fe"
    },
    ultraPlatinum: {
        title: "Ultra Platinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/12.png?h=46dc9df405e0e0e12fda91c42c0274fe"
    },
    diamond: {
        title: "Diamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/13.png?h=f5b488a96b0903f3a9de3a3dd3d7ae9c"
    },
    superDiamond: {
        title: "Super Diamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/14.png?h=28533424cf3f6e17c18c7a8f3e1f24ba"
    },
    ultraDiamond: {
        title: "Ultra Diamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/15.png?h=02b527a322688a2c5fdeca40b1b087b2"
    },
    master: {
        title: "Master",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/16.png?h=7a1e8782f8d657d82fc3ad9c78f5f57a"
    },
    grandMaster: {
        title: "Grand Master",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/17.png?h=f3e055c3bb47275494490bd983811e0a"
    },
    ultimateGrandMaster: {
        title: "Ultimate Grand Master",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/18.png?h=c992bbd05e4dc1dfd02c75d709c42b49"
    },
    warlord: {
        title: "Warlord",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/19.png?h=9ca48df884be5cbbba643fdb8ea03a89"
    }
}

var charMap = {
    "ryu": {
        name: "RYU",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/ryu.png?h=6e84a240c0927c29bf6850afed6bbfd1"
    },
    "chun-li": {
        name: "CHUN-LI",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/cnl.png?h=0429fc3144c9de5458764d0678719b67"
    },
    "nash": {
        name: "NASH",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/nsh.png?h=ddcce484c7f3035176bbfacf90948b31"
    },
    "mbison": {
        name: "M. Bison",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/veg_en.png?h=5b6d9c5d7e81325d04806c5f97d88002"
    },
    "cammy": {
        name: "CAMMY",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/cmy.png?h=b4380e21f398733fa1f651697a9a360c"
    },
    "birdie": {
        name: "BIRDIE",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/brd.png?h=78e51bcbb07d3954c8f9bef0a500a7b7"
    },
    "ken": {
        name: "KEN",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/ken.png?h=dfaee26265353ba78c2d6698e5daae90"
    },
    "necalli": {
        name: "NECALLI",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/ncl.png?h=f0fcc51aa7cd864d98ef120687add6e0"
    },
    "vega": {
        name: "VEGA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/blr_en.png?h=1f0da7523154325d67a68cf97bb5ae13"
    },
    "rmika": {
        name: "R. MIKA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/rmk.png?h=c28677296404440dbdbf721c7ac8d6e1"
    },
    "rashid": {
        name: "RASHID",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/rsd.png?h=d8edeac9fa69c8572039b71bfce510b0"
    },
    "karin": {
        name: "KARIN",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/krn.png?h=219846c6d801399f7155d2f8280f6449"
    },
    "zangief": {
        name: "ZANGIEF",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/zgf.png?h=d5eea938923d1b50dbf33cfe02f7e7be"
    },
    "laura": {
        name: "LAURA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/lar.png?h=c5c318be8779d40f7503b44a898e0800"
    },
    "dhalsim": {
        name: "DHALSIM",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/dsm.png?h=6ecfc9278336f6bda08409392a08e6ed"
    },
    "fang": {
        name: "FANG",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/fan.png?h=fc5c562f6756f2ae6f0ce4741d6ebe50"
    },
    "alex": {
        name: "ALEX",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/alx.png?h=76537ca080a34120ca7e93428d21e598"
    },
    "guile": {
        name: "GUILE",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/gul.png?h=d3ec403c9af6c15b36317868780de9a2"
    },
    "ibuki": {
        name: "IBUKI",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/ibk.png?h=186f80e0160c92fd5a322852eda35989"
    },
    "balrog": {
        name: "BALROG",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/bsn_en.png?h=714ef527535b655aea9bbf9513e1210b"
    },
    "juri": {
        name: "JURI",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/jri.png?h=7f8b25d55636d37398f33e3473f564bd"
    },
    "urien": {
        name: "URIEN",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/urn.png?h=8bb40555d0a2e4f9766e75d5a1cbd8d9"
    },
    "akuma": {
        name: "AKUMA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/gok_en.png?h=c26b48377d6aa0e0fccb34e95b424b2f"
    },
    "kolin": {
        name: "KOLIN",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/kln.png?h=cb9ffaad7088eedce658a8c639889026"
    },
    "ed": {
        name: "ED",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/ed.png?h=fbc29084efdfce6c367975d3ec72f024"
    },
    "abigail": {
        name: "ABIGAIL",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/abg.png?h=861bc1bc528c5e656a4d9143bf6dcaf3"
    },
    "zeku": {
        name: "ZEKU",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/zku.png?h=c69236f7c2445004fcefa146541ce2dd"
    },
    "sakura": {
        name: "SAKURA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/skr.png?h=396c004f8ac7ead71da97beb9937f3e2"
    },
    "blanka": {
        name: "BLANKA",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/blk.png?h=8ea20d5d1e9512aa311cde187642a8fd"
    },
    "falke": {
        name: "FALKE",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/flk.png?h=e1064911c34c5905113b5ec4baf57c15"
    },
    "cody": {
        name: "CODY",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/cdy.png?h=d76bebd9f65aed6711fadaaa219143d4"
    },
    "g": {
        name: "G",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/g_on.png?h=b24c77d98ba2336c64a5a2b1cd13a266"
    },
    "sagat": {
        name: "SAGAT",
        img: "https: //game.capcom.com/cfn/sfv/as/img/character/thum/sag_on.png?h=2c714fbd21a7589f342dc3f0854bd09e"
    },
}

function getDatabaseInfo(usernames, cb) {
    // get users from the database via the server
    // set the users
    users = [];
    if (typeof cb === "function") cb();
}

function getRankData(username) {
    var user = users[username] || {
        rank: "rookie",
        character: "ryu"
    };
    // gets the rank from the database
    return {
        rankTitle: (rankMap[user.rank] || {}).title || rankMap.rookie.title,
        rankImg: (rankMap[user.rank] || {}).img || rankMap.rookie.img,
        charName: (charMap[user.character] || {}).name || charMap.ryu.name,
        charImg: (charMap[user.character] || {}).img || charMap.ryu.img,
    }
}

// returns a string of the HTML content that will contain the rank information to display under thumbnails
function getRankInfo(username) {
    var data = getRankData(username);

    return `<div class="preview-card-appendage tw-flex">
    <div class="preview-card-appendage__image-wrapper tw-align-items-center tw-flex tw-flex-grow-0 tw-flex-shrink-0 tw-justify-content-end" style="width: 6.6rem;">
        <div>
            <div class="metadata-icon__appendage metadata-icon__appendage--csgo-skill" style="height: 2.7rem; width: 6.6rem;">
                <div style="background-image: url( ${data.rankImg} ); background-position: center; background-size: contain; background-repeat: no-repeat; width: auto; height: 30px;"></div>
            </div>
        </div>
    </div>
    <div class="tw-border-t tw-flex tw-flex-grow-1 tw-flex-shrink-1 tw-mg-l-1 tw-overflow-hidden tw-pd-y-05">
        <div class="tw-flex-grow-1 tw-flex-shrink-1 tw-overflow-hidden">
            <p class="tw-ellipsis" title="${data.rankTitle}">${data.rankTitle}</p>
        </div>
        <div class="tw-flex-grow-0 tw-flex-shrink-0">
            <p class="">${"Char Name"}</p>
        </div>
    </div>
</div>`;
}

// gets a reference to the thumbnails
var thumbnails = [];

// populates the rank info for all loaded thumbnails
function populateInfo() {
    thumbnails.map(function (el) {
        var rankInfo = el.querySelector(".tw-mg-t-0");
        if (rankInfo.innerHTML === "") {
            rankInfo.innerHTML = getRankInfo("username");
        };
    });
}

// the time, in seconds, that the script should update
var interval = 1;
setInterval(() => {
    console.log("updating rank info");

    thumbnails = Array.from(document.querySelectorAll(".stream-thumbnail"));
    getDatabaseInfo(/*list of usernames*/null, () => {
        populateInfo();
    });
}, interval * 1000);