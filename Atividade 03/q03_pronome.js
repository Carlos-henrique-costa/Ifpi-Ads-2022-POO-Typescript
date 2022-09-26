function texto(nome, pronome) {
    if (pronome === "ele") {
        console.log("Ol\u00E1 Sr. ".concat(nome));
    }
    else if (pronome === "ela") {
        console.log("Ol\u00E1 Sra. ".concat(nome));
    }
    else {
        console.log("Ol\u00E1 Sr. ".concat(nome));
    }
}
texto("Henrique", "ele");
texto("Maria", "ela");
texto("Maria", "");
