// sign into steam, get login info
// use login info somehow...
// login to game.capcom.com/cfn/sfv/profile/<username>
// cookie name is scirid
// cookies last 7 days

var rankMap = {
    rookie: {
        title: "rookie",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/0.png?h=ba00d7693037ffdcd4298d769b2869e9"
    },
    bronze: {
        title: "bronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/1.png?h=1c9fbcff7c45e5a4a14666e5637d4172"
    },
    superBronze: {
        title: "superBronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/2.png?h=6df5ff0f938766b0bea2329f466aab30"
    },
    ultraBronze: {
        title: "ultraBronze",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/3.png?h=8c710231b4740156452aa12acfe0ddd7"
    },
    silver: {
        title: "silver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/4.png?h=c02213b7ca6be5add4a4ace637a511e7"
    },
    superSilver: {
        title: "superSilver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/5.png?h=741a88027605a2b638defc7f8bb0453e"
    },
    ultraSilver: {
        title: "ultraSilver",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/6.png?h=a5baad7649c30f49e30996da605b43d6"
    },
    gold: {
        title: "gold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/7.png?h=d99910b43cbc62a065fd0bc3c77fc616"
    },
    superGold: {
        title: "superGold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/8.png?h=25435d2e9b421880fc678d47cef36aac"
    },
    ultraGold: {
        title: "ultraGold",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/9.png?h=3922b815167a9c586275ca95a1bebee3"
    },
    platinum: {
        title: "platinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/10.png?h=03bf7215314e144e7b83a4d192ea63b6"
    },
    superPlatinum: {
        title: "superPlatinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/11.png?h=23457e7b543a1e56fbef9f7ce344a9fe"
    },
    ultraPlatinum: {
        title: "ultraPlatinum",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/12.png?h=46dc9df405e0e0e12fda91c42c0274fe"
    },
    diamond: {
        title: "diamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/13.png?h=f5b488a96b0903f3a9de3a3dd3d7ae9c"
    },
    superDiamond: {
        title: "superDiamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/14.png?h=28533424cf3f6e17c18c7a8f3e1f24ba"
    },
    ultraDiamond: {
        title: "ultraDiamond",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/15.png?h=02b527a322688a2c5fdeca40b1b087b2"
    },
    master: {
        title: "master",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/16.png?h=7a1e8782f8d657d82fc3ad9c78f5f57a"
    },
    grandMaster: {
        title: "grandMaster",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/17.png?h=f3e055c3bb47275494490bd983811e0a"
    },
    ultimateGrandMaster: {
        title: "ultimateGrandMaster",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/18.png?h=c992bbd05e4dc1dfd02c75d709c42b49"
    },
    warlord: {
        title: "warlord",
        img: "https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/19.png?h=9ca48df884be5cbbba643fdb8ea03a89"
    }
}

function getRankData() {
    // gets the rank from the database
    return {
        rankTitle: rankMap["rookie"].title,
        rankImg: rankMap["rookie"].img,
        charName: "Char Name",
        charImg: ""
    }
}

function getRankInfo() {
    var data = getRankData();

    // // image styles
    // // great grandparent
    // width: 7rem;
    // // parent
    // height: 2.7rem;
    // width: 7rem;
    // // child
    // background-image: url(https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/8.png?h=25435d2…);
    // background-position: center;
    // background-size: contain;
    // height: 30px;
    // background-repeat: no-repeat;

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

Array.from(document.querySelectorAll(".stream-thumbnail")).map(function (el) {
    var rankInfo = el.querySelector(".tw-mg-t-0");
    if (rankInfo.innerHTML === "") {
        rankInfo.innerHTML = getRankInfo();
    };
})