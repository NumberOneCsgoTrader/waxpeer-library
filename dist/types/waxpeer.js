"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EGameId = exports.EWeaponBrand = exports.EWeapon = exports.EMinExteriors = exports.EDopplersPhases = exports.ICheckTradeLinkMessages = exports.Reason = void 0;
var Reason;
(function (Reason) {
    Reason["Accepted"] = "Accepted";
    Reason["InvalidTradelink"] = "Invalid tradelink";
    Reason["BuyerFailedToAccept"] = "Buyer failed to accept";
    Reason["ItemPriceHasIncreasedOrItemIsNoLongerAvailable"] = "Item price has increased or item is no longer available";
    Reason["SellerFailedToAccept"] = "Seller failed to accept";
})(Reason || (exports.Reason = Reason = {}));
var ICheckTradeLinkMessages;
(function (ICheckTradeLinkMessages) {
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["Invalid tradelink"] = 0] = "Invalid tradelink";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["Missing partner"] = 1] = "Missing partner";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["Missing token"] = 2] = "Missing token";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["Your tradelink is incorect, please update it"] = 3] = "Your tradelink is incorect, please update it";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["You're banned for not accepting trades"] = 4] = "You're banned for not accepting trades";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["We couldn't validate your trade link, either your inventory is private or you can't trade"] = 5] = "We couldn't validate your trade link, either your inventory is private or you can't trade";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["Please set your steam inventory public"] = 6] = "Please set your steam inventory public";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["User has VACBAN or Game Ban"] = 7] = "User has VACBAN or Game Ban";
    ICheckTradeLinkMessages[ICheckTradeLinkMessages["There was an error with tradelink,please try again"] = 8] = "There was an error with tradelink,please try again";
})(ICheckTradeLinkMessages || (exports.ICheckTradeLinkMessages = ICheckTradeLinkMessages = {}));
var EDopplersPhases;
(function (EDopplersPhases) {
    EDopplersPhases[EDopplersPhases["any"] = 0] = "any";
    EDopplersPhases[EDopplersPhases["Emerald"] = 1] = "Emerald";
    EDopplersPhases[EDopplersPhases["Ruby"] = 2] = "Ruby";
    EDopplersPhases[EDopplersPhases["Sapphire"] = 3] = "Sapphire";
    EDopplersPhases[EDopplersPhases["Black Pearl"] = 4] = "Black Pearl";
    EDopplersPhases[EDopplersPhases["Phase 1"] = 5] = "Phase 1";
    EDopplersPhases[EDopplersPhases["Phase 2"] = 6] = "Phase 2";
    EDopplersPhases[EDopplersPhases["Phase 3"] = 7] = "Phase 3";
    EDopplersPhases[EDopplersPhases["Phase 4"] = 8] = "Phase 4";
})(EDopplersPhases || (exports.EDopplersPhases = EDopplersPhases = {}));
var EMinExteriors;
(function (EMinExteriors) {
    EMinExteriors[EMinExteriors["FN"] = 0] = "FN";
    EMinExteriors[EMinExteriors["MW"] = 1] = "MW";
    EMinExteriors[EMinExteriors["FT"] = 2] = "FT";
    EMinExteriors[EMinExteriors["WW"] = 3] = "WW";
    EMinExteriors[EMinExteriors["BS"] = 4] = "BS";
})(EMinExteriors || (exports.EMinExteriors = EMinExteriors = {}));
var EWeapon;
(function (EWeapon) {
    EWeapon[EWeapon["Bayonet"] = 0] = "Bayonet";
    EWeapon[EWeapon["Bowie Knife"] = 1] = "Bowie Knife";
    EWeapon[EWeapon["Butterfly Knife"] = 2] = "Butterfly Knife";
    EWeapon[EWeapon["Falchion Knife"] = 3] = "Falchion Knife";
    EWeapon[EWeapon["Flip Knife"] = 4] = "Flip Knife";
    EWeapon[EWeapon["Glock-18"] = 5] = "Glock-18";
    EWeapon[EWeapon["Gut Knife"] = 6] = "Gut Knife";
    EWeapon[EWeapon["Huntsman Knife"] = 7] = "Huntsman Knife";
    EWeapon[EWeapon["Karambit"] = 8] = "Karambit";
    EWeapon[EWeapon["M9 Bayonet"] = 9] = "M9 Bayonet";
    EWeapon[EWeapon["Navaja Knife"] = 10] = "Navaja Knife";
    EWeapon[EWeapon["Shadow Daggers"] = 11] = "Shadow Daggers";
    EWeapon[EWeapon["Stiletto Knife"] = 12] = "Stiletto Knife";
    EWeapon[EWeapon["Talon Knife"] = 13] = "Talon Knife";
    EWeapon[EWeapon["Ursus Knife"] = 14] = "Ursus Knife";
})(EWeapon || (exports.EWeapon = EWeapon = {}));
var EWeaponBrand;
(function (EWeaponBrand) {
    EWeaponBrand[EWeaponBrand["knife"] = 0] = "knife";
    EWeaponBrand[EWeaponBrand["pass"] = 1] = "pass";
    EWeaponBrand[EWeaponBrand["key"] = 2] = "key";
    EWeaponBrand[EWeaponBrand["sticker"] = 3] = "sticker";
    EWeaponBrand[EWeaponBrand["pistol"] = 4] = "pistol";
    EWeaponBrand[EWeaponBrand["shotgun"] = 5] = "shotgun";
    EWeaponBrand[EWeaponBrand["smg"] = 6] = "smg";
    EWeaponBrand[EWeaponBrand["machinegun"] = 7] = "machinegun";
    EWeaponBrand[EWeaponBrand["rifle"] = 8] = "rifle";
    EWeaponBrand[EWeaponBrand["sniper_rifle"] = 9] = "sniper_rifle";
    EWeaponBrand[EWeaponBrand["gloves"] = 10] = "gloves";
    EWeaponBrand[EWeaponBrand["AK47u"] = 11] = "AK47u";
    EWeaponBrand[EWeaponBrand["Armored Metal Door"] = 12] = "Armored Metal Door";
    EWeaponBrand[EWeaponBrand["Balaclava"] = 13] = "Balaclava";
    EWeaponBrand[EWeaponBrand["Bandana"] = 14] = "Bandana";
    EWeaponBrand[EWeaponBrand["Beenie"] = 15] = "Beenie";
    EWeaponBrand[EWeaponBrand["Bolt Rifle"] = 16] = "Bolt Rifle";
    EWeaponBrand[EWeaponBrand["Bone Club"] = 17] = "Bone Club";
    EWeaponBrand[EWeaponBrand["Bone Knife"] = 18] = "Bone Knife";
    EWeaponBrand[EWeaponBrand["Boonie"] = 19] = "Boonie";
    EWeaponBrand[EWeaponBrand["Boots"] = 20] = "Boots";
    EWeaponBrand[EWeaponBrand["Bucket Helmet"] = 21] = "Bucket Helmet";
    EWeaponBrand[EWeaponBrand["Burlap Gloves"] = 22] = "Burlap Gloves";
    EWeaponBrand[EWeaponBrand["Burlap Headwrap"] = 23] = "Burlap Headwrap";
    EWeaponBrand[EWeaponBrand["Burlap Shirt"] = 24] = "Burlap Shirt";
    EWeaponBrand[EWeaponBrand["Burlap Shoes"] = 25] = "Burlap Shoes";
    EWeaponBrand[EWeaponBrand["Burlap Trousers"] = 26] = "Burlap Trousers";
    EWeaponBrand[EWeaponBrand["Cap"] = 27] = "Cap";
    EWeaponBrand[EWeaponBrand["Coffeecan Helmet"] = 28] = "Coffeecan Helmet";
    EWeaponBrand[EWeaponBrand["Collared Shirt"] = 29] = "Collared Shirt";
    EWeaponBrand[EWeaponBrand["Concrete Barricade"] = 30] = "Concrete Barricade";
    EWeaponBrand[EWeaponBrand["Crossbow"] = 31] = "Crossbow";
    EWeaponBrand[EWeaponBrand["Deer Skull Mask"] = 32] = "Deer Skull Mask";
    EWeaponBrand[EWeaponBrand["Double Barrel Shotgun"] = 33] = "Double Barrel Shotgun";
    EWeaponBrand[EWeaponBrand["Grenade"] = 34] = "Grenade";
    EWeaponBrand[EWeaponBrand["Guitar"] = 35] = "Guitar";
    EWeaponBrand[EWeaponBrand["Hammer"] = 36] = "Hammer";
    EWeaponBrand[EWeaponBrand["Hatchet"] = 37] = "Hatchet";
    EWeaponBrand[EWeaponBrand["Hide Halterneck"] = 38] = "Hide Halterneck";
    EWeaponBrand[EWeaponBrand["Hide Pants"] = 39] = "Hide Pants";
    EWeaponBrand[EWeaponBrand["Hide Poncho"] = 40] = "Hide Poncho";
    EWeaponBrand[EWeaponBrand["Hide Skirt"] = 41] = "Hide Skirt";
    EWeaponBrand[EWeaponBrand["Hoodie"] = 42] = "Hoodie";
    EWeaponBrand[EWeaponBrand["Jacket"] = 43] = "Jacket";
    EWeaponBrand[EWeaponBrand["Large Wooden Box"] = 44] = "Large Wooden Box";
    EWeaponBrand[EWeaponBrand["Long TShirt"] = 45] = "Long TShirt";
    EWeaponBrand[EWeaponBrand["Longsword"] = 46] = "Longsword";
    EWeaponBrand[EWeaponBrand["Metal Facemask"] = 47] = "Metal Facemask";
    EWeaponBrand[EWeaponBrand["Metal Torso Plate"] = 48] = "Metal Torso Plate";
    EWeaponBrand[EWeaponBrand["Miner's Hat"] = 49] = "Miner's Hat";
    EWeaponBrand[EWeaponBrand["Mp5"] = 50] = "Mp5";
    EWeaponBrand[EWeaponBrand["Pants"] = 51] = "Pants";
    EWeaponBrand[EWeaponBrand["Pump Shotgun"] = 52] = "Pump Shotgun";
    EWeaponBrand[EWeaponBrand["Reactive Sign"] = 53] = "Reactive Sign";
    EWeaponBrand[EWeaponBrand["Revolver"] = 54] = "Revolver";
    EWeaponBrand[EWeaponBrand["Rifle Helmet"] = 55] = "Rifle Helmet";
    EWeaponBrand[EWeaponBrand["Roadsign Jacket"] = 56] = "Roadsign Jacket";
    EWeaponBrand[EWeaponBrand["Roadsign Kilt"] = 57] = "Roadsign Kilt";
    EWeaponBrand[EWeaponBrand["Rock"] = 58] = "Rock";
    EWeaponBrand[EWeaponBrand["Rocket Launcher"] = 59] = "Rocket Launcher";
    EWeaponBrand[EWeaponBrand["Salvaged Icepick"] = 60] = "Salvaged Icepick";
    EWeaponBrand[EWeaponBrand["Salvaged Sword"] = 61] = "Salvaged Sword";
    EWeaponBrand[EWeaponBrand["Sandbag Barricade"] = 62] = "Sandbag Barricade";
    EWeaponBrand[EWeaponBrand["Satchel Explosives"] = 63] = "Satchel Explosives";
    EWeaponBrand[EWeaponBrand["Semi Auto Pistol"] = 64] = "Semi Auto Pistol";
    EWeaponBrand[EWeaponBrand["Semi Auto Rifle"] = 65] = "Semi Auto Rifle";
    EWeaponBrand[EWeaponBrand["Sheet Metal Door"] = 66] = "Sheet Metal Door";
    EWeaponBrand[EWeaponBrand["Shorts"] = 67] = "Shorts";
    EWeaponBrand[EWeaponBrand["Sleeping Bag"] = 68] = "Sleeping Bag";
    EWeaponBrand[EWeaponBrand["SMG"] = 69] = "SMG";
    EWeaponBrand[EWeaponBrand["Snow Jacket"] = 70] = "Snow Jacket";
    EWeaponBrand[EWeaponBrand["Stone Hatchet"] = 71] = "Stone Hatchet";
    EWeaponBrand[EWeaponBrand["Stone Pickaxe"] = 72] = "Stone Pickaxe";
    EWeaponBrand[EWeaponBrand["Tank Top"] = 73] = "Tank Top";
    EWeaponBrand[EWeaponBrand["Thompson"] = 74] = "Thompson";
    EWeaponBrand[EWeaponBrand["TShirt"] = 75] = "TShirt";
    EWeaponBrand[EWeaponBrand["Waterpipe Shotgun"] = 76] = "Waterpipe Shotgun";
    EWeaponBrand[EWeaponBrand["Wooden Box"] = 77] = "Wooden Box";
    EWeaponBrand[EWeaponBrand["Wooden Door"] = 78] = "Wooden Door";
})(EWeaponBrand || (exports.EWeaponBrand = EWeaponBrand = {}));
exports.EGameId = {
    csgo: 730,
    dota2: 570,
    tf2: 440,
    rust: 252490,
};
//# sourceMappingURL=waxpeer.js.map