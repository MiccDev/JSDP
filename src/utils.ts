const path = __dirname + "/datapacks/";

var ColorCodes: any = {
    "&0": "black",
    "&1": "dark_blue",
    "&2": "dark_green",
    "&3": "dark_aqua",
    "&4": "dark_red",
    "&5": "dark_purple",
    "&6": "gold",
    "&7": "grey",
    "&8": "dark_grey",
    "&9": "green",
    "&a": "aqua",
    "&b": "red",
    "&c": "red",
    "&d": "light_purple",
    "&e": "yellow",
    "&f": "white"
}

var SecondaryCodes: any = {
    "&k": "obfuscated",
    "&l": "bold",
    "&m": "strike",
    "&n": "underline",
    "&o": "italic"
}
var ResetCodes: any = {
    "&r" : true
}

function toColor(text: any) {
    var place = 0
    var output = {"text": "", "color": "white"}
    var lastNode: any = output
    
    var skipOne = false
    
    for(let charKey in text){
        if(skipOne == true){
            skipOne = false
            continue
        }
        var char: any = text[charKey]
        var charAndNext: any = text[charKey] + text[Number(charKey) + 1]
        
        if(ColorCodes[charAndNext] != undefined || ResetCodes[charAndNext] != undefined){
            var nextNode: any = {"text":""}
            nextNode.color = ColorCodes[charAndNext] || "white"
            lastNode.extra = [nextNode]
            lastNode = nextNode
            skipOne = true
        }else{
            if(SecondaryCodes[charAndNext] != undefined){
                lastNode[SecondaryCodes[charAndNext]] = true
                skipOne = true
            }else{
                lastNode.text += char
            }
        }
    }
    return output
}

export {
    toColor,
    path
}