let firstName = 'sean';
let lastName = 'mcnamara';



firstName = firstName.charAt(0).toLowerCase()
function assignCationName() {
    switch (firstName) {
            case 'a':return 'Potassium'
            break;
            case 'b':return 'Sodium'
            break;
            case 'c':return 'Iron (II)'
            break;
            case 'd':return 'Iron (III)'
            break;
            case 'e':return 'Chromium (III)'
            break;
            case 'f':return 'Lithium'
            break;
            case 'g':return 'Caesium'
            break;
            case 'h':return 'Rubidium'
            break;
            case 'i':return 'Calcium'
            break;
            case 'j':return 'Magnesium'
            break;
            case 'k':return 'Copper (I)'
            break;
            case 'l':return 'Copper (II)'
            break;
            case 'm':return 'Silver'
            break;
            case 'n':return 'Zinc'
            break;
            case 'o':return 'Nickel'
            break;
            case 'p':return 'Manganese (II)'
            break;
            case 'q':return 'Aluminium'
            break;
            case 'r':return 'Titanium'
            break;
            case 's':return 'Gold'
            break;
            case 't':return 'Platinum'
            break;
            case 'u':return 'Cobalt'
            break;
            case 'v':return 'Hydrogen'
            break;
            case 'w':return 'Barium'
            break;
            case 'x':return 'Lead (II)'
            break;
            case 'y':return 'Tin (II)'
            break;
            case 'z':return 'Strontium'
            break;
            
        default:
            break;
    }
    
}
assignCationName();



lastName = lastName.charAt(0).toLowerCase()
function assignAnionName() {
    switch (lastName) {
            case 'a':return 'fluoride'
            break;
            case 'b':return 'chloride'
            break;
            case 'c':return 'Bromide'
            break;
            case 'd':return 'Iodide'
            break;
            case 'e':return 'Oxide)'
            break;
            case 'f':return 'Chlorate'
            break;
            case 'g':return 'Chlorite'
            break;
            case 'h':return 'Nitride'
            break;
            case 'i':return 'Sulphide'
            break;
            case 'j':return 'Sulphate'
            break;
            case 'k':return 'Sulphite'
            break;
            case 'l':return 'Chromate'
            break;
            case 'm':return 'Dichromate'
            break;
            case 'n':return 'Acetate'
            break;
            case 'o':return 'Cyanide'
            break;
            case 'p':return 'Peroxide'
            break;
            case 'q':return 'Oxalate'
            break;
            case 'r':return 'Thiosulphate'
            break;
            case 's':return 'Arsenate'
            break;
            case 't':return 'Hydroxide'
            break;
            case 'u':return 'Manganate (VII)'
            break;
            case 'v':return 'Hydride'
            break;
            case 'w':return 'Nitrate'
            break;
            case 'x':return 'Nitrite'
            break;
            case 'y':return 'Nitride)'
            break;
            case 'z':return 'Carbonate'
            break;
            
        default:
            break;
    }
    
}
assignAnionName ()

console.log(`Your salt name is ${assignCationName()} ${assignAnionName()}!`)