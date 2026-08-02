

// =============================
// GENERATION FACTURE PDF
// =============================
async function genererFacture() {

    const client = document.getElementById("clientFacture").value;
    const produit = document.getElementById("produitFacture").value;
    const prix = document.getElementById("prixFacture").value;

    if (!client || !produit || !prix) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("FACTURE", 85, 20);

    doc.setFontSize(12);
    doc.text("Client : " + client, 20, 50);
    doc.text("Produit : " + produit, 20, 65);
    doc.text("Montant : " + prix + " FCFA", 20, 80);

    doc.line(20, 90, 190, 90);

    doc.text("Merci pour votre confiance.", 20, 110);

    doc.save("Facture_" + client + ".pdf");
}
