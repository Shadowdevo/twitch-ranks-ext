document.body.innerHTML = "They call me Mr. Tibs";
console.log("Foobar");

// sign into steam, get login info
// use login info somehow...
// login to game.capcom.com/cfn/sfv/profile/<username>
// cookie name is scirid
// cookies last 7 days

// select this element "tw-mg-t-0"

// paste this into element
<div class="preview-card-appendage tw-flex">
    <div class="preview-card-appendage__image-wrapper tw-align-items-center tw-flex tw-flex-grow-0 tw-flex-shrink-0 tw-justify-content-end">
        <div>
            <div class="metadata-icon__appendage metadata-icon__appendage--csgo-skill">
                <div style="background-image: url( {{IMAGE URL}} ); background-position: -3401px 0px; width: 200px; height: 80px; transform: scale(0.2); transform-origin: 0px 0px 0px;"></div>
            </div>
        </div>
    </div>
    <div class="tw-border-t tw-flex tw-flex-grow-1 tw-flex-shrink-1 tw-mg-l-1 tw-overflow-hidden tw-pd-y-05">
        <div class="tw-flex-grow-1 tw-flex-shrink-1 tw-overflow-hidden">
            <p class="tw-ellipsis" title="The Global Elite">{{Rank Title}}</p>
        </div>
        <div class="tw-flex-grow-0 tw-flex-shrink-0">
            <p class="">Rank</p>
        </div>
    </div>
</div>


// image styles
// great grandparent
width: 7rem;
// parent
height: 2.7rem;
width: 7rem;
// child
background-image: url(https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/8.png?h=25435d2…);
background-position: center;
background-size: contain;
height: 30px;
background-repeat: no-repeat;


Array.from(document.querySelectorAll(".stream-thumbnail")).map(function (el) {
    var rankInfo = el.querySelector(".tw-mg-t-0");
    if (rankInfo.innerHTML === "") {
        rankInfo.innerHTML = `<div class="preview-card-appendage tw-flex">
    <div class="preview-card-appendage__image-wrapper tw-align-items-center tw-flex tw-flex-grow-0 tw-flex-shrink-0 tw-justify-content-end" style="width: 7rem;">
        <div>
            <div class="metadata-icon__appendage metadata-icon__appendage--csgo-skill" style="height: 2.7rem; width: 7rem;">
                <div style="background-image: url( https://game.capcom.com/cfn/sfv/as/profile/league_icon/300_140/0.png?h=ba00d7693037ffdcd4298d769b2869e9 ); background-position: center; background-size: contain; width: auto; height: 30px;"></div>
            </div>
        </div>
    </div>
    <div class="tw-border-t tw-flex tw-flex-grow-1 tw-flex-shrink-1 tw-mg-l-1 tw-overflow-hidden tw-pd-y-05">
        <div class="tw-flex-grow-1 tw-flex-shrink-1 tw-overflow-hidden">
            <p class="tw-ellipsis" title="The Global Elite">{{Rank Title}}</p>
        </div>
        <div class="tw-flex-grow-0 tw-flex-shrink-0">
            <p class="">Rank</p>
        </div>
    </div>
</div>`;
    };
})