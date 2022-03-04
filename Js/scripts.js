var akan = function(yy, mm, dd, g) {
    var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var malenames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var dd = newDay(yy, mm, dd);
    if (g === "Female") {
        return dd && femaleNames[dd.getDay()];
    } else {
        return dd && maleNames[dd.getDay()];
    }
}